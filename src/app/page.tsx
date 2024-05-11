"use client";

import { FaPaperPlane } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import Image from "next/image";
import jsEncoderLogo from "../assets/images/jsencoderLogo.png";
import Head from "next/head";

export default function Home() {
  const [isChange, setChange] = useState(false);
  const [days, setDays] = useState(60);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    // Check if the countdown end date is stored in local storage
    const storedEndDate = localStorage.getItem("countdownEndDate");
    if (storedEndDate) {
      // Calculate remaining time
      const endDate = new Date(storedEndDate);
      const now = new Date();
      const difference: number = endDate.getTime() - now.getTime();

      if (difference > 0) {
        const remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24));
        const remainingHours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const remainingMinutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const remainingSeconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Update state
        setDays(remainingDays);
        setHours(remainingHours);
        setMinutes(remainingMinutes);
        setSeconds(remainingSeconds);
      }
    } else {
      // Set the countdown end date in local storage
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + days); // Set the countdown end date 30 days from now
      localStorage.setItem("countdownEndDate", endDate.toString());
    }
  }, []);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(countdownInterval);
      } else {
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              setDays((prevDays) => prevDays - 1);
              setHours(23);
              setMinutes(59);
              setSeconds(59);
            } else {
              setHours((prevHours) => prevHours - 1);
              setMinutes(59);
              setSeconds(59);
            }
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [days, hours, minutes, seconds]);

  useEffect(() => {
    setTimeout(() => {
      setChange(!isChange);
    }, 3000);
  }, [isChange]);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="  bg-[url(/bg.jpg)] bg-cover bg-center h-full md:h-screen">
        <div className="bg-black bg-opacity-45">
          <div className=" hidden md:block absolute right-5 top-5">
            <Image
              className="filter grayscale brightness-[180]"
              src={jsEncoderLogo}
              alt="jsEncoderLogo"
            />
          </div>
          <Image
            className="filter md:hidden grayscale brightness-[180] mx-auto"
            src={jsEncoderLogo}
            alt="jsEncoderLogo"
          />
          <div className="h-screen flex flex-col justify-center items-center w-full space-y-8  ">
            <div className="bg-[#f26600] w-[210px] rounded-md py-2 text-4xl mx-auto text-center flex gap-2 justify-center items-center">
              <p>
                <FaPaperPlane />
              </p>
              <p className="font-[600]">Roomilo</p>
            </div>
            <h1 className="text-[40px] font-extrabold text-center">
              Our website is coming soon!
            </h1>
            <div className="relative">
              <p
                className={`font-semibold text-center absolute right-2 text-[22px] duration-700 ${
                  isChange ? "opacity-0" : "opacity-100"
                }`}
              >
                It&apos;s currently Under Construction
              </p>
              <p
                className={`font-semibold text-[22px]  text-center duration-700 ${
                  isChange ? "opacity-100" : "opacity-0"
                }`}
              >
                We are doing our best to launch Asap
              </p>
            </div>
            {/* countdown */}
            <div className="card">
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-center md:w-[200px]">
                  <p className="text-2xl md:text-9xl font-bold">{days}</p>
                  <p className="font-semibold">Days</p>
                </div>
                :
                <div className="flex flex-col items-center md:w-[200px]">
                  <p className="text-2xl md:text-9xl font-bold">{hours}</p>
                  <p className="font-semibold">Hours</p>
                </div>
                :
                <div className="flex flex-col items-center md:w-[200px]">
                  <p className="text-2xl md:text-9xl font-bold">{minutes}</p>
                  <p className="font-semibold">Minutes</p>
                </div>
                :
                <div className="flex flex-col items-center md:w-[200px]">
                  <p className="text-2xl md:text-9xl font-bold">{seconds}</p>
                  <p className="font-semibold">Seconds</p>
                </div>
              </div>
            </div>
            <h1 className="text-center">
              Please Follow our social media to get latest updates & news
            </h1>
            <div className="flex items-center justify-center gap-6 text-2xl">
              <a
                target="_blank"
                href="https://www.facebook.com/groups/941286630824319"
                title="facebook"
              >
                <FaFacebook />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/js-encoder"
                title="linkedin"
              >
                <FaLinkedin />
              </a>
              <a
                target="_blank"
                href="https://jsencoder.com/"
                title="JSEncoder"
              >
                <TbWorldWww />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
