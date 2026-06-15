"use client";

import { useState } from "react";
import { MessageSquareText, Search, Wrench } from "lucide-react";
import { tenants } from "../../_data/propertyos";
import { PageHeader, Panel, SectionHeading, SoftButton, StatusBadge } from "../../_components/ui";

export default function TenantsPage() {
  const [query, setQuery] = useState("");
  const filtered = tenants.filter(
    (t) =>
      t.name.toLowerCase().includes(query.toLowerCase()) ||
      t.property.toLowerCase().includes(query.toLowerCase()) ||
      t.status.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Company OS / Tenants"
        title="Know who needs what, before they have to ask."
        description="No more digging through old texts to remember which tenant has the leaky sink and who's waiting on a part. Every tenant, their unit, open requests, and last contact in one list."
        actionLabel="Open tenant app"
        actionHref="/tenet/portal"
      />

      <Panel>
        <div className="mb-5 flex items-center gap-3 rounded-[22px] bg-[#f7f1e7] px-4 py-3">
          <Search size={17} className="text-[#7a8276]" />
          <input
            type="text"
            placeholder="Search by name, property, or status..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-[#151612] placeholder:text-[#a3aca0] outline-none"
          />
        </div>
        <SectionHeading title="Tenant directory" subtitle={`${filtered.length} tenant${filtered.length !== 1 ? "s" : ""} found`} />
        <div className="grid gap-3 md:grid-cols-2">
          {filtered.map((tenant) => (
            <div key={tenant.name} className="rounded-[24px] bg-[#f7f3ea] p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-[#151612]">{tenant.name}</p>
                  <p className="mt-1 text-sm text-[#667065]">
                    {tenant.property} / Unit {tenant.unit}
                  </p>
                </div>
                <StatusBadge label={tenant.status} />
              </div>
              <div className="mt-4 flex items-center justify-between text-sm font-bold text-[#6d7569]">
                <span>Last contact: {tenant.lastContact}</span>
                <MessageSquareText size={18} />
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-[24px] border border-dashed border-[#cad5c1] p-6 text-center text-sm text-[#667065]">
              No tenants match "{query}"
            </div>
          )}
        </div>
      </Panel>

      <div className="grid gap-3 sm:grid-cols-2">
        <SoftButton href="/dashboard/maintenance">
          <Wrench size={17} />
          View open maintenance
        </SoftButton>
        <SoftButton href="/tenet/portal">
          <MessageSquareText size={17} />
          Demo tenant portal
        </SoftButton>
      </div>
    </div>
  );
}
