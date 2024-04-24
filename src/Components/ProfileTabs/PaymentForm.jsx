import { NavLink } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
export default function PaymentForm() {
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
    <div className="w-3/5 -mt-[300px]">
      <div className="bg-white text-black px-8 py-8  sm:px-14 sm:py-[124px] w-full   rounded-[24px] border-[#9F9F9F] border-[5px]">
        <form>
          <div className="flex flex-col gap-6 items-center">
            <h1 className="w-full  text-left font-semibold text-[16px] leading-[22.4px]  tracking-[.02em] text-[#45684C] ">
              PAYMENT FORM
            </h1>
            <div className="bg-[#C1D6C5] h-[1px] w-full text-center mb-10 "></div>
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
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3  w-full ">
              <label htmlFor="">Date of Birth</label>
              <input
                className="border text-[16px] leading-[24px] tracking-[-0.05em]  border-[#C4C4C4] px-[14px] py-4 outline-none font-normal"
                placeholder="Enter date of birth"
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
                placeholder="Enter mobile number  "
              />
            </div>
            <div className="w-full flex gap-4">
              <div className="flex flex-col gap-3  w-full ">
                <label htmlFor="">Country</label>
                <input
                  className="border text-[16px] leading-[24px] tracking-[-0.05em]  border-[#C4C4C4] px-[14px] py-4 outline-none font-normal"
                  placeholder="Enter country"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-3  w-full  ">
                <label htmlFor="">Street Address (No P.O. Boxes)</label>
                <input
                  className="border border-[#C4C4C4] px-[14px] py-4 outline-none"
                  placeholder="Enter street address"
                  type="text"
                />
              </div>
            </div>
            <div className="w-full grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-3  ">
                <label htmlFor="">CIty Or Town</label>
                <input
                  className="border text-[16px] leading-[24px] tracking-[-0.05em]  border-[#C4C4C4] px-[14px] py-4 outline-none font-normal"
                  placeholder="Enter city or town"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-3   ">
                <label htmlFor="">State or Region</label>
                <input
                  className="border border-[#C4C4C4] px-[14px] py-4 outline-none"
                  placeholder="Enter state or region"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-3   ">
                <label htmlFor="">ZIP Code</label>
                <input
                  className="border border-[#C4C4C4] px-[14px] py-4 outline-none"
                  placeholder="Enter ZIP code"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3  w-full ">
              <label htmlFor="">Tax ID Issed in your home country</label>
              <input
                className="border text-[16px] leading-[24px] tracking-[-0.05em]  border-[#C4C4C4] px-[14px] py-4 outline-none font-normal"
                placeholder="Enter ID"
                type="text"
              />
            </div>
            <NavLink
              to="/request"
              className="btn_primary_with_icon block  !max-w-full text-white"
            >
              Save
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
