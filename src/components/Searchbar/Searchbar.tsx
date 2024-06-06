"use client";
import React, { useReducer, useState } from "react";
import { TfiTarget } from "react-icons/tfi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const initialState = {
  totalRooms: 1,
  totalGuests: 1,
  roomAndGuests: [
    {
      roomCount: 1,
      totalGuest: 1,
    },
  ],
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_ROOM":
      const newRoomCount = state.totalRooms + 1;
      const newTotalGuests = state.totalGuests + 1;
      return {
        ...state,
        totalRooms: newRoomCount,
        totalGuests: newTotalGuests,
        roomAndGuests: [
          ...state.roomAndGuests,
          { roomCount: newRoomCount, totalGuest: 1 },
        ],
      };
    case "DELETE_ROOM":
      if (state.totalRooms === 1) {
        return state; // Prevent deleting the last room
      }
      return {
        ...state,
        totalRooms: state.totalRooms - 1,
        totalGuests: state.totalGuests - state.roomAndGuests[state.roomAndGuests.length - 1].totalGuest,
        roomAndGuests: state.roomAndGuests.slice(0, -1),
      };
    case "INCREASE_GUEST":
      return {
        ...state,
        totalGuests: state.totalGuests + 1,
        roomAndGuests: state.roomAndGuests.map((room: any, index: any) => {
          if (index === action.payload) {
            return { ...room, totalGuest: room.totalGuest + 1 };
          }
          return room;
        }),
      };
    case "DECREASE_GUEST":
      return {
        ...state,
        totalGuests: state.totalGuests - 1,
        roomAndGuests: state.roomAndGuests.map((room: any, index: any) => {
          if (index === action.payload && room.totalGuest > 1) {
            return { ...room, totalGuest: room.totalGuest - 1 };
          }
          return room;
        }),
      };
    default:
      return state;
  }
};

const Searchbar = () => {
  const [isGuestDropdownOpen, setGuestDropdownOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const recentSearch = [
    {
      location: "Khulna",
      selectedDate: "05 Jun - 06 Jun",
      totalGuest: "3",
    },
    {
      location: "Roomilo 1059 Near Ruby Hospital",
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

  const handleDeleteRoom = () => {
    dispatch({ type: "DELETE_ROOM" });
  };

  const handleAddRoom = () => {
    dispatch({ type: "ADD_ROOM" });
  };

  const handleIncreaseGuest = (index: any) => {
    dispatch({ type: "INCREASE_GUEST", payload: index });
  };

  const handleDecreaseGuest = (index: any) => {
    dispatch({ type: "DECREASE_GUEST", payload: index });
  };

  return (
    <div>
      <div className="py-10 bg-[url(./../assets/images/bannerwallp.jpg)] bg-no-repeat bg-cover bg-bottom flex md:flex-col gap-6 items-center justify-center">
        <h1 className=" text-[32px] text-white font-extrabold">
          Over 174,000+ Hotels and Homes across 35+ Countries
        </h1>
        {/* ----------Searchbar start------------------- */}
        <div className="h-auto flex flex-col md:flex-row items-center justify-evenly bg-white w-full md:w-[74.5%] mx-4 md:mx-[15.5em] rounded-md font-semibold">
          <div className="flex flex-col md:flex-row items-center justify-between flex-grow border-b md:border-r border-[#969696] md:border-b-0 h-auto md:h-[58px] p-2.5 md:px-[10px] w-full md:w-auto">
            <p className="w-full md:w-[70%] h-[96%] mb-2 md:mb-0">
              <input
                className="focus:ring-blue-500 focus:outline-none border-none focus:ring-0 focus:border-none md:min-w-[300px] w-full h-full p-2.5 placeholder:text-[#757575]"
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
          <div className="flex p-2.5 gap-1 items-center flex-grow border-b md:border-r border-[#969696] md:border-b-0 h-auto md:h-full w-full md:w-auto whitespace-nowrap">
            <p>Tue, 4 Jun</p>
            <p>-</p>
            <p>Wed, 5 Jun</p>
          </div>
          <div className=" flex p-2.5 gap-1 items-center flex-grow h-auto md:h-full w-full md:w-auto whitespace-nowrap relative">
            <div
              onClick={() => setGuestDropdownOpen(!isGuestDropdownOpen)}
              className="cursor-pointer flex  gap-4 items-center flex-grow h-auto md:h-full w-full"
            >
              <p className="w-14"><span className="">{state.totalRooms}</span> Room</p>
              <p className="w-10"> <span className="">{state.totalGuests} </span>Guest</p>
            </div>
            <ul
              className={`${
                isGuestDropdownOpen ? "opacity-100" : "opacity-0 hidden"
              } transition-all duration-700 absolute top-16 left-0 bg-white w-full px-2 z-1 rounded shadow-md font-normal text-[14px]`}
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
                        className={`h-[33px] w-[33px] border ${
                          !(total_r_g?.totalGuest > 1)
                            ? "border-black/40 text-gray-400 cursor-default"
                            : "hover:bg-gray-100"
                        }  border-black/70 rounded flex items-center justify-center cursor-pointer`}
                      >
                        <AiOutlineMinus className="text-xl" />
                      </p>
                      <p className="w-[25px] h-fit flex justify-center items-center">
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
          <div className="flex items-center bg-[#f26600] hover:bg-orange-600 transition-all duration-300 cursor-pointer py-2 md:py-0 md:h-[58px] justify-center w-full md:w-[182px] rounded-b-md md:rounded-bl-none md:rounded-r-md md:flex-grow-0 md:flex-shrink-0 whitespace-nowrap">
            <span className="font-bold text-[18px] text-white">Search</span>
          </div>
        </div>
        {/* ----------Searchbar End-------- -------------*/}

        {/* --------- Search history Start---------------*/}
        <div className="md:w-[74.5%] mx-4 md:mx-[15.5em]">
          <div className="flex items-center gap-[24px] text-white">
            <p className="text-[16px] font-bold whitespace-nowrap">Continue your search</p>
            <div className="flex items-center gap-[10px]">
              {recentSearch?.slice(0, 4)?.map((search, ind) => (
                <p
                  key={ind}
                  className=" border-2 border-white font-bold text-[12px] rounded py-[8px] px-[8px] cursor-pointer hover:bg-black/30"
                >
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
