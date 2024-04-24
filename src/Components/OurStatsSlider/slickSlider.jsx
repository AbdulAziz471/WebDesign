import React, { useRef } from "react";
import Slider from "react-slick";
import reverse from "../../assets/Svg/reverse.svg";
import slide1 from "../../assets/images/slide1.png";
import leftarrow from "../../assets/Svg/leftarrow.svg";
import rightArrow from "../../assets/Svg/rightArrow.svg";

function SampleNextArrow(props) {
  const { onClick } = props;
  return <div onClick={onClick}></div>;
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return <div onClick={onClick}></div>;
}
function CenterMode() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "22%",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <div className="slider-container">
          <div className="flex justify-between items-end w-[90%] pb-12">
            <div className="w-1/3">
              <p className="learn_more">Our Stats</p>
              <h1 className="heading primary_heading">
                Net Annualized Track Record
              </h1>
            </div>
            <div className="ui">
              <button
                className="prev"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <img src={leftarrow} alt="Prev" />
              </button>
              <button
                className="next"
                onClick={() => sliderRef.current.slickNext()}
              >
                <img src={rightArrow} alt="Next" />
              </button>
            </div>
          </div>
          <Slider ref={sliderRef} {...settings}>
            <div className="p-4 bg-transparent">
              <div>
                <li className="relative p-14 bg-white list-none">
                  <img
                    className="absolute top-5 right-[19px]"
                    src={reverse}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <img
                      className="max-w-[139.16px] max-h-[76.54px]"
                      src={slide1}
                      alt=""
                    />
                    <div className="pt-[33.56px] w-full flex text-left gap-x-14">
                      <div>
                        <h1 className="text-[32px] font-semibold leading-[44.8px] text-nowrap">
                          The Little Mermaid
                        </h1>
                      </div>
                      <div>
                        <h1>ANNUALIZED NET RETURN</h1>
                        <h1 className="text-[20px] leading-[36px] text-nowrap">
                          <span className="text-[52px] font-semibold leading-[93px]">
                            64.0%
                          </span>{" "}
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
                <li className="relative p-14 bg-white list-none">
                  <img
                    className="absolute top-5 right-[19px]"
                    src={reverse}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <img
                      className="max-w-[139.16px] max-h-[76.54px]"
                      src={slide1}
                      alt=""
                    />
                    <div className="pt-[33.56px] w-full flex text-left gap-x-14">
                      <div>
                        <h1 className="text-[32px] font-semibold leading-[44.8px] text-nowrap">
                          The Little Mermaid
                        </h1>
                      </div>
                      <div>
                        <h1>ANNUALIZED NET RETURN</h1>
                        <h1 className="text-[20px] leading-[36px] text-nowrap">
                          <span className="text-[52px] font-semibold leading-[93px]">
                            64.0%
                          </span>{" "}
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
                <li className="relative p-14 bg-white list-none">
                  <img
                    className="absolute top-5 right-[19px]"
                    src={reverse}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <img
                      className="max-w-[139.16px] max-h-[76.54px]"
                      src={slide1}
                      alt=""
                    />
                    <div className="pt-[33.56px] w-full flex text-left gap-x-14">
                      <div>
                        <h1 className="text-[32px] font-semibold leading-[44.8px] text-nowrap">
                          The Little Mermaid
                        </h1>
                      </div>
                      <div>
                        <h1>ANNUALIZED NET RETURN</h1>
                        <h1 className="text-[20px] leading-[36px] text-nowrap">
                          <span className="text-[52px] font-semibold leading-[93px]">
                            64.0%
                          </span>{" "}
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
                <li className="relative p-14 bg-white list-none">
                  <img
                    className="absolute top-5 right-[19px]"
                    src={reverse}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <img
                      className="max-w-[139.16px] max-h-[76.54px]"
                      src={slide1}
                      alt=""
                    />
                    <div className="pt-[33.56px] w-full flex text-left gap-x-14">
                      <div>
                        <h1 className="text-[32px] font-semibold leading-[44.8px] text-nowrap">
                          The Little Mermaid
                        </h1>
                      </div>
                      <div>
                        <h1>ANNUALIZED NET RETURN</h1>
                        <h1 className="text-[20px] leading-[36px] text-nowrap">
                          <span className="text-[52px] font-semibold leading-[93px]">
                            64.0%
                          </span>{" "}
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
                <li className="relative p-14 bg-white list-none">
                  <img
                    className="absolute top-5 right-[19px]"
                    src={reverse}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <img
                      className="max-w-[139.16px] max-h-[76.54px]"
                      src={slide1}
                      alt=""
                    />
                    <div className="pt-[33.56px] w-full flex text-left gap-x-14">
                      <div>
                        <h1 className="text-[32px] font-semibold leading-[44.8px] text-nowrap">
                          The Little Mermaid
                        </h1>
                      </div>
                      <div>
                        <h1>ANNUALIZED NET RETURN</h1>
                        <h1 className="text-[20px] leading-[36px] text-nowrap">
                          <span className="text-[52px] font-semibold leading-[93px]">
                            64.0%
                          </span>{" "}
                          378 days held
                        </h1>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            </div>
          </Slider>
          <div className="w-[90%]">
            <p className="text-[14px] leading-[25.32px] w-3/4 pt-[48px] pb-11">
              The annualized internal rate of return net of all fees and costs,
              calculated from the closing date of the primary offering to the
              date the sale is consummated. IRR may not be indicative of
              Masterworks paintings not yet sold and past performance is not
              indicative of future results.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CenterMode;
