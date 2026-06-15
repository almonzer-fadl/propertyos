"use client";

import { useState } from "react";
import { Download, FileText, Search } from "lucide-react";
import { useDemo } from "../../../_components/demo-context";
import { PageHeader, Panel, SectionHeading } from "../../../_components/ui";
import { tenantDocuments } from "../../../_data/propertyos";

export default function TenantDocumentsPage() {
  const { documents } = useDemo();
  const [query, setQuery] = useState("");

  const staticDocs = tenantDocuments.map((d) => ({ name: d.title, target: "Marina Heights 12B", type: d.type, updated: d.updated }));
  const allDocs = [
    ...staticDocs,
    ...documents.filter((d) => d.type === "Tenant file" || d.type === "Lease" || d.type === "Guide" || d.type === "Billing"),
  ];

  const filtered = allDocs.filter(
    (d) =>
      d.name.toLowerCase().includes(query.toLowerCase()) ||
      d.type.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Tenant app / Documents"
        title="Lease and property documents on demand."
        description="Tenants can access lease agreements, inspection reports, building guides, and payment instructions without asking the manager."
      />

      <Panel>
        <div className="mb-5 flex items-center gap-3 rounded-[22px] bg-[#f7f1e7] px-4 py-3">
          <Search size={17} className="text-[#7a8276]" />
          <input
            type="text"
            placeholder="Search documents..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-[#151612] placeholder:text-[#a3aca0] outline-none"
          />
        </div>
        <SectionHeading title="My documents" subtitle={`${filtered.length} file${filtered.length !== 1 ? "s" : ""} linked to Marina Heights Unit 12B`} />
        <div className="grid gap-3 md:grid-cols-2">
          {filtered.map((doc) => (
            <div key={doc.name} className="flex items-center gap-3 rounded-[24px] bg-[#f7f3ea] p-4">
              <div className="grid size-12 place-items-center rounded-2xl bg-white text-[#4e74a5]">
                <FileText size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-bold">{doc.name}</p>
                <p className="text-sm text-[#667065]">{doc.type} / {doc.updated}</p>
              </div>
              <Download size={18} className="text-[#7a8276] shrink-0" />
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-[24px] border border-dashed border-[#cad5c1] p-6 text-center text-sm text-[#667065]">
              No documents match "{query}"
            </div>
          )}
        </div>
      </Panel>
    </div>
  );
}
