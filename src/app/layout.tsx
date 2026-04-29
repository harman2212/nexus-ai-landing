import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexusAI — Intelligent Automation for Modern Teams",
  description:
    "Supercharge your workflow with AI-powered automation. NexusAI helps teams analyze data, generate insights, and automate complex tasks — all in one elegant platform.",
  keywords: [
    "AI SaaS",
    "artificial intelligence",
    "automation",
    "machine learning",
    "data analytics",
    "workflow",
    "productivity",
  ],
  authors: [{ name: "NexusAI Team" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    title: "NexusAI — AI Automation That Saves 10+ Hours Every Week",
    description: "Stop wasting time on repetitive tasks. NexusAI automates your workflows, analyzes your data, and helps your team make smarter decisions.",
    siteName: "NexusAI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
