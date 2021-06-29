import "./Chart.css";
import React from "react";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  const datapointvales = props.datapoints.map((datapoint) => datapoint.value);
  const maxVal = Math.max(...datapointvales);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          max={maxVal}
          label={datapoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
