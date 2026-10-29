/**
 * Catches errors thrown while rendering /tasks pages or running their
 * Server Actions (e.g. "Title is required" from lib/actions.ts).
 * Error boundaries must be Client Components.
 */
"use client";

import Link from "next/link";

export default function TasksError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div role="alert" className="alert alert-error mx-auto max-w-xl space-y-4">
      <div className="space-y-1">
        <h1 className="text-lg font-semibold">Something went wrong</h1>
        <p className="text-sm">{error.message || "An unexpected error occurred."}</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="button" className="btn btn-primary" onClick={reset}>
          Try again
        </button>
        <Link href="/tasks" className="btn btn-secondary">
          Back to tasks
        </Link>
      </div>
    </div>
  );
}
