import React, { useState, useEffect } from "react";
import Chart from "../elem/Chart";

const getCountByRace = () => {
  return fetch(
    "https://jail-data-pdx.herokuapp.com/api/v1/persons/countByRace"
  ).then((res) => res.json());
};

const DetentionsByRacePreHundredThousandChart = () => {
  const [blackCount, setBlackCount] = useState(0);
  const [hispanicCount, setHispanicCount] = useState(0);
  const [pacificCount, setPacificCount] = useState(0);
  const [asianCount, setAsianCount] = useState(0);
  const [whiteCount, setWhiteCount] = useState(0);
  const [nativeAmericanCount, setNativeAmericanCount] = useState(0);

  useEffect(() => {
    getCountByRace().then((res) => {
      if (res[1]) {
        setBlackCount(res[1].count);
      }
      if (res[2]) {
        setHispanicCount(res[2].count);
      }
      if (res[3]) {
        setPacificCount(res[3].count);
      }
      if (res[4]) {
        setAsianCount(res[4].count);
      }
      if (res[5]) {
        setWhiteCount(res[5].count);
      }
      if (res[6]) {
        setNativeAmericanCount(res[6].count);
      }
    });
  }, []);

  return (
    <>
      <Chart
        chartType="ColumnChart"
        header="Detentions Per 100,000 Population in Multnomah County"
        titles={["Race", ""]}
        chartData={[
          ["Black", (blackCount / 56569) * 100000],
          ["Native American", (nativeAmericanCount / 8515) * 100000],
          ["Hispanic", (hispanicCount / 88966) * 100000],
          ["White", (whiteCount / 652045) * 100000],
          ["Pacific", (pacificCount / 8515) * 100000],
          ["Asian", (asianCount / 72700) * 100000],
        ]}
      />
    </>
  );
};

export default DetentionsByRacePreHundredThousandChart;
