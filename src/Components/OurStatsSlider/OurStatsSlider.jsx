import React, { useState, useEffect } from "react";
import "./OueStatsSlider.css";
import leftarrow from "../../assets/Svg/leftarrow.svg";
import rightArrow from "../../assets/Svg/rightArrow.svg";
import reverse from "../../assets/Svg/reverse.svg";
import slide1 from "../../assets/images/slide1.png";
export default function OurStatsSlider() {
  return (
    <>
      <div className="pt-[80px] bg-[#EFEFEF]">
        <Slider />
      </div>
    </>
  );
}
const items = [
  {
    icon: "face",
    copy: "01. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "pets",
    copy: "02. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    icon: "stars",
    copy: "03. Consectetur adipiscing elit.",
  },
  {
    icon: "invert_colors",
    copy: "04. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    icon: "psychology",
    copy: "05. Llamco nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: "brightness_7",
    copy: "06. Misi ut aliquip ex ea commodo consequat.",
  },
];

const Card = ({ icon, copy, isActive }) => {
  return (
    <li className={` relative p-14  card ${isActive ? "active" : ""}`}>
      <img className="absolute top-5 right-[19px] " src={reverse} alt="" />
      {/* <span className="material-icons">{icon}</span>
      <p>{copy}</p> */}
      <div className="flex flex-col ">
        <img
          className="max-w-[139.16px] max-h-[76.54px] h-full w-full"
          src={slide1}
          alt=""
        />
        <div className="pt-[33.56px] w-full flex text-left gap-x-14">
          <div className="">
            <h1 className=" text-nowrap text-[32px] font-semibold leading-[44.8px] tracking-[ -0.05em] ">
              The Little Mermaid
            </h1>
          </div>
          <div className="">
            <h1>ANNUALIZED NET RETURN</h1>
            <h1 className="text-[20px] leading-[36px] text-nowrap ">
              <span className="text-[52px] font-semibold leading-[93px] ">
                64.0%
              </span>
              378 days held
            </h1>
          </div>
        </div>
      </div>
    </li>
  );
};

const Slider = () => {
  const [moveClass, setMoveClass] = useState("");
  const [carouselItems, setCarouselItems] = useState(items);

  useEffect(() => {
    document.documentElement.style.setProperty("--num", carouselItems.length);
  }, [carouselItems]);

  const handleAnimationEnd = () => {
    if (moveClass === "prev") {
      shiftNext([...carouselItems]);
    } else if (moveClass === "next") {
      shiftPrev([...carouselItems]);
    }
    setMoveClass("");
  };

  const shiftPrev = (copy) => {
    let lastcard = copy.pop();
    copy.splice(0, 0, lastcard);
    setCarouselItems(copy);
  };

  const shiftNext = (copy) => {
    let firstcard = copy.shift();
    copy.splice(copy.length, 0, firstcard);
    setCarouselItems(copy);
  };

  return (
    <div className=" carouselwrapper module-wrapper flex justify-center flex-col items-center">
      <div className="flex justify-between items-end w-[90%]  pb-12">
        <div className="w-1/3">
          <p className="learn_more">Our Stats</p>
          <h1 className=" heading primary_heading">
            Net Annualized Track Record
          </h1>
        </div>
        <div className="ui">
          <button onClick={() => setMoveClass("next")} className="prev">
            <span className="">
              <img src={leftarrow} alt="" />
            </span>
          </button>
          <button onClick={() => setMoveClass("prev")} className="next">
            <span>
              <img src={rightArrow} alt="" />
            </span>
          </button>
        </div>
      </div>

      <ul
        onAnimationEnd={handleAnimationEnd}
        className={`${moveClass} carousel`}
      >
        {carouselItems.map((t, index) => (
          <Card key={t.copy + index} icon={t.icon} copy={t.copy} />
        ))}
      </ul>
      <div className="w-[90%]">
        <p className="text-[14px] leading-[25.32px] w-3/4 pt-[48px] pb-11">
          The annualized internal rate of return net of all fees and costs,
          calculated from the closing date of the primary offering to the date
          the sale is consummated. IRR may not be indicative of Masterworks
          paintings not yet sold and past performance is not indicative of
          future results.
        </p>
      </div>
    </div>
  );
};
