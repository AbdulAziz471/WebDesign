import googlebutton from "../../assets/Svg/googlebutton.svg";
import linkedin from "../../assets/Svg/linkedin.svg";

export default function ButtonGroup({
  btnColor,
  Group_btn_class,
  google_Btn,
  linkedin_btn,
}) {
  return (
    <>
      <div
        className={`w-full flex flex-col sm:flex-row gap-4 ${Group_btn_class}`}
      >
        <a
          className={`w-full py-3 mobile:py-3 sm:py-4 text-center  border text-[12px]  sm:text-[18px] leading-[18px] tracking-[ -0.05em] flex justify-center items-center gap-x-2 ${google_Btn}`}
          href=""
        >
          Continue with Google
          <img src={googlebutton} alt="" />
        </a>
        <a
          className={`w-full py-3 mobile:py-3 sm:py-4 text-center  border text-[12px]  sm:text-[18px] leading-[18px] tracking-[ -0.05em] flex justify-center items-center gap-x-2 ${linkedin_btn}`}
          href=""
        >
          Continue with LinkedIn
          <img src={linkedin} alt="" />
        </a>
      </div>
    </>
  );
}
