import { Download, FileText, Search } from "lucide-react";
import { tenantDocuments } from "../../../_data/propertyos";
import { PageHeader, Panel, SectionHeading } from "../../../_components/ui";

export default function TenantDocumentsPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Tenant app / Documents"
        title="Lease and property documents on demand."
        description="Tenants can access lease agreements, inspection reports, building guides, and payment instructions without asking the manager."
      />

      <Panel>
        <div className="mb-5 flex items-center gap-3 rounded-[22px] bg-[#f7f3ea] px-4 py-3 text-sm text-[#667065]">
          <Search size={17} />
          Search documents
        </div>
        <SectionHeading title="My documents" subtitle="Files linked to Marina Heights Unit 12B." />
        <div className="grid gap-3 md:grid-cols-2">
          {tenantDocuments.map((document) => (
            <div key={document.title} className="flex items-center gap-3 rounded-[24px] bg-[#f7f3ea] p-4">
              <div className="grid size-12 place-items-center rounded-2xl bg-white text-[#4e74a5]">
                <FileText size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-bold">{document.title}</p>
                <p className="text-sm text-[#667065]">{document.type} / {document.updated}</p>
              </div>
              <Download size={18} />
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
