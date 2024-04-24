import ButtonGroup from "./buttonsGroup";
import Features from "./Featues";
import "./howitsWork.css";
import stars from "../../assets/Svg/stars.svg";
import sell from "../../assets/Svg/stars.svg";
import family from "../../assets/Svg/stars.svg";
import HowitsWorkCard from "./HowitsWorkCard";
export default function HowItsWorkDark() {
  return (
    <>
      <div className="bg-[#EFEFEF]">
        <div className=" flex justify-center flex-col w-full max-w-[1440px] mx-auto">
          <Features />
          <div className=" py-20 pl-10 sm:pl-20 md:pl-28   lg:pl-[177px] pr-10 sm:pr-20 md:pr-28 lg:pr-[185px] text-[#1D1D1D]">
            <div className="text-center md:text-left">
              <p className="learn_more">Learn more</p>
              <h1 className=" pb-4 heading primary_heading font-medium">
                How its Woks
              </h1>
              <div className="pb-9">
                <HowitsWorkCard
                  card1_Img={stars}
                  card1_heading="We find high rating films"
                  card1_discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin risus imperdiet"
                  card3_Img={sell}
                  card2_heading="We Purchase the Film"
                  card2_discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin risus imperdiet"
                  card2_Img={family}
                  card3_heading="Sell Your Sharesm"
                  card3_discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin risus imperdiet"
                />
              </div>
            </div>
            <h1 className=" text-center md:text-left lg:w-[55%] text-[17px] leading-[23.8px] text-black  lg;pt-10  ">
              We are the first platform for buying and selling shares
              representing an investment in high rating films. Build a
              diversified portfolio of expertly-vetted works curated by our
              industry-leading research team.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
