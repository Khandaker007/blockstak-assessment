import React from 'react';

import { RxDotsHorizontal } from 'react-icons/rx';

import style from './assetsCard.module.scss';
import DoughnutChart from '../DoughnutChart/DoughnutChart';
const {
  assetsCard,
  header,
  title,
  optionButton,
  icon,
  chartContainer
} = style;

const AssetsCard = () => {
  return (
    <div className={assetsCard}>
      <div className={header}>
        <h2 className={title}>Convert</h2>
        <button className={optionButton}>
          <RxDotsHorizontal className={icon}/>
        </button>
      </div>
      <div className={chartContainer}>
        <DoughnutChart/>
      </div>
    </div>
  );
};

export default AssetsCard;
