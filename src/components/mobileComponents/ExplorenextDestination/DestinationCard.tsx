import Image from "next/image";
import React from "react";
import dhakaImg from "../../../assets/destinationImages/Dhaka_r.png";
import syletImg from "../../../assets/destinationImages/Shylet_r.png";
import rangPurImg from "../../../assets//destinationImages/Rangpur_r.png";
import rajshahiImg from "../../../assets/destinationImages/Rajshahi_r.png";
import khulnaImg from "../../../assets/destinationImages/Khulna_r.png";
import barishalImg from "../../../assets/destinationImages/Barishal_r.png";
import mymenshinghImg from "../../../assets/destinationImages/Mymenshingh_r.png";
import { IoNavigate } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";

const DestinationCard = () => {
  const destinations = [
    { img: dhakaImg, city: "Dhaka" },
    { img: syletImg, city: "Shylet" },
    { img: rangPurImg, city: "Rangpur" },
    { img: rajshahiImg, city: "Rajshahi" },
    { img: khulnaImg, city: "Khulna" },
    { img: barishalImg, city: "Barishal" },
    { img: mymenshinghImg, city: "Mymenshsingh" },
  ];

  return (
    <div className="px-[3.8%] py-[3.8%]">
      <div>
        <h1 className="font-bold text-[18px] mb-[3%]">
          Explore your next destination
        </h1>
      </div>
      <div>
        <div className="flex items-center justify-evenly gap-3 overflow-scroll whitespace-nowrap">
          <div className="flex gap-1 flex-col items-center shrink-0">
            <p className="w-[60px] h-[42px] rounded bg-[#f26600] flex items-center justify-center ">
            <IoNavigate className="text-white text-2xl" />
            </p>
            <p className="text-[12px]">Near Me</p>
          </div>
          {destinations?.map((destination, ind) => (
            <div
              key={ind}
              className="flex gap-1 flex-col items-center shrink-0"
            >
              <p>
                <Image
                  src={destination?.img}
                  alt={`${destination?.city}`}
                  width={60}
                  height={42}
                  className="object-center w-[60px] h-[42px] rounded "
                />
              </p>
              <p className="text-[12px]">{destination?.city}</p>
            </div>
          ))}
            <div className="flex gap-1 flex-col items-center shrink-0">
            <p className="w-[60px] h-[42px] rounded bg-[#F26600] flex items-center justify-center">
            <MdNavigateNext className="text-white text-2xl" />
            </p>
            <p className="text-[12px]">All Cities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
