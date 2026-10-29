import Link from "next/link";
import { PriorityBadge, StatusBadge } from "@/components/Badges";
import { getTasks } from "@/lib/data";

const dateFormat = new Intl.DateTimeFormat("en-US", { dateStyle: "medium" });

export default async function Tasks() {
  const tasks = await getTasks();
  return (
    <div className="space-y-8">
      {/* Title and button stack on phones, sit side by side from 640px. */}
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <h1 className="text-h1 font-bold tracking-tight">Tasks</h1>
          <p className="text-fg-muted">
            {tasks.length} {tasks.length === 1 ? "task" : "tasks"}, newest first.
          </p>
        </div>
        <Link href="/tasks/new" className="btn btn-primary">
          <span aria-hidden="true">+</span> New task
        </Link>
      </header>

      {tasks.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          {/* Phones & tablets: one card per task. */}
          <ul className="space-y-3 md:hidden">
            {tasks.map((task) => (
              <li key={task.id} className="card space-y-3 p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <StatusBadge done={task.done} />
                  <PriorityBadge priority={task.priority} />
                </div>
                <div>
                  <h2 className="font-semibold">{task.title}</h2>
                  {task.notes && (
                    <p className="mt-1 text-sm wrap-break-word text-fg-muted">{task.notes}</p>
                  )}
                </div>
                <p className="text-xs text-fg-muted">
                  Created {dateFormat.format(new Date(task.createdAt))}
                </p>
              </li>
            ))}
          </ul>

          {/* From 768px: a table. overflow-x-auto keeps it from ever
              pushing the page wider than the screen. */}
          <div className="card hidden overflow-x-auto md:block">
            <table className="table">
              <caption className="sr-only">All tasks</caption>
              <thead>
                <tr>
                  <th scope="col">Task</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Status</th>
                  <th scope="col">Created</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id}>
                    <td>
                      <p className="font-semibold">{task.title}</p>
                      {task.notes && <p className="mt-1 text-fg-muted">{task.notes}</p>}
                    </td>
                    <td>
                      <PriorityBadge priority={task.priority} />
                    </td>
                    <td>
                      <StatusBadge done={task.done} />
                    </td>
                    <td className="whitespace-nowrap text-fg-muted">
                      {dateFormat.format(new Date(task.createdAt))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="card flex flex-col items-center gap-4 border-dashed px-6 py-12 text-center">
      <span aria-hidden="true" className="text-4xl">
        📋
      </span>
      <div className="space-y-1">
        <h2 className="text-lg font-semibold">No tasks yet</h2>
        <p className="text-fg-muted">Create your first task to get started.</p>
      </div>
      <Link href="/tasks/new" className="btn btn-primary">
        Create a task
      </Link>
    </div>
  );
}
