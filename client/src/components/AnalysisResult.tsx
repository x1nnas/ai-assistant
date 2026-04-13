import type { AnalysisResponse, Importance } from "../App";

interface AnalysisResultProps {
  result: AnalysisResponse;
  onReset: () => void;
}

const importanceConfig: Record<Importance, { label: string; className: string }> = {
  low:    { label: "Low priority",    className: "badge badge-low"    },
  medium: { label: "Medium priority", className: "badge badge-medium" },
  high:   { label: "High priority",   className: "badge badge-high"   },
};

export function AnalysisResult({ result, onReset }: AnalysisResultProps) {
  const { label, className } = importanceConfig[result.importance];

  return (
    <div className="result-card" role="region" aria-label="Analysis result">
      <div className="result-header">
        <div className="result-header-left">
          <span className="result-eyebrow">Analysis complete</span>
          <span className={className}>{label}</span>
        </div>
        <button className="reset-btn" onClick={onReset} aria-label="Analyze another email">
          ← New email
        </button>
      </div>

      <div className="divider" />

      <section className="result-section">
        <h2 className="section-label">Summary</h2>
        <p className="summary-text">{result.summary}</p>
      </section>

      {result.tasks.length > 0 ? (
        <>
          <div className="divider" />
          <section className="result-section">
            <h2 className="section-label">
              Action items
              <span className="task-count">{result.tasks.length}</span>
            </h2>
            <ul className="task-list" aria-label="Extracted tasks">
              {result.tasks.map((task, i) => (
                <li key={i} className="task-item">
                  <span className="task-check" aria-hidden="true" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </section>
        </>
      ) : (
        <>
          <div className="divider" />
          <p className="no-tasks">No action items found in this email.</p>
        </>
      )}
    </div>
  );
}