import stars from "../../assets/Svg/stars.svg";
import workcard from "../../assets/Svg/workcard.svg";
const HowitsWorkCard = ({
  card1_Img,
  card1_heading,
  card1_discription,
  card2_Img,
  card2_heading,
  card2_discription,
  card3_Img,
  card3_heading,
  card3_discription,
}) => {
  return (
    <>
      <div className="flex pt-[50px] items-center md:items-stretch  flex-col  md:flex-row">
        <div className="howitsWorkCards">
          <img className="" src={card1_Img} alt="" />
          <div>
            <h1 className="howitsWorkCardsheading font-combon font-bold ">
              {card1_heading}
            </h1>
            <p className="text-[12px] leading-[20px] tracking-[-.01em] font-medium">
              {card1_discription}
            </p>
          </div>
        </div>
        <img
          className=" rotate-90 md:rotate-0 py-4 md:p-0"
          src={workcard}
          alt=""
        />
        <div className="howitsWorkCards ">
          <img src={card2_Img} alt="" />
          <div>
            <h1 className="howitsWorkCardsheading font-combon font-bold   ">
              {card2_heading}
            </h1>
            <p className="text-[12px] leading-[20px] tracking-[-.01em] font-medium">
              {card2_discription}
            </p>
          </div>
        </div>
        <img
          className=" rotate-90 md:rotate-0 py-4 md:p-0"
          src={workcard}
          alt=""
        />
        <div className="howitsWorkCards">
          <img src={card3_Img} alt="" />
          <div>
            <h1 className="howitsWorkCardsheading  font-combon font-bold  ">
              {card3_heading}
            </h1>
            <p className="text-[12px] leading-[20px] tracking-[-.01em] font-medium  ">
              {card3_discription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowitsWorkCard;
