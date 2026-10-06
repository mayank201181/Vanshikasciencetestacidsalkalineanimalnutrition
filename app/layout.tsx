import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ProgressProvider } from "@/lib/store";
import { SiteHeader } from "@/components/SiteHeader";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test Prep Lab · Acids & Alkalis + Animal Nutrition",
  description:
    "Year 8 science test prep: 100 multiple-choice questions, 20 written questions with instant marking and detailed feedback, revision guides, flashcards and interactive labs.",
  appleWebApp: { capable: true, statusBarStyle: "default", title: "Test Prep Lab" },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[var(--background)]">
        <ErrorBoundary>
          <ProgressProvider>
            <ErrorBoundary silent>
              <SiteHeader />
            </ErrorBoundary>
            <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-5 sm:py-8">{children}</main>
            <footer className="border-t border-slate-200 bg-white py-5 text-center text-xs text-slate-500 print:hidden">
              Built for Thursday&apos;s Year 8 progress check · Your progress saves on this device · You&apos;ve got this 💪
            </footer>
          </ProgressProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
