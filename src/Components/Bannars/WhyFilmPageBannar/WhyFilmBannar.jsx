import whyfilmBannarImage from "../../../assets/images/whyfilmBannarImage.png";
export default function WhyFilmBannar() {
  return (
    <>
      <div className="bg-[#1D1D1D] text-white">
        <section className="max-w-[1440px] mx-auto">
          <div className="text-center  py-20 px-10 sm:px-20 md:px-28 lg:px-40  flex flex-col items-center gap-4 sm:gap-14 md:gap-28 lg:gap-[150px] ">
            <div className="flex flex-col items-center">
              <span
                className="font-combon italic  mobile:text-[30px] sm:text-[45px] md:text-[60px]  lg:text-[72px]text-white  tracking-[-0.07em] font-light 
              lg:leading-[66.96px]"
              >
                Enhance the performance
              </span>
              <p
                className="text-[30px] sm:text-[45px] md:text-[60px] lg:tracking-[-0.07em] lg:text-[72px]text-white  tracking-[-0.07em] font-light 
              lg:leading-[66.96px]"
              >
                of a traditional stock and bond portfolio by allocating to film
              </p>
              <p
                className="pt-10  text-[15px] sm:text-[16px] md:text-[18px] lg:text-[tracking-[-0.07em] w-full   lg:max-w-[70%]
]  leading-[20.7px] lg:leading-[35.7px]  sm: tracking-[ -0.05em]"
              >
                Relative to a traditional portfolio composed of 60% large-cap
                stocks and 40% bonds, a portfolio which includes some allocation
                to film has historically shown the ability to drive higher
                returns, as well as improve the risk-adjusted appreciation rate
                at a given target return. Learn how allocating up to 35% to art
                could impact your portfolio.
              </p>
            </div>
            <div>
              <img src={whyfilmBannarImage} alt="" />
            </div>
          </div>
          <div>
            <div className="bg-[#1D1D1D]">
              <div className=" ml-[105px] bg-[#37513C] rounded-tl-[16px] pl-[89px] pt-[61px] pb-[86px]">
                <div className="">
                  <p
                    className="heading  text-white  text-[30px] sm:text-[45px] md:text-[60px] lg:text-[72px] lg:leading-[66.96px] tracking-[-0.07em]
 font-light  "
                  >
                    Benefits of &nbsp;
                  </p>
                  <span className="font-combon italic  text-[30px] sm:text-[45px] md:text-[60px] lg:text-[72px] text-white leading-[66.96px] tracking-[-0.07em] font-light">
                    Investing In Film
                  </span>
                </div>
                <div className=" w-3/4  pb-20 flex justify-between p-4 text-white">
                  <h1 className=" relative z-30  before:content-[''] before:w-12 before:h-12 before:bg-[#56685A] before:rounded-3xl before:absolute before:bg-red  before:-top-3 before:-left-3 before:z-[-1]   ">
                    Capital Appreciation
                  </h1>
                  <div className="border-r border-gray-400" />
                  <h1 className="relative z-30  before:content-[''] before:w-12 before:h-12 before:bg-[#56685A] before:rounded-3xl before:absolute before:bg-red  before:-top-3 before:-left-6 before:z-[-1]   ">
                    Low Loss Rates
                  </h1>
                  <div className="border-r border-gray-400" />
                  <h1 className="relative z-30  before:content-[''] before:w-12 before:h-12 before:bg-[#56685A] before:rounded-3xl before:absolute before:bg-red  before:-top-3 before:-left-6 before:z-[-1]  ">
                    Uncorrelated
                  </h1>
                </div>
                <div className="w-full h-[1px] bg-gray-400"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
