import { CChart } from "@coreui/react-chartjs";
import { useEffect, useState } from "react";

const PopulationChart = () => {
  const [populationData, setPopulationData] = useState([]);

  const getPopulationData = async () => {
    try {
      const response = await fetch(
        "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
      );
      const result = await response.json();
      setPopulationData(result?.data);
    } catch (error) {}
  };

  useEffect(() => {
    getPopulationData();
  }, []);

  const labels = populationData.map((item) => item?.Year);
  const values = populationData.map((item) => item?.Population);

  return (
    <CChart
      type="line"
      data={{
        labels,
        datasets: [
          {
            label: "Population",
            backgroundColor: "rgba(220, 220, 220, 0.2)",
            borderColor: "#0038FF",
            pointBackgroundColor: "#fff",
            pointBorderColor: "#0038FF",
            pointRadius: 6,
            data: values,
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            labels: {
              color: "#ffffff",
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              color: "#ffffff",
              text: "Year",
            },
            grid: {
              color: "#ffffff",
              display: false,
            },
            ticks: {
              color: "#ffffff",
            },
          },
          y: {
            title: {
              display: true,
              color: "#ffffff",
              text: "Population",
            },
            grid: {
              color: "#ffffff", 
            },
            ticks: {
              color: "#ffffff",
            },
          },
        },
      }}
    />
  );
};

export default PopulationChart;
