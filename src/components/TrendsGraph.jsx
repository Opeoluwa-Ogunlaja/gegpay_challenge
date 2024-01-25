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
  BarElement
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
)

import { Chart } from "react-chartjs-2";

const data = {
  labels: ['Jan', 'Feb', "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [{
    barPercentage: 0.5,
    barThickness: 30,
    data: [5300, 11000, 7000, 28000, 8000, 45000, 9000, 24000, 33000, 4000, 30000, 26000],
    backgroundColor: 'hsla(165, 59%, 50%, .1)',
    borderWidth: 0,
    borderRadius: 9999,
    hoverBackgroundColor: 'hsla(165, 59%, 50%, 1)'
  }]
};

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    tooltip: {
      yAlign: 'bottom',
      callbacks : {
        label: () => ''
      }
    },
    legend: {
      display: false
    }
  }
};


export const TrendsGraph = () => {
  return (
    <section className="trends">
      <div className="flex items-center justify-between">
        <h2 className="section-header">Sales Trends</h2>
        <div className="flex items-center">
          <h4>Sort by: </h4>
          <button>Weekly</button>
        </div>
      </div>
      <Chart options={options} data={data} type={'bar'}/>
    </section>
  );
};
