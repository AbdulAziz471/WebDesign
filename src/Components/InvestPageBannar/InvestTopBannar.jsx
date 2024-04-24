import image from "../../assets/images/image.png";
export default function InvestTopBannar() {
  return (
    <>
      <div className="relative bg-[#1D1D1D] overflow-hidden">
        <img
          className="absolute -rotate-12 -right-[450px]  z-0  "
          src={image}
          alt=""
        />
        <div className="max-w-[1440px] mx-auto pt-5 sm:pt-20 md:pt-40 lg:pt-[200px] pb-5 sm:pb-20 md:pb-40    lg:pb-36">
          <p
            className="heading  text-white  text-[30px] sm:text-[45px] md:text-[60px] lg:text-[72px] lg:leading-[66.96px] tracking-[-0.07em]
 font-light"
          >
            Good evening,
          </p>
          <span
            className="font-combon italic  text-[30px] sm:text-[45px] md:text-[60px] lg:text-[72px] text-white leading-[66.96px] tracking-[-0.07em]
 font-light"
          >
            Mary Jane
          </span>
        </div>
      </div>
    </>
  );
}
