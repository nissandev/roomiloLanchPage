import React from "react";
import HomeTopNav from "../../../components/mobileComponents/shared/HomeTopNav";
import SearchCard from "../../../components/mobileComponents/mobileSearchCard/SearchCard";
import DestinationCard from "../../../components/mobileComponents/ExplorenextDestination/DestinationCard";
import RecommendedCard from "../../../components/mobileComponents/shared/RecommendedCard";

const MobileHome = () => {
  return (
    <div className="mb-20">
      <HomeTopNav />
      <SearchCard />
      <DestinationCard />
      <RecommendedCard/>
    </div>
  );
};

export default MobileHome;
