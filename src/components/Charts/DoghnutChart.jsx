import { CChart } from "@coreui/react-chartjs";

const DoughnutChart = () => {
  const newUsers = 2000;
  const oldUsers = 4000;

  const totalUsers = newUsers + oldUsers;

  return (
    <CChart
      type="doughnut"
      data={{
        labels: ["Total Patients", "New Patients", "Old Patients"],
        datasets: [
          {
            backgroundColor: ["#22c55e", "#facc15", "#0ea5e9"],
            data: [totalUsers, newUsers, oldUsers],
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
      }}
    />
  );
};

export default DoughnutChart;
