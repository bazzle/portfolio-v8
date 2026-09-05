import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barry Richards",
  description: "Personal professional website.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
