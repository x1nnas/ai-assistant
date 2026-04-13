export interface EmailAnalysis {
  summary: string;
  importance: "low" | "medium" | "high";
  tasks: string[];
}
