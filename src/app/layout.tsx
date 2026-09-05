import type { Metadata } from "next";
import "@/ui/0_global/main.scss";

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
