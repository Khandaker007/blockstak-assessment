import React from 'react';

import { MdOutlineVisibility } from 'react-icons/md';
import { BiSolidWallet } from 'react-icons/bi';

import style from './totalBalanceCard.module.scss';
const {
  totalBalanceCard,
  headerContainer,
  iconContainer,
  icon,
  title,
  visibleIcon,
  balance,
  footerContainer,
  profitIn,
  profitValue,
  profitMargin
} = style;

const TotalBalanceCard = () => {
  return (
    <div className={totalBalanceCard}>
      <div className={headerContainer}>
        <div className={iconContainer}>
          <BiSolidWallet className={icon}/>
        </div>
        <h3 className={title}>Estimated Balance</h3>
        <MdOutlineVisibility className={visibleIcon}/>
      </div>
      <h2 className={balance}>$123,987</h2>
      <div className={footerContainer}>
        <span className={profitIn}>Monthly Profit</span>
        <span className={profitValue}>+$2560.78</span>
        <span className={profitMargin}>+14.67%</span>
      </div>
    </div>
  );
};

export default TotalBalanceCard;
