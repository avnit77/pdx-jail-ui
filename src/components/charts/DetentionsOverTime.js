import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';


const getDetentionsOverTime = () => {
  return fetch('https://jail-data-pdx.herokuapp.com/api/v1/dailyCounts')
    .then(res => res.json());
};

const DetentionsOverTimeChart = () => {
  const [detentionCounts, setDetentionCounts] = useState('loading');
      
  useEffect(() => {
    getDetentionsOverTime()
      .then(res => {
        const displayData = res.counts.map(item => {
          let container = [];
          container.push(item['date'].toString().slice(0, -14));
          container.push(item.count);
          return container;
        });
        setDetentionCounts(displayData.slice(1)); //data from Jan 16 is bogus
      });
  }, []);

  return (
    <>
      <h1>Detentions Over Time in Multnomah County</h1><br/>
      <Chart
        width={'800px'}
        height={'400px'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data= {[['', ''], //optional labels for axes
          ...detentionCounts]}
        options={{

          vAxis: { viewWindow: { min: 0 } },
          colors: ['#A2506A', '#1F4763', '#9161A2', '#13646A', '#058F7A'],
          legend: { position: 'none' }
        }}
      />
    </>
  );
};

export default DetentionsOverTimeChart;
