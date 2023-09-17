import React from 'react';

import style from './marketsCard.module.scss';
import { ICryptoCurrency } from '@/shared/types/cryptoCurrency';
import { ButtonSmall } from '..';
const {
  marketsCard,
  header,
  title,
  navList,
  navItem,
  listContainer,
  footerContainer,
  table,
  tableRow,
  currencyIn,
  currencyType,
  value,
  margin,
  tableBody,
  marginGreen,
  marginRed
} = style;

const MarketsCard = ({ data }: { data: ICryptoCurrency[] }) => {
  return (
    <div className={marketsCard}>
      <div className={header}>
        <h2 className={title}>Markets</h2>
        <ul className={navList}>
          <li className={navItem}>All</li>
          <li className={navItem}>Metaverse</li>
          <li className={navItem}>Gaming</li>
          <li className={navItem}>Defi</li>
          <li className={navItem}>NFT</li>
        </ul>
      </div>
      <div className={listContainer}>
        <table className={table}>
          <tbody className={tableBody}>
            {
              data?.map((item) => (
                <tr key={item.id} className={tableRow}>
                  <td className={currencyIn}>{item.currencyIn}</td>
                  <td className={currencyType}>{item.currencyType}</td>
                  <td className={value}>${item.value}</td>
                  <td className={margin}>
                    <span className={ item.margin.slice(0, 1) === '+' ? `${marginGreen}` : `${marginRed}`}>{item.margin}</span>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div className={footerContainer}>
        <ButtonSmall text='View All'/>
      </div>
    </div>
  );
};

export default MarketsCard;
