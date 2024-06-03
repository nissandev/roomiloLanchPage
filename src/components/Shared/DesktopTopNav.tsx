'use client'

import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { BiBuildingHouse } from "react-icons/bi";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { LuPhone } from "react-icons/lu";


const DesktopTopNav = () => {
    const [isLanguageSwitchOpen,setLanguageSwitchOpen]=useState(false)
  const desktopTopNavContent = [
    {
      navIcon:<MdOutlineWorkspacePremium/>,
      navName: "Become a Member",
      navSubtitle: "Additional 10% off on stays",
    },
    {
      navIcon: <PiSuitcaseSimpleBold/>,
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

  const handleLanguageSwitcher=()=>{
    setLanguageSwitchOpen(!isLanguageSwitchOpen)
  }

  return (
    <>
      <div className='bg-[#f26600] text-[14px] px-[5em] h-[70px] flex items-center  justify-between gap-4'>
        <div className='text-[26px] text-white font-extrabold'>Roomilo</div>
        <div className='flex items-center text-white'>
          {desktopTopNavContent?.map((topNav, idx) => (
            <div
              key={idx}
              className='border-r border-r-white/20 h-[70px] flex items-center justify-center px-4'>
              <div className='flex items-center gap-3   '>
                <p className='text-[24px] '>{topNav?.navIcon}</p>
                <div className='leading-none'>
                  <p className='font-bold text-[14px]'>{topNav?.navName}</p>
                  <span className='text-[12px]'>{topNav?.navSubtitle}</span>
                </div>
              </div>
            </div>
          ))}
          <div>
            <div className='px-4 flex items-center justify-center border-r border-r-white/20 h-[70px]'>
              <button onClick={handleLanguageSwitcher} className='flex gap-1 items-center justify-center'>
                <p>
                  <TbWorld className='text-[24px]' />
                </p>
                <p className='font-extrabold'>English</p>
                <p>
                  {!isLanguageSwitchOpen ? <IoMdArrowDropdown className='text-[24px]' /> :
                  <IoMdArrowDropup className='text-[24px]' />}
                </p>
              </button>
            </div>
          </div>
          <div>
            <div>
              <button className='pl-4 flex font-extrabold gap-1 items-center justify-center'>
                <p>
                  <LuUser className='h-[24px] w-[24px] bg-white/50 text-white p-[1px] rounded-full' />
                </p>
                <p>Login</p>
                <p>/</p>
                <p>Signup</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTopNav;
