const TextWithImageBannar = ({
  image,
  heading,
  subHeading,
  containerClass,
  bannarContentClass,
  bg_Color,
  heading_class,
  subHeading_class,
}) => {
  return (
    <>
      <div className={`${bg_Color}`}>
        <div
          className={`max-w-[1440px]  mx-auto px-5 sm:px-14 md:px-20 lg:px-24 py-10 md:py-0 flex border-b gap-y-4 border-b-zinc-400 border-opacity-20  items-center flex-col   ${containerClass}`}
        >
          <div className="w-1/2 md:w-full lg:w-full">
            <img src={image} alt="" />
          </div>
          <div className={` ${bannarContentClass}`}>
            <h1 className={`bannar_heading pb-4 ${heading_class}`}>
              {heading}
            </h1>
            <p className={`bannar_Sub_Heading ${subHeading_class}`}>
              {subHeading}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default TextWithImageBannar;
