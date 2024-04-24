import fabfitfun from "../../assets/Svg/fabfitfun.svg";
import midiem from "../../assets/Svg/midiem.svg";
import upwork from "../../assets/Svg/upwork.svg";
import thrive from "../../assets/Svg/thrive.svg";
import instaCart from "../../assets/Svg/instaCart.svg";
import pinterest from "../../assets/Svg/pinterest.svg";
export default function IconsBar({ mainContaner }) {
  return (
    <div
      className={`bg-[#36493A] flex justify-center gap-x-14 py-[40px] sm:py-[70px] md:py-[90px]    lg:py-[117px] flex-wrap gap-y-8 border-b border-gray-300   ${mainContaner} `}
    >
      <img src={instaCart} alt="" />
      <img src={upwork} alt="" />
      <img src={pinterest} alt="" />
      <img src={midiem} alt="" />
      <img src={thrive} alt="" />

      <img src={fabfitfun} alt="" />
    </div>
  );
}
