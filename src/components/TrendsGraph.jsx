import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

ChartJS.defaults.font = {
  size: 14,
  family: "Plus Jakarta sans",
};

import { Chart } from "react-chartjs-2";

const data = {
  datasets: [
    {
      barPercentage: 0.5,
      barThickness: 30,
      data: [
        5300, 11000, 7000, 28000, 8000, 45000, 9000, 24000, 33000, 4000, 30000,
        26000,
      ],
      backgroundColor: "hsla(165, 59%, 50%, .1)",
      borderWidth: 0,
      borderRadius: 9999,
      hoverBackgroundColor: "hsla(165, 59%, 50%, 1)",
    },
  ],
};

const options = {
  scales: {
    x: {
      type: "category",
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    y: {
      beginAtZero: true,
      labels: [5000, 10000, 20000, 30000, 40000, 50000],
      suggestedMin: 5000,
      suggestedMax: 50000,
    },
  },
  plugins: {
    tooltip: {
      yAlign: "bottom",
      displayColors: false,
      beforeLabel: null,
      callbacks: {
        title: () => "",
        label: ({ formattedValue }) => '$' + formattedValue
      },
    },
    legend: {
      display: false,
    },
  },
};

export const TrendsGraph = () => {
  return (
    <section className="trends">
      <div className="flex items-center justify-between">
        <h2 className="section-header font-semibold">Sales Trends</h2>
        <div className="flex items-center">
          <h4>Sort by: </h4>
          <button>Weekly</button>
        </div>
      </div>
      <Chart options={options} data={data} type={"bar"} />
    </section>
  );
};
