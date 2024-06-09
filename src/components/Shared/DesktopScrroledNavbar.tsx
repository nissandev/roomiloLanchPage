"use client";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { LuPhone, LuUser } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import { TfiTarget } from "react-icons/tfi";

interface RoomGuest {
  roomCount: number;
  totalGuest: number;
}

interface Props {
  handleDecreaseGuest: (index: number) => void;
  handleIncreaseGuest: (index: number) => void;
  handleDeleteRoom: () => void;
  handleAddRoom: () => void;
  handleLocationSearch:(event:any)=>void;
  dateFormatter: string;
  searchedLocation:string;
  RangePicker: any; // You should replace `any` with the actual type of RangePicker
  setFormattedDates: (dates: string[]) => void;
  setGuestDropdownOpen: (isOpen: boolean) => void;
  setSearchLocation:(location:any)=>void;
  isGuestDropdownOpen: boolean;
  state: {
    totalRooms: number;
    totalGuests: number;
    roomAndGuests: RoomGuest[];
  };
}

const DesktopScrollNavbar: React.FC<Props> = ({
  handleDecreaseGuest,
  handleIncreaseGuest,
  handleDeleteRoom,
  handleAddRoom,
  dateFormatter,
  RangePicker,
  searchedLocation,
  setSearchLocation,
  handleLocationSearch,
  setFormattedDates,
  setGuestDropdownOpen,
  isGuestDropdownOpen,
  state,
}) => {
  const [isLanguageSwitchOpen, setLanguageSwitchOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [showNavbar, setShowNavbar] = useState(false);
  const handleLanguageSwitcher = () => {
    setLanguageSwitchOpen(!isLanguageSwitchOpen);
  };



  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const showAtHeight = 200;
    setShowNavbar(scrollPosition > showAtHeight);
  };


  useEffect(() => {
    setLanguageSwitchOpen(false);
  }, [selectedLanguage]);
  return (
    <div className={`fixed top-0 bg-white h-[70px] w-full z-20 text-[14px] ${
      showNavbar ? "visible slide-down" : "hidden"
    }`}>
      <div className="h-[70px] flex items-center">
        <div className="flex items-center justify- mx-[20px] w-full">
          <div>
            <h1 className="text-[32px] font-extrabold text-[#f26600]">Roomilo</h1>
          </div>
          {/*----------------- Search bar start---------------*/}
          <div className="h-auto flex flex-col md:flex-row items-center justify-evenly bg-white w-full md:w-full mx-4 border rounded-md font-semibold md:h-[47px]">
            <div className="flex flex-col md:flex-row items-center justify-between flex-grow border-b md:border-r border-[#969696] md:border-b-0 h-auto 2xl:px-[10px] w-full md:w-auto">
              <p className=" h-[45px] 2xl:min-w-[200px] md:mb-0">
                <input
                  className="focus:ring-blue-500 focus:outline-none border-none md:w-[150%] focus:ring-0 focus:border-none w-[100%] h-full p-2.5 placeholder:text-[#757575]"
                  type="text"
                  placeholder="Search by city, hotel or neighborhood"
                  onChange={handleLocationSearch}
                />
              </p>
              {!searchedLocation ? <p className="2xl:min-w-[80px] flex items-center gap-1 bg-gray-200 rounded-full px-2 2xl:py-1 text-[12px] h-fit whitespace-nowrap">
              <span>
                <TfiTarget />
              </span>
              <span>Near me</span>
            </p>:<p onClick={()=>setSearchLocation('')} className="min-w-[80px] flex items-center justify-end text-xl font-thin cursor-pointer text-gray-500 h-fit whitespace-nowrap">
              <span>X</span>
            </p>}
            </div>
            <div className="flex p-2.5 gap-1 items-center flex-grow  justify-start  mx-a border-b md:border-r border-[#969696] md:border-b-0 h-auto md:h-full w-[150px] 2xl:min-w-[230px] whitespace-nowrap">
              {/* <p>Tue, 4 Jun</p>
            <p>-</p>
            <p>Wed, 5 Jun</p> */}
              <RangePicker
                style={{
                  width: "100%",
                  border: "none",
                  padding: "0px",
                }}
                size="small"
                format={dateFormatter}
                defaultValue={[dayjs(), dayjs().add(1, "day")]}
                onChange={(dates:any, dateStrings:string) => {
                  if (dates && dates[0] && dates[1]) {
                    const formattedDates = [
                      `Start Date: ${dates[0].format("YYYY-MM-DD")}`,
                      `End Date: ${dates[1].format("YYYY-MM-DD")}`,
                    ];
                    setFormattedDates(formattedDates);
                  } else {
                    setFormattedDates([]);
                  }
                }}
              />
            </div>
            <div className=" flex p-2.5 gap-1 items-center min-w-[160px] 2xl:min-w-[200px] flex-grow h-auto md:h-full w-full md:w-auto whitespace-nowrap relative">
              <div
                onClick={() => setGuestDropdownOpen(!isGuestDropdownOpen)}
                className="cursor-pointer flex  gap-4 items-center h-auto md:h-full w-full"
              >
                <p className="w-14">
                  <span className="">{state.totalRooms}</span> Room
                </p>
                <p className="w-10">
                  {" "}
                  <span className="">{state.totalGuests} </span>Guest
                </p>
              </div>
              <ul
                className={`${
                  isGuestDropdownOpen ? "opacity-100" : "opacity-0 hidden"
                } transition-all duration-700 absolute top-16 left-0 bg-white 2xl:w-full px-2 z-1 rounded shadow-md font-normal text-[14px]`}
              >
                <li className="flex items-center justify-around py-4 font-semibold border-b">
                  <p>Rooms</p>
                  <p>Guest</p>
                </li>

                {state.roomAndGuests?.map((total_r_g: any, ind: any) => {
                  return (
                    <li
                      key={ind}
                      className="flex items-center justify-between py-4 border-b px-[8px]"
                    >
                      <p>Room {total_r_g?.roomCount}</p>
                      <div className="flex items-center gap-3 justify-around px-4">
                        <p
                          onClick={() => {
                            if (total_r_g?.totalGuest > 1) {
                              handleDecreaseGuest(ind);
                            }
                          }}
                          className={`h-[30px] w-[30px] border ${
                            !(total_r_g?.totalGuest > 1)
                              ? "border-black/40 text-gray-400 cursor-default"
                              : "hover:bg-gray-100"
                          }  border-black/70 rounded flex items-center justify-center cursor-pointer`}
                        >
                          <AiOutlineMinus className="text-xl" />
                        </p>
                        <p className="w-[20px] h-fit flex justify-center items-center">
                          {total_r_g?.totalGuest}
                        </p>
                        <p
                          onClick={() => {
                            if (!(total_r_g?.totalGuest >= 3)) {
                              handleIncreaseGuest(ind);
                            }
                          }}
                          className={`h-[33px] w-[33px] border ${
                            total_r_g?.totalGuest >= 3
                              ? "border-black/40 text-gray-400 cursor-default"
                              : " hover:bg-gray-100"
                          } border-black/70 rounded flex items-center justify-center cursor-pointer`}
                        >
                          <AiOutlinePlus className="text-xl" />
                        </p>
                      </div>
                    </li>
                  );
                })}

                <li className="flex items-center justify-between px-[8px] py-[18px]">
                  <p
                    onClick={() => {
                      if (state.totalRooms > 1) {
                        handleDeleteRoom();
                      }
                    }}
                    className={`${
                      !(state.totalRooms > 1)
                        ? "text-gray-400 cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                  >
                    Delete Room
                  </p>
                  <p
                    onClick={() => {
                      if (!(state.totalRooms >= 6)) {
                        handleAddRoom();
                      }
                    }}
                    className={`${
                      state.totalRooms >= 6
                        ? "text-gray-400 cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                  >
                    Add Room
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex items-center bg-[#f26600] hover:bg-orange-600 transition-all duration-300 cursor-pointer py-2 md:py-0 md:h-[48px] justify-center w-full md:w-[160px] rounded-b-md md:rounded-bl-none md:rounded-r-md md:flex-grow-0 md:flex-shrink-0 whitespace-nowrap">
              <span className="font-bold text-[16px] text-white">Search</span>
            </div>
          </div>
          {/*----------------- Search bar end---------------*/}

          {/* ---------------- Language Switcher start----------- */}
          <div className="relative w-[100px] flex items-center justify-center">
            <div
              onClick={handleLanguageSwitcher}
              className="relative cursor-pointer"
            >
              <TbWorld className="text-[30px] text-[#f265009f] font-extralight" />
              <p className="absolute  -top-1 -right-[14px] font-bold text-[12px]">
                {selectedLanguage === "en" ? "EN" : "বাং"}
              </p>
            </div>
            <ul
              className={`absolute w-[200%] right-10 top-[55px] h-fit py-2  ${
                !isLanguageSwitchOpen ? "hidden opacity-0" : "opacity-100"
              } list-none bg-white text-black shadow-md z-[1] px-2 space-y-3 rounded transition-all duration-500`}
            >
              <li
                onClick={() => setSelectedLanguage("en")}
                className={`px-1 rounded flex justify-between items-center ${
                  selectedLanguage === "en" &&
                  "text-[#f26600] font-semibold bg-gray-100"
                } hover:bg-gray-100 transition-all duration-300 cursor-pointer`}
              >
                <span>English</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <rect
                      x="1"
                      y="4"
                      width="30"
                      height="24"
                      rx="4"
                      ry="4"
                      fill="#071b65"
                    ></rect>
                    <path
                      d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z"
                      fill="#b92932"
                    ></path>
                    <path
                      d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z"
                      fill="#b92932"
                    ></path>
                    <path
                      d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z"
                      fill="#fff"
                    ></path>
                    <rect x="13" y="4" width="6" height="24" fill="#fff"></rect>
                    <rect x="1" y="13" width="30" height="6" fill="#fff"></rect>
                    <rect
                      x="14"
                      y="4"
                      width="4"
                      height="24"
                      fill="#b92932"
                    ></rect>
                    <rect
                      x="14"
                      y="1"
                      width="4"
                      height="30"
                      transform="translate(32) rotate(90)"
                      fill="#b92932"
                    ></rect>
                    <path
                      d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z"
                      fill="#b92932"
                    ></path>
                    <path
                      d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z"
                      fill="#b92932"
                    ></path>
                    <path
                      d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                      opacity=".15"
                    ></path>
                    <path
                      d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                      fill="#fff"
                      opacity=".2"
                    ></path>
                  </svg>
                </span>
              </li>
              <li
                onClick={() => setSelectedLanguage("bn")}
                className={`px-1 rounded flex justify-between items-center ${
                  selectedLanguage === "bn" &&
                  "text-[#f26600] font-semibold bg-gray-100"
                } hover:bg-gray-100 transition-all duration-300 cursor-pointer`}
              >
                <span>বাংলা</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <rect
                      x="1"
                      y="4"
                      width="30"
                      height="24"
                      rx="4"
                      ry="4"
                      fill="#2d694f"
                    ></rect>
                    <path
                      d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                      opacity=".15"
                    ></path>
                    <circle cx="16" cy="16" r="7" fill="#e13e47"></circle>
                    <path
                      d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                      fill="#fff"
                      opacity=".2"
                    ></path>
                  </svg>
                </span>
              </li>
            </ul>
          </div>
          {/* ---------------- Language Switcher end----------- */}

          <div className="border-r border-r-white/20 h-[70px] flex items-center justify-center px-4 cursor-pointer whitespace-nowrap">
            <div className="flex items-center gap-3   ">
              <p className="text-[24px] text-[#f26600] ">
                <LuPhone />
              </p>
              <div className="leading-none">
                <p className="font-bold text-[14px]">01629880885</p>
                <span className="text-[12px]">Call us to Book now</span>
              </div>
            </div>
          </div>

          {/* ----------------User Login start----------------- */}
          <div className="border-l border-black/10 h-[70px] flex items-center justify-center text-[14px]">
            <div>
              <button
                type="button"
                className="pl-4 flex font-extrabold gap-1 items-center justify-center"
              >
                <p>
                  <LuUser className="h-[24px] w-[24px] bg-[#f26600] text-white p-[1px] rounded-full" />
                </p>
                <p>Login</p>
                <p>/</p>
                <p>Signup</p>
              </button>
            </div>
          </div>

          {/* ----------------User Login end----------------- */}
        </div>
      </div>
    </div>
  );
};

export default DesktopScrollNavbar;
