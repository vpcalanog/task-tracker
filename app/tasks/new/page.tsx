import type { Metadata } from "next";
import Link from "next/link";
import SubmitButton from "@/components/SubmitButton";
import { createTaskAction } from "@/lib/actions";

export const metadata: Metadata = { title: "New task · Task Tracker" };

/**
 * The "New task" form. It posts straight to the existing Server Action in
 * lib/actions.ts, which saves the task and redirects back to /tasks.
 */
export default function NewTask() {
  return (
    <div className="mx-auto max-w-xl space-y-8">
      <header className="space-y-2">
        <Link
          href="/tasks"
          className="inline-flex min-h-11 items-center text-sm font-medium text-primary hover:underline"
        >
          ← Back to tasks
        </Link>
        <h1 className="text-h1 font-bold tracking-tight">New task</h1>
        <p className="text-fg-muted">Fields marked * are required.</p>
      </header>

      <form action={createTaskAction} className="card space-y-6 p-6">
        <div>
          {/* htmlFor + id link the label to its input for screen readers. */}
          <label htmlFor="title" className="label">
            Title <span aria-hidden="true">*</span>
          </label>
          <input id="title" name="title" type="text" required className="input" />
        </div>

        <div>
          <label htmlFor="notes" className="label">
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            className="input resize-y"
            aria-describedby="notes-hint"
          />
          <p id="notes-hint" className="hint">
            Optional details or links.
          </p>
        </div>

        <div>
          <label htmlFor="priority" className="label">
            Priority
          </label>
          <select id="priority" name="priority" defaultValue="medium" className="input">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        {/* Full-width stacked buttons on phones, a right-aligned row from 640px. */}
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Link href="/tasks" className="btn btn-secondary">
            Cancel
          </Link>
          <SubmitButton>Create task</SubmitButton>
        </div>
      </form>
    </div>
  );
}
