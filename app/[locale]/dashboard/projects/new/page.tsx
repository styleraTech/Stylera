// app/dashboard/projects/new/page.tsx
import { ProjectFormDialog } from "../_components/project-form";

export default function NewProjectPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">New Project</h1>
        <p className="text-sm text-muted-foreground">
          Create a new project entry.
        </p>
      </div>

      <ProjectFormDialog mode="create" />
    </div>
  );
}
