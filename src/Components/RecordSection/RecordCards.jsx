import offer1 from "../../assets/images/offer1.png";
import TheLittleMermaid from "../../assets/images/TheLittleMermaid.png";
import quest from "../../assets/Svg/quest.svg";
import reverse from "../../assets/Svg/reverse.svg";
import SteplineChart from "../Charts/StepedLineChart";
import { NavLink } from "react-router-dom";
export default function RecordCard() {
  return (
    <>
      <div className="relative bg-white p-4  rounded-lg flex flex-col items-baseline gap-y-3">
        <img
          className="absolute top-5 right-[19px] size-6 "
          src={reverse}
          alt=""
        />
        <div className="flex justify-center items-center gap-2">
          <img
            className="w-full max-w-4 md:max-w-8 lg:max-w-14"
            src={offer1}
            alt=""
          />
          <div className="flex items-start  sm:items-center flex-col sm:flex-row">
            <h1 className="text-[20px] text-black font-medium leading-[28px] tracking-[ -0.05em]">
              The Little Mermaid
            </h1>
          </div>
        </div>
        <div className="text-black">
          <h1 className="text-[12px] leading-[19px] pb-2 text-[#2C2C2C]">
            ANNUALIZED NET RETURN
          </h1>
          <h1 className="text-[16px] leading-[22px] text-nowrap  text-[#6D6D6D]">
            <span className="text-[28px] text-[#37513C]  font-normal leading-[22px] tracking-[ -0.05em] ">
              64.0%
            </span>
            378 days held
          </h1>
        </div>
      </div>
    </>
  );
}
