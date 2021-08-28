import React from "react";
import Chart from "../elem/Chart";

const PopulationByRaceChart = () => {
  return (
    <>
      <Chart
        chartType="PieChart"
        header="Multnomah County 2017 Demographic Estimates"
        titles={["Race", "Population"]}
        chartData={[
          ["Black", 56569],
          ["Hispanic", 88966],
          ["Pacific", 8515],
          ["Asian", 72700],
          ["White", 652045],
          ["Native American", 8515]
        ]}
      />
    </>
  );
};

export default PopulationByRaceChart;
