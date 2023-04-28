import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type ChartProps = {
    data: any;
    options: any;
};

export const Graph: React.FC<ChartProps> = ({ data, options }) => {
    return <Bar options={options} data={data} />;
};
