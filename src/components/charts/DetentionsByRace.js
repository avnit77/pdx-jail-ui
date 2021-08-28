import React, { useState, useEffect } from 'react';
import Chart from '../elem/Chart';

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
        if(res[0]){
          setUnknownCount(res[0].count) 
        } if(res[1]){
          setBlackCount(res[1].count) 
        } if(res[2]){
          setHispanicCount(res[2].count)
        } if(res[3]){
          setPacificCount(res[3].count) 
        } if(res[4]){
          setAsianCount(res[4].count) 
        } if(res[5]){
          setWhiteCount(res[5].count) 
        }if(res[6]){
          setNativeAmericanCount(res[6].count) 
        }
      });
  }, []);

  return (
    <>

      <Chart
        chartType="PieChart"
        header="Detentions by Race in Multnomah County"
        titles={['Race', 'Arrests']}
        chartData={[['Unknown', unknownCount],
        ['Black', blackCount],
        ['Hispanic', hispanicCount],
        ['Pacific', pacificCount],
        ['Asian', asianCount],
        ['White', whiteCount],
        ['Native American', nativeAmericanCount]]}
 
      />
    </>
  );
};

export default DetentionsByRaceChart;

