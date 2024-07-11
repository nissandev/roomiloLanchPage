import type { Metadata } from "next";
import "../globals.css";
import { Suspense } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import CheckLayout from "../CheckLayout/CheckLayout";

// const inter = Inter({ subsets: ["greek"] });

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
          <AntdRegistry>
            <CheckLayout>{children}</CheckLayout>
          </AntdRegistry>
        </Suspense>
      </body>
    </html>
  );
}
