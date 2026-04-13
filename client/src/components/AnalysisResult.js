import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const importanceConfig = {
    low: { label: "Low priority", className: "badge badge-low" },
    medium: { label: "Medium priority", className: "badge badge-medium" },
    high: { label: "High priority", className: "badge badge-high" },
};
export function AnalysisResult({ result, onReset }) {
    const { label, className } = importanceConfig[result.importance];
    return (_jsxs("div", { className: "result-card", role: "region", "aria-label": "Analysis result", children: [_jsxs("div", { className: "result-header", children: [_jsxs("div", { className: "result-header-left", children: [_jsx("span", { className: "result-eyebrow", children: "Analysis complete" }), _jsx("span", { className: className, children: label })] }), _jsx("button", { className: "reset-btn", onClick: onReset, "aria-label": "Analyze another email", children: "\u2190 New email" })] }), _jsx("div", { className: "divider" }), _jsxs("section", { className: "result-section", children: [_jsx("h2", { className: "section-label", children: "Summary" }), _jsx("p", { className: "summary-text", children: result.summary })] }), result.tasks.length > 0 ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "divider" }), _jsxs("section", { className: "result-section", children: [_jsxs("h2", { className: "section-label", children: ["Action items", _jsx("span", { className: "task-count", children: result.tasks.length })] }), _jsx("ul", { className: "task-list", "aria-label": "Extracted tasks", children: result.tasks.map((task, i) => (_jsxs("li", { className: "task-item", children: [_jsx("span", { className: "task-check", "aria-hidden": "true" }), _jsx("span", { children: task })] }, i))) })] })] })) : (_jsxs(_Fragment, { children: [_jsx("div", { className: "divider" }), _jsx("p", { className: "no-tasks", children: "No action items found in this email." })] }))] }));
}
//# sourceMappingURL=AnalysisResult.js.map