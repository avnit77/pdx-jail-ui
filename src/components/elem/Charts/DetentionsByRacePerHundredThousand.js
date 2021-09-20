import React from "react";
import Chart from "./Chart";

const DetentionsByRacePreHundredThousandChart = ({ population }) => {
  return (
    <>
      <Chart
        chartType="ColumnChart"
        header="Detentions By Race Per Capita in Multnomah County"
        titles={["Race", ""]}
        chartData={[
          ["Black", (population.Black / 48925) * 100000],
          ["Native American", (population.Native / 11415.9) * 100000],
          ["Hispanic", (population.Hispanic / 97851) * 100000],
          ["White", (population.White / 563460.7) * 100000],
          ["Pacific", (population.P / 5707.9) * 100000],
          ["Asian", (population.Asian / 66049.6) * 100000],
        ]}
      />
    </>
  );
};

export default DetentionsByRacePreHundredThousandChart;
