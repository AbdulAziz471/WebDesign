import TextWithImageHIsWBannar from "../../Components/Bannars/HowitsWorkPageBannars/TextWithImageHIsWBannar";
import TextWithImageBannar from "../../Components/Bannars/TextWithImageBannar";
import WhyFilmBannar from "../../Components/Bannars/WhyFilmPageBannar/WhyFilmBannar";
import EmailRequestAndBtns from "../../Components/EmailRequestAndBtns/EmailRequestAndBtns";
import MultipleBannars from "../../Components/TextWitImageBannar/TextWithImageBannar";
import Investbannar1 from "../../assets/images/Investbannar1.png";
import Investbannar2 from "../../assets/images/Investbannar2.png";
export default function WhyFilmPage() {
  return (
    <>
      <WhyFilmBannar />
      <div
        className="bg-[#EFEFEF] text-center pt-7 sm:pt-14  md:pt-24  lg:pt-[205px] 
        pb-4 sm:pb-7 md:pb-14 lg:pb-[73px] "
      >
        <h1 className="primary_heading !font-medium">
          Some of our customer-favorite features
        </h1>
      </div>
      <TextWithImageBannar
        bg_Color="!bg-[#EFEFEF]"
        containerClass=" flex-col sm:flex-col md:flex-row lg:flex-row "
        bannarContentClass="w-full text-center md:text-left  px-4 lg:px-[105px]"
        image={Investbannar1}
        heading="Price Appreciation vs 
        other asset classes"
        subHeading="Film has a long history as a transactable asset, with marketplaces and auction houses like Sotheby’s having existed for more than 275 years. Using public transaction data from the 1960s through today, our company has compiled art market indices to understand historical price changes. Between 1995 and 2022, film specifically has appreciated at a compound annual growth rate of 12.6%, outperforming the S&P 500."
        heading_class="lg:max-w-[300px] w-full"
      />
      <TextWithImageBannar
        bg_Color="!bg-[#EFEFEF]"
        containerClass=" flex-col sm:flex-col md:flex-row-reverse lg:flex-row-reverse "
        bannarContentClass="w-full text-center md:text-left  px-4 lg:px-[105px]"
        image={Investbannar2}
        heading="Low correlation to other 
        asset classes"
        subHeading="Contemporary Art Prices have historically demonstrated low correlation with other asset classes during periods of financial stress.

        "
        heading_class="lg:max-w-[350px] w-full"
      />

      <EmailRequestAndBtns
        bg_color="bg-[#EFEFEF]  pt-[172px]  "
        google_Btn=" !border-[#36613F]  "
        linkedin_btn=" !border-[#36613F] "
      />
    </>
  );
}
