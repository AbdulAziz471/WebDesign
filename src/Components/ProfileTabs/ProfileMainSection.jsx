import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import tabIcon from "../../assets/Svg/tabIcon.svg";
function ProfileMainSection({ selectedTab, setSelectedTab }) {
  const navLinks = [
    { title: "PROFILE", path: "" },
    { title: "ACCREDITATION", path: "accreditation" },
    { title: "INVESTMENT HISTORY", path: "investment-history" },
    { title: "PAYMENT METHODS", path: "payment-methods" },
    { title: "BROKERAGE ACCOUNTS", path: "brokerage-accounts" },
    { title: "DOCUMENTS", path: "documents" },
    { title: "COMMUNICATIONS", path: "communications" },
    { title: "LOG OUT", path: "/logout" },
  ];

  return (
    <>
      <div className="bg-[#37513C]">
        <div className="max-w-[1440px] mx-auto pl-24 pt-[72px] pb-[157px] text-white">
          <div className="flex justify-between flex-row gap-16">
            <div className="w-2/5">
              <div className="pb-10">
                <h1 className="pb-2 font-medium text-[28px] leading-[39.2px] tracking-[-0.04em]">
                  Mary Jane Rogers
                </h1>
                <p className="font-normal text-[20px] leading-[28px] tracking-[-0.04em]">
                  maryjane@gmail.com
                </p>
              </div>
              <div className="pb-[72px]">
                <p className="font-normal text-[16px] pb-10 leading-[22.4px] tracking-[-0.04em]">
                  User ID: 1de9c4e5-b442-4823-9ac2-df757286d49d
                </p>
                <p className="font-normal text-[16px] leading-[22.4px] tracking-[-0.04em]">
                  This your account’s unique identifier. Use this when
                  contacting Customer Support or for your records.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.path}
                    className="border-b flex items-center gap-4 border-[#587A5E] pb-6"
                    onClick={() => setSelectedTab(link.path)}
                  >
                    {link.title}
                    {selectedTab === link.path && (
                      <span>
                        <img src={tabIcon} alt="" />
                      </span>
                    )}
                  </NavLink>
                ))}
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileMainSection;
