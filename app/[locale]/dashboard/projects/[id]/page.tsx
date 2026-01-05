// app/dashboard/projects/[id]/page.tsx
import { notFound } from "next/navigation";
import { getProjectById } from "@/database/projects";

// ✅ Use the new dialog-based form component you refactored earlier.
// If you named it differently (ProjectFormDialog / ProjectForm), adjust the import.
import { ProjectFormDialog } from "../_components/project-form";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const res = await getProjectById((await params).id);

  // ✅ new db function returns { ok, data?, message? }
  if (!res.ok) return notFound();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Edit Project</h1>
        <p className="text-sm text-muted-foreground">
          Update project details and translations.
        </p>
      </div>

      {/* ✅ mode=edit, pass the real project */}
      <ProjectFormDialog mode="edit" project={res.data as any} />
    </div>
  );
}
