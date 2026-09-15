import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("demo comparison, decision, simulation, and backup flow", async ({ page }) => {

  await page.goto("/");
  await page.getByRole("button", { name: "Coba Data Contoh" }).click();
  await expect(page.getByRole("heading", { name: /Kos untuk Magang di Jakarta/ })).toBeVisible();
  await expect(page.getByText("Data contoh fiktif")).toBeVisible();
  await page.getByRole("navigation", { name: "Navigasi proyek" }).getByRole("button", { name: "Bandingkan" }).click();
  await expect(page.getByRole("heading", { name: "Perbandingan berdampingan" })).toBeVisible();
  await page.getByRole("button", { name: "Ringkasan" }).click();
  await page.getByRole("button", { name: "Shortlist" }).first().click();
  await page.getByRole("button", { name: "Keputusan" }).click();
  await expect(page.getByRole("heading", { name: "Papan keputusan" })).toBeVisible();
  await page.getByRole("button", { name: "Jadikan favorit" }).click();
  await expect(page.getByText("Favorit saat ini").first()).toBeVisible();
  await page.getByPlaceholder("Tambah kelebihan pribadi").fill("Dekat tujuan");
  await page.getByPlaceholder("Tambah kelebihan pribadi").locator("xpath=following-sibling::button").click();
  await expect(page.getByText("Dekat tujuan").first()).toBeVisible();
  await page.getByRole("button", { name: "Simulator" }).click();
  await expect(page.getByRole("heading", { name: "Simulator biaya" })).toBeVisible();
  await page.getByLabel("Hari perjalanan per bulan").fill("10");
  await expect(page.getByText("Selisih per bulan")).toBeVisible();
  await page.getByRole("button", { name: "Terapkan Perubahan" }).click();
  await expect(page.getByText("Hasil simulasi diterapkan dan disimpan.")).toBeVisible();
  await page.getByRole("button", { name: "Data & backup" }).click();
  await expect(page.getByRole("heading", { name: "Data dan pemulihan" })).toBeVisible();
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Unduh backup" }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toMatch(/\.json$/);
});

test("creates a project and saves an incomplete option honestly", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Mulai Perbandingan/ }).first().click();
  await page.getByLabel("Nama perbandingan").fill("Proyek Persisten");
  await page.getByLabel("Tujuan rutin").fill("Kampus Merdeka");
  await page.getByRole("button", { name: "Lanjut" }).click();
  await page.getByLabel("Anggaran total per bulan").fill("2500000");
  await page.getByRole("button", { name: "Lanjut" }).click();
  await page.getByRole("button", { name: "Lanjut" }).click();
  const createProject = page.getByRole("button", { name: "Buat proyek", exact: true });
  const emptyProject = page.getByRole("heading", { name: "Belum ada pilihan kos. Tambahkan yang pertama atau coba data contoh." });
  await Promise.race([createProject.waitFor(), emptyProject.waitFor()]);
  if (await createProject.isVisible()) await createProject.click();
  await expect(emptyProject).toBeVisible();
  await page.getByRole("button", { name: /Tambah pilihan pertama/ }).click();
  await page.getByLabel("Nama pilihan kos").fill("Kos Uji Incomplete");
  await page.getByRole("button", { name: /Simpan pilihan/ }).click();
  await expect(page.getByRole("heading", { name: "Kos Uji Incomplete" })).toBeVisible();
  await expect(page.getByText(/Belum diketahui:/)).toBeVisible();
  await page.reload();
  await page.getByRole("button", { name: "Lanjutkan proyek" }).click();
  await expect(page.getByRole("heading", { name: "Kos Uji Incomplete" })).toBeVisible();
  await page.getByRole("button", { name: "Preferensi" }).click();
  await page.getByLabel("Nama perbandingan").fill("Proyek Persisten Diedit");
  await page.getByRole("button", { name: "Lanjut" }).click();
  await page.getByRole("button", { name: "Lanjut" }).click();
  await page.getByRole("button", { name: "Lanjut" }).click();
  const savePreferences = page.getByRole("button", { name: "Simpan perubahan", exact: true });
  const editedHeading = page.getByRole("heading", { name: "Proyek Persisten Diedit" });
  await Promise.race([savePreferences.waitFor(), editedHeading.waitFor()]);
  if (await savePreferences.isVisible()) await savePreferences.click();
  await expect(editedHeading).toBeVisible();
});

test("switches projects and restores the active project after reload", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Coba Data Contoh" }).click();
  await page.getByRole("button", { name: "Proyek baru" }).click();
  await page.getByLabel("Nama perbandingan").fill("Proyek Kedua");
  await page.getByLabel("Tujuan rutin").fill("Kantor Bandung");
  await page.getByRole("button", { name: "Lanjut" }).click();
  await page.getByLabel("Anggaran total per bulan").fill("3000000");
  await page.getByRole("button", { name: "Lanjut" }).click();
  await page.getByRole("button", { name: "Lanjut" }).click();
  const createProject = page.getByRole("button", { name: "Buat proyek", exact: true });
  const secondHeading = page.getByRole("heading", { name: "Proyek Kedua" });
  await Promise.race([createProject.waitFor(), secondHeading.waitFor()]);
  if (await createProject.isVisible()) await createProject.click();
  await expect(secondHeading).toBeVisible();
  await page.getByLabel("Pilih proyek").selectOption({ label: "Kos untuk Magang di Jakarta (Demo)" });
  await expect(page.getByRole("heading", { name: /Kos untuk Magang di Jakarta/ })).toBeVisible();
  await page.reload();
  await page.getByRole("button", { name: "Lanjutkan proyek" }).click();
  await expect(page.getByRole("heading", { name: /Kos untuk Magang di Jakarta/ })).toBeVisible();
});

test("landing has no serious accessibility violations", async ({ page }, testInfo) => {
  await page.goto("/");
  await page.screenshot({ path: `public/screenshots/landing-${testInfo.project.name}.png`, fullPage: true });
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations.filter((item) => ["serious", "critical"].includes(item.impact ?? ""))).toEqual([]);
});

test("dashboard remains accessible at narrow width", async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/");
  await page.getByRole("button", { name: "Coba Data Contoh" }).click();
  await expect(page.getByRole("button", { name: "Beranda" })).toBeVisible();
  await page.screenshot({ path: `public/screenshots/dashboard-${testInfo.project.name}.png`, fullPage: true });
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations.filter((item) => ["serious", "critical"].includes(item.impact ?? ""))).toEqual([]);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
});
