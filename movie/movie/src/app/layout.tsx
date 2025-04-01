"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PropsWithChildren, useEffect, useState } from "react";
import { Navigation } from "./_components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: PropsWithChildren) {
  const [isDark, setIsDark] = useState<boolean>(
    localStorage.getItem("theme") === "1"
  );
  useEffect(() => {
    localStorage.setItem("theme", isDark ? "1" : "0");
  }, [isDark]);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${
          isDark ? "dark" : ""
        }`}
      >
        <div className="flex justify-center">
          <Navigation isDark={isDark} setIsDark={setIsDark} />
        </div>
        {children}
      </body>
    </html>
  );
}
