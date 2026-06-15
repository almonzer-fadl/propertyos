"use client";

import { PortalShell } from "../../_components/portal-shell";
import { ownerNav } from "../../_data/propertyos";

export default function OwnerPortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <PortalShell
      appName="PropertyOS Owner"
      appType="Owner portal"
      baseHref="/owner/portal"
      nav={ownerNav}
      accent="blue"
    >
      {children}
    </PortalShell>
  );
}
