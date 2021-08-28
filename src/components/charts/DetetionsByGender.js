import React, { useState, useEffect } from "react";
import Chart from "../elem/Chart";

const getCountByGender = () => {
  return fetch(
    "https://jail-data-pdx.herokuapp.com/api/v1/persons/countByGender"
  ).then((res) => res.json());
};

const DetentionsByGenderChart = () => {
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);

  useEffect(() => {
    getCountByGender().then((res) => {
      setFemaleCount(res[0].count, setMaleCount(res[1].count));
    });
  }, []);

  return (
    <>
      <Chart
        chartType="PieChart"
        header="Detentions by Gender in Multnomah County"
        titles={["Race", "Arrests"]}
        chartData={[
          ["Female", femaleCount],
          ["Male", maleCount],
        ]}
      />
    </>
  );
};

export default DetentionsByGenderChart;
