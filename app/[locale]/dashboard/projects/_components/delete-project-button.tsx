// app/dashboard/projects/_components/delete-project-button.tsx
"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";

// ✅ match the new pattern: FormData actions return { message }
// adjust path to where your project actions live
import { deleteProjectAction } from "@/app/[locale]/dashboard/projects/actions"; // <-- adjust

export function DeleteProjectButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      size="sm"
      variant="destructive"
      disabled={isPending}
      onClick={() => {
        const ok = confirm("Delete this project? This cannot be undone.");
        if (!ok) return;

        startTransition(async () => {
          // ✅ FormData style (same as your user actions)
          const fd = new FormData();
          fd.set("id", id);

          const res = await deleteProjectAction({ message: "" }, fd);

          // ✅ your actions return message only
          if (res?.message && res.message !== "OK") {
            // if your delete action returns success message, keep it
            // if it returns error message, show it
            // (best practice: make delete action return a clear message always)
            // Here we just show the message and reload.
            // If you want strict ok/error, I can refactor the delete action too.
            // eslint-disable-next-line no-alert
            alert(res.message);
          }

          window.location.reload();
        });
      }}
    >
      {isPending ? "Deleting..." : "Delete"}
    </Button>
  );
}
