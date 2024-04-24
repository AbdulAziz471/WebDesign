import "./Header.css";
import React from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import menuIcon from "../../assets/Svg/menu_Icon.svg";
import { useAuth } from "../../../AuthContext";
export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  const isLoginPage = location.pathname === "/login";
  return (
    <>
      <div
        className={`header ${isLoginPage ? "bg-[#36493A]" : "bg-[#1D1D1D]"}`}
      >
        <div className=" max-w-[1440px] mx-auto text-white   border-[#99AA99]  ">
          <div className="flex justify-between items-center h-full ">
            <div className=" hidden   sm:flex pl-[20px] sm:pl-[40px] md-[100px] lg:pl-[120px]  gap-x-4 md:gap-x-8 lg:gap-x-12   items-center   ">
              <Link
                to="/howitwork"
                className="py-[23px] text-[18px] leading-[28px] tracking-[ -0.05em] font-normal"
              >
                How it Works
              </Link>
              <div class="icon-container">
                <Link className="" to="whyfilm">
                  Why Film
                </Link>
              </div>
              <Link className="py-[23px]" to="About">
                About
              </Link>
              <Link className="py-[23px]" to="PriceDatabase">
                Price Database
              </Link>
              {user && (
                <>
                  <Link className="py-[23px]" to="invest">
                    Invest Page
                  </Link>
                  <Link className="py-[23px]" to="portfolio">
                    My Portfolio
                  </Link>
                  <Link className="py-[23px]" to="Invite">
                    Invite
                  </Link>
                </>
              )}
            </div>
            <div className=" pl-[20px] flex sm:hidden lg:hidden  ">
              <Link to="#">
                <img src={menuIcon} alt="Menu Icon" />
              </Link>
            </div>
            {user ? (
              <button
                onClick={handleLogout}
                className="py-[23px] flex justify-center items-center  rounded-full bg-[#8CD2D9] h-12 w-12  text-[16px] leading-[16px] font-semibold text-black"
              >
                AB
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="py-[23px] mr-[12px] px-[48px] border-x-[0.5px] border-[#9A9A9A]"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
