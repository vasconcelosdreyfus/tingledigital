"use client";

import { useEffect } from "react";

export function LeadConversionTracker() {
  useEffect(() => {
    window.gtag?.("event", "generate_lead");
  }, []);

  return null;
}
