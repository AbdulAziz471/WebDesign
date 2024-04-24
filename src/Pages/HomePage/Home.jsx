import BarChart from "../../Components/Charts/BarChart";
import HistoryChart from "../../Components/Charts/historyChart";
import EmailRequestAndBtns from "../../Components/EmailRequestAndBtns/EmailRequestAndBtns";
import FriquentlyAskedQuestions from "../../Components/FriquentlyAsqQuestions/FriquentlyAskedQuestion";
import HomeBannar from "../../Components/Bannars/HomePageBannar/HomeBannar/HomeBannar";
import HowItsWork from "../../Components/HowItsWork/HowItsWork";
import OurStatsSlider from "../../Components/OurStatsSlider/OurStatsSlider";
import CenterMode from "../../Components/OurStatsSlider/slickSlider";
import RecentOffers from "../../Components/RecentOffers/RecentOffers";

export default function Home() {
  return (
    <>
      <HomeBannar />
      <div className="pt-[80px] bg-[#EFEFEF]">{/* <CenterMode /> */}</div>
      <RecentOffers />
      <HistoryChart />
      <BarChart />
      <HowItsWork bg_color="bg-[#36493A] text-white! " />
      <EmailRequestAndBtns
        bg_color={"bg-[#36493A] "}
        btnColor="border-[#EFEFEF] !text-white"
        google_Btn="!text-white"
        linkedin_btn="!text-white"
      />
      <FriquentlyAskedQuestions />
    </>
  );
}
