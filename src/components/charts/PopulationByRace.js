import React from 'react';
import { Chart } from 'react-google-charts';

const PopulationByRaceChart = () => {
  
  return (
    <>
      <h1>Multnomah County 2017 Demographic Estimates</h1><br/>
      <Chart
        width={'800px'}
        height={'400px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Race', 'Population'],
          ['Black', 56569],
          ['Hispanic', 88966],
          ['Pacific', 8515],
          ['Asian', 72700],
          ['White', 652045],
          ['Native American', 8515],
        ]}
        options={{
          is3D: true,
          colors: ['#058F7A', '#9161A2', '#13646A', '#1F4763', '#A2506A', '#56809A']
        }}
      />
    </>
  );
};

export default PopulationByRaceChart;

