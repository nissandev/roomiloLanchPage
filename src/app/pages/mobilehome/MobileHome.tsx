import React from "react";
import HomeTopNav from "../../../components/mobileComponents/shared/HomeTopNav";
import SearchCard from "../../../components/mobileComponents/mobileSearchCard/SearchCard";
import DestinationCard from "../../../components/mobileComponents/ExplorenextDestination/DestinationCard";
import RecommendedCard from "../../../components/mobileComponents/shared/RecommendedCard";
import MaxDiscount from "../../../components/mobileComponents/shared/MaxDiscount";

const MobileHome = () => {
  return (
    <div className="mb-20">
      <HomeTopNav />
      <SearchCard />
      <DestinationCard />
      <RecommendedCard/>
      <MaxDiscount/>
    </div>
  );
};

export default MobileHome;
