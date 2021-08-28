import React, { useState, useEffect } from "react";
import Chart from "../elem/Chart";

const getCountByAgency = () => {
  return fetch(
    "https://jail-data-pdx.herokuapp.com/api/v1/detentions/countByAgency"
  ).then((res) => res.json());
};

const DetentionsByAgencyChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCountByAgency().then((res) => {
      setData(res);
    });
  }, []);

  const titles = ["Agency", "Arrests"];

  const dataPoints = data.map((item) => {
    return [item._id, item.count];
  });

  return (
    <>
      <Chart
        chartType="PieChart"
        titles={titles}
        chartData={dataPoints}
        header="Detentions in Multnomah County by Agency"
      />
    </>
  );
};

export default DetentionsByAgencyChart;
