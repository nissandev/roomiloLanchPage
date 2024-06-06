import Image from "next/image";
import React from "react";
import thinBanner from "../../assets/images/thinbanner.png";

const ThinDiscountBanner = () => {
  return (
    <div className="px-[71px] mt-[64px] mb-[52px] flex items-center justify-center">
      <Image src={thinBanner} alt="thinBanner" className="rounded" />
    </div>
  );
};

export default ThinDiscountBanner;
