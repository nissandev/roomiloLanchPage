'use client'

import React, { ReactNode, useState } from "react";
import DesktopTopNav from "../../components/Shared/DesktopTopNav";
import DistrictList from "../../components/Shared/DistrictList";
import DesktopFooter from "../../components/Shared/DesktopFooter";

interface DesktopLayoutProps {
  children: ReactNode;
}


const DesktopLayout: React.FC<DesktopLayoutProps> = ({ children }) => {

  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay (remove this in production)
  setTimeout(() => {
    setIsLoading(false);
  }, 2000); // 2 seconds

  return (
    <div>
      <DesktopTopNav />
      <DistrictList />
      {children}
      <DesktopFooter />
    </div>
  );
};

export default DesktopLayout;
