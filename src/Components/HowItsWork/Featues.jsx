import features1 from "../../assets/images/features1.png";
import features2 from "../../assets/images/features2.png";
import features3 from "../../assets/images/features3.png";
import "./HowItsWork";
export default function Features() {
  return (
    <>
      <div className=" pt-8 pl-10 sm:pl-20 md:pl-28   lg:pl-[177px] pr-10 sm:pr-20 md:pr-28 lg:pr-[185px] text-[#1D1D1D]">
        <div className="pb-8">
          <h1 className=" pb-4 heading primary_heading font-medium">
            Featured In
          </h1>
        </div>
        <div class="features_images">
          <div class="image-container">
            <img src={features1} alt="" />
          </div>
          <div class="image-container">
            <img src={features2} alt="" />
          </div>
          <div class="image-container">
            <img src={features3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
