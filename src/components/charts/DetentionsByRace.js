import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

const getCountByRace = () => {
  return fetch('https://jail-data-pdx.herokuapp.com/api/v1/persons/countByRace')
    .then(res => res.json());
};

const DetentionsByRaceChart = () => {
  const [unknownCount, setUnknownCount] = useState(0);
  const [blackCount, setBlackCount] = useState(0);
  const [hispanicCount, setHispanicCount] = useState(0);
  const [pacificCount, setPacificCount] = useState(0);
  const [asianCount, setAsianCount] = useState(0);
  const [whiteCount, setWhiteCount] = useState(0);
  const [nativeAmericanCount, setNativeAmericanCount] = useState(0);
  
  useEffect(() => {
    getCountByRace()
      .then(res => {
        setUnknownCount(res[0].count), 
        setBlackCount(res[1].count),
        setHispanicCount(res[2].count),
        setPacificCount(res[3].count),
        setAsianCount(res[4].count),
        setWhiteCount(res[5].count),
        setNativeAmericanCount(res[6].count);
      });
  }, []);

  return (
    <>
      <h1>Detentions by Race in Multnomah County</h1><br/>
      <Chart
        width={'800px'}
        height={'400px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Race', 'Arrests'],
          ['Unknown', unknownCount],
          ['Black', blackCount],
          ['Hispanic', hispanicCount],
          ['Pacific', pacificCount],
          ['Asian', asianCount],
          ['White', whiteCount],
          ['Native American', nativeAmericanCount],
        ]}
        options={{
          is3D: true,
          colors: ['#058F7A', '#9161A2', '#13646A', '#1F4763', '#A2506A', '#56809A']
        }}
      />
    </>
  );
};

export default DetentionsByRaceChart;

