"use client";
import React, { ReactNode, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import InitialLoader from "../../components/Loaders/InitialLoader";
import { useWindowWidth } from "../hooks/useWindowWidth";

interface CheckLayoutProps {
  children: ReactNode;
}

// Load DesktopLayout dynamically only on the client-side
const DesktopLayout = dynamic(() => import("../DesktopLayout/DesktopLayout"), {
  ssr: true,
  loading: () => <InitialLoader />,
});
const MobileLayout = dynamic(() => import("../MobileLayout/MobileLayout"), {
  ssr: true,
  loading: () => <InitialLoader />,
});

const CheckLayout: React.FC<CheckLayoutProps> = ({ children }) => {
  const currentWidth = useWindowWidth();
  return (
    <div>
      {currentWidth !== null && (
        <>
          {currentWidth <= 1200 ? (
            <MobileLayout>{children}</MobileLayout>
          ) : (
            <DesktopLayout>{children}</DesktopLayout>
          )}
        </>
      )}
    </div>
  );
};

export default CheckLayout;
