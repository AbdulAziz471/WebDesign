import CustomerReviewCard from "./CustomerReviewCard";
import "./customersreview.css";
import fabfitfunreview from "../../assets/images/fabfitfunreview.png";
import instacartreview from "../../assets/images/instacartreview.png";
import pintreview from "../../assets/images/pintreview.png";
import upworkreview from "../../assets/images/upworkreview.png";
import slackreview from "../../assets/images/slackreview.png";

const reviewsData = [
  {
    quote:
      "Idiomatic allows us to more accurately identify and quantify tickets which helped us put together a strategy to improve the customer experience.",
    image: pintreview,
    companyName: "Pinterest",
    teamName: "Customer Support Team",
  },
  {
    quote:
      "We basically have two timelines in our company: pre-Idiomatic (not useful) and post-Idiomatic (what everyone uses)",
    image: instacartreview,
    companyName: "Instacart",
    teamName: "Customer Experience Team",
  },
  {
    quote:
      "Idiomatic gave us the customer voice insights we needed to improve support operations while eliminating the need for manual reviews.",
    image: upworkreview,
    companyName: "Upwork",
    teamName: "Customer Support Team",
  },
  {
    quote:
      "We have never had the ability to look at marketing survey data like this!",
    image: fabfitfunreview,
    companyName: "FabFitFun",
    teamName: "Customer Support Team",
  },
  {
    quote:
      "Idiomatic is critical for my analysis and consequently the insights I surface to the product team.",
    image: pintreview,
    companyName: "Pinterest",
    teamName: "Customer Support Team",
  },
  {
    quote:
      "We have never had the ability to look at marketing survey data like this!",
    image: slackreview,
    companyName: "Slack",
    teamName: "Customer Support Team",
  },
];

export default function CustomersReview() {
  return (
    <div className="bg-[#37513C]">
      <div className="max-w-[1440px] mx-auto  pt-2 sm:pt-8 md:pt-14 lg:pt-24 pb-7 sm:pb-20 md:pb-32 lg:pb-48 px-3 sm:px-10 md:px-16 lg:px-[204px]">
        <div className="text-center">
          <p className="primary_heading heading text-white">
            What our customers say
          </p>
        </div>
        <div className=" p-8">
          <div className=" grid-container flex flex-col sm:grid  md:grid-cols-2 lg:grid-cols-3 gap-[10px] ">
            {reviewsData.map((review, index) => (
              <CustomerReviewCard
                key={index}
                quote={review.quote}
                image={review.image}
                companyName={review.companyName}
                teamName={review.teamName}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
