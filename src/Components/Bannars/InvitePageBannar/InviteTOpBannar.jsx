import inviteBannar from "../../../assets/images/inviteBannar.png";
export default function InviteTOpBannar() {
  return (
    <>
      <div className="bg-[#1D1D1D] text-white">
        <div className="max-w-[1440px] mx-auto px-16 pt-20 flex gap-y-10 text-center sm:text-left flex-col-reverse sm:flex-row justify-between items-center">
          <div className="w-full sm:w-1/2">
            <h1 className=" font-light text-[30px] sm:text-[44px]  md:text-[60px]    lg:text-[88px] leading-[32px] sm:leading-[35px] md:leading-[60px] lg:leading-[81.8px]  tracking-[-0.07em] pb-2 sm:pb-10">
              Share the gift of{" "}
              <span className="font-combon font-normal  italic  text-[30px] sm:text-[44px]  md:text-[60px]    lg:text-[88px] leading-[32px] sm:leading-[35px] md:leading-[60px] lg:leading-[81.8px]   tracking-[-0.07em] pb-2 sm:pb-10">
                investing in film
              </span>
            </h1>
            <p className="text-[14px] sm:text-[20px] md:text-[24px] lg:text-[28px] leading-[28px] sm:leading-[33.6px] md:leading-[33px] lg:leading-[47.6px] tracking-[-0.04em] ">
              Invite friends and we’ll let them skip the waitlist
            </p>
          </div>
          <div className="w-full sm:w-1/2">
            <img src={inviteBannar} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
