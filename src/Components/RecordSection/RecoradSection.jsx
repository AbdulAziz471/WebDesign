import Loadbtn from "./LoadBtn";
import RecordCard from "./RecordCards";

export default function RecoardSection() {
  return (
    <>
      <div className="bg-[#37513C] text-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-14 md:px-28 lg:px-52 pb-10 ">
          <div className="text-center md:text-left pt-11">
            <p className="learn_more">Learn more</p>

            <h1 className=" md:!pb-2 heading text-[30px] sm:text-[30px] md:text-[40px] lg:text-[48px] leading-[  57.6px] font-medium ">
              Net Annualized Track Record
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5">
            <RecordCard />
            <RecordCard /> <RecordCard /> <RecordCard /> <RecordCard />{" "}
            <RecordCard /> <RecordCard />
            <RecordCard />
            <RecordCard /> <RecordCard /> <RecordCard /> <RecordCard />{" "}
          </div>
          <Loadbtn />
        </div>
      </div>
    </>
  );
}
