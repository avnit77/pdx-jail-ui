import React from 'react';
import Chart from "./Chart";


const DetentionsByRaceChart = ({population}) => {

  return (
    <>

      <Chart
        chartType="PieChart"
        header="Detentions by Race in Multnomah County"
        titles={['Race', 'Arrests']}
        chartData={[['Unknown', population.Unknown],
        ['Black', population.Black],
        ['Hispanic', population.Hispanic],
        ['Pacific', population.P],
        ['Asian', population.Asian],
        ['White', population.White],
        ['Native American', population.Native]]}
 
      />
    </>
  );
};

export default DetentionsByRaceChart;

