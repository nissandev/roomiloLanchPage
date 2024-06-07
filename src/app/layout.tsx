import type { Metadata } from "next";
import "./globals.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { CustomProvider } from "rsuite";
// const inter = Inter({ subsets: ["greek"] });
const DesktopTopNav = dynamic(
  () => import("@/components/Shared/DesktopTopNav"),
  { suspense: true }
);
const DistrictList = dynamic(() => import("@/components/Shared/DistrictList"), {
  suspense: true,
});

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
  setTimeout(() => {
    return "loading........";
  }, 1000);

  return (
    <html lang="en">
      <body className={` prevent-select overflow-x-hidden`}>
        <Suspense fallback={"Loading..."}>
          <CustomProvider>
            <DesktopTopNav />
            <DistrictList />
            <div>{children}</div>
          </CustomProvider>
        </Suspense>
      </body>
    </html>
  );
}
