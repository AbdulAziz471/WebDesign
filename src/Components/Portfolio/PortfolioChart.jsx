import StepedLineChartPortfolio from "../Charts/StepedLineChartPortfolio";
import { NavLink } from "react-router-dom";
import quest from "../../assets/Svg/quest.svg";
export default function PortfolioChart() {
  return (
    <>
      <div className="bg-[#37513C] pb-10 flex">
        <div className="max-w-[1440px] mx-auto  w-full -mt-[100px] ">
          <div>
            <div className="bg-white p-6 rounded-[24px] border-[5px] border-[#9F9F9F] ">
              <div className="flex flex-row gap-y-4   ">
                <div className=" flex flex-row w-full border-b border-[#C6C6C6] pb-[33px] ">
                  <div className="w-1/2  px-[21px]">
                    <h1 className="text-[20px] text-[#36493A] leading-[24px] tracking-[5%] font-medium">
                      Estimated Fair Value
                    </h1>
                    <h1 className="text-[48px] leading-[57.6px] tracking-[-0.05em] font-medium">
                      $0.00
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex gap-[30px] py-6 ">
                <div className="w-1/2 flex flex-col justify-between  px-[10px] py-4 ">
                  <div>
                    <div className=" flex justify-between py-[17px] border-b border-[#EDEDED] text-[13px] leading-[22.3px] tracking-[-1%]">
                      <p className="text-[#45684C] text-[20px] leading-[24px] font-semibold">
                        ALL TIME RESULTS
                      </p>
                      <div className="flex gap-2 items-center">
                        <a
                          className="text-[#45684C] text-[18px] leading-[21px] tracking-[-.04em] font-semibold"
                          href=""
                        >
                          How it works
                        </a>
                        <img className="w-3" src={quest} alt="" />
                      </div>
                    </div>
                    <div className=" flex justify-between py-[17px] border-b border-[#EDEDED] text-[13px] font-medium leading-[22.3px] tracking-[-1%]">
                      <h1></h1>
                      <div>NET CHANGE</div>
                    </div>
                    <div className=" flex justify-between py-[17px] border-b border-[#EDEDED] text-[13px] leading-[22.3px] tracking-[-1%]">
                      <div className="flex gap-2 items-center">
                        <a
                          className=" text-[18px] leading-[21px] tracking-[-.04em] "
                          href=""
                        >
                          Appraised Investments
                        </a>
                        <img className="w-3" src={quest} alt="" />
                      </div>
                      <p>0.75</p>
                    </div>
                    <div className=" flex justify-between py-[17px] border-b border-[#EDEDED] text-[13px] leading-[22.3px] tracking-[-1%]">
                      <div className="flex gap-2 items-center">
                        <a
                          className=" text-[18px] leading-[21px] tracking-[-.04em]"
                          href=""
                        >
                          Non-Appraised Investments
                        </a>
                        <img className="w-3" src={quest} alt="" />
                      </div>
                      <p>0.75</p>
                    </div>
                    <div className=" flex justify-between py-[17px] border-b border-[#EDEDED] text-[13px] leading-[22.3px] tracking-[-1%]">
                      <div className="flex gap-2 items-center">
                        <a
                          className=" text-[18px] leading-[21px] tracking-[-.04em] "
                          href=""
                        >
                          Trading Market
                        </a>
                        <img className="w-3" src={quest} alt="" />
                      </div>
                      <p>0.75</p>
                    </div>
                    <div className=" flex justify-between py-[17px] border-b border-[#EDEDED] text-[13px] leading-[22.3px] tracking-[-1%]">
                      <div className="flex gap-2 items-center">
                        <a
                          className=" text-[18px] leading-[21px] tracking-[-.04em] "
                          href=""
                        >
                          Sold Films
                        </a>
                        <img className="w-3" src={quest} alt="" />
                      </div>
                      <p>0.75</p>
                    </div>
                  </div>
                </div>
                <div className="w-[1px] bg-[#C6C6C6]"></div>
                <div className=" w-1/2 ">
                  <div className="flex justify-between   py-6 border-b border-[#E2E2E2]">
                    <p className="text-[20px] leading-[24px] tracking-[-.01em]  text-[#45684C] font-semibold">
                      PORTFOLIO VALUE
                    </p>
                    <div className="flex gap-2">
                      <input type="checkbox" />
                      <label className="text-[18px] leading-[21px] tracking-[-.04em]  text-[#45684C] font-normal">
                        Show Cost Basis
                      </label>
                    </div>
                  </div>

                  <StepedLineChartPortfolio />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
