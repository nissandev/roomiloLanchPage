"use client";

import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { BiBuildingHouse } from "react-icons/bi";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { LuPhone } from "react-icons/lu";
import Image from "next/image";
import logo from '../../assets/images/romilologo.png'
import Link from "next/link";

const DesktopTopNav = () => {
  const [isLanguageSwitchOpen, setLanguageSwitchOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const desktopTopNavContent = [
    {
      navIcon: <MdOutlineWorkspacePremium />,
      navName: "Become a Member",
      navSubtitle: "Additional 10% off on stays",
    },
    {
      navIcon: <PiSuitcaseSimpleBold />,
      navName: "Roomilo for Business",
      navSubtitle: "Trusted by 5000 Corporates",
    },
    {
      navIcon: <BiBuildingHouse />,
      navName: "List your Property",
      navSubtitle: "Start earning in 30 mins",
    },
    {
      navIcon: <LuPhone />,
      navName: "01629880885",
      navSubtitle: "Call us to Book now",
    },
  ];

  const handleLanguageSwitcher = () => {
    setLanguageSwitchOpen(!isLanguageSwitchOpen);
  };

  useEffect(() => {
    setLanguageSwitchOpen(false);
  }, [selectedLanguage]);

  return (
    <div>
      <div className="bg-[#f26600] text-[14px] px-[5em] h-[70px] flex items-center  justify-between gap-4">
        {/* <div className="text-[26px] text-white font-extrabold">Roomilo</div> */}
        <div>
          <Image src={logo} alt="logo" width={150}/>
        </div>
        <div className="flex items-center text-white">
          {desktopTopNavContent?.map((topNav, idx) => (
            <div
              key={idx}
              className="border-r border-r-white/20 h-[70px] flex items-center justify-center px-4 cursor-pointer"
            >
              <div className="flex items-center gap-3   ">
                <p className="text-[24px] ">{topNav?.navIcon}</p>
                <div className="leading-none">
                  <p className="font-bold text-[14px]">{topNav?.navName}</p>
                  <span className="text-[12px]">{topNav?.navSubtitle}</span>
                </div>
              </div>
            </div>
          ))}
          <div className="relative w-[139px] ">
            <div
              onClick={handleLanguageSwitcher}
              className="px-4 flex items-center justify-center border-r border-r-white/20 h-[70px] cursor-pointer hover:bg-white/10 transition-all duration-500"
            >
              <button type="button" className="flex gap-1 items-center justify-center">
                <p>
                  <TbWorld className="text-[24px]" />
                </p>
                <p className="font-semibold">
                  {selectedLanguage === "en" ? "English" : "বাংলা"}
                </p>
                <p>
                  {!isLanguageSwitchOpen ? (
                    <IoMdArrowDropdown className="text-[24px]" />
                  ) : (
                    <IoMdArrowDropup className="text-[24px]" />
                  )}
                </p>
              </button>
            </div>
            <ul
              className={`absolute w-full h-fit py-2 ${
                !isLanguageSwitchOpen ? "hidden opacity-0" : "opacity-100"
              } list-none bg-white text-black shadow-md z-[1] px-2 space-y-3 rounded transition-all duration-500`}
            >
              <li
                onClick={() => setSelectedLanguage("en")}
                className={`px-1 rounded flex justify-between items-center ${
                  selectedLanguage === "en" &&
                  "text-[#f26600] font-semibold bg-gray-100"
                } hover:bg-gray-100 transition-all duration-300 cursor-pointer`}
              >
                <span>English</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <rect
                      x="1"
                      y="4"
                      width="30"
                      height="24"
                      rx="4"
                      ry="4"
                      fill="#071b65"
                    ></rect>
                    <path
                      d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z"
                      fill="#b92932"
                    ></path>
                    <path
                      d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z"
                      fill="#b92932"
                    ></path>
                    <path
                      d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z"
                      fill="#fff"
                    ></path>
                    <rect x="13" y="4" width="6" height="24" fill="#fff"></rect>
                    <rect x="1" y="13" width="30" height="6" fill="#fff"></rect>
                    <rect
                      x="14"
                      y="4"
                      width="4"
                      height="24"
                      fill="#b92932"
                    ></rect>
                    <rect
                      x="14"
                      y="1"
                      width="4"
                      height="30"
                      transform="translate(32) rotate(90)"
                      fill="#b92932"
                    ></rect>
                    <path
                      d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z"
                      fill="#b92932"
                    ></path>
                    <path
                      d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z"
                      fill="#b92932"
                    ></path>
                    <path
                      d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                      opacity=".15"
                    ></path>
                    <path
                      d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                      fill="#fff"
                      opacity=".2"
                    ></path>
                  </svg>
                </span>
              </li>
              <li
                onClick={() => setSelectedLanguage("bn")}
                className={`px-1 rounded flex justify-between items-center ${
                  selectedLanguage === "bn" &&
                  "text-[#f26600] font-semibold bg-gray-100"
                } hover:bg-gray-100 transition-all duration-300 cursor-pointer`}
              >
                <span>বাংলা</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <rect
                      x="1"
                      y="4"
                      width="30"
                      height="24"
                      rx="4"
                      ry="4"
                      fill="#2d694f"
                    ></rect>
                    <path
                      d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                      opacity=".15"
                    ></path>
                    <circle cx="16" cy="16" r="7" fill="#e13e47"></circle>
                    <path
                      d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                      fill="#fff"
                      opacity=".2"
                    ></path>
                  </svg>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <Link href={'/login'} className="pl-4 flex font-semibold gap-1 items-center justify-center">
                <p>
                  <LuUser className="h-[24px] w-[24px] bg-white/50 text-white p-[1px] rounded-full" />
                </p>
                <p>Login</p>
                <p>/</p>
                <p>Signup</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopTopNav;
