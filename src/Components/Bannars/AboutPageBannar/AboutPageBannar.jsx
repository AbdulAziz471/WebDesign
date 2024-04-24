import AboutPageBannarImage from "../../../assets/images/AboutPageBannarImage.png";
export default function AboutPageBannar() {
  return (
    <div className="bg-[#1D1D1D]">
      <div className="max-w-[1440px] mx-auto pt-10 sm:pt-16 md:pt-24 lg:pt-[169px]">
        <div className="px-5 sm:px-9 md:px-16 lg:px-[93px] text-center text-white ">
          <h1 className="font-combon font-light  italic text-[30px] sm:text-[44px]  md:text-[60px]    lg:text-[88px] leading-[32px] sm:leading-[35px] md:leading-[60px] lg:leading-[81.8px] tracking-[-0.07em] sm:pb-10">
            Our mission is to make film &nbsp;
            <span className="italic font-normal">investable</span>
          </h1>
          <p className="lg:px-60 font-normal text-[14px] sm:text-[20px] md:text-[24px] lg:text-[28px] leading-[28px] sm:leading-[33.6px] md:leading-[33px] lg:leading-[47.6px] text-center tracking-[-0.05em]">
            Our company is the only platform that lets you invest in
            multi-million dollar films by artists like Basquiat, Picasso,
            Banksy, and more.
          </p>
        </div>
        <div>
          <img src={AboutPageBannarImage} alt="" />
        </div>
      </div>
    </div>
  );
}
