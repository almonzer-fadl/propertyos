"use client";

import type { ReactNode } from "react";
import { DemoProvider } from "./demo-context";
import { Toast } from "./toast";

export function DemoShell({ children }: { children: ReactNode }) {
  return (
    <DemoProvider>
      {children}
      <Toast />
    </DemoProvider>
  );
}
