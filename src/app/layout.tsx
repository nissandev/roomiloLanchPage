import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });
const DesktopTopNav = dynamic(() => import('@/components/Shared/DesktopTopNav'), { suspense: true });
const DistrictList = dynamic(() => import('@/components/Shared/DistrictList'), { suspense: true });

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
        <Suspense fallback={"Loading..."}>
          <DesktopTopNav />
          <DistrictList/>
          <div>{children}</div>
        </Suspense>
      </body>
    </html>
  );
}
