import { Download, FileText, Search } from "lucide-react";
import { documents } from "../../../_data/propertyos";
import { PageHeader, Panel, SectionHeading, SoftButton } from "../../../_components/ui";

export default function OwnerDocumentsPage() {
  const ownerDocs = documents.filter((document) =>
    ["Owner report", "Property file", "Maintenance", "Compliance"].includes(document.type),
  );

  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Owner app / Documents"
        title="Statements, reports, invoices, and property files."
        description="A clean document vault for owner-visible files without exposing internal manager notes."
      />

      <Panel>
        <div className="mb-5 flex items-center gap-3 rounded-[22px] bg-[#f7f3ea] px-4 py-3 text-sm text-[#667065]">
          <Search size={17} />
          Search owner documents
        </div>
        <SectionHeading title="Document vault" subtitle="Files prepared for Sarah Lim and Marina Heights." />
        <div className="grid gap-3 md:grid-cols-2">
          {ownerDocs.map((document) => (
            <div key={`${document.name}-${document.target}`} className="flex items-center gap-3 rounded-[24px] bg-[#f7f3ea] p-4">
              <div className="grid size-12 place-items-center rounded-2xl bg-white text-[#4e74a5]">
                <FileText size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-bold">{document.name}</p>
                <p className="text-sm text-[#667065]">{document.target} / {document.updated}</p>
              </div>
              <Download size={18} />
            </div>
          ))}
        </div>
      </Panel>

      <SoftButton href="/owner/portal/reports">Back to reports</SoftButton>
    </div>
  );
}
