import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const AChart = () => {
  useEffect(() => {
    const options = {
      series: [
        {
          name: "series1",
          data: [3100, 3110, 3120, 3125, 3135, 3130, 3140],
        },
        {
          name: "series2",
          data: [2990, 2800, 2990, 2950, 2900, 3000, 3100],
        },
        {
          name: "series3",
          data: [3100, 2911, 3000, 2900, 2900, 3000, 3100],
        },
        {
          name: "series4",
          data: [3010, 2900, 2900, 2900, 2900, 3000, 3100],
        },
        {
          name: "series5",
          data: [3000, 3200, 3150, 2990, 3000, 3000, 3100],
        },
      ],
      responsive: [
        {
          breakpoint: 640,
          options: {
            chart: {
              height: 300,
            },
          },
        },
      ],
      chart: {
        height: 520,

        type: "area",
        toolbar: {
          show: false,
        },
      },
      legend: {
        horizontalAlign: "top",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    };

    const chart = new ApexCharts(document.querySelector("#Achart"), options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="Achart" />;
};

const BarChart = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex py-3 sm:py-24 flex-col items-center justify-center text-left">
          <div className="lg:px-[177px] md:px-[140px] sm:px-24 px-4  text-left w-full">
            <h1 className=" text-[#1D1D1D] text-[18px] mobile:text-[20px] sm:text-[25px] font-semibold mobile:leading-[30px] sm:leading-[57.6px] tracking-[ -0.05em]">
              Strong Historical Film Appreciation
            </h1>
            <p className=" text-[#1D1D1D] text-[13px] sm:text-[16px] leading-[23.4px] tracking-[0.01em]">
              Source: BP Statistical Review of Film 2023
            </p>
            <AChart />
          </div>
        </div>
      </div>
    </>
  );
};
export default BarChart;
