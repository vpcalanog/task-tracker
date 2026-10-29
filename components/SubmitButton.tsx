/**
 * components/SubmitButton.tsx
 * ---------------------------
 * A submit button that disables itself and shows "Saving..." while its
 * parent <form>'s Server Action is running. `useFormStatus` reads the status
 * of the closest parent form, so this must be a Client Component that is
 * rendered *inside* the <form>.
 */
"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-primary" disabled={pending} aria-disabled={pending}>
      {pending && (
        <span
          aria-hidden="true"
          className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
        />
      )}
      {pending ? "Saving..." : children}
    </button>
  );
}
