import React from "react";
import { IoLanguageOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";

const HomeTopNav = () => {
  return (
    <div className="relative h-[45px] bg-wite mt-3">
      <div>
        <h1 className="font-[1000] text-center text-[#f26600] text-[30px]">
          Roomilo
        </h1>
      </div>
      <div className=" flex items-center justify-end absolute top-[12px] md:top-[9px] text-[24px] md:text-[30px] gap-3 right-3 ">
        <p>
          <IoLanguageOutline />
        </p>
        <p>
          <FiPhoneCall />
        </p>
      </div>
    </div>
  );
};

export default HomeTopNav;
