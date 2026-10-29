import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Task Tracker",
  description: "A small Next.js task tracker for learning the App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {/* Lets keyboard users jump past the navigation. Visible only on focus. */}
        <a
          href="#main"
          className="btn btn-primary sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-20"
        >
          Skip to content
        </a>

        <NavBar />

        <main
          id="main"
          className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 sm:py-12"
        >
          {children}
        </main>

        <footer className="border-t border-border py-6 text-center text-sm text-fg-muted">
          Built with Next.js for ITELEC1
        </footer>
      </body>
    </html>
  );
}
