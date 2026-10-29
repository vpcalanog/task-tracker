/**
 * components/NavBar.tsx
 * ---------------------
 * Site navigation. This is a Client Component ("use client") only because
 * the mobile menu needs state (open / closed). Everything else stays on the
 * server.
 *
 * - Small screens: a "Menu" button toggles a vertical list of links.
 * - From the `sm` breakpoint (640px) up: links are always visible inline.
 */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Dashboard" },
  { href: "/tasks", label: "Tasks" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // "/tasks/new" should still highlight "Tasks".
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (href: string) =>
    `flex min-h-11 items-center rounded-md px-3 text-sm font-medium transition-colors ${
      isActive(href)
        ? "bg-primary-soft text-fg"
        : "text-fg-muted hover:bg-surface-muted hover:text-fg"
    }`;

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-surface/90 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-4 py-2 sm:px-6"
      >
        <Link
          href="/"
          className="flex min-h-11 items-center gap-2 rounded-md text-base font-bold"
        >
          <span
            aria-hidden="true"
            className="grid size-7 place-items-center rounded-md bg-primary text-sm text-primary-fg"
          >
            ✓
          </span>
          Task Tracker
        </Link>

        {/* Mobile menu toggle: hidden from 640px up. */}
        <button
          type="button"
          className="btn btn-secondary sm:hidden"
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <ul
          id="main-menu"
          className={`${open ? "flex" : "hidden"} w-full flex-col gap-1 pb-2 sm:flex sm:w-auto sm:flex-row sm:pb-0`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={linkClass(link.href)}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
