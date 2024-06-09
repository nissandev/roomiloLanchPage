"use client";
import dynamic from "next/dynamic";
import React from "react";
import Searchbar from "../../../components/Searchbar/Searchbar";
import MaxDiscountBanner from "../../../components/Shared/MaxDiscountBanner";
import ThinDiscountBanner from "../../../components/Shared/ThinDiscountBanner";
import NotifyMe from "../../../components/Shared/NotifyMe";
import AroundAlwaysSection from "../../../components/Shared/AroundAlwaysSection";

// const Searchbar = dynamic(() => import("@/components/Searchbar/Searchbar"), {
//   suspense: true,
// });
// const Countdown = dynamic(() => import("@/components/countdown/Countdown"), {
//   suspense: true,
// });
// const MaxDiscountBanner = dynamic(
//   () => import("@/components/Shared/MaxDiscountBanner"),
//   {
//     suspense: true,
//   }
// );
// const ThinDiscountBanner = dynamic(
//   () => import("@/components/Shared/ThinDiscountBanner"),
//   {
//     suspense: true,
//   }
// );
// const NotifyMe = dynamic(() => import("@/components/Shared/NotifyMe"), {
//   suspense: true,
// });
// const AroundAlwaysSection = dynamic(
//   () => import("@/components/Shared/AroundAlwaysSection"),
//   {
//     suspense: true,
//   }
// );
const Home = () => {
  const releaseDate = new Date(process.env.NEXT_PUBLIC_OPENING_DATE || "");
  return (
    <div>
      <Searchbar />
      <MaxDiscountBanner />
      <ThinDiscountBanner />
      <NotifyMe />
      <AroundAlwaysSection />
      {/* <Countdown releaseDate={releaseDate}/> */}
    </div>
  );
};

export default Home;
