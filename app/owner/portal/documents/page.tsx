"use client";

import { useState } from "react";
import { Download, FileText, Search } from "lucide-react";
import { useDemo } from "../../../_components/demo-context";
import { PageHeader, Panel, SectionHeading, SoftButton } from "../../../_components/ui";

export default function OwnerDocumentsPage() {
  const { documents } = useDemo();
  const [query, setQuery] = useState("");

  const filtered = documents.filter(
    (d) =>
      d.name.toLowerCase().includes(query.toLowerCase()) ||
      d.target.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Owner app / Documents"
        title="Statements, reports, and invoices. No email attachments."
        description="Every document related to your property lives here — organized by type and date, not scattered across forwarded email chains you can never find."
      />

      <Panel>
        <div className="mb-5 flex items-center gap-3 rounded-[22px] bg-[#f7f1e7] px-4 py-3">
          <Search size={17} className="text-[#7a8276]" />
          <input
            type="text"
            placeholder="Search owner documents..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-[#151612] placeholder:text-[#a3aca0] outline-none"
          />
        </div>
        <SectionHeading title="Document vault" subtitle={`${filtered.length} document${filtered.length !== 1 ? "s" : ""}`} />
        <div className="grid gap-3 md:grid-cols-2">
          {filtered.map((doc) => (
            <div key={`${doc.name}-${doc.target}`} className="flex items-center gap-3 rounded-[24px] bg-[#f7f3ea] p-4">
              <div className="grid size-12 place-items-center rounded-2xl bg-white text-[#4e74a5]">
                <FileText size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-bold">{doc.name}</p>
                <p className="text-sm text-[#667065]">{doc.target} / {doc.updated}</p>
              </div>
              <button onClick={() => {}} className="grid size-9 place-items-center rounded-xl hover:bg-white transition">
                <Download size={18} className="text-[#7a8276]" />
              </button>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-[24px] border border-dashed border-[#cad5c1] p-6 text-center text-sm text-[#667065]">
              No documents found
            </div>
          )}
        </div>
      </Panel>

      <SoftButton href="/owner/portal/reports">Back to reports</SoftButton>
    </div>
  );
}
