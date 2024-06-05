import React from "react";
import { TfiTarget } from "react-icons/tfi";

const Searchbar = () => {
  const recentSearch = [
    {
      location: "Khulna",
      selectedDate: "05 Jun - 06 Jun",
      totalGuest: "3",
    },
    {
      location: "Roomilo 1059 Near Ruby Hospital·05 Jun - 06 Jun | 1 Guest",
      selectedDate: "05 Jun - 06 Jun",
      totalGuest: "3",
    },
    {
      location: "Cox,Bazar",
      selectedDate: "05 Jun - 06 Jun",
      totalGuest: "1",
    },
    {
      location: "Noakhali",
      selectedDate: "05 Jun - 06 Jun",
      totalGuest: "2",
    },
    {
      location: "Dhanmondi",
      selectedDate: "05 Jun - 06 Jun",
      totalGuest: "3",
    },
  ];

  return (
    <div>
      <div className="lg:h-[28.6vh]  md:h-[40vh] h-[50vh] bg-[url(./../assets/images/bannerwallp.jpg)] bg-no-repeat bg-cover bg-bottom flex md:flex-col gap-6 items-center justify-center">
        <h1 className=" text-[32px] text-white font-extrabold">
          Over 174,000+ Hotels and Homes across 35+ Countries
        </h1>
        {/* ----------Searchbar start------------------- */}
        <div className="h-auto flex flex-col md:flex-row items-center justify-evenly bg-white w-full md:w-[74.5%] mx-4 md:mx-[15.5em] rounded-md font-semibold">
          <div className="flex flex-col md:flex-row items-center justify-between flex-grow border-b md:border-r md:border-b-0 h-auto md:h-[58px] p-2.5 md:px-[10px] w-full md:w-auto">
            <p className="w-full md:w-[70%] h-[96%] mb-2 md:mb-0">
              <input
                className="focus:ring-blue-500 focus:outline-none border-none focus:ring-0 focus:border-none md:min-w-[300px] w-full h-full p-2.5"
                type="text"
                placeholder="Search by city, hotel or neighborhood"
              />
            </p>
            <p className="flex items-center gap-1 bg-gray-200 rounded-full px-2 py-1 text-[12px] h-fit whitespace-nowrap">
              <span>
                <TfiTarget />
              </span>
              <span>Near me</span>
            </p>
          </div>
          <div className="flex p-2.5 gap-1 items-center flex-grow border-b md:border-r md:border-b-0 h-auto md:h-full w-full md:w-auto whitespace-nowrap">
            <p>Tue, 4 Jun</p>
            <p>-</p>
            <p>Wed, 5 Jun</p>
          </div>
          <div className="flex p-2.5 gap-1 items-center flex-grow h-auto md:h-full w-full md:w-auto whitespace-nowrap">
            <p>1 Room</p>
            <p>1 Guest</p>
          </div>
          <div className="flex items-center bg-[#f26600] cursor-pointer py-2 md:py-0 md:h-[58px] justify-center w-full md:w-[182px] rounded-b-md md:rounded-bl-none md:rounded-r-md md:flex-grow-0 md:flex-shrink-0 whitespace-nowrap">
            <span className="font-bold text-[14px] text-white">Search</span>
          </div>
        </div>
        {/* ----------Searchbar End-------- -------------*/}

        {/* --------- Search history Start---------------*/}
        <div className="w-full md:w-[74.5%]">
          <div className="flex items-center gap-[24px] text-white whitespace-nowrap">
            <p className="text-[16px] font-bold">Continue your search</p>
            <div className="flex items-center gap-[10px]">
              {recentSearch?.slice(0,4)?.map((search, ind) => (
                <p key={ind} className="flex gap-1 items-center border-2 border-white font-bold text-[12px] rounded h-[40px] px-[8px] ">
                  <span>{search?.location}</span>
                  <span>.</span>
                  <span>{search?.selectedDate}</span>
                  <span>|</span>
                  <span>{search?.totalGuest} Guest</span>
                </p>
              ))}
            </div>
          </div>
        </div>
        {/* --------- Search history End---------------*/}
      </div>
    </div>
  );
};

export default Searchbar;
