import React from 'react';

import { BiSolidWallet } from 'react-icons/bi';

import style from './cryptoCurrencyCard.module.scss';
import LineChart from '../LineChart/LineChart';
const {
  cryptoCurrencyCard,
  chartDetails,
  chartInfo,
  headerContainer,
  iconContainer,
  icon,
  cryptoType,
  balance,
  chartContainer,
  footerContainer,
  profitIn,
  profitValue,
  profitMargin
} = style;

const CryptoCurrencyCard = ({ data, label }: { data: number[], label: string[] }) => {
  return (
    <div className={cryptoCurrencyCard}>
      <div className={chartDetails}>
        <div className={chartInfo}>
          <div className={headerContainer}>
            <div className={iconContainer}>
              <BiSolidWallet className={icon}/>
            </div>
            <div className={cryptoType}>
              <h3>btcusdt</h3>
              <span>Bitcoin</span>
            </div>
          </div>
          <h2 className={balance}>$123,987</h2>
        </div>
        <div className={chartContainer}>
          <LineChart chartData={data} chartLabel={label}/>
        </div>
      </div>
      <div className={footerContainer}>
        <span className={profitIn}>Monthly Profit</span>
        <span className={profitValue}>+$2560.78</span>
        <span className={profitMargin}>+14.67%</span>
      </div>
    </div>
  );
};

export default CryptoCurrencyCard;
