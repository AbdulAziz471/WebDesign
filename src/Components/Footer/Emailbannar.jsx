export default function EmailBannar() {
  return (
    <>
      <div className="">
        <div className="border-y-[0.5px]  border-[#99AA99]">
          <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row  gap-y-6 justify-between py-14 items-center">
            <div className="flex w-full text-center sm:text-center md:text-left lg:text-left sm:w-full gap-x-2 md:w-2/3   lg:w-2/5 flex-col sm:flex-col md:flex-row lg:flex-row  ">
              <h2 className="text-[32px] font-combon font-semibold leading-[44.8px]">
                Join our newsletter
              </h2>
              <p
                className="text-[18px]  leading-[30.6px] tracking
-[ -0.05em] opacity-[70%] "
              >
                Join us to receive news, updates and stories on our company.
              </p>
            </div>
            <div className="w-4/5 sm:w-1/2 md:w-[38%] lg:w-[38%] ">
              <div class="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  class="block w-full z-20 text-[18px] leading-[28.8px]  text-white bg-[#FFFFFF24] rounded-e-lg rounded-s-gray-100 rounded-[8px] border border-[#498856] focus:border-2 outline-none focus:border-[#498856] py-[10px] pl-[14px] "
                  placeholder="Email Address"
                  required
                />
                <button
                  type="submit"
                  class="absolute top-0 end-0 h-full text-white bg-[#498856] rounded-e-lg px-[20px]  "
                >
                  <svg
                    width="8.94px"
                    height="14.2px"
                    viewBox="0 0 9 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-0.000854492 12.5256L5.28228 7.1L-0.000854492 1.67442L1.6296 0L8.54318 7.1L1.6296 14.2L-0.000854492 12.5256Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
