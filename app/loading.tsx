/** Shown instantly while app/page.tsx waits for getStats(). */
export default function Loading() {
  return (
    <div className="space-y-8" aria-busy="true">
      <p className="sr-only" role="status">
        Loading dashboard...
      </p>
      <div className="space-y-3">
        <div className="skeleton h-9 w-48" />
        <div className="skeleton h-5 w-64 max-w-full" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[1, 2, 3].map((n) => (
          <div key={n} className="card space-y-3 p-6">
            <div className="skeleton h-4 w-24" />
            <div className="skeleton h-10 w-16" />
          </div>
        ))}
      </div>
    </div>
  );
}
