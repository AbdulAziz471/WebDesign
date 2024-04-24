function CustomerReviewCard({ quote, image, companyName, teamName }) {
  return (
    <div className="bg-white p-8 rounded-[8px] flex justify-between flex-col">
      <p className="font-Tiempos font-light text-[17px] leading-[28.8px] tracking-[0.03em]">
        "{quote}"
      </p>
      <div className="flex items-center mt-4">
        <img className="max-w-12 w-full" alt={companyName} src={image} />
        <div className="ml-2">
          <p className="font-DINRound font-bold text-[16px] leading-[25.5px]">
            {companyName}
          </p>
          <p className="font-DINRound font-normal text-[16px] leading-[25.5px]">
            {teamName}
          </p>
        </div>
      </div>
    </div>
  );
}
export default CustomerReviewCard;
