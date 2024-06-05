import React from "react";
import { TfiTarget } from "react-icons/tfi";
import bannerImg from "../../assets/images/bannerwallp.jpg";

const Searchbar = () => {
  return (
    <div>
      <div className='lg:h-[28.6vh]  md:h-[40vh] h-[50vh] bg-[url(./../assets/images/bannerwallp.jpg)] bg-no-repeat bg-cover bg-bottom flex items-center justify-center'>
        <div className='h-auto flex flex-col md:flex-row items-center justify-evenly bg-white w-full mx-4 md:mx-[15.5em] rounded-md'>
          <div className='flex flex-col md:flex-row items-center justify-between flex-grow border-b md:border-r md:border-b-0 h-auto md:h-[58px] p-2.5 md:px-[10px] w-full md:w-auto'>
            <p className='w-full md:w-[70%] h-[96%] mb-2 md:mb-0'>
              <input
                className='focus:ring-blue-500 focus:outline-none border-none focus:ring-0 focus:border-none md:min-w-[25%] w-full h-full p-2.5'
                type='text'
                placeholder='Search by city, hotel or neighborhood'
              />
            </p>
            <p className='flex items-center gap-1 bg-gray-200 rounded-full px-2 py-1 text-[12px] h-fit whitespace-nowrap'>
              <span>
                <TfiTarget />
              </span>
              <span>Near me</span>
            </p>
          </div>
          <div className='flex p-2.5 gap-1 items-center flex-grow border-b md:border-r md:border-b-0 h-auto md:h-full w-full md:w-auto whitespace-nowrap'>
            <p>Tue, 4 Jun</p>
            <p>-</p>
            <p>Wed, 5 Jun</p>
          </div>
          <div className='flex p-2.5 gap-1 items-center flex-grow h-auto md:h-full w-full md:w-auto whitespace-nowrap'>
            <p>1 Room</p>
            <p>1 Guest</p>
          </div>
          <div className='flex items-center bg-[#f26600] cursor-pointer py-2 md:py-0 md:h-[58px] justify-center w-full md:w-[182px] rounded-b-md md:rounded-r-md md:flex-grow-0 md:flex-shrink-0 whitespace-nowrap'>
            <span className='font-bold text-[14px] text-white'>Search</span>
          </div>
        </div>
      </div>

      {/* <div className='h-[28.6vh] bg-[url(./../assets/images/bannerwallp.jpg)] bg-no-repeat bg-cover bg-bottom flex items-center justify-center'>
        <div className='h-[58px] flex items-center justify-evenly bg-white w-full mx-[15.5em] rounded-md'>
          <div className='flex items-center justify-between flex-grow border-r h-[58px] px-[10px]'>
            <p className='w-[70%] h-[96%]'>
              <input
                className='focus:ring-blue-500 focus:outline-none border-none focus:ring-0 focus:border-none w-full h-full p-2.5'
                type='text'
                placeholder='Search by city, hotel or neighborhood'
              />
            </p>
            <p className='flex items-center gap-1 bg-gray-200 rounded-full px-2 py-1 text-[12px] h-fit'>
              <span>
                <TfiTarget />
              </span>
              <span>Near me</span>
            </p>
          </div>
          <div className='flex p-2.5 gap-1 items-center flex-grow border-r h-full'>
            <p>Tue, 4 Jun</p>
            <p>-</p>
            <p>Wed, 5 Jun</p>
          </div>
          <div className='flex p-2.5 gap-1 items-center flex-grow'>
            <p>1 Room</p>
            <p>1 Guest</p>
          </div>
          <div className='flex items-center bg-[#f26600] cursor-pointer h-full justify-center w-[182px] rounded-r-md'>
            <span className='font-bold text-[14px] text-white'>Search</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Searchbar;
