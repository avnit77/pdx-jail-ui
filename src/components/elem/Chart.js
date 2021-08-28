import React from "react";
import { Chart as Template } from "react-google-charts";
import LoadingSpinner from "./LoadingSpinner";

const Chart = ({ chartType, titles, chartData, header }) => {
  const chartTitles = titles ? titles : ["", ""];
  const options = {
    colors: ["#058F7A", "#9161A2", "#13646A", "#1F4763", "#A2506A", "#56809A"],
    axisTitlesPosition: "in",
    hAxis: { textPosition: "in" },
    // vAxis: { textPosition: "in" },
    chartArea: { width: "90%", height: "90%" },
    ...(chartType === "PieChart" && {
      is3D: true,
      legend: { alignment: "center" },
    }),
    ...(chartType === "ColumnChart" && {
      legend: { position: "none" },
      axisTitlesPosition: "in",
    }),
    ...(chartType === "LineChart" && {
      vAxis: { viewWindow: { min: 0 } },
      legend: { position: "none" },
    }),
  };

  if(!chartData){
    return null
  }

  return (
        <div className="is-flex is-flex-direction-column is-align-items-center" style={{"height" : "375px"}}>
          <br />
          <h5 className="is-size-5">{header}</h5>
          <br />
          <Template
            width={"600px"}
            height={"300px"}
            theme={"maximized"}
            loader={<LoadingSpinner size="3em" />}
            chartType={chartType ? chartType : "LineChart"}
            data={[chartTitles, ...chartData]}
            options={options}
          />
        </div>
  );
};

export default Chart;
