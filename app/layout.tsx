import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohole Chat",
  description: "Chat with your dev team!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" className="bg-slate-100">
      <body>{children}</body>
    </html>
  );
}
