export function MapSkeleton() {
  return (
    <div
      className="map-explorer-layout"
      role="status"
      aria-busy="true"
      aria-label="Memuat peta interaktif dan data kampus..."
    >
      <span className="sr-only">Memuat peta interaktif dan data kampus...</span>
      <aside className="map-sidebar">
        <div style={{ display: "grid", gap: "12px" }}>
          <div className="skeleton" style={{ width: "60%", height: 28, borderRadius: "var(--radius-control)" }} />
          <div className="skeleton" style={{ width: "85%", height: 16, borderRadius: "var(--radius-pill)" }} />
          <div style={{ display: "flex", gap: "8px", margin: "8px 0" }}>
            <div className="skeleton" style={{ width: 140, height: 40, borderRadius: "var(--radius-pill)" }} />
            <div className="skeleton" style={{ width: 140, height: 40, borderRadius: "var(--radius-pill)" }} />
          </div>
          <div className="skeleton" style={{ width: "100%", height: 160, borderRadius: "var(--radius-panel)" }} />
          <div className="skeleton" style={{ width: "100%", height: 220, borderRadius: "var(--radius-panel)" }} />
        </div>
      </aside>
      <div className="map-canvas-container" style={{ position: "relative", minHeight: 480 }}>
        <div
          className="skeleton"
          style={{ width: "100%", height: "100%", minHeight: "calc(100vh - 72px)" }}
        />
      </div>
    </div>
  );
}
