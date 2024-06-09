import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { PiHandbagSimpleThin } from "react-icons/pi";
import { GoPersonAdd } from "react-icons/go";
import { FiUser } from "react-icons/fi";

const BottomNavbar = () => {
  const [activeIcon, setActiveIcon] = useState("home");
  return (
    <div className="fixed bottom-0  w-full bg-[#ffffff] border-t py-3">
      <div className="flex items-center justify-around">
        <div
          onClick={() => setActiveIcon("home")}
          className={`flex flex-col items-center justify-center ${
            activeIcon === "home" ? "text-[#f26600]" : "text-gray-500"
          }`}
        >
          <p>
            <IoHomeOutline className="text-[24px]" />
          </p>
          <p className="text-xs">Home</p>
        </div>
        <div
          onClick={() => setActiveIcon("saved")}
          className={`flex flex-col items-center justify-center ${
            activeIcon === "saved" ? "text-[#f26600]" : "text-gray-500"
          }`}
        >
          <p>
            <CiHeart className="text-[24px]" />
          </p>
          <p className="text-xs">Saved</p>
        </div>
        <div
          onClick={() => setActiveIcon("Bookings")}
          className={`flex flex-col items-center justify-center ${
            activeIcon === "Bookings" ? "text-[#f26600]" : "text-gray-500"
          }`}
        >
          <p>
            <PiHandbagSimpleThin className="text-[24px]" />
          </p>
          <p className="text-xs">Bookings</p>
        </div>
        <div
          onClick={() => setActiveIcon("Invite & Earn")}
          className={`flex flex-col items-center justify-center ${
            activeIcon === "Invite & Earn" ? "text-[#f26600]" : "text-gray-500"
          }`}
        >
          <p>
            <GoPersonAdd className="text-[24px]" />
          </p>
          <p className="text-xs">Invite & Earn</p>
        </div>
        <div
          onClick={() => setActiveIcon("Account")}
          className={`flex flex-col items-center justify-center ${
            activeIcon === "Account" ? "text-[#f26600]" : "text-gray-500"
          }`}
        >
          <p>
            <FiUser className="text-[24px]" />
          </p>
          <p className="text-xs">Account</p>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
