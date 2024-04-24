import Investbannar1 from "../../assets/images/Investbannar1.png";
import Investbannar2 from "../../assets/images/Investbannar2.png";

const TextWithImageBannar = ({
  image,
  heading,
  subHeading,
  containerClass,
  bannarContentClass,
}) => {
  return (
    <>
      <div className="">
        <div
          className={`max-w-[1440px]  mx-auto px-5 sm:px-14 md:px-20 lg:px-24 py-10 md:py-0 flex border-b gap-y-4 border-b-zinc-400 border-opacity-20  items-center flex-col   ${containerClass}`}
        >
          <div className="w-1/2 md:w-full lg:w-full">
            <img src={image} alt="" />
          </div>
          <div className={` ${bannarContentClass}`}>
            <h1 className="bannar_heading pb-4">{heading}</h1>
            <p className="bannar_Sub_Heading">{subHeading}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default function MultipleBannars({
  
}) {
  return (
    <>
      <div className="bg-[#EFEFEF]">
        <div className="pb-[63px]">
          <TextWithImageBannar
            containerClass=" flex-col sm:flex-col md:flex-row lg:flex-row"
            bannarContentClass="w-full text-center md:text-left  px-4 lg:px-[105px]"
            image={Investbannar1}
            heading="After investing, sell your shares to other members"
            subHeading="Film has a long history as a transactable asset, with marketplaces and auction houses like Sotheby’s having existed for more than 275 years. Using public transaction data from the 1960s through today, our company has compiled art market indices to understand historical price changes. Between 1995 and 2022, film specifically has appreciated at a compound annual growth rate of 12.6%, outperforming the S&P 500."
          />
          <TextWithImageBannar
            containerClass=" flex-col sm:flex-col md:flex-row-reverse lg:flex-row-reverse"
            bannarContentClass="w-full text-center md:text-left  px-4 lg:px-[105px]"
            image={Investbannar2}
            heading="Growth and low correlation during inflationary periods"
            subHeading="Contemporary Art Prices have historically demonstrated low correlation with other asset classes during periods of financial stress.

        "
          />
        </div>
      </div>
    </>
  );
}
