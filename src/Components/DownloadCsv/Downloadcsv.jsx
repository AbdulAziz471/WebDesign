import CSV from "../../assets/Svg/CSV.svg";
export default function Downloadcsv() {
  return (
    <>
      <div className="bg-[#37513C] text-white">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 md:px-10 lg:px-5">
          <button className="flex items-center gap-6 pb-16">
            <img src={CSV} alt="" />
            <span>Download CSV</span>
          </button>
          <div className="w-[73%] pb-[57px]">
            <ol class="list-decimal">
              <li className="list_item">
                Film: Links provided under the “Film” column in Detailed View
                mode relate to information provided at the time of the initial
                share offering and such information has not been updated.
              </li>
              <li className="list_item">
                Total Cost: Equals current shares held (including shares for
                which subscription funds have been received by us but which have
                not yet been issued) as of the latest quarterly report date
                multiplied by the weighted average cost basis of such shares,
                purchased either in primary offerings or on the trading market.
                Realized gains or losses resulting from shares sold on the
                trading market are excluded from the calculation of the cost
                basis.
              </li>

              <li className="list_item">
                Est. NAV Per Share: Equals Est. NAV (See below) divided by the
                number of fully diluted Class A shares outstanding.
              </li>
              <li className="list_item">
                Est. NAV.: Calculation is based on Masterworks internal
                appraisals of the underlying artwork, performed on a quarterly
                basis as of the end of each calendar quarter, net of all fees
                and expenses. For artwork for which no public auction comparable
                sale has occurred, the ‘fair market value’ of the artwork is
                deemed to be equal to the aggregate offering price, Artwork
                appraisals are performed by Masterworks in conformity with
                Uniform Standards of Professional Appraisal Practice (USPAP)
                using a ‘Sales Comparison Approach,’ a relative value comparison
                basis to sales transactions involving similar objects, provided
                that Masterworks has potential conflicts of interest. For more
                information on Masterworks appraisal methodology, performance
                metrics, potential conflicts of interest and other important
                considerations, click here. In the event an issuer's underlying
                artwork has been contracted to sell, but the sale has not been
                consummated as of the report date, the Est. NAV of that issuer
                will reflect the contracted sale price and estimated liquidation
                date. Est. NAV is not impacted by transactions on the trading
                market.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
