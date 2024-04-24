import mobileview from "../../../assets/images/mobileview.png";
export default function TextWithImageHIsWBannar({
  bannarImage,
  bannarformation_Class,
  bannar_heading_Class,
  bannar_heading,
  bannarSpanclass,
  bannarSpan,
  bannar_subheadingClass,
  bannar_subheading,
  bannar_subheading_2,
  Content,
}) {
  return (
    <div className="bg-[#37513C]  ">
      <div
        className={` text-white gap-5 py-3 sm:py-0 px-3 sm:px-0  max-w-[1440px] mx-auto flex flex-col  md:flex-row   items-center justify-center md:pt-20 lg:pt-[132px]  ${bannarformation_Class}`}
      >
        <div className=" w-[73%] ">
          <img src={bannarImage} alt="" />
        </div>
        <div className={` w-3/4 lg:w-full ${Content}`}>
          <h1
            className={` lg:max-w-[500px] w-full text-white  text-[30px] sm:text-[45px] md:text-[60px] lg:text-[72px] leading-[30px] mobile:leading-[33px] sm:leading-[40px] md:leading-[50px] lg:leading-[66.96px] tracking-[-0.07em] pb-1 lg:pb-10
 font-light text-center md:text-left ${bannar_heading_Class}`}
          >
            {bannar_heading} <br />{" "}
            <span
              className={`font-combon heading  italic  text-[30px] mobile:leading-[33px] sm:text-[45px] md:text-[60px] lg:text-[72px] text-white sm:leading-[40px] md:leading-[50px] lg:leading-[66.96px] tracking-[-0.07em]
 font-light ${bannarSpanclass}`}
            >
              {bannarSpan}
            </span>
          </h1>
          <p
            className={` text-[12px] sm:text-[14px] md:text-[17px] lg:text-[21px]  tracking-[ -0.05em] leading-[20.7px] sm:leading-[25px] md:leading-[30px] lg:leading-[35.7px]    ${bannar_subheadingClass}`}
          >
            {bannar_subheading}
          </p>
          <br />
          <p
            className={` text-[12px] sm:text-[14px] md:text-[17px] lg:text-[21px]  tracking-[ -0.05em] leading-[20.7px] sm:leading-[25px] md:leading-[30px] lg:leading-[35.7px]  ${bannar_subheadingClass}`}
          >
            {bannar_subheading_2}
          </p>
        </div>
      </div>
    </div>
  );
}
