import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export function EmailInput({ value, onChange, onSubmit, loading, error }) {
    const isEmpty = value.trim().length === 0;
    const handleKeyDown = (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
            if (!isEmpty && !loading)
                onSubmit();
        }
    };
    return (_jsxs("div", { className: "input-section", children: [_jsxs("div", { className: "textarea-wrapper", children: [_jsx("textarea", { className: "email-textarea", value: value, onChange: (e) => onChange(e.target.value), onKeyDown: handleKeyDown, placeholder: "Paste your email here\u2026", spellCheck: false, "aria-label": "Email content", disabled: loading }), _jsxs("div", { className: "textarea-footer", children: [_jsx("span", { className: "char-hint", children: value.trim().length > 0
                                    ? `${value.trim().split(/\s+/).length} words`
                                    : "" }), _jsx("span", { className: "shortcut-hint", children: "\u2318\u21B5 to analyze" })] })] }), error && (_jsxs("div", { className: "error-banner", role: "alert", children: [_jsx("span", { className: "error-icon", children: "\u26A0" }), error] })), _jsx("button", { className: `analyze-btn ${loading ? "loading" : ""}`, onClick: onSubmit, disabled: isEmpty || loading, "aria-busy": loading, children: loading ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "spinner", "aria-hidden": "true" }), "Analyzing\u2026"] })) : ("Analyze Email") })] }));
}
//# sourceMappingURL=EmailInput.js.map