import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import { v4 as uuidv4 } from "uuid";
const StepedLineChartPortfolio = () => {
  const chartRef = useRef(null);
  const chartId = useRef(uuidv4());
  useEffect(() => {
    const options = {
      series: [
        {
          name: "Comparable Sale",
          data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
        },
        {
          name: "Film Exit",
          data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
        },
      ],
      legend: {
        position: "bottom",
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
      markers: {
        hover: {
          sizeOffset: 4,
        },
      },
      //   yaxis: {
      //     labels: true,
      //   },
      //   yaxis: {
      //     labels: false,
      //   },
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

export default StepedLineChartPortfolio;
