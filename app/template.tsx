import type { ReactNode } from "react";

/** Keep content visible before hydration; individual interactions own their motion. */
export default function Template({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
