import HIWbannar1 from "../../../assets/images/HIWbannar1.png";
export default function TopBannar() {
  return (
    <div className="bg-[#1D1D1D] text-white">
      <div className="max-w-[1440px] mx-auto pr-5 mobile:pr-10  sm:pr-16  lg:pr-0 pl-5 mobile:pl-10  sm:pl-16  lg:pl-16 pt-4 mobile:pt-8 sm:pt-16 md:pt-32  lg:pt-[169px] pb-2 mobile:pb-10 sm:pb-16 md:pb-32 lg:pb-[170px] ">
        <div className="flex flex-col sm:flex-row  items-center gap-7">
          <div>
            <h1 className=" font-inter text-[23px]  mobile:text-[35px] sm:text-[40px] md:text-[60px] lg:text-[88.8px] leading-[30px] mobile:leading-[40.6px] sm:leading-[33px] md:leading-[50px] lg:leading-[81.84px] tracking-[-.07em] font-light ">
              A complete platform for &nbsp;
              <span className="italic font-combon font-normal   ">
                investing in film
              </span>
            </h1>
            <p className=" pt-4 md:pt-6 text-[11px] mobile:text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px]  leading-[15.7px] lg:leading-[35.7px]  sm: tracking-[ -0.05em] max-w-[40rem] ">
              With over 215 employees based in New York City, our company is the
              first and leading firm for buying and trading shares in
              multi-million dollar, blue-chip artworks. Build a diversified
              portfolio of iconic works of art curated by our industry-leading
              research and acquisition teams.
            </p>
          </div>
          <div className="w-full md:mb-[-300px] md:mr-[-102px]">
            <div className=" border-[#AAA9A4] border-[5px] rounded-[25px] overflow-hidden">
              <img className="w-full h-full " src={HIWbannar1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
