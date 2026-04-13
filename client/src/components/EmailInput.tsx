interface EmailInputProps {
    value: string;
    onChange: (val: string) => void;
    onSubmit: () => void;
    loading: boolean;
    error: string | null;
  }
  
  export function EmailInput({ value, onChange, onSubmit, loading, error }: EmailInputProps) {
    const isEmpty = value.trim().length === 0;
  
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        if (!isEmpty && !loading) onSubmit();
      }
    };
  
    return (
      <div className="input-section">
        <div className="textarea-wrapper">
          <textarea
            className="email-textarea"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Paste your email here…"
            spellCheck={false}
            aria-label="Email content"
            disabled={loading}
          />
          <div className="textarea-footer">
            <span className="char-hint">
              {value.trim().length > 0
                ? `${value.trim().split(/\s+/).length} words`
                : ""}
            </span>
            <span className="shortcut-hint">⌘↵ to analyze</span>
          </div>
        </div>
  
        {error && (
          <div className="error-banner" role="alert">
            <span className="error-icon">⚠</span>
            {error}
          </div>
        )}
  
        <button
          className={`analyze-btn ${loading ? "loading" : ""}`}
          onClick={onSubmit}
          disabled={isEmpty || loading}
          aria-busy={loading}
        >
          {loading ? (
            <>
              <span className="spinner" aria-hidden="true" />
              Analyzing…
            </>
          ) : (
            "Analyze Email"
          )}
        </button>
      </div>
    );
  }