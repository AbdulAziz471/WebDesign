import BarChart from "../../Components/Charts/BarChart";
import HistoryChart from "../../Components/Charts/historyChart";
import FriquentlyAskedQuestions from "../../Components/FriquentlyAsqQuestions/FriquentlyAskedQuestion";

import HowItsWork from "../../Components/HowItsWork/HowItsWork";
import HowItsWorkDark from "../../Components/HowItsWork/HowitsWorkDark";
import IconsBar from "../../Components/IconsBar/IconsBar";
import InvestTopBannar from "../../Components/InvestPageBannar/InvestTopBannar";
import OurStatsSlider from "../../Components/OurStatsSlider/OurStatsSlider";
import RecentOfferCard from "../../Components/RecentOffers/RecentOfferCard";
import RecentOffers from "../../Components/RecentOffers/RecentOffers";
import RecoardSection from "../../Components/RecordSection/RecoradSection";
import MultipleBannars from "../../Components/TextWitImageBannar/TextWithImageBannar";
export default function InvestPage() {
  return (
    <>
      <InvestTopBannar />
      <div className="bg-[#EFEFEF] px-[10px] sm:px-[20px] md:px-[80px] lg:px-[177px]  pt-10  text-[#1D1D1D]">
        <div className="max-w-[1440px] mx-auto">
          <h1 className=" pb-4 font-medium heading primary_heading">
            Recent Offerings
          </h1>
          <div className="flex flex-col gap-y-3">
            <RecentOfferCard />
            <RecentOfferCard />
            <RecentOfferCard />
            <RecentOfferCard />
            <RecentOfferCard />
          </div>
        </div>
      </div>
      <IconsBar />
      <RecoardSection />
      <MultipleBannars />
      <FriquentlyAskedQuestions />
      <HowItsWorkDark />
    </>
  );
}
