export {};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "config" | "event" | "js",
      targetOrDate: string | Date,
      params?: Record<string, unknown>
    ) => void;
  }
}
