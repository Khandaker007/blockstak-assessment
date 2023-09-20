'use client';

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  PointElement,
  LinearScale,
  Title
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  PointElement,
  LinearScale,
  Title
);

const LineChart = ({ chartData, chartLabel } : { chartData: number[], chartLabel: string[] }) => {
  const data = {
    labels: chartLabel,
    datasets: [{
      data: chartData,
      tension: 0.4,
      borderColor: 'orange'
    }]
  };

  const options = {
    Plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        ticks: {
          display: false
        },
        grid: {
          drawBorder: false,
          display: false
        },
        border: {
          display: false
        }
      },
      y: {
        ticks: {
          display: false,
          beginAtZero: true
        },
        grid: {
          drawBorder: false,
          display: false
        },
        border: {
          display: false
        }
      }
    },
    radius: 0
  };

  return (
    <Line data={data} options={options}/>
  );
};

export default LineChart;
