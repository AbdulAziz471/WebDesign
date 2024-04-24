import fabfitfun from "../../../../assets/Svg/fabfitfun.svg";
import midiem from "../../../../assets/Svg/midiem.svg";
import upwork from "../../../../assets/Svg/upwork.svg";
import thrive from "../../../../assets/Svg/thrive.svg";
import instaCart from "../../../../assets/Svg/instaCart.svg";
import pinterest from "../../../../assets/Svg/pinterest.svg";
import IconsBar from "../../../IconsBar/IconsBar";

export default function Figures() {
  return (
    <>
      <div className="bg-[#37513C] mt-[-200px]  z-10  relative">
        <div className="py-[59px] text-center text-white border-b ">
          <p className=" secondery_heading tracking-[2%]">
            Figures as of 09/20/2023
          </p>
          <div className="pt-[40px] flex justify-center gap-x-0 sm:gap-x-3  md:gap-x-6 lg:gap-x-16 ">
            <div className=" max-w-[335px] w-full ">
              <h1 className="figure_content">640,895</h1>
              <p className="text-[16px] leading-[28px] ">Members</p>
            </div>
            <div className="border-x border-[#ffffff0f]  max-w-[335px] w-full">
              <h1 className="figure_content">5,408</h1>
              <p className="text-[16px] leading-[28px] ">Movies Purchased</p>
            </div>
            <div className=" max-w-[335px] w-full">
              <h1 className="figure_content">$450,680</h1>
              <p className="text-[16px] leading-[28px] text-center  lg:text-left">
                AUM
              </p>
            </div>
          </div>
        </div>
        <IconsBar />
      </div>
    </>
  );
}
