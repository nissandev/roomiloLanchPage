"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";

const DistrictList = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const allDistrict = [
    {
      district: "Dhaka",
      underDistrict: [
        { city: "Faridpur" },
        { city: "Gazipur" },
        { city: "Gopalganj" },
        { city: "Kishoreganj" },
        { city: "Madaripur" },
        { city: "Manikganj" },
        { city: "Munshiganj" },
        { city: "Narayanganj" },
        { city: "Narsingdi" },
        { city: "Rajbari" },
        { city: "Shariatpur" },
        { city: "Tangail" },
      ],
    },
    {
      district: "Khulna",
      underDistrict: [
        { city: "Bagherhat" },
        { city: "Sathkhira" },
        { city: "Jessore" },
        { city: "Magura" },
        { city: "Jhenaidah" },
        { city: "Narail" },
        { city: "Kushtia" },
        { city: "Chuadanga" },
        { city: "Meherpur" },
      ],
    },
    {
      district: "Chittagong",
      underDistrict: [
        { city: "Comilla" },
        { city: "Feni" },
        { city: "Chandpur" },
        { city: "Brahmonbaria" },
        { city: "Noakhali" },
        { city: "Laximpur" },
        { city: "Coxs Bazar" },
        { city: "Rangamati" },
        { city: "Bandarban" },
        { city: "Khagrasori" },
      ],
    },
    {
      district: "Rajshai",
      underDistrict: [
        { city: "Chapainawabganj" },
        { city: "Natore" },
        { city: "Naogaon" },
        { city: "Pabna" },
        { city: "Sirajganj" },
        { city: "Bogra" },
        { city: "Joypurhat" },
      ],
    },
    {
      district: "Sylhet",
      underDistrict: [
        { city: "Habiganj" },
        { city: "Moulvibazar" },
        { city: "Sunamganj" },
      ],
    },
    {
      district: "Mymensingh",
      underDistrict: [
        { city: "Tangail" },
        { city: "Jamalpur" },
        { city: "Kishoreganj" },
        { city: "Sherpur" },
        { city: "Netrokona" },
      ],
    },
    {
      district: "Barishal",
      underDistrict: [
        { city: "Patuakhali" },
        { city: "Bhola" },
        { city: "Pirojpur" },
        { city: "Barguna" },
        { city: "Jhalokati" },
      ],
    },
    {
      district: "Rangpur",
      underDistrict: [
        { city: "Gaibandha" },
        { city: "Nilphamari" },
        { city: "Kurigram" },
        { city: "Lalmonirhat" },
        { city: "Dinajpur" },
        { city: "Thakurgaon" },
        { city: "Panchagar" },
      ],
    },
  ];

  const handleMouseEnter = (index: any) => {
    setCurrentIndex(index);
    console.log(index, currentIndex);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
    setCurrentIndex(null);
  };

  console.log({ currentIndex });

  return (
    <>
      <div className='text-[14px] h-[40px] bg-[#E7E8EC]  px-[6px] flex items-center -z-10'>
        <div className='flex justify-evenly w-full'>
          {allDistrict?.map((district, ind) => (
            <div
              key={ind}
              className='list-none '>
              <li
                onMouseEnter={() => handleMouseEnter(ind)}
                onMouseLeave={() => handleMouseLeave()}
                className='text-gray-700 flex gap-[2px] items-center relative h-[40px] transition-all duration-300 hover:bg-gradient-to-t hover:from-[#F1EFEF] hover:to-[#FEFEFE]  w-fit px-4 cursor-pointer '>
                <span>{district?.district}</span>
                <span>
                  <IoIosArrowDown
                    className={`text-xl mt-1 transition-transform duration-300 ${
                      isDropdownOpen && ind === currentIndex ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </li>
              <div
                onMouseEnter={() => handleMouseEnter(ind)}
                onMouseLeave={() => handleMouseLeave()}
                className={`absolute ${
                  isDropdownOpen && ind === currentIndex ? "block" : "hidden"
                } mt-[px] rounded bg-white w-[16.1%] p-4 shadow-md z-1 flex flex-col gap-4 border`}>
                <li className='text-[20px] font-bold'>Popular Localities</li>
                {district?.underDistrict?.map((city, ind) => (
                  <li
                    key={ind}
                    className='text-[15px] hover:text-red-500 cursor-pointer'>
                    {city?.city}
                  </li>
                ))}
                <li className='flex gap-1 items-center text-red-500 font-semibold'>
                  <span>All of {district?.district}</span>
                  <span>
                    <FaChevronRight className='text-xl' />
                  </span>
                </li>
              </div>
            </div>
          ))}
          <div className='list-none cursor-pointer'>
            <li className='flex gap-[2px] items-center relative h-[40px] transition-all duration-300 hover:text-red-500 w-fit px-4 '>
              <span>All Cities</span>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default DistrictList;
