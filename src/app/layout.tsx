import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DesktopTopNav from "@/components/Shared/DesktopTopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roomilo || Your Travel Solution ",
  description: "A Product of JSENCODER",
  icons: "/sd.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <DesktopTopNav />
        <div>{children}</div>
      </body>
    </html>
  );
}
