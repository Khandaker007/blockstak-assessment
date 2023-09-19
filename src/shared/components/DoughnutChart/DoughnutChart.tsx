'use client';

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const DoughnutChart = () => {
  const assetsData: ChartData<'doughnut'> = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [{
      data: [20, 5, 3, 7],
      backgroundColor: ['#3380FF', '#B1D3FF', '#00C4DF', '#155AB6']
    }]
  };

  const assetsOptions: ChartOptions<'doughnut'> = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      }
    }
  };

  return (
    <Doughnut data={assetsData} options={assetsOptions}/>
  );
};

export default DoughnutChart;
