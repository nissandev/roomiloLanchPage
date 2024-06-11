import React from "react";
import HomeTopNav from "../../../components/mobileComponents/shared/HomeTopNav";
import SearchCard from "../../../components/mobileComponents/mobileSearchCard/SearchCard";
import DestinationCard from "../../../components/mobileComponents/ExplorenextDestination/DestinationCard";
import RecommendedCard from "../../../components/mobileComponents/shared/RecommendedCard";
import MaxDiscount from "../../../components/mobileComponents/shared/MaxDiscount";
import OurCollectionCard from "../../../components/mobileComponents/shared/OurCollectionCard";

const MobileHome = () => {
  return (
    <div className="mb-20">
      <HomeTopNav />
      <SearchCard />
      <DestinationCard />
      <RecommendedCard/>
      <MaxDiscount/>
      <OurCollectionCard/>
    </div>
  );
};

export default MobileHome;
