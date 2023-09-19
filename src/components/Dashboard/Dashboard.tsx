import React from 'react';

import {
  CryptoCurrencyCard, TotalBalanceCard, MarketsCard, ConvertCard, HistoryCard, AssetsCard
} from '@/shared/components';

import cryptoData from '@/assets/datas/cryptoCurrency';
import transactionData from '@/assets/datas/transactionHistory';

import style from './dashboard.module.scss';
const {
  dashboard,
  balanceSection,
  marketSection,
  boxChartContainer,
  marketContainer,
  otherContainers,
  assetsContainer,
  convertContainer,
  historyContainer
} = style;

const Dashboard = () => {
  const data = [3, 6, 2, 7, 9, 10, 12];
  const label = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div className={dashboard}>
      <div className={balanceSection}>
        <TotalBalanceCard/>
        <CryptoCurrencyCard data={data} label={label} />
        <CryptoCurrencyCard data={data} label={label}/>
        <CryptoCurrencyCard data={data} label={label}/>
      </div>
      <div className={marketSection}>
        <div className={boxChartContainer}>
          <h3>Box Chart Container</h3>
        </div>
        <div className={marketContainer}>
          <MarketsCard data={cryptoData}/>
        </div>
      </div>
      <div className={otherContainers}>
        <div className={assetsContainer}>
          <AssetsCard/>
        </div>
        <div className={convertContainer}>
          <ConvertCard/>
        </div>
        <div className={historyContainer}>
          <HistoryCard data={transactionData}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
