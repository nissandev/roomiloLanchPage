import Image from "next/image";
import React from "react";
import hotel_r1 from "../../../assets/hotelImages/hotel_r1.jpg";
import hotel_r2 from "../../../assets/hotelImages/hotel_r2.jpg";
import hotel_r3 from "../../../assets/hotelImages/hotel_r3.jpg";
import hotel_r4 from "../../../assets/hotelImages/hotel_r4.jpg";
import hotel_r5 from "../../../assets/hotelImages/hotel_r1.jpg";
import { FaRegStar } from "react-icons/fa";


const OurCollectionCard:React.FC = () => {
  const recommendedHotel = [
    {
      hotelImg: hotel_r1,
      location: "Dhaka, Bangladesh",
      hotelName: "Hotel Nissan Paradise",
      hotelTag:'Town House',
      price:7247,
      discountPrice:1767,
      discount:20,
      totalBooking:2000,
      tex_fees:'+ 256 taxes & fees',
      rating:4.6
    },
    {
        hotelImg: hotel_r2,
        location: "Dhaka, Bangladesh",
        hotelName: "Hotel Cox's bazar Sea View",
        hotelTag:'Collection O',
        price:8247,
        discountPrice:8067,
        discount:10,
        totalBooking:100,
        rating:3.6,
        tex_fees:'+ 256 taxes & fees'
      },
      {
        hotelImg: hotel_r3,
        location: "Dhaka, Bangladesh",
        hotelName: "Hotel Nissan Paradise",
        hotelTag:'Town House',
        price:7247,
        discountPrice:1767,
        discount:20,
        totalBooking:2000,
        rating:4.6,
        tex_fees:'+ 256 taxes & fees'
      },
      {
        hotelImg: hotel_r4,
        location: "Dhaka, Bangladesh",
        hotelName: "Hotel Nissan Paradise",
        hotelTag:'Town House',
        price:7247,
        discountPrice:1767,
        discount:20,
        totalBooking:2000,
        rating:4.6,
        tex_fees:'+ 256 taxes & fees'
      },
      {
        hotelImg: hotel_r5,
        location: "Dhaka, Bangladesh",
        hotelName: "Hotel Nissan Paradise",
        hotelTag:'Town House',
        price:7247,
        discountPrice:1767,
        discount:20,
        totalBooking:2000,
        rating:4.6,
        tex_fees:'+ 256 taxes & fees'
      },

  ];

  return (
    <div className="px-[3.8%] py-[3.8%]">
      <div>
        <h1 className="font-bold text-[18px] mt-[4%] mb-[3%]">Our Collections</h1>
      </div>
      <div className="flex w-full px-2 gap-4 overflow-x-auto">
        {recommendedHotel?.map((recommended, ind) => (
          <div className="shrink-0" key={ind}>
            <div className="relative">
              <Image
                src={recommended?.hotelImg}
                alt="hotel"
                width={156}
                height={96}
                className="rounded-md object-cover"
              />
              <div className="absolute top-3 bg-yellow-600 border h-[12px] border-[#f26600] border-b-0 w-[60px] rounded-sm -left-1">
                <p className="uppercase h-[10px] bg-yellow-600 text- text-center text-[6px] border-b whitespace-nowrap  w-fit mx-auto rounded">
                  {recommended?.hotelTag}
                </p>
              </div>
              <div className="absolute -bottom-1.5 bg-white border h-[12px] w-[60px] flex items-center justify-center rounded-sm left-2">
                <p className="  text-[#f26600] text-center text-[6px] whitespace-nowrap  w-fit mx-auto gap-1 flex items-center">
                 <span><FaRegStar/></span> <span>{recommended?.rating}</span> <span>({recommended?.totalBooking})</span>
                </p>
              </div>
            </div>
            <div>
              <div className="leading-[16px] pt-5">
                <h1 className="text-[14px] font-bold">
                  {recommended?.hotelName?.length >24 ? `${recommended?.hotelName?.slice(0,20)}...`:recommended?.hotelName}
                </h1>
                <p className="text-[12px] text-gray-500">Dhaka, Bangladesh</p>
              </div>
              <div>
                <div>
                  <div className="flex gap-4 items-center text-[12px]">
                    <h2 className="text-[16px] font-bold">$1767</h2>
                    <p className="line-through">$7247</p>
                    <p className="text-[#f26600]"> 72% off</p>
                  </div>
                  <p className="text-[12px] text-gray-500 tracking-widest">
                    + 256 taxes & fees
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCollectionCard;
