import React, { ReactNode } from 'react';
import BottomNavbar from '../../components/mobileComponents/shared/BottomNavbar';


interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  return (
    <div>
      {children}
      Mobile
      <BottomNavbar/>
    </div>
  );
};

export default MobileLayout;
