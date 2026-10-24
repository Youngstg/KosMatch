import { HudHeader } from "@/components/navigation";

export function WorkspaceSkeleton() {
  return (
    <div
      className="shell"
      role="status"
      aria-busy="true"
      aria-label="Memuat ruang kerja KosMatch..."
    >
      <span className="sr-only">Memuat data dan ruang kerja KosMatch...</span>
      {/* Floating HUD Topbar for Desktop Skeleton (Matches Map & Workspace HUD) */}
      <HudHeader
        activeTab="calculator"
        className="no-print"
        isSkeleton={true}
        leftSlot={<div className="skeleton" style={{ width: 140, height: 32, borderRadius: 999 }} />}
      >
        <div className="skeleton" style={{ width: 38, height: 38, borderRadius: 10 }} />
        <div className="skeleton" style={{ width: 100, height: 38, borderRadius: 10 }} />
        <div className="skeleton" style={{ width: 150, height: 38, borderRadius: 10 }} />
      </HudHeader>

      {/* Fallback Mobile Topbar for Narrow Screens */}
      <header className="topbar mobile-only no-print" aria-hidden="true">
        <div className="container header-inner">
          <div className="brand">
            <span className="logo skeleton" style={{ width: 38, height: 38, borderRadius: "var(--radius-control)" }} />
            <div className="skeleton" style={{ width: 110, height: 22, borderRadius: "var(--radius-control)" }} />
          </div>
          <div className="actions compact">
            <div className="skeleton" style={{ width: 88, height: 42, borderRadius: "var(--radius-control)" }} />
            <div className="skeleton" style={{ width: 140, height: 42, borderRadius: "var(--radius-control)" }} />
          </div>
        </div>
      </header>

      <main className="container workspace" aria-hidden="true">
        <div className="workspace-head">
          <div style={{ flex: 1, display: "grid", gap: "8px" }}>
            <div className="skeleton" style={{ width: 120, height: 14, borderRadius: "var(--radius-pill)" }} />
            <div className="skeleton" style={{ width: 280, height: 34, borderRadius: "var(--radius-control)" }} />
            <div className="skeleton" style={{ width: 180, height: 16, borderRadius: "var(--radius-control)" }} />
          </div>
          <div className="badges">
            <div className="skeleton" style={{ width: 140, height: 28, borderRadius: "var(--radius-pill)" }} />
          </div>
        </div>

        <div className="nav-tabs" style={{ marginBottom: "var(--space-5)" }}>
          {[120, 100, 100, 90, 110, 120].map((w, idx) => (
            <div
              key={idx}
              className="skeleton"
              style={{ width: w, height: 44, borderRadius: "var(--radius-control)" }}
            />
          ))}
        </div>

        <div className="summary-strip">
          {[1, 2, 3].map((i) => (
            <div className="summary-item" key={i}>
              <div className="skeleton" style={{ width: "50%", height: 14, marginBottom: 8, borderRadius: "var(--radius-pill)" }} />
              <div className="skeleton" style={{ width: "75%", height: 24, borderRadius: "var(--radius-control)" }} />
            </div>
          ))}
        </div>

        <div className="toolbar" style={{ marginTop: "var(--space-4)" }}>
          <div className="skeleton" style={{ width: 210, height: 48, borderRadius: "var(--radius-control)" }} />
          <div className="skeleton" style={{ width: 210, height: 48, borderRadius: "var(--radius-control)" }} />
        </div>

        <div className="option-grid" style={{ marginTop: "var(--space-5)" }}>
          {[1, 2, 3].map((i) => (
            <article
              className="panel option-card"
              key={i}
              style={{ padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ flex: 1, display: "grid", gap: "6px" }}>
                  <div className="skeleton" style={{ width: "70%", height: 22, borderRadius: "var(--radius-control)" }} />
                  <div className="skeleton" style={{ width: "45%", height: 14, borderRadius: "var(--radius-pill)" }} />
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 8 }}>
                <div className="skeleton" style={{ width: 110, height: 32, borderRadius: "var(--radius-control)" }} />
                <div className="skeleton" style={{ width: 130, height: 24, borderRadius: "var(--radius-control)" }} />
              </div>

              <div className="badges" style={{ marginTop: 4 }}>
                <div className="skeleton" style={{ width: 160, height: 26, borderRadius: "var(--radius-pill)" }} />
              </div>

              <div className="skeleton" style={{ width: "100%", height: 50, borderRadius: "var(--radius-control)", marginTop: 6 }} />

              <div style={{ display: "grid", gap: "6px", marginTop: 6 }}>
                <div className="skeleton" style={{ width: "95%", height: 14, borderRadius: "var(--radius-pill)" }} />
                <div className="skeleton" style={{ width: "85%", height: 14, borderRadius: "var(--radius-pill)" }} />
              </div>

              <div style={{ display: "flex", gap: "8px", marginTop: "auto", paddingTop: 12 }}>
                <div className="skeleton" style={{ flex: 1, height: 40, borderRadius: "var(--radius-control)" }} />
                <div className="skeleton" style={{ flex: 1, height: 40, borderRadius: "var(--radius-control)" }} />
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
