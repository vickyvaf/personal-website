import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vicky Adi Firmansyah",
  description: "Frontend Engineer Portfolio of Vicky Adi Firmansyah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
