import React, { useState, useEffect } from 'react';
import Chart from '../elem/Chart';


const getDetentionsOverTime = () => {
  return fetch('https://jail-data-pdx.herokuapp.com/api/v1/dailyCounts')
    .then(res => res.json());
};

const DetentionsOverTimeChart = () => {
  const [detentionCounts, setDetentionCounts] = useState(null);
      
  useEffect(() => {
    getDetentionsOverTime()
      .then(res => {
        const displayData = res.counts.map(item => [item.date.toString().slice(0, -14), item.count]);
        setDetentionCounts(displayData); 
      });
  }, []);

  console.log(detentionCounts, "counts")

  return (
    <>
      <Chart
        chartType="LineChart"
        titles={['','']}
        chartData={detentionCounts}
        header="Detentions Over Time in Multnomah County"
      />
    </>
  );
};

export default DetentionsOverTimeChart;
