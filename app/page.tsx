import Link from "next/link";
import { getStats } from "@/lib/data";

export default async function Home() {
  const stats = await getStats();
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-h1 font-bold tracking-tight">Dashboard</h1>
        <p className="text-fg-muted">An overview of everything on your list.</p>
      </header>

      {/* 1 column on phones, 3 columns from 640px up. */}
      <section aria-label="Task statistics">
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Stat label="Total tasks" value={stats.total} />
          <Stat label="Done" value={stats.done} accent="text-success-fg" />
          <Stat label="Open" value={stats.open} accent="text-warning-fg" />
        </dl>
      </section>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link href="/tasks" className="btn btn-primary">
          View all tasks
        </Link>
        <Link href="/tasks/new" className="btn btn-secondary">
          Add a task
        </Link>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  accent = "text-fg",
}: {
  label: string;
  value: number;
  accent?: string;
}) {
  return (
    <div className="card flex flex-col gap-2 p-6">
      {/* <dt>/<dd> pair: screen readers announce "Done, 1". */}
      <dt className="text-sm font-medium text-fg-muted">{label}</dt>
      <dd className={`text-stat font-semibold tabular-nums ${accent}`}>{value}</dd>
    </div>
  );
}
