import dynamic from "next/dynamic";
import React from "react";

const Searchbar = dynamic(() => import("@/components/Searchbar/Searchbar"), {
  suspense: true,
});
const Countdown = dynamic(() => import("@/components/countdown/Countdown"), {
  suspense: true,
});
const MaxDiscountBanner = dynamic(
  () => import("@/components/Shared/MaxDiscountBanner"),
  {
    suspense: true,
  }
);
const ThinDiscountBanner = dynamic(
  () => import("@/components/Shared/ThinDiscountBanner"),
  {
    suspense: true,
  }
);
const Home = () => {
  const releaseDate = new Date(process.env.NEXT_PUBLIC_OPENING_DATE || "");
  return (
    <div>
      <Searchbar />
      <MaxDiscountBanner />
      <ThinDiscountBanner />
      {/* <Countdown releaseDate={releaseDate}/> */}
    </div>
  );
};

export default Home;
