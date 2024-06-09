"use client";
import React, { ReactNode, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import InitialLoader from "../../components/Loaders/InitialLoader";

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
  const [currentWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Check if window is defined before adding event listener
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize(); // Call handleResize once to set the initial width
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  console.log({ currentWidth });

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
