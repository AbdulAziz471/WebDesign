import EmailBannar from "./Emailbannar";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import RequestInvetation from "./RequestInvetation";
import facbook from "../../assets/Svg/facebook.svg";
import Google from "../../assets/Svg/Google.svg";
import twittier from "../../assets/Svg/twittier.svg";
import insta from "../../assets/Svg/insta.svg";

export default function Footer() {
  return (
    <>
      <div className="bg-black">
        <div className="max-w-[1440px] mx-auto px-10 sm:px-12 md-15 lg-20 text-white">
          <RequestInvetation />
          <EmailBannar />
          <div className="py-20 flex justify-between flex-col-reverse sm:flex-row    sm:justify-start  ">
            <div className=" w-full pb-10  sm:w-[35%]">
              <div className="flex flex-col gap-y-[6px] items-center sm:items-start   ">
                <div className="flex items-center gap-[13px] ">
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.00292969 1.884L7.99993 5.882L15.9969 1.884C15.9673 1.37444 15.744 0.895488 15.3727 0.545227C15.0015 0.194965 14.5103 -9.35847e-05 13.9999 3.36834e-08H1.99993C1.48951 -9.35847e-05 0.998376 0.194965 0.627107 0.545227C0.255838 0.895488 0.0325338 1.37444 0.00292969 1.884Z"
                      fill="white"
                    />
                    <path
                      d="M16 4.11816L8 8.11816L0 4.11816V10.0002C0 10.5306 0.210714 11.0393 0.585786 11.4144C0.960859 11.7895 1.46957 12.0002 2 12.0002H14C14.5304 12.0002 15.0391 11.7895 15.4142 11.4144C15.7893 11.0393 16 10.5306 16 10.0002V4.11816Z"
                      fill="white"
                    />
                  </svg>

                  <p className="tet-[18px] leading-[30.5px] tracking-[ -0.05em]">
                    info@idiomatic.com
                  </p>
                </div>
                <div className="flex items-center gap-5 ">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H3.153C3.38971 0.000108969 3.6187 0.0841807 3.79924 0.23726C3.97979 0.390339 4.10018 0.602499 4.139 0.836L4.879 5.271C4.91436 5.48222 4.88097 5.69921 4.78376 5.89003C4.68655 6.08085 4.53065 6.23543 4.339 6.331L2.791 7.104C3.34611 8.47965 4.17283 9.72928 5.22178 10.7782C6.27072 11.8272 7.52035 12.6539 8.896 13.209L9.67 11.661C9.76552 11.4695 9.91994 11.3138 10.1106 11.2166C10.3012 11.1194 10.5179 11.0859 10.729 11.121L15.164 11.861C15.3975 11.8998 15.6097 12.0202 15.7627 12.2008C15.9158 12.3813 15.9999 12.6103 16 12.847V15C16 15.2652 15.8946 15.5196 15.7071 15.7071C15.5196 15.8946 15.2652 16 15 16H13C5.82 16 0 10.18 0 3V1Z"
                      fill="white"
                    />
                  </svg>
                  <p className="tet-[18px] leading-[30.5px] tracking-[ -0.05em]">
                    (833) 273-6229
                  </p>
                </div>
              </div>
              <div className="pt-8 gap-x-8 flex justify-center sm:justify-start">
                <img src={facbook} alt="" />
                <img src={twittier} alt="" />
                <img src={Google} alt="" />
                <img src={insta} alt="" />
              </div>
            </div>
            <div className="flex w-full   sm:w-1/2">
              <div className="w-full">
                <ul className="">
                  <p className="text-[16px] leading-[25.6px] tracking-[8%] font-medium text-[#75B482] pb-6 ">
                    MAIN LINKS
                  </p>
                  <Link to="/howitwork">
                    <li className="text-[16px] leading-[25.6px] pb-4 opacity-[70%] ">
                      How it Works
                    </li>
                  </Link>
                  <Link className="" to="whyfilm">
                    <li className="text-[16px] leading-[25.6px] pb-4 opacity-[70%] ">
                      Why Film
                    </li>
                  </Link>

                  <Link className="py-[23px]" to="About">
                    <li className="text-[16px] leading-[25.6px] pb-4 opacity-[70%] ">
                      About
                    </li>
                  </Link>
                  <a href="">
                    <li className="text-[16px] leading-[25.6px] pb-4 opacity-[70%] ">
                      Price Database
                    </li>
                  </a>
                  <a href="">
                    <li className="text-[16px] leading-[25.6px] opacity-[70%]">
                      Trading
                    </li>
                  </a>
                </ul>
              </div>
              <div className="w-full">
                <ul>
                  <p className="text-[16px] leading-[25.6px] tracking-[8%] font-medium text-[#75B482] pb-6 ">
                    RESOURCES
                  </p>
                  <a href="">
                    <li className="text-[16px] leading-[25.6px] pb-4 opacity-[70%]">
                      Customer Stories
                    </li>
                  </a>
                  <a href="">
                    <li className="text-[16px] leading-[25.6px]  pb-4 opacity-[70%]">
                      FAQ
                    </li>
                  </a>
                  <a href="">
                    <li className="text-[16px] leading-[25.6px]  pb-4 opacity-[70%]">
                      Blog
                    </li>
                  </a>
                </ul>
              </div>
              <div className="w-full">
                <ul>
                  <p className="text-[16px] leading-[25.6px] tracking-[8%] font-medium text-[#75B482] pb-6">
                    ABOUT
                  </p>
                  <a href="">
                    <li className="text-[16px] leading-[25.6px] pb-4 opacity-[70%]">
                      Our Story and Team
                    </li>
                  </a>
                  <a href="">
                    <li className="text-[16px] leading-[25.6px] pb-4 opacity-[70%]">
                      Careers
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-x-10 pb-14">
              <p>Terms & Conditions</p>
              <p>Privacy & Policy</p>
            </div>
            <p>© 2023, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}
