import AboutPageBannar from "../../Components/Bannars/AboutPageBannar/AboutPageBannar";
import CustomersReview from "../../Components/CustomersReviews/CustomersReview";
import IconsBar from "../../Components/IconsBar/IconsBar";
import InvestmentPlateForm from "../../Components/InvestmentPlateForm/InvestmentPlateForm";
import JoinOurTeam from "../../Components/JoinOurTeamSection/JoinOurTeam";

export default function AboutUsPage() {
  return (
    <div>
      <AboutPageBannar />
      <InvestmentPlateForm />
      <IconsBar mainContaner="!bg-[#EFEFEF]" />
      <CustomersReview />
      <JoinOurTeam />
    </div>
  );
}
