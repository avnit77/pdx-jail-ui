import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

const getCountByGender = () => {
  return fetch('https://jail-data-pdx.herokuapp.com/api/v1/persons/countByGender')
    .then(res => res.json());
};

const DetentionsByGenderChart = () => {
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  
  useEffect(() => {
    getCountByGender()
      .then(res => {setFemaleCount(res[0].count, setMaleCount(res[1].count));});
  }, []);

  return (
    <>
      <h1>Detentions by Gender in Multnomah County</h1><br/>
      <Chart
        width={'800px'}
        height={'400px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Race', 'Arrests'],
          ['Female', femaleCount],
          ['Male', maleCount],
        ]}
        options={{
          is3D: true,
          colors: ['#058F7A', '#9161A2', '#13646A', '#F7F8F8', '#1F4763', '#A2506A', '#56809A']
        }}
      />
    </>
  );
};

export default DetentionsByGenderChart;
