import type { EmailAnalysis } from "../../types/email.js";

export const analyzeEmail = async (email: string): Promise<EmailAnalysis> => {
  const normalized = email.toLowerCase();
  const importance: EmailAnalysis["importance"] =
    normalized.includes("urgent") || normalized.includes("asap")
      ? "high"
      : normalized.includes("tomorrow") || normalized.includes("today")
        ? "medium"
        : "low";

  return {
    summary: "Mock analysis: review this email and follow up if needed.",
    importance,
    tasks: [
      "Read the full email carefully",
      "Identify the sender's main request",
      "Reply with next steps"
    ]
  };
};

