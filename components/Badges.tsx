/**
 * components/Badges.tsx
 * ---------------------
 * Small colored pills for a task's priority and status. Each badge shows a
 * text label, so the meaning never depends on color alone (an accessibility
 * rule).
 */
import type { Task } from "@/lib/data";

const priorityStyles: Record<Task["priority"], string> = {
  high: "badge-error",
  medium: "badge-warning",
  low: "badge-neutral",
};

export function PriorityBadge({ priority }: { priority: Task["priority"] }) {
  return (
    <span className={`badge ${priorityStyles[priority]} capitalize`}>
      {priority}
    </span>
  );
}

export function StatusBadge({ done }: { done: boolean }) {
  return (
    <span className={`badge ${done ? "badge-success" : "badge-neutral"}`}>
      <span aria-hidden="true">{done ? "●" : "○"}</span>
      {done ? "Done" : "Open"}
    </span>
  );
}
