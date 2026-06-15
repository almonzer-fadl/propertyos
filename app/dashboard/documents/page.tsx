"use client";

import { useState } from "react";
import { FileText, Search, UploadCloud } from "lucide-react";
import { useDemo } from "../../_components/demo-context";
import { PageHeader, Panel, SectionHeading, SoftButton } from "../../_components/ui";

export default function DocumentsPage() {
  const { documents, addDocument, showToast, addActivity } = useDemo();
  const [query, setQuery] = useState("");

  const filtered = documents.filter(
    (d) =>
      d.name.toLowerCase().includes(query.toLowerCase()) ||
      d.target.toLowerCase().includes(query.toLowerCase()) ||
      d.type.toLowerCase().includes(query.toLowerCase()),
  );

  const handleUpload = (label: string) => {
    const name = label === "Upload lease" ? "Lease agreement" : "Inspection report";
    const type = label === "Upload lease" ? "Tenant file" : "Property file";
    addDocument(name, "Marina Heights 12B", type);
    showToast(`Document added: ${name}`);
    addActivity(`New document uploaded: ${name}.`);
  };

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Company OS / Documents"
        title="The filing cabinet you don't need a key for."
        description="Lease agreements, inspection reports, contractor invoices, owner statements — all searchable and linked to the property, not buried in an email attachment from 8 months ago."
        actionLabel="Open owner app"
        actionHref="/owner/portal"
      />

      <Panel>
        <div className="mb-5 flex items-center gap-3 rounded-[22px] bg-[#f7f1e7] px-4 py-3">
          <Search size={17} className="text-[#7a8276]" />
          <input
            type="text"
            placeholder="Search documents by name, property, or type..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-[#151612] placeholder:text-[#a3aca0] outline-none"
          />
        </div>
        <SectionHeading title="Document library" subtitle={`${filtered.length} document${filtered.length !== 1 ? "s" : ""}`} />
        <div className="grid gap-3 md:grid-cols-2">
          {filtered.map((doc) => (
            <div key={`${doc.name}-${doc.target}`} className="flex items-center gap-4 rounded-[24px] bg-[#f7f3ea] p-4">
              <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-[#4e74a5] shadow-sm">
                <FileText size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-[#151612]">{doc.name}</p>
                <p className="mt-1 text-sm text-[#667065]">{doc.target} / {doc.type}</p>
              </div>
              <p className="text-xs font-bold text-[#7a8276]">{doc.updated}</p>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-[24px] border border-dashed border-[#cad5c1] p-6 text-center text-sm text-[#667065]">
              No documents match "{query}"
            </div>
          )}
        </div>
      </Panel>

      <div className="grid gap-3 sm:grid-cols-3">
        <button onClick={() => handleUpload("Upload lease")} className="soft-rise-delay flex min-h-24 items-center justify-between rounded-[24px] border border-dashed border-[#cad5c1] bg-[#fbfaf5] p-5 text-left transition duration-300 hover:-translate-y-0.5 hover:border-[#9eb191] hover:bg-white">
          <div>
            <p className="text-sm font-semibold text-[#151612]">Upload lease</p>
            <p className="mt-1 text-xs leading-5 text-[#667065]">Add a tenant lease agreement</p>
          </div>
          <UploadCloud size={18} />
        </button>
        <button onClick={() => handleUpload("Add inspection report")} className="soft-rise-delay flex min-h-24 items-center justify-between rounded-[24px] border border-dashed border-[#cad5c1] bg-[#fbfaf5] p-5 text-left transition duration-300 hover:-translate-y-0.5 hover:border-[#9eb191] hover:bg-white">
          <div>
            <p className="text-sm font-semibold text-[#151612]">Add inspection report</p>
            <p className="mt-1 text-xs leading-5 text-[#667065]">Attach a property inspection</p>
          </div>
          <UploadCloud size={18} />
        </button>
        <SoftButton href="/dashboard/maintenance">
          <UploadCloud size={17} />
          Attach to ticket
        </SoftButton>
      </div>
    </div>
  );
}
