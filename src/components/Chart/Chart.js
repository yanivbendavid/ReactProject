import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
const totalMaximum = Math.max(...props.dataPoints.map(d=>d.value));

  return (
    <div className="chart">
      {props.dataPoints.map((d, index) => (
        <ChartBar
          key={index}
          value={d.value}
          maxValue={totalMaximum}
          label={d.label}
        />
      ))}
    </div>
  );
};

export default Chart;
