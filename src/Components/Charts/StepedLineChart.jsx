import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import { v4 as uuidv4 } from "uuid";
const SteplineChart = () => {
  const chartRef = useRef(null);
  const chartId = useRef(uuidv4());
  useEffect(() => {
    const options = {
      series: [
        {
          name: "Similar Sales",
          data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
        },
        {
          name: "Record Price",
          data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
        },
        {
          name: "Repeat Sales",
          data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
        },
      ],
      legend: {
        position: "top",
        horizontalAlign: "top",
      },
      chart: {
        type: "line",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: "stepline",
      },
      dataLabels: {
        enabled: false,
      },
      //   title: {
      //     text: "Stepline Chart",
      //     align: "left",
      //   },
      markers: {
        hover: {
          sizeOffset: 4,
        },
      },
    };

    const chart = new ApexCharts(
      document.querySelector("#stepline-chart"),
      options
    );
    chart.render();

    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();
      return () => chart.destroy();
    }
  }, []);

  return <div id={chartId.current} ref={chartRef}></div>;
};

export default SteplineChart;
