import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import co2data from "./data/Co2-demo.json";

function App() {
  /*let co2DataPadded = [...co2data];
  let padding = [];
  for (let i = co2data.length; i < temperatureData.length; i++) {
    co2DataPadded.push({
      TimeYrBP: (
        parseInt(temperatureData[i].kYearsFromPresent) * 1000
      ).toString(),
    });
  }*/

  const data = {
    datasets: [
      {
        label: "Co2 ppm",
        data: [...co2data].reverse(),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "co2",
        parsing: {
          xAxisKey: "TimeYrBP",
          yAxisKey: "Co2ppm",
        },
        pointRadius: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Demo Co2 plot",
      },
    },
    scales: {
      co2: {
        type: "linear",
        display: true,
        position: "right",
      },
    },
  };

  return (
    <div className="App">
      <div style={{ width: "1000px" }}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
}

export default App;
