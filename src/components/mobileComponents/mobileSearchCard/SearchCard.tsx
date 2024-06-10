import React from "react";

const SearchCard = () => {
  return (
    <div className="px-[3.8%] py-[3.8%]">
      <div>
        <h1 className="font-bold text-[18px] mb-[3%]">Find hotels at best prices</h1>
      </div>
      {/* ----------search card start-------- */}
      <div className="w-full">
        <div className="border px-[4%] py-[1%] rounded-t">
            <p className="text-[12px] text-gray-500">Destination</p>
            <h2 className="text-[14px] font-semibold">Dhaka</h2>
        </div>
        <div className="flex w-full border border-t-0 rounded-b px-[4%] pr-[0%] py-[1%]">
          <div className="flex-grow border-r-2">
            <p className="text-[12px] text-gray-500">Date</p>
            <p className="text-[14px] font-semibold">03 Aug - 04 Sep</p>
          </div>
          <div className="flex-grow pl-[4%]">
          <p className="text-[12px] text-gray-500">Rooms & Guests</p>
          <p className="text-[14px] font-semibold">1 room - 1 guest</p>
          </div>
        </div>
      </div>
       {/* ----------search card end-------- */}
        {/* ----------search button start-------- */}
        <div className="px-[3.8%] py-[2%] mt-[3%] bg-[#f26600] text-white font-bold border rounded flex items-center justify-center">
            <button type="button">
                <span className="w-full h-full">Search</span>
            </button>
        </div>
          {/* ----------search button end-------- */}
    </div>
  );
};

export default SearchCard;
