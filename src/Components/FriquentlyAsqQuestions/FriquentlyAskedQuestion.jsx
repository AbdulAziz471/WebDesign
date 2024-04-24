import React, { useState } from "react";
import image from "../../assets/images/image.png";
import top from "../../assets/Svg/top.svg";

import bottom from "../../assets/Svg/bottom.svg";
import freqAskeQues from "../../assets/images/freqAskeQues.png";
import "./friquently.css";
import { NavLink } from "react-router-dom";

export default function FriquentlyAskedQuestions() {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleVisibility = (index) => {
    setVisibleIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "How can I learn more about a particular offering?",
      answer:
        "At gravida aliquet elementum ultricies enim ultrices purus porttitor egestas. At lacus vitae et sagittis eget enim.",
    },
    {
      question: "How can I learn more about a particular offering?",
      answer:
        "At gravida aliquet elementum ultricies enim ultrices purus porttitor egestas. At lacus vitae et sagittis eget enim.",
    },
    {
      question: "How can I learn more about a particular offering?",
      answer:
        "At gravida aliquet elementum ultricies enim ultrices purus porttitor egestas. At lacus vitae et sagittis eget enim.",
    },
    {
      question: "How can I learn more about a particular offering?",
      answer:
        "At gravida aliquet elementum ultricies enim ultrices purus porttitor egestas. At lacus vitae et sagittis eget enim.",
    },
    {
      question: "How can I learn more about a particular offering?",
      answer:
        "At gravida aliquet elementum ultricies enim ultrices purus porttitor egestas. At lacus vitae et sagittis eget enim.",
    },
    {
      question: "How can I learn more about a particular offering?",
      answer:
        "At gravida aliquet elementum ultricies enim ultrices purus porttitor egestas. At lacus vitae et sagittis eget enim.",
    },
  ];
  return (
    <>
      <div className="bg-[#36493A]">
        <div className="relative max-w-[1440px] mx-auto">
          <div className="relative bg-[#36493A] px-2 md:px-14 lg:px-20 text-white pb-[90px]">
            <img className="absolute z-0 right-0 " src={image} alt="" />
            <div className="sm:w-3/4 pl-2 mobile:pl-[60px] sm:pl-[100px] md:pl-[150px]  lg:pl-[177px]  pr-[50px] mobile:pr-[60px] sm:pr-[100px] md:pr-[150px] lg:pr-[185px] pt-4 sm:pt-10  md:pt-16 lg:pt-[80px] pb-2 sm:pb-5 md:pb-10 lg:pb-[60px] ">
              <p className="learn_more">Learn more</p>
              <h1 className="primary_heading  relative">
                Frequently Asked
                <span className="pb-4 heading">Questions</span>
              </h1>
            </div>
            <div className="w-full bg-white relative z-10 text-black">
              <div className="flex gap-y-5 flex-col-reverse lg:flex-row gap-x-3 sm:gap-x-7 md:gap-x-10  lg:gap-x-14 px-5 sm:px-5 md:px-10  lg:px-14 sm:pt-5 pt-5  md:pt-10 lg:pt-14">
                <div className="w-full lg:w-1/2 pb-10">
                  {faqData.map((faq, index) => (
                    <div
                      key={index}
                      className={`answer_question !px-2 !sm:px-4 lg:px-10 !md:px-6 ${
                        visibleIndex === index
                          ? "visible py-2 sm:py-4 md:py-6 lg:py-10"
                          : ""
                      }`}
                    >
                      <div
                        className={`question mobile:py-2 sm:py-4 md:py-5 lg:py-[23px] ${
                          visibleIndex === index ? "visible" : ""
                        }`}
                        onClick={() => toggleVisibility(index)}
                      >
                        <p className="flex font-combon font-semibold flex-row justify-between gap-x-3 text-[15px]  md:text-[20px] lg:text-[24px] leading-[20px] sm:leading-[20px] md:leading-[25px] lg:leading-[33.2px] tracking-[-3%]">
                          {faq.question}
                          <div className="border-black cursor-pointer border-[0.5px] rounded-[50%] h-[30px] w-[30px] sm:h-[30px] sm:w-[30px] lg:w-[50px] lg:h-[50px] flex justify-center items-center">
                            {visibleIndex === index ? (
                              <img src={top} alt="" />
                            ) : (
                              <img src={bottom} alt="" />
                            )}
                          </div>
                        </p>
                      </div>
                      <div
                        className={`answers ${
                          visibleIndex === index ? "visible" : ""
                        }`}
                      >
                        <p className=" text-[15px] leading-5  md:text-[18px] md:leading-[28px]">
                          {faq.answer}
                        </p>
                        <div className="w-full pt-6">
                          <NavLink to="/request" className="btn_primary">
                            Request Invitation
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full lg:w-1/2">
                  <img src={freqAskeQues} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
