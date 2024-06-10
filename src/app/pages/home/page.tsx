"use client";
import dynamic from "next/dynamic";
import React from "react";
import Searchbar from "../../../components/Searchbar/Searchbar";
import MaxDiscountBanner from "../../../components/Shared/MaxDiscountBanner";
import ThinDiscountBanner from "../../../components/Shared/ThinDiscountBanner";
import NotifyMe from "../../../components/Shared/NotifyMe";
import AroundAlwaysSection from "../../../components/Shared/AroundAlwaysSection";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import MobileHome from "../mobilehome/MobileHome";

const Home = () => {
  const releaseDate = new Date(process.env.NEXT_PUBLIC_OPENING_DATE || "");
  const currentWidth = useWindowWidth();
  return (
    <>
      {currentWidth !== null && currentWidth > 1200 ? (
        /*Desktop home page*/ 
        <div>
          <Searchbar />
          <MaxDiscountBanner />
          <ThinDiscountBanner />
          <NotifyMe />
          <AroundAlwaysSection />
          {/* <Countdown releaseDate={releaseDate}/> */}
        </div>
      ) : (
        <>
          <MobileHome/>
        </>
      )}
    </>
  );
};

export default Home;
