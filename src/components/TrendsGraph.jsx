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
  weight: 600,
  lineHeight: "16px",
  family: "Plus Jakarta sans",
};

import { Chart } from "react-chartjs-2";

const points = [
  6000, 11000, 7000, 28000, 8000, 45000, 9000, 24000, 33000, 4000, 30000, 26000,
];

const createLinearGradient = (color1, color2) => {
  const ctx = document.createElement('canvas').getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 0, 350)
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  return gradient;
};


const maxNum = (arr) => {
  if (arr.length <= 0) return null;

  var max = arr[0];

  for (let item of arr.slice(1, -1)) {
    if (item > max) max = item;
  }

  return max;
};

const data = {
  datasets: [
    {
      data: points,
      backgroundColor: "hsla(165, 59%, 50%, .1)",
      borderWidth: 0,
      borderRadius: 9999,
      hoverBackgroundColor: createLinearGradient('hsla(165, 59%, 50%, 1)', 'hsl(0, 0%, 100%)' ),
      bar: {
        barPercentage: 0.4,
        categoryPercentage: 0.4
      }
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
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 12,
          lineHeight: "22px",
        },
      },
    },
    y: {
      beginAtZero: true,
      min: 0,
      max: maxNum(points) + 5000,
      ticks: {
        font: {
          size: 14,
          lineHeight: "16px",
        },
      },
    },
  },
  maintainAspectRatio : false,
  responsive: true,
  plugins: {
    tooltip: {
      yAlign: "bottom",
      displayColors: false,
      beforeLabel: null,
      callbacks: {
        title: () => "",
        label: ({ formattedValue }) => "$" + formattedValue,
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
        <h2 className="section-header font-semibold text-sm clr-neutral-900">Sales Trends</h2>
        <div className="flex items-center gap-xs">
          <h4 className="clr-neutral-900">Sort by: </h4>
          <select name="" id="" className="ff-base px-xs rounded-lg space-sm clr-neutral-bg font-color">
            <option value="weekly" selected defaultValue='weekly'>Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>
      <Chart options={options} data={data} type={"bar"} style={{ width: '756px', height: '80%' }} />
    </section>
  );
};
