'use client'
import React from "react";
import Head from "next/head";
import { useWindowWidth } from "../hooks/useWindowWidth";
import MobileHome from "../pages/mobilehome/MobileHome";
import AroundAlwaysSection from "../../components/Shared/AroundAlwaysSection";
import NotifyMe from "../../components/Shared/NotifyMe";
import ThinDiscountBanner from "../../components/Shared/ThinDiscountBanner";
import MaxDiscountBanner from "../../components/Shared/MaxDiscountBanner";
import Searchbar from "../../components/Searchbar/Searchbar";

export default function Root() {
  const currentWidth = useWindowWidth();
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
          <MobileHome />
        </>
      )}
    </>
  );
}
