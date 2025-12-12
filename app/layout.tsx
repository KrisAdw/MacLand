import type { Metadata } from "next";
import "./globals.css";
import GSAPProvider from "./providers/GSAPProvider";

export const metadata: Metadata = {
  title: "MacLand",
  description: "Macbook Landing Page clone built with Next.js and GSAP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className="antialiased"
      >
        <GSAPProvider>
          {children}
        </GSAPProvider>
      </body>
    </html>
  );
}
