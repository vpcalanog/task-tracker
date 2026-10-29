import Link from "next/link";

/** Shown for any URL that doesn't match a page. */
export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-4 py-12 text-center">
      <p className="text-stat font-bold text-primary">404</p>
      <h1 className="text-h1 font-bold tracking-tight">Page not found</h1>
      <p className="text-fg-muted">The page you are looking for doesn&apos;t exist.</p>
      <Link href="/" className="btn btn-primary">
        Go to dashboard
      </Link>
    </div>
  );
}
