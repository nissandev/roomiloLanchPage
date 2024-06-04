import React from "react";
import { TfiTarget } from "react-icons/tfi";

const Searchbar = () => {
  return (
    <div>
      <div className='h-[28.6vh] bg-red-500 flex items-center justify-center'>
        <div className='h-[58px] flex items-center justify-evenly bg-white w-full border border-black mx-[15.5em]'>
          <div className="flex justify-between w-[518px] ">
            <p>Location</p>
            <p className='flex items-center gap-1 bg-gray-200 rounded-full px-2 text-[12px]'>
              <span>
                <TfiTarget />
              </span>
              <span>Near me</span>
            </p>
          </div>
          <div className="flex item-center">
            <p>Tue, 4 Jun</p>
            <p>-</p>
            <p>Wed, 5 Jun</p>
          </div>
          <div className='flex items-center'>
            <p>1 Room</p>
            <p>1 Guest</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
