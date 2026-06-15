import { FileText, UploadCloud } from "lucide-react";
import { documents } from "../../_data/propertyos";
import { EmptyStateAction, PageHeader, Panel, SectionHeading, SoftButton } from "../../_components/ui";

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Company OS / Documents"
        title="Documents live where the work happens."
        description="Leases, inspections, invoices, owner statements, and maintenance photos are linked to properties, tenants, owners, and tickets."
        actionLabel="Open owner app"
        actionHref="/owner/portal"
      />

      <Panel>
        <SectionHeading title="Document library" subtitle="Searchable, contextual files instead of scattered folders." />
        <div className="grid gap-3 md:grid-cols-2">
          {documents.map((document) => (
            <div key={`${document.name}-${document.target}`} className="flex items-center gap-4 rounded-[24px] bg-[#f7f3ea] p-4">
              <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-[#4e74a5] shadow-sm">
                <FileText size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-[#151612]">{document.name}</p>
                <p className="mt-1 text-sm text-[#667065]">{document.target} / {document.type}</p>
              </div>
              <p className="text-xs font-bold text-[#7a8276]">{document.updated}</p>
            </div>
          ))}
        </div>
      </Panel>

      <div className="grid gap-3 sm:grid-cols-3">
        <EmptyStateAction href="/dashboard/documents" label="Upload lease" />
        <EmptyStateAction href="/dashboard/documents" label="Add inspection report" />
        <SoftButton href="/dashboard/maintenance">
          <UploadCloud size={17} />
          Attach to ticket
        </SoftButton>
      </div>
    </div>
  );
}
