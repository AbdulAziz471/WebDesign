import React, { useState } from "react";
import ProfileMainSection from "../../Components/ProfileTabs/ProfileMainSection";

export default function ProfilePage() {
  const [selectedTab, setSelectedTab] = useState("main");

  const getHeading = () => {
    switch (selectedTab) {
      case "accreditation":
        return "Accreditation";
      case "investment-history":
        return "Investment history";
      case "payment-methods":
        return "Payment Methods";
      case "brokerage-accounts":
        return "Brokerage Account";
      case "documents":
        return "Documents";
      case "communications":
        return "Communication";

      default:
        return "Profile";
    }
  };
  return (
    <>
      <div className="bg-[#1D1D1D]">
        <div className="max-w-[1440px] mx-auto px-[107px] pt-[131px] pb-[84px]">
          <h1 className="font-light max-w-[500px] w-full text-white heading text-[80px] leading-[74.4px] tracking-[-.07em]">
            Your{" "}
            <span className="font-combon font-normal italic text-[80px] leading-[74.4px] tracking-[-.07em]">
              {getHeading()}
            </span>
          </h1>
        </div>
      </div>
      <ProfileMainSection
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </>
  );
}
