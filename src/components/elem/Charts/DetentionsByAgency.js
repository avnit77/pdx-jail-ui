import React from "react";
import Chart from "./Chart";


const DetentionsByAgencyChart = ({dataPoints}) => {


  const titles = ["Agency", "Arrests"];

  return (
    <>
      <Chart
        chartType="PieChart"
        titles={titles}
        chartData={dataPoints}
        header="Detentions in Multnomah County by Agency"
      />
    </>
  );
};

export default DetentionsByAgencyChart;
