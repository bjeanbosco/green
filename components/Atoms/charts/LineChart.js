import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let myChart = null;

    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Check if a chart instance already exists and destroy it
      if (myChart) {
        myChart.destroy();
      }

      // Create the new chart with fade effect
      myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: data.map((item) => item.year),
          datasets: [{
            label: "Number of Students",
            data: data.map((item) => item.numberOfStudents),
            borderColor: "#018C79", // Set fade effect color with low alpha (transparency)
            borderWidth: 2,
            fill: true, // Fill the area under the line
            backgroundColor: "rgba(75, 192, 192, 0.1)", // Set fade effect color for the area under the line
          }],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    // Clean up the chart when the component is unmounted
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [data]);

  return (
    <div className="w-full max-w-xl">
      <canvas ref={chartRef} className="w-full h-full" />
    </div>
  );
};

export default LineChart;
