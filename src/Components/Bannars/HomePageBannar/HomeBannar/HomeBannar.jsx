import homebannar from "../../../../assets/Videos/homebannar.mp4";
import Figures from "./Figures";
import "./Homebannar.css";
export default function HomeBannar() {
  return (
    <>
      <div className="bg-[#1D1D1D]">
        <div className="max-w-[1440px] mx-auto">
          <div className=" text-white text-center pt-5  mobile:pt-10 sm:pt-[89px]">
            <h1 className=" font-inter  text-[35px] mobile:text-[50px] sm:text-[80px] md:text-[100px] lg:text-[120px]    leading-[40.6px] sm:leading-[75.6px] md:leading-[90.6px] lg:leading-[111.6px] sm:tracking-[-7px] ">
              Film
              <span className="italic font-combon font-normal   ">
                investing
              </span>{" "}
              for all
            </h1>
            <p className="pt-2 sm:pt-[24px] text-[15px] sm:text-[16px] md:text-[18px] lg:text-[21px]  leading-[20.7px] lg:leading-[35.7px]  sm: tracking-[ -0.05em]">
              What if you allocated 5% of your portfolio to films?
            </p>
          </div>
          <div className="w-full relative flex justify-center py-20">
            <div className="absolute top-8 sm:top-14 w-[90%] mobile:w-[70%]">
              <div class="relative w-full block">
                <input
                  type="search"
                  id="search-dropdown"
                  class="block w-full z-20 bg-white text-[12px] mobile:text-[18px] leading-[28.8px]  text-black bg-[#FFFFFF24] rounded-e-lg rounded-s-gray-100 rounded-[8px] border border-[#498856] focus:border-2 outline-none focus:border-[#498856] py-[5px] sm:py-[10px]  pl-[14px] "
                  placeholder="Enter your email address"
                  required
                />
                <button
                  type="submit"
                  class="absolute top-0 end-0 h-full text-white bg-[#498856] rounded-e-lg px-[10px]  sm:px-[20px] md:px-[30px] lg:px-[45px] text-[12px] mobile:text-[18px] leading-[18px] tracking-[ -0.05em]  "
                >
                  Request Invitation
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <video autoplay controls className="video">
                <source src={homebannar} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        {/* <Figures /> */}
      </div>
    </>
  );
}
