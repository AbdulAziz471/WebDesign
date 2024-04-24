import offer1 from "../../assets/images/offer1.png";
import TheLittleMermaid from "../../assets/images/TheLittleMermaid.png";
import quest from "../../assets/Svg/quest.svg";
import SteplineChart from "../Charts/StepedLineChart";
import { NavLink } from "react-router-dom";
export default function RecentOfferCard() {
  return (
    <>
      <div className="bg-white p-2  mobile:p-4 sm:p-6  rounded-lg flex flex-col items-baseline">
        <div className="flex justify-center items-center gap-x-3 sm:gap-x-6">
          <img
            className="w-full max-w-10 sm:max-w-12 md:max-w-15 lg:max-w-20"
            src={offer1}
            alt=""
          />
          <div className="flex items-start  sm:items-center flex-col sm:flex-row">
            <h1 className=" text-[15px] mobile:text-[15px] sm:text-[24px] font-medium leading-[33.6px] tracking-[ -0.05em]">
              The Little Mermaid
            </h1>
            <span className="pl-2 text-[#9A9A9A] text-[10px] mobile:text-[12px]  sm:text-[16px] font-medium leading-[7px] sm:leading-[22.4px] tracking-[ -0.05em] ">
              (b. 2023)
            </span>
          </div>
        </div>
        <div className="pt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[30%_1fr] lg:grid-cols-[22%_1fr_25%] w-full gap-4">
          <div className=" overflow-hidden flex flex-col justify-between rounded-lg border-[#EDEDED] border ">
            <div>
              <img src={TheLittleMermaid} alt="" />

              <p className="pt-5 text-[13px]  mobile:text-[13px] sm:text-[15px] sm:leading-[25px] tracking-[-1%] pr-[10px] pl-[10px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                risus imperdiet faucibus urna, varius pretium, bibendum. Etiam
                quis diam.
              </p>
            </div>
            <div className="px-[10px] py-4">
              <NavLink to="/request" className="btn_primary">
                Investment Thesis
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col gap-y-4   ">
            <div className=" flex flex-row w-full  border rounded-lg border-[#EDEDED]">
              <div className="w-1/2 py-1 mobile:py-2 sm:py-4 px-2 mobile:px-4 sm:px-[21px]">
                <h1 className="text-[10px] leading-[14px] tracking-[5%] font-medium">
                  INITIAL OFFERING PRICE
                </h1>
                <h1
                  className="sm:text-[26px] leading-[28.6px] tracking-[-0.07em]
 font-normal"
                >
                  $10,120,000
                </h1>
              </div>
              <div className="w-1/2 py-1 mobile:py-2 sm:py-4 px-2 mobile:px-4 sm:px-[21px]">
                <h1 className="text-[10px] leading-[14px] tracking-[5%] font-medium">
                  OFFERING CIRCULAR
                </h1>
                <h1
                  className="text-[#36613F] sm:text-[26px] leading-[28.6px] tracking-[-0.07em]
 font-normal"
                >
                  sec.gov
                </h1>
              </div>
            </div>
            <div className="w-full border rounded-lg border-[#EDEDED]">
              <SteplineChart />
            </div>
          </div>
          <div className="  flex rounded-lg border-[#EDEDED] border col-span-full lg:col-span-1 ">
            <div className=" flex flex-col justify-between  px-[10px] py-4 w-full">
              <div>
                <div className="text-[13px] leading-[22.3px] tracking-[-1%]">
                  <p>Annual Grouth of Recourd Price</p>
                  <div className="flex  gap-2">
                    <p className="sm:text-[24px] font-semibold">89.9%</p>
                    <img className="w-2 sm:w-3" src={quest} alt="" />
                  </div>
                </div>
                <div className=" flex justify-between py-[17px] border-b border-[#EDEDED] text-[13px] leading-[22.3px] tracking-[-1%]">
                  <p className="text-gray-600 font-medium">
                    Sharp Ratio(2010-2022)
                  </p>
                  <div className="flex gap-2 items-center">
                    <a href="">Watch online </a>
                    <img className="w-3" src={quest} alt="" />
                  </div>
                </div>
                <div className=" flex justify-between py-[17px] border-b border-[#EDEDED] text-[13px] font-medium leading-[22.3px] tracking-[-1%]">
                  <h1>The Little Mermaid</h1>
                  <div>1.00</div>
                </div>
                <div className=" flex justify-between py-[17px] border-b border-[#EDEDED] text-[13px] leading-[22.3px] tracking-[-1%]">
                  <p>Movie</p>
                  <p>0.75</p>
                </div>
                <div className=" flex justify-between py-[17px] border-b border-[#EDEDED] text-[13px] leading-[22.3px] tracking-[-1%]">
                  <p>Movie</p>
                  <p>0.75</p>
                </div>
              </div>
              <NavLink to="/request" className="btn_primary">
                Investment Now
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
