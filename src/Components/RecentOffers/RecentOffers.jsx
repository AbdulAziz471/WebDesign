import offer1 from "../../assets/images/offer1.png";
import TheLittleMermaid from "../../assets/images/TheLittleMermaid.png";
import quest from "../../assets/Svg/quest.svg";

import { NavLink } from "react-router-dom";
import SteplineChart from "../Charts/StepedLineChart";
import RecentOfferCard from "./RecentOfferCard";
export default function RecentOffers() {
  return (
    <>
      <div className="bg-[#EFEFEF]">
        <div className="max-w-[1440px] mx-auto px-4 mobile:px-10 sm:px-15 lg:px-20 pt-3  sm:pt-10  text-[#1D1D1D]">
          <h1 className=" pb-4 font-medium heading primary_heading">
            Recent Offerings
          </h1>
          <div className="flex flex-col gap-y-3">
            <RecentOfferCard />
            <RecentOfferCard />
          </div>
        </div>
      </div>
    </>
  );
}
