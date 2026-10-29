/**
 * Shown instantly while app/tasks/page.tsx waits for getTasks().
 * The grey blocks ("skeletons") roughly match the real layout, so the page
 * doesn't jump when the data arrives.
 */
export default function Loading() {
  return (
    <div className="space-y-8" aria-busy="true">
      <p className="sr-only" role="status">
        Loading tasks...
      </p>
      <div className="space-y-3">
        <div className="skeleton h-9 w-40" />
        <div className="skeleton h-5 w-56" />
      </div>
      <div className="space-y-3">
        {[1, 2, 3].map((n) => (
          <div key={n} className="card space-y-3 p-4">
            <div className="skeleton h-5 w-2/3" />
            <div className="skeleton h-4 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
