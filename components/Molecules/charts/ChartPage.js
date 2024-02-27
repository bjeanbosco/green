import React from "react";
import LineChart from "@/components/Atoms/charts/LineChart";

const ChartPage = () => {
  const chartData = [
    { year: "2015", numberOfStudents: 100 },
    { year: "2016", numberOfStudents: 100 },
    { year: "2017", numberOfStudents: 100 },
    { year: "2018", numberOfStudents: 100 },
    { year: "2019", numberOfStudents: 100 },
    { year: "2020", numberOfStudents: 150 },
    { year: "2021", numberOfStudents: 200 },
    { year: "2022", numberOfStudents: 100 },
  ];

  return (
    <div className="py-8 h-full w-full">
      <h3 className="w-full font-medium mb-4">Number of Students Over Years</h3>
      <LineChart data={chartData} />
    </div>
  );
};

export default ChartPage;
