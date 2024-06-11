import Image from "next/image";
import React from "react";
import hotel_r1 from "../../../assets/hotelImages/hotel_r1.jpg";
import hotel_r2 from "../../../assets/hotelImages/hotel_r2.jpg";
import hotel_r3 from "../../../assets/hotelImages/hotel_r3.jpg";
import hotel_r4 from "../../../assets/hotelImages/hotel_r4.jpg";
import hotel_r5 from "../../../assets/hotelImages/hotel_r1.jpg";
import { FaRegStar } from "react-icons/fa";

const OurCollectionCard: React.FC = () => {
  const ourCollection = [
    {
      hotelImg: hotel_r1,
      serviceTitle: "Company Serviced",
      hotelTag: "Premium",
      serviceSubTitle: "Roomilo Service Premium",
      typeOfPlace: "hotels",
      overlayText: "company Service",
      rating: 4.6,
    },
    {
      hotelImg: hotel_r2,
      serviceTitle: "Roomilo Home",
      hotelTag: "Relaxation",
      serviceSubTitle: "Modern & Stylish",
      typeOfPlace: "home stays",
      overlayText: "Home",
      rating: 4.6,
    },
    {
      hotelImg: hotel_r3,
      serviceTitle: "Collection O",
      hotelTag: "Premium",
      serviceSubTitle: "Premium Business",
      overlayText: "Collection O",
      typeOfPlace: "stays",
      rating: 4.6,
    },
    {
      hotelImg: hotel_r4,
      serviceTitle: "Spot On",
      hotelTag: "Town House",
      serviceSubTitle: "Comfortable Budget",
      overlayText: "Spot On",
      typeOfPlace: "stays",
      rating: 4.6,
    },
    {
      hotelImg: hotel_r5,
      serviceTitle: "Capital O",
      hotelTag: "premium",
      serviceSubTitle: "Beautiful Design",
      overlayText: "C O",
      typeOfPlace: "stays",
      rating: 4.6,
    },
    {
      hotelImg: hotel_r3,
      serviceTitle: "Roomilo Townhouse",
      hotelTag: "premium",
      serviceSubTitle: "Chic stays at the most",
      overlayText: "Townhouse",
      typeOfPlace: "affordable stays",
      rating: 4.6,
    },
  ];

  return (
    <div className="px-[3.8%] py-[3.8%]">
      <div>
        <h1 className="font-bold text-[18px] mt-[4%] mb-[3%]">
          Our Collections
        </h1>
      </div>
      <div className="flex w-full px-2 gap-4 overflow-x-auto">
        {ourCollection?.map((collection, ind) => (
          <div className="shrink-0" key={ind}>
            <div className="relative">
              <div className="relative">
                <Image
                  src={collection?.hotelImg}
                  alt="hotel"
                  width={156}
                  height={96}
                  className="rounded-md object-cover"
                />
                <h3 className="h-full uppercase absolute bg-black/30 text-white top-0 w-full flex items-center justify-center text-[8px] font-bold">
                  {collection?.overlayText}
                </h3>
              </div>
              <div className="absolute top-3 bg-yellow-600  h-[12px] w-[60px] rounded-[1px] -left-[4px] flex items-center justify-center">
                <div className="bg-yellow-700 -z-10 r  rounded-r-none h-full w-[7%] top-[5px] absolute left-0"></div>
                <div className="bg-white r  rounded-r-none h-full w-[7%] top-[8px] -z-10 absolute -left-[3px] -rotate-45"></div>
                <p className="uppercase bg-yellow-600 text- text-center text-[6px] mt-[1.5px] whitespace-nowrap  w-fit mx-auto font-semibold text-white">
                  {collection?.hotelTag}
                </p>
              </div>
              <div className="absolute -bottom-1.5 bg-white border h-[12px] w-[60px] flex items-center justify-center rounded-sm left-2">
                <p className="  text-[#f26600] text-center text-[6px] whitespace-nowrap  w-fit mx-auto gap-1 flex items-center">
                  <span>
                    <FaRegStar className="text-md -mt-[1.3px]" />
                  </span>{" "}
                  <span>{collection?.rating} / 5</span>
                </p>
              </div>
            </div>
            <div>
              <div className="leading-[16px] pt-5">
                {collection?.serviceTitle && (
                  <h1 className="text-[14px] font-bold">
                    {collection.serviceTitle.length > 24
                      ? `${collection.serviceTitle.slice(0, 20)}...`
                      : collection.serviceTitle}
                  </h1>
                )}
                <p className="text-[12px] text-gray-500">
                  {collection?.serviceSubTitle}
                </p>
                <p className="text-[12px] text-gray-500">
                  {collection?.typeOfPlace}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCollectionCard;
