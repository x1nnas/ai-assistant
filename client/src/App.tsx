import { useState } from "react";
import { AnalysisResult } from "./components/AnalysisResult";
import { EmailInput } from "./components/EmailInput";

export type Importance = "low" | "medium" | "high";

export interface AnalysisResponse {
  summary: string;
  importance: Importance;
  tasks: string[];
}

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim() || "http://localhost:3000";
const analyzeEndpoint = new URL("/analyze", apiBaseUrl).toString();
const appTitle = import.meta.env.VITE_APP_TITLE?.trim() || "Email Assistant";
const appSubtitle =
  import.meta.env.VITE_APP_SUBTITLE?.trim() ||
  "Paste any email to extract a summary, priority, and action items.";

export default function App() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!email.trim() || loading) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch(analyzeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error(`Server error: ${response.status}`);

      const data: AnalysisResponse = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setEmail("");
    setError(null);
  };

  return (
    <div className="app-shell">
      <div className="container">
        <header className="header">
          <div className="logo-mark" aria-hidden="true">✦</div>
          <h1 className="app-title">{appTitle}</h1>
          <p className="app-subtitle">{appSubtitle}</p>
        </header>

        <main>
          {!result ? (
            <EmailInput
              value={email}
              onChange={setEmail}
              onSubmit={handleAnalyze}
              loading={loading}
              error={error}
            />
          ) : (
            <AnalysisResult result={result} onReset={handleReset} />
          )}
        </main>

        <footer className="footer">
          <span>Powered by AI</span>
        </footer>
      </div>
    </div>
  );
}