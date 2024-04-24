import EmailRequestAndBtns from "../../Components/EmailRequestAndBtns/EmailRequestAndBtns";
import HowItsWork from "../../Components/HowItsWork/HowItsWork";
import HowItsWorkDark from "../../Components/HowItsWork/HowitsWorkDark";
import TopBannar from "../../Components/Bannars/HowitsWorkPageBannars/TopBannar";

import mobileview from "../../assets/images/mobileview.png";
import graph from "../../assets/images/graph.png";
import TextWithImageHIsWBannar from "../../Components/Bannars/HowitsWorkPageBannars/TextWithImageHIsWBannar";
export default function HowItsWorkPage() {
  return (
    <>
      <TopBannar />
      <TextWithImageHIsWBannar
        bannarSpanclass=""
        bannarSpan="unique asset class"
        bannarformation_Class=""
        bannar_subheadingClass=""
        bannarImage={mobileview}
        bannar_heading_Class=""
        Content=""
        bannar_heading="Leveraging the power of the "
        bannar_subheading="Since inception, we’ve offered over $700mm in blue chip contemporary art investments, exemplifying not only the success of our strategy, but the favorable performance of this asset class."
      />
      <HowItsWork bg_color="bg-[#EFEFEF] " text_color={"text-[#272727]"} />
      <EmailRequestAndBtns
        bg_color="bg-[#EFEFEF]  "
        google_Btn=" !border-[#36613F]  "
        linkedin_btn=" !border-[#36613F] "
      />
      <TextWithImageHIsWBannar
        bannarSpanclass=""
        bannarSpan="Process"
        bannarformation_Class="flex-row-reverse gap-[47px] sm:!items-center lg:!items-start sm:!pt-[10px] lg:!pt-[141px] !pb-[87px]"
        bannar_subheadingClass="text-center md:text-left"
        bannarImage={graph}
        bannar_heading_Class=""
        bannar_heading="Investment"
        Content="w-full lg:!w-[68%]"
        bannar_subheading="Our company focuses on acquiring movies by contemporary filmmakers who exhibit attractive investment characteristics. The filmmakers are identified by the research team using data analytics built on top of its proprietary database."
        bannar_subheading_2="Works by those filmmakers are then sourced via our acquisitions team, a group with decades of art market transaction and diligence experience. Our company maintains a buy and hold approach, selling opportunistically in order to increase returns for investors."
      />
    </>
  );
}
