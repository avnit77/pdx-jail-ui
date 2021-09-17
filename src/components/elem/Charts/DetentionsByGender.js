import React from "react";
import Chart from "./Chart";


const DetentionsByGenderChart = ({population}) => {

  return (
    <>
      <Chart
        chartType="PieChart"
        header="Detentions by Gender in Multnomah County"
        titles={["Race", "Arrests"]}
        chartData={[
          ["Female", population.Female],
          ["Male", population.Male],
        ]}
      />
    </>
  );
};

export default DetentionsByGenderChart;
