// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useState } from "react";
import { demoProject } from "@/data/demo";
import type { ComparisonProject, GeoPoint } from "@/domain/entities";
import type { AccommodationOption } from "@/domain/entities";
import { CampusPicker } from "@/features/geo/components/campus-picker";
import { DistanceSummary } from "@/features/geo/components/distance-summary";
import { LocationInput } from "@/features/geo/components/location-input";
import { QuickAddOption } from "@/features/workspace/components/quick-add-option";

afterEach(() => cleanup());

function Harness({ initial = null }: { initial?: GeoPoint | null }) {
  const [value, setValue] = useState<GeoPoint | null>(initial);
  return <><LocationInput label="Lokasi kos" value={value} onChange={setValue} /><output data-testid="value">{value === null ? "null" : `${value.latitude},${value.longitude}`}</output></>;
}

describe("LocationInput", () => {
  it("menerapkan koordinat dari teks lewat tombol Terapkan", () => {
    render(<Harness />);
    fireEvent.change(screen.getByLabelText("Lokasi kos"), { target: { value: "-0.9143, 100.4602" } });
    fireEvent.click(screen.getByRole("button", { name: "Terapkan" }));
    expect(screen.getByTestId("value").textContent).toBe("-0.9143,100.4602");
  });
  it("Enter menerapkan koordinat dan tidak mengirim form induk", () => {
    const onSubmit = vi.fn((e: { preventDefault: () => void }) => e.preventDefault());
    render(<form onSubmit={onSubmit}><Harness /></form>);
    const input = screen.getByLabelText("Lokasi kos");
    fireEvent.change(input, { target: { value: "-0.9143, 100.4602" } });
    fireEvent.keyDown(input, { key: "Enter" });
    expect(screen.getByTestId("value").textContent).toBe("-0.9143,100.4602");
    expect(onSubmit).not.toHaveBeenCalled();
  });
  it("menampilkan galat untuk format tidak dikenal dan tautan pendek", () => {
    render(<Harness />);
    const input = screen.getByLabelText("Lokasi kos");
    fireEvent.change(input, { target: { value: "bukan koordinat" } });
    fireEvent.click(screen.getByRole("button", { name: "Terapkan" }));
    expect(screen.getByText(/Format belum dikenali/)).toBeTruthy();
    fireEvent.change(input, { target: { value: "https://maps.app.goo.gl/xyz" } });
    fireEvent.click(screen.getByRole("button", { name: "Terapkan" }));
    expect(screen.getByText(/Tautan pendek/)).toBeTruthy();
    expect(screen.getByTestId("value").textContent).toBe("null");
  });
  it("memperingatkan titik di luar Indonesia dan bisa dihapus", () => {
    render(<Harness initial={{ latitude: 100.4602, longitude: -0.9143 }} />);
    expect(screen.getByText(/di luar Indonesia/)).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: /Hapus Lokasi kos/ }));
    expect(screen.getByTestId("value").textContent).toBe("null");
  });
});

describe("DistanceSummary", () => {
  const project = { destinationLabel: "Unand", destinationPoint: { latitude: -0.9143, longitude: 100.4602 } };
  it("meminta pengguna mengatur tujuan bila belum ada", () => {
    render(<DistanceSummary project={{ destinationLabel: "X", destinationPoint: null }} location={{ latitude: 0, longitude: 0 }} currentMinutes={null} onApplyMinutes={() => undefined} />);
    expect(screen.getByText(/belum diatur/)).toBeTruthy();
  });
  it("menampilkan jarak dan menerapkan estimasi waktu", () => {
    const onApply = vi.fn();
    render(<DistanceSummary project={project} location={{ latitude: -0.9143, longitude: 100.4692 }} currentMinutes={null} onApplyMinutes={onApply} />);
    expect(screen.getByText(/Garis lurus/)).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: /Motor/ }));
    expect(onApply).toHaveBeenCalledTimes(1);
    expect(onApply.mock.calls[0]![0]).toBeGreaterThan(0);
  });
});

describe("CampusPicker", () => {
  it("memilih kampus mengisi titik dan nama; memilih 'belum dipilih' mengosongkan", () => {
    const onChange = vi.fn();
    render(<CampusPicker campusId="" point={null} onChange={onChange} />);
    fireEvent.change(screen.getByLabelText(/Kampus tujuan/), { target: { value: "unand-limau-manis" } });
    const call = onChange.mock.calls[0]![0];
    expect(call.campusId).toBe("unand-limau-manis");
    expect(call.campusName).toMatch(/Andalas/);
    expect(call.point.latitude).toBeLessThan(0);
    cleanup();
    render(<CampusPicker campusId="unand-limau-manis" point={call.point} onChange={onChange} />);
    fireEvent.change(screen.getByLabelText(/Kampus tujuan/), { target: { value: "" } });
    expect(onChange.mock.calls.at(-1)![0]).toEqual({ campusId: "", point: null, campusName: null });
  });
});

describe("QuickAddOption (tambah kos manual)", () => {
  const project: ComparisonProject = { ...demoProject, destinationLabel: "Unand", destinationPoint: { latitude: -0.9143, longitude: 100.4602 } };

  it("menyimpan kos dengan data minimal; sisanya 'belum diketahui'", async () => {
    const onSave = vi.fn<(option: AccommodationOption) => Promise<void>>().mockResolvedValue(undefined);
    render(<QuickAddOption project={project} onSaveAction={onSave} onCancelAction={() => undefined} onOpenFullAction={() => undefined} />);
    fireEvent.change(screen.getByLabelText("Nama pilihan kos"), { target: { value: "Kos Melati" } });
    fireEvent.click(screen.getByRole("button", { name: /Simpan pilihan/ }));
    await waitFor(() => expect(onSave).toHaveBeenCalledTimes(1));
    const saved = onSave.mock.calls[0]![0];
    expect(saved.name).toBe("Kos Melati");
    expect(saved.rent).toEqual({ amount: null, origin: "unknown" });
    expect(saved.location).toBeNull();
    expect(saved.oneWayCommuteMinutes).toBeNull();
  });

  it("menyimpan harga, lokasi, dan waktu tempuh perkiraan yang ditandai estimated", async () => {
    const onSave = vi.fn<(option: AccommodationOption) => Promise<void>>().mockResolvedValue(undefined);
    render(<QuickAddOption project={project} onSaveAction={onSave} onCancelAction={() => undefined} onOpenFullAction={() => undefined} />);
    fireEvent.change(screen.getByLabelText("Nama pilihan kos"), { target: { value: "Kos Dekat Kampus" } });
    fireEvent.change(screen.getByLabelText("Harga sewa bulanan"), { target: { value: "850000" } });
    fireEvent.change(screen.getByLabelText("Status harga"), { target: { value: "estimated" } });
    fireEvent.change(screen.getByLabelText("Lokasi kos"), { target: { value: "-0.9143, 100.4692" } });
    fireEvent.click(screen.getByRole("button", { name: "Terapkan" }));
    fireEvent.click(screen.getByRole("button", { name: /Motor/ }));
    fireEvent.click(screen.getByRole("button", { name: /Simpan pilihan/ }));
    await waitFor(() => expect(onSave).toHaveBeenCalledTimes(1));
    const saved = onSave.mock.calls[0]![0];
    expect(saved.rent).toEqual({ amount: 850_000, origin: "estimated" });
    expect(saved.location).toEqual({ latitude: -0.9143, longitude: 100.4692 });
    expect(saved.commuteOrigin).toBe("estimated");
    expect(saved.oneWayCommuteMinutes).toBeGreaterThan(0);
  });

  it("menolak nama kosong dan tidak memanggil simpan", async () => {
    const onSave = vi.fn<(option: AccommodationOption) => Promise<void>>().mockResolvedValue(undefined);
    render(<QuickAddOption project={project} onSaveAction={onSave} onCancelAction={() => undefined} onOpenFullAction={() => undefined} />);
    fireEvent.submit(screen.getByRole("button", { name: /Simpan pilihan/ }).closest("form")!);
    await waitFor(() => expect(screen.getByRole("alert")).toBeTruthy());
    expect(onSave).not.toHaveBeenCalled();
  });

  it("'Lengkapi detail' membawa data yang sudah diisi ke editor lengkap", () => {
    const onFull = vi.fn();
    render(<QuickAddOption project={project} onSaveAction={async () => undefined} onCancelAction={() => undefined} onOpenFullAction={onFull} />);
    fireEvent.change(screen.getByLabelText("Nama pilihan kos"), { target: { value: "  Kos Bawa Data " } });
    fireEvent.change(screen.getByLabelText("Harga sewa bulanan"), { target: { value: "900000" } });
    fireEvent.click(screen.getByRole("button", { name: /Lengkapi detail/ }));
    const draft = onFull.mock.calls[0]![0] as AccommodationOption;
    expect(draft.name).toBe("Kos Bawa Data");
    expect(draft.rent.amount).toBe(900_000);
  });
});
