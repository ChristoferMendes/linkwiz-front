import React from "react";
import { Bar, Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  ChartData,
  ChartOptions,
} from "chart.js";
import { AnalyticsData, ChartDataProps } from "@/entities/Url/types";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

interface ChartProps {
  data: AnalyticsData;
}

const ClickChart = ({ data: chartData }: ChartProps) => {
  if (!chartData.weeks?.length) {
    return null;
  }

  const options: ChartOptions<"bar"> = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        filter(e) {
          e.label = `Clicks ${e.formattedValue}`;
          return true;
        },
      },
    },
  };

  const labels = chartData.weeks.map((data) => `Week ${data.week}`);

  const datasets: ChartData<"bar">["datasets"] = chartData.weeks.map((data) => {
    const dataCount = data.days.map((day) => day.count);

    return {
      type: "bar" as const,
      label: `Week ${data.week}`,
      backgroundColor: "rgb(75, 192, 192)",
      borderWidth: 2,
      fill: false,
      data: data.days.map((day) => day.count),
    };
  });

  const data = {
    labels,
    datasets,
  };

  return <Chart data={data} options={options} type="bar" />;
};

export default ClickChart;
