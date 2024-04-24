import React, { useRef } from "react";
import Slider from "react-slick";

import reverse from "../../assets/Svg/reverse.svg";
import slide1 from "../../assets/images/slide1.png";
import verticelprevArrow from "../../assets/Svg/verticelprevArrow.svg";
import verticelnextArrow from "../../assets/Svg/verticelnextArrow.svg";
function VerticleNextArrow(props) {
  const { onClick } = props;
  return <div onClick={onClick}></div>;
}

function VerticlePrevArrow(props) {
  const { onClick } = props;
  return <div onClick={onClick}></div>;
}
function VerticalMode() {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <VerticleNextArrow />,
    prevArrow: <VerticlePrevArrow />,
    vertical: true,
    centerPadding: "30%",

    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <>
      <div className="flex justify-center pb-6">
        <button className="prev" onClick={() => sliderRef.current.slickPrev()}>
          <img src={verticelprevArrow} alt="Prev" />
        </button>
      </div>

      <Slider ref={sliderRef} {...settings}>
        <div className="p-4 bg-transparent">
          <div>
            <li className="relative px-5 py-4 bg-white list-none">
              <img
                className="absolute top-5 right-[19px] w-[17px]"
                src={reverse}
                alt=""
              />
              <div className="flex flex-col">
                <img
                  className="max-w-[100.16px] max-h-[76.54px]"
                  src={slide1}
                  alt=""
                />
                <div className="pt-[33.56px] w-full flex text-left   justify-between">
                  <div>
                    <h1 className="text-[19px] font-semibold leading-[20px] ">
                      The Little Mermaid
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-[13px]  ">ANNUALIZED NET RETURN</h1>
                    <h1 className="text-[18px] leading-[36px] ">
                      <span className="text-[25px] font-semibold leading-[24px]">
                        64.0%
                      </span>
                      378 days held
                    </h1>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </div>
        <div className="p-4 bg-transparent">
          <div>
            <li className="relative px-5 py-4 bg-white list-none">
              <img
                className="absolute top-5 right-[19px] w-[17px]"
                src={reverse}
                alt=""
              />
              <div className="flex flex-col">
                <img
                  className="max-w-[100.16px] max-h-[76.54px]"
                  src={slide1}
                  alt=""
                />
                <div className="pt-[33.56px] w-full flex text-left  justify-between">
                  <div>
                    <h1 className="text-[19px] font-semibold leading-[20px] ">
                      The Little Mermaid
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-[13px]  ">ANNUALIZED NET RETURN</h1>
                    <h1 className="text-[18px] leading-[36px] ">
                      <span className="text-[25px] font-semibold leading-[24px]">
                        64.0%
                      </span>
                      378 days held
                    </h1>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </div>
        <div className="p-4 bg-transparent">
          <div>
            <li className="relative px-5 py-4 bg-white list-none">
              <img
                className="absolute top-5 right-[19px] w-[17px]"
                src={reverse}
                alt=""
              />
              <div className="flex flex-col">
                <img
                  className="max-w-[100.16px] max-h-[76.54px]"
                  src={slide1}
                  alt=""
                />
                <div className="pt-[33.56px] w-full flex text-left  justify-between">
                  <div>
                    <h1 className="text-[19px] font-semibold leading-[20px] ">
                      The Little Mermaid
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-[13px]  ">ANNUALIZED NET RETURN</h1>
                    <h1 className="text-[18px] leading-[36px] ">
                      <span className="text-[25px] font-semibold leading-[24px]">
                        64.0%
                      </span>
                      378 days held
                    </h1>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </div>
        <div className="p-4 bg-transparent">
          <div>
            <li className="relative px-5 py-4 bg-white list-none">
              <img
                className="absolute top-5 right-[19px] w-[17px]"
                src={reverse}
                alt=""
              />
              <div className="flex flex-col">
                <img
                  className="max-w-[100.16px] max-h-[76.54px]"
                  src={slide1}
                  alt=""
                />
                <div className="pt-[33.56px] w-full flex text-left  justify-between">
                  <div>
                    <h1 className="text-[19px] font-semibold leading-[20px] ">
                      The Little Mermaid
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-[13px]  ">ANNUALIZED NET RETURN</h1>
                    <h1 className="text-[18px] leading-[36px] ">
                      <span className="text-[25px] font-semibold leading-[24px]">
                        64.0%
                      </span>
                      378 days held
                    </h1>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </div>
      </Slider>
      <div className="flex justify-center pt-6">
        <button className="next" onClick={() => sliderRef.current.slickNext()}>
          <img src={verticelnextArrow} alt="Prev" />
        </button>
      </div>
    </>
  );
}

export default VerticalMode;
