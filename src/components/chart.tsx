import React from "react";
import { Bar } from "react-chartjs-2";

interface DayData {
  day: string;
  count: number;
}

interface WeekData {
  week: number;
  count: number;
  days: DayData[];
}

interface ChartProps {
  data: WeekData[];
}

const Chart = ({ data }: ChartProps) => {
  // Extrair os dias e contagens do payload
  const days = data.flatMap((week) => week.days.map((day) => day.day));
  const counts = data.flatMap((week) => week.days.map((day) => day.count));

  // Configurar os dados para o gráfico de barras
  const chartData = {
    labels: days,
    datasets: [
      {
        label: "Count",
        data: counts,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
      },
    ],
  };

  // Configurar as opções do gráfico
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        stepSize: 1,
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};

export default Chart;
