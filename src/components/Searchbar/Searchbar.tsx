import React from "react";
import { TfiTarget } from "react-icons/tfi";
import bannerImg from '../../assets/images/bannerwallp.jpg'

const Searchbar = () => {
  return (
    <div>
      <div className="h-[28.6vh] bg-[url(./../assets/images/bannerwallp.jpg)] bg-no-repeat  bg-cover bg-bottom flex items-center justify-center">
        <div className="h-[58px] flex items-center justify-evenly bg-white w-full mx-[15.5em] rounded-md">
          <div className="flex items-center justify-between w-[547px] border-r h-[58px] px-[10px]">
            <p className="w-[70%] h-[96%]">
              <input
                className="focus:ring-blue-500 focus:outline-none  border-none focus:ring-0 focus:border-none w-full h-full p-2.5"
                type="text"
                placeholder="Search by city,hotel or neighborhood"
              />
            </p>
            <p className="flex items-center gap-1 bg-gray-200 rounded-full px-2 py-1 text-[12px] h-fit">
              <span>
                <TfiTarget />
              </span>
              <span>Near me</span>
            </p>
          </div>
          <div className="flex p-2.5 gap-1 item-center w-[385px] border-r h-full items-center">
            <p>Tue, 4 Jun</p>
            <p>-</p>
            <p>Wed, 5 Jun</p>
          </div>
          <div className="flex p-2.5 gap-1 items-center w-[308px]">
            <p>1 Room</p>
            <p>1 Guest</p>
          </div>
          <div className="flex items-center bg-[#f26600] cursor-pointer h-full justify-center w-[182px] rounded-r-md">
            <span className="font-bold tex-[14px] text-white">Search</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
