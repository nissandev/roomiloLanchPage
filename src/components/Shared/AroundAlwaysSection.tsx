'use client'
import Image from "next/image";
import React from "react";
import locationImg from "../../assets/images/location.png";

const AroundAlwaysSection:React.FC = () => {
  return (

      <div className="bg-[#F3F5F7] -mt-[32px] mx-auto overflow-x-hidden">
        <div className=" mx-[71px] py-[40px] flex items-cente justify-between w-full gap-16">
          <div className="w-full flex items-center  justify-center">
            <Image src={locationImg} alt="Locations" className="object-cover max-w-[680px] h-[380px] p-3" />
          </div>
          <div className="w-full">
            <div className="px-4">
              <p className="text-[26px] font-extrabold my-[26px]">
                There&apos;s a Roomilo around. Always.
              </p>
              <p className="text-[16px] mb-[16px]">
                More Destinations. More Ease. More Affordable.
              </p>
              <div className="mt-[20px]">
                <div className="flex items-center gap-[26px]">
                  <div className=" transform skew-x-[-30deg] border-r  pr-4 border-gray-400 leading-none ">
                    <div className="transform skew-x-[30deg] pr-[16px]">
                      <p className="text-[32px] font-semibold ">6+</p>
                      <p className="text-[14px] text-gray-600">Countries</p>
                    </div>
                  </div>
                  <div className=" leading-none">
                    <p className="text-[32px] font-semibold">40,000+</p>
                    <p className="text-[14px] text-gray-600">Hotels & Homes</p>
                  </div>
                </div>
                <p></p>
                <p></p>
              </div>
              <div className="my-[40px] px-6">
                <ul className="grid grid-cols-3 list-disc gap-10">
                  <li className=" marker:text-green-500 marker:text-2xl">
                    Indonesia
                  </li>
                  <li className=" marker:text-red-500 marker:text-2xl">
                    Malaysia
                  </li>
                  <li className=" marker:text-yellow-500 marker:text-2xl">
                    Denmark
                  </li>
                  <li className=" marker:text-cyan-500 marker:text-2xl">US</li>
                  <li className=" marker:text-pink-500/50 marker:text-2xl">
                    UK
                  </li>
                  <li className=" marker:text-purple-600 marker:text-2xl">
                    Netherlands
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default AroundAlwaysSection;
