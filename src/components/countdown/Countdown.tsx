// components/Countdown.tsx
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import jsEncoderLogo from "../../assets/images/jsencoderLogo.png";
import Head from "next/head";

interface CountdownProps {
  releaseDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ releaseDate }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  }>({});

  const [isChange, setChange] = useState(false);

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const release = new Date(releaseDate).getTime();
    const difference = release - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Initial calculation for immediate render
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [releaseDate]);

  useEffect(() => {
    setTimeout(() => {
      setChange(!isChange);
    }, 3000);
  }, [isChange]);

  return (
    <main className='  bg-[url(/bg.jpg)] bg-cover bg-center h-full md:h-screen'>
      <div className='bg-black bg-opacity-45'>
        <div className=' hidden md:block absolute right-5 top-5'>
          <Image
            className='filter grayscale brightness-[180]'
            src={jsEncoderLogo}
            alt='jsEncoderLogo'
          />
        </div>
        <Image
          className='filter md:hidden grayscale brightness-[180] mx-auto'
          src={jsEncoderLogo}
          alt='jsEncoderLogo'
        />
        <div className='h-screen flex flex-col justify-center items-center w-full space-y-8  text-white dark:text-gray-200'>
          <div className='bg-[#f26600] w-[210px] rounded-md py-2 text-4xl mx-auto text-center flex gap-2 justify-center items-center'>
            <p>
              <FaPaperPlane />
            </p>
            <p className='font-[600]'>Roomilo</p>
          </div>
          <h1 className='text-[40px] font-extrabold text-center'>
            Our website is coming soon!
          </h1>
          <div className='relative'>
            <p
              className={`font-semibold text-center absolute right-2 text-[22px] duration-700 ${
                isChange ? "opacity-0" : "opacity-100"
              }`}>
              It&apos;s currently Under Construction
            </p>
            <p
              className={`font-semibold text-[22px]  text-center duration-700 ${
                isChange ? "opacity-100" : "opacity-0"
              }`}>
              We are doing our best to launch Asap
            </p>
          </div>
          {/* countdown */}
          <div className='card'>
            {Object.keys(timeLeft)?.length > 0 ? (
              <div className='flex items-center gap-3'>
                <div className='flex flex-col items-center md:w-[200px]'>
                  <p className='text-2xl md:text-9xl font-bold'>
                    {timeLeft.days}
                  </p>
                  <p className='font-semibold'>Days</p>
                </div>
                :
                <div className='flex flex-col items-center md:w-[200px]'>
                  <p className='text-2xl md:text-9xl font-bold'>
                    {timeLeft.hours}
                  </p>
                  <p className='font-semibold'>Hours</p>
                </div>
                :
                <div className='flex flex-col items-center md:w-[200px]'>
                  <p className='text-2xl md:text-9xl font-bold'>
                    {timeLeft.minutes}
                  </p>
                  <p className='font-semibold'>Minutes</p>
                </div>
                :
                <div className='flex flex-col items-center md:w-[200px]'>
                  <p className='text-2xl md:text-9xl font-bold'>
                    {timeLeft.seconds}
                  </p>
                  <p className='font-semibold'>Seconds</p>
                </div>
              </div>
            ) : (
              <p>Release date has passed!</p>
            )}
          </div>
          <h1 className='text-center'>
            Please Follow our social media to get latest updates & news
          </h1>
          <div className='flex items-center justify-center gap-6 text-2xl'>
            <a
              target='_blank'
              href='https://www.facebook.com/groups/941286630824319'
              title='facebook'>
              <FaFacebook />
            </a>
            <a
              target='_blank'
              href='https://www.linkedin.com/company/js-encoder'
              title='linkedin'>
              <FaLinkedin />
            </a>
            <a
              target='_blank'
              href='https://jsencoder.com/'
              title='JSEncoder'>
              <TbWorldWww/>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Countdown;
