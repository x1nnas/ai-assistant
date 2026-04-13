import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { AnalysisResult } from "./components/AnalysisResult";
import { EmailInput } from "./components/EmailInput";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim() || "http://localhost:3000";
const analyzeEndpoint = new URL("/analyze", apiBaseUrl).toString();
const appTitle = import.meta.env.VITE_APP_TITLE?.trim() || "Email Assistant";
const appSubtitle = import.meta.env.VITE_APP_SUBTITLE?.trim() ||
    "Paste any email to extract a summary, priority, and action items.";
export default function App() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const handleAnalyze = async () => {
        if (!email.trim() || loading)
            return;
        setLoading(true);
        setError(null);
        setResult(null);
        try {
            const response = await fetch(analyzeEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            if (!response.ok)
                throw new Error(`Server error: ${response.status}`);
            const data = await response.json();
            setResult(data);
        }
        catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong.");
        }
        finally {
            setLoading(false);
        }
    };
    const handleReset = () => {
        setResult(null);
        setEmail("");
        setError(null);
    };
    return (_jsx("div", { className: "app-shell", children: _jsxs("div", { className: "container", children: [_jsxs("header", { className: "header", children: [_jsx("div", { className: "logo-mark", "aria-hidden": "true", children: "\u2726" }), _jsx("h1", { className: "app-title", children: appTitle }), _jsx("p", { className: "app-subtitle", children: appSubtitle })] }), _jsx("main", { children: !result ? (_jsx(EmailInput, { value: email, onChange: setEmail, onSubmit: handleAnalyze, loading: loading, error: error })) : (_jsx(AnalysisResult, { result: result, onReset: handleReset })) }), _jsx("footer", { className: "footer", children: _jsx("span", { children: "Powered by AI" }) })] }) }));
}
//# sourceMappingURL=App.js.map