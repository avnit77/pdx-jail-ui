import React from "react";
import Chart from "./Chart";

const DetentionsOverTimeChart = ({ detentionCounts }) => {
  return (
    <>
      <Chart
        chartType="LineChart"
        titles={["", ""]}
        chartData={detentionCounts}
        header="Detentions Over Time in Multnomah County"
      />
    </>
  );
};

export default DetentionsOverTimeChart;
