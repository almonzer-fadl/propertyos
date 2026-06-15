"use client";

import { PortalShell } from "../../_components/portal-shell";
import { tenantNav } from "../../_data/propertyos";

export default function TenantPortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <PortalShell
      appName="PropertyOS Tenant"
      appType="Tenant portal"
      baseHref="/tenant/portal"
      nav={tenantNav}
      accent="green"
    >
      {children}
    </PortalShell>
  );
}
