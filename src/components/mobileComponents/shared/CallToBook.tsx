import React, { useEffect, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";

const CallToBook: React.FC = () => {

    const [isInTop,setCallToBookInTop]=useState(false)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const showAtHeight = 200;
        setCallToBookInTop(scrollPosition > showAtHeight);
      };
  return (
    <div className="fixed bottom-24 right-3 z-10">
      <a href="tel:01629880885" className={`text-[#f26600] border py-1 px-2 bg-white shadow-md ${!isInTop ? " w-full":'h-12 w-12 '} rounded-full overflow-hidden whitespace-nowrap flex shrink-0 items-center justify-center gap-2`}>
        <p>
          <FiPhoneCall  className="text-sm"/>
        </p>
        <p className={`${!isInTop? '' :'hidden'}`}>Call to book</p>
      </a>
    </div>
  );
};

export default CallToBook;
