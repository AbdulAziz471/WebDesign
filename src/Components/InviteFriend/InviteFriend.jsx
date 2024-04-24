import { NavLink } from "react-router-dom";
import HowitsWorkCard from "../HowItsWork/HowitsWorkCard";
import familymembers from "../../assets/images/familymembers.png";
import stars from "../../assets/Svg/stars.svg";

import firstInvestment from "../../assets/images/firstInvestment.png";
export default function InviteFriend() {
  return (
    <div className="bg-[#37513C]">
      <div className="max-w-[1440px] mx-auto py-10 sm:py-[70px] md:py-[100px] lg:py-[142px] pl-8 sm:pl-16 md:pl-24 lg:pl-[133px] pr-8 sm:pr-16 md:pr-24 lg:pr-[148px] text-white">
        <div className=" flex flex-col-reverse items-center text-center sm:text-left gap-y-5 sm:flex-row ">
          <div className="w-full sm:w-[55%]">
            <h1 className="heading text-[30px] sm:text-[30px] md:text-[40px] lg:text-[48px] leading-[  57.6px] font-medium ">
              Invite your friends
            </h1>
            <p className="text-[14px] sm:text-[17px] md:text-[19px] lg:text-[24px] leading-[22px] sm:leading-[22px] md:leading-[22px] lg:leading-[33px] font-normal tracking-[ -0.05em]">
              Share your experience. Send an invite to your friends and family
              and we’ll let them skip the waitlist to get access immediately.
            </p>
          </div>
          <div className=" w-full  sm:w-[45%] flex gap-8 flex-col">
            <div className="flex flex-col gap-3  w-full ">
              <label htmlFor="">Name</label>
              <input
                className="border text-[16px] leading-[24px] tracking-[-0.05em]  border-[#C4C4C4] px-[14px] py-4 outline-none font-normal"
                placeholder="Enter Name"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-3  w-full  ">
              <label htmlFor="">Email Address</label>
              <input
                className="border border-[#C4C4C4] px-[14px] py-4 outline-none"
                placeholder="Enter email address"
                type="text"
              />
            </div>
            <NavLink
              className="btn_secondary !text-white !border-white "
              href=""
            >
              Add Contacts
            </NavLink>
            <NavLink
              to="/request"
              className="btn_primary_with_icon block !bg-[#547B5C]  !max-w-full text-white"
            >
              Send Invite
            </NavLink>
          </div>
        </div>
        <div className="pt-[74px]">
          <h1 className="text-[24px] leading-[33.6px] tracking-[-.04em]">
            How it Works
          </h1>
          <HowitsWorkCard
            card1_Img={familymembers}
            card2_Img={firstInvestment}
            card3_Img={stars}
            card1_heading={"Share invite with your friend or family member"}
            card2_heading={
              "Your friend or family member signs up and makes their first investment"
            }
            card3_heading={
              "We’ll let your friend or family member skip the waitlist to get access immediately"
            }
          />
        </div>
      </div>
    </div>
  );
}
