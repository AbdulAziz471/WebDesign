import React, { useState, useEffect, useRef } from "react";
import "./applyforMemberShippage.css";
import { NavLink } from "react-router-dom";
import intlTelInput from "intl-tel-input";
import whiteStarts from "../../assets/Svg/whiteStarts.svg";
import "intl-tel-input/build/css/intlTelInput.css";
import EmailRequestAndBtns from "../../Components/EmailRequestAndBtns/EmailRequestAndBtns";
import ButtonGroup from "../../Components/HowItsWork/buttonsGroup";
import loginbg from "../../assets/images/loginbg.png";
import VerticalMode from "../../Components/VerticleSlider/TestSlider";
import IconsBar from "../../Components/IconsBar/IconsBar";

export default function ApplyForMemberShipPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneInputRef = useRef(null);
  const intlTelInputInstance = useRef(null);

  useEffect(() => {
    if (phoneInputRef.current) {
      intlTelInputInstance.current = intlTelInput(phoneInputRef.current, {
        separateDialCode: true,
        initialCountry: "in",
      });

      phoneInputRef.current.addEventListener("countrychange", () => {
        const currentNumber = intlTelInputInstance.current.getNumber();
        setPhoneNumber(currentNumber);
      });
    }

    return () => {
      if (intlTelInputInstance.current) {
        intlTelInputInstance.current.destroy();
      }
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ phoneNumber });
  };

  return (
    <div className="relative bg-[#36493A]">
      <img className="absolute -rotate-[-29.45°]  " src={loginbg} alt="" />
      <div className="max-w-[1440px] mx-auto">
        <div className="relative">
          <div className="p-10 md:p-20 flex flex-col lg:flex-row lg:gap-36 ">
            <div className="bg-white px-8 py-8  sm:px-14 sm:py-[72px] w-full  lg:w-3/5 rounded-[8px]">
              <form>
                <div className="pb-12">
                  <p className="learn_more pb-4">Join us</p>
                  <h1 className="primary_heading heading font-medium">
                    Apply for membership
                  </h1>
                </div>
                <div className="flex flex-col gap-6 items-center">
                  <h1 className="w-full text-left font-semibold text-[16px] leading-[22.4px]  tracking-[.02em] ">
                    SUBMIT YOUR MEMBERSHIP APPLICATION
                  </h1>
                  <div className="w-full flex gap-4">
                    <div className="flex flex-col gap-3  w-full ">
                      <label htmlFor="">First Name</label>
                      <input
                        className="border text-[16px] leading-[24px] tracking-[-0.05em]  border-[#C4C4C4] px-[14px] py-4 outline-none font-normal"
                        placeholder="Enter your first name"
                        type="text"
                      />
                    </div>

                    <div className="flex flex-col gap-3  w-full  ">
                      <label htmlFor="">Last Name</label>
                      <input
                        className="border border-[#C4C4C4] px-[14px] py-4 outline-none"
                        placeholder="Enter your last name"
                        type="password"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3  w-full ">
                    <label htmlFor=""> Eamil Address</label>
                    <input
                      className="border text-[16px] leading-[24px] tracking-[-0.05em]  border-[#C4C4C4] px-[14px] py-4 outline-none font-normal"
                      placeholder="enter email address"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-3  w-full">
                    <label htmlFor="mobile_code">Contact Number</label>
                    <input
                      ref={phoneInputRef}
                      type="tel"
                      id="mobile_code"
                      className="w-full border text-[16px] leading-[24px] tracking-[-0.05em]  border-[#C4C4C4] px-[14px] py-4 outline-none font-normal"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="flex flex-col gap-3  w-full  ">
                    <label htmlFor="">Password</label>
                    <input
                      className="border border-[#C4C4C4] px-[14px] py-4 outline-none"
                      placeholder="enter password"
                      type="password"
                    />
                    <p className="font-normal text-[12px] leading-[18px] text-[#A9A9A9]">
                      Must be 6 or more characters, and include a lowercase
                      letter, an uppercase letter, and a number
                    </p>
                  </div>
                  <NavLink
                    to="/request"
                    className="btn_primary_with_icon block  !max-w-full text-white"
                  >
                    Request Invitation
                  </NavLink>
                  <div className="flex gap-4 items-center">
                    <NavLink
                      to="/request"
                      className=" block text-center font-normal text-[18px] leading-[18px] tracking-[-.05em] text-[#36613F] !max-w-full "
                    >
                      Forgot your password?
                    </NavLink>
                    <p>|</p>
                    <NavLink
                      to="/request"
                      className=" block text-center font-normal text-[18px] leading-[18px] tracking-[-.05em] text-[#36613F] !max-w-full "
                    >
                      Sign in
                    </NavLink>
                  </div>
                  <div className="bg-[#C1D6C5] h-[1px] w-full text-center my-8  "></div>
                  <p className="text-[15px] leading-[22.4px] text-center font-normal">
                    By clicking "Request Invitation", I agree to Masterworks’{" "}
                    <span className="text-[#36613F] border-b border-[#36613F] ">
                      <NavLink to="/request">Terms of Use</NavLink>
                    </span>
                    (which require that disputes be resolved through binding
                    arbitration) and its
                    <span className="text-[#36613F] border-b border-[#36613F] ">
                      <NavLink to="/request"> Privacy Policy.</NavLink>
                    </span>
                  </p>
                </div>
              </form>
            </div>
            <div className=" w-full lg:w-2/5   ">
              <h1 className="font-poppins text-[20px] text-white leading-[28px]">
                Track Records:
              </h1>
              <VerticalMode />
              <div className="pt-10 text-white flex gap-4 items-start  justify-start">
                <img src={whiteStarts} alt="" />
                <div className="flex flex-col gap-[12px]">
                  <h1 className="font-combon text-[20px] font-bold  leading-[28px]">
                    Skip the waitlist
                  </h1>
                  <p className="font-poppins text-[12px] font-normal  leading-[20px]">
                    Access one of the most exclusive asset classes without
                    having to spend millions of dollars to acquire films.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <IconsBar />
      </div>
    </div>
  );
}
