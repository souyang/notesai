import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./ThemeProvider";
import "./globals.css";
import constants from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NotesAI",
  description: "The AI-powered note-taking app",
  keywords: "AI, note-taking, Next.js",
  openGraph: {
    "title": "NotesAI - AI-powered Note-taking",
    "description": "The best AI-powered note-taking app out there.",
    "images": "URL_to_image",
    "url": constants.BASE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
