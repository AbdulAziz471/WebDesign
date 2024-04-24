import "./Footer.css";
export default function RequestInvetation() {
  return (
    <>
      <div>
        <div className="flex justify-center flex-col items-center py-[75px] gap-y-[40px]">
          <div className="text-center">
            <h1 className="font-medium font-combon  primary_heading">
              Start Investing with Us
            </h1>
            <p className=" text-[12px] sm:text-[14px] md:text-[17px] lg:text-[21px]  tracking-[ -0.05em] leading-[20.7px] sm:leading-[25px] md:leading-[30px] lg:leading-[35.7px] ">
              What if you allocated 5% of your portfolio to films?
            </p>
          </div>
          <a className="btn_primary_with_icon" href="">
            Request Invitation
          </a>
        </div>
      </div>
    </>
  );
}
