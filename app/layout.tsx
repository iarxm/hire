import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fieldstone Talent | Project-Ready Workforce",
  description:
    "Fieldstone Talent hires, educates, and deploys project-ready professionals across construction, education, and healthcare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
