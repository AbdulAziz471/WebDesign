import Downloadcsv from "../../Components/DownloadCsv/Downloadcsv";
import PortfolioChart from "../../Components/Portfolio/PortfolioChart";

export default function PortfolioPage() {
  return (
    <>
      <div className="bg-[#1D1D1D] text-white">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 md:px-10 lg:px-16 py-4 sm:py-14 md:py-28  lg:py-[168px]">
          <p
            className="heading  text-white  text-[30px] sm:text-[45px] md:text-[60px] lg:text-[72px] lg:leading-[66.96px] tracking-[-0.07em]
          font-light   "
          >
            My&nbsp;
            <span
              className="font-combon  italic  text-[30px] sm:text-[45px] md:text-[60px] lg:text-[72px] text-white leading-[66.96px] tracking-[-0.07em]
            font-normal"
            >
              Portfolio
            </span>
          </p>
        </div>
      </div>

      <PortfolioChart />
      <Downloadcsv />
    </>
  );
}
