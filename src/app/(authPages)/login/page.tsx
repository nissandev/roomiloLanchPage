import Image from "next/image";
import React from "react";
import logo from "../../../assets/images/orange.png";

const page = () => {
  return (
    <div className="h-screen bg-[url(/bamboo.jpg)] bg-cover">
      <div className="bg-black bg-opacity-60 h-full">
        <div className="flex gap-5 items-center px-[80px] py-5">
          <div>
            <Image src={logo} alt="logo" width={150} />
          </div>
          <p className="text-[16px] mt-4 text-white font-semibold">
            Hotels and homes across 64 cities, 2+ countries
          </p>
        </div>
        <div className="flex w-[90%] pt-[2%] mx-auto justify-center ">
          <div className="flex-grow mx-20 pt-3  text-white">
            <h1 className="text-[48px] font-extrabold">
              There’s a smarter way to Roomilo around
            </h1>
            <p className="font-[600]">
              Sign up with your phone number and get exclusive access to
              discounts and savings on Roomilo stays and with our many travel
              partners.
            </p>
          </div>
          {/* Login / Sign form */}
          <div className="bg-white w-[480px] whitespace-nowrap shrink-0 relative mr-10">
            <h2 className="p-[35px] tex-[14px] py-1.5 font-semibold text-white bg-gradient-to-r from-[#f26600] to-orange-700">
              Sing up & Get 500Tk Roomilo Money
            </h2>
            <div className="h-[489px]">
              <h1 className="text-[32px] font-bold pl-[35px] pt-[23px]">
                Login / Signup
              </h1>

              <div className="px-[35px]">
                <div className="flex flex-col gap-2">
                  <label
                    className="font-semibold text-[#222]"
                    htmlFor="phoneNumber"
                  >
                    Please enter your phone number to continue
                  </label>
                  <input
                    className="p-[12px] focus:outline-none border"
                    id="phoneNumber"
                    type="number"
                  />
                </div>
                <button
                  className="px-14 py-4 mt-4 rounded hover:bg-orange-600 transition-all duration-300 shadow-md bg-[#f26600] font-semibold text-white"
                  type="button"
                >
                  Verify Number
                </button>
                <p className="mt-3">
                  Prefer to Sign in With passWord instead ?{" "}
                  <span className="font-semibold text-red-500">Click here</span>
                </p>
              </div>
              <div className="absolute bottom-0 w-full h-[84px] bg-white">
                <div className="border relative">
                  <p className="absolute bg-white px-2 py-1 font-semibold -top-4 left-[30px]">
                    Or Sign in as
                  </p>
                </div>
                <div className="w-full pl-[35px] h-[84px] flex items-center">
                  <div className="flex  gap-5">
                    <div className="flex items-center gap-1 font-semibold">
                      <p>Travel Agent</p>
                      <p>{">"}</p>
                    </div>
                    <div>|</div>
                    <div className="font-semibold flex items-center gap-1">
                      <p>Corporate</p>
                      <p>{">"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
