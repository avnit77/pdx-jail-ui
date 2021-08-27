import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

const getCountByAgency = () => {
  return fetch('https://jail-data-pdx.herokuapp.com/api/v1/detentions/countByAgency')
    .then(res => res.json());
};

const DetentionsByAgencyChart = () => {
  
  const [data, setData] = useState([]);
  
  useEffect(() => {
    getCountByAgency()
      .then(res => {setData(res);});
  }, []);
  
  const titles = ['Agency', 'Arrests'];

  const dataPoints = data.map(item => {
    return [item._id, item.count];
  });
 
  return (
    <>
      <h1>Detentions in Multnomah County by Agency</h1><br/>
      <Chart
        width={'800px'}
        height={'400px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={ [titles, ...dataPoints] }
        options={{
          is3D: true,
          colors: ['#058F7A', '#9161A2', '#13646A', '#1F4763', '#A2506A', '#56809A']
        }}
      />
    </>
  );
};

export default DetentionsByAgencyChart;
