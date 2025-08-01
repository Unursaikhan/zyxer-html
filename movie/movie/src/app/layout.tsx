"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PropsWithChildren, useEffect, useState, Suspense } from "react";
import { Navigation } from "./_components/Navigation";
import { GenreProvider } from "./_components/GenreProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: PropsWithChildren) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    setIsDark(stored === "1");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "1" : "0");
  }, [isDark]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${
          isDark ? "dark" : ""
        }`}
        suppressHydrationWarning
      >
        <div className="flex justify-center">
          <Suspense fallback={<div>Loading navigation...</div>}>
            <Navigation isDark={isDark} setIsDark={setIsDark} />
          </Suspense>
        </div>

        <Suspense fallback={<div>Loading genres...</div>}>
          <GenreProvider>{children}</GenreProvider>
        </Suspense>
      </body>
    </html>
  );
}
