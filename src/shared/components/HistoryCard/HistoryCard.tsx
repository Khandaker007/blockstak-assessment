import React from 'react';

import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';

import { ButtonSmall } from '..';
import { ITransactionHistory } from '@/shared/types/transactionHistory';

import style from './historyCard.module.scss';
const {
  historyCard,
  header,
  title,
  listContainer,
  table,
  tableBody,
  tableRow,
  progress,
  transactionName,
  transactionStatus,
  time,
  pending,
  done,
  valueGreen,
  valueRed,
  upArrow,
  downArrow,
  icon
} = style;

const HistoryCard = ({ data }: {data: ITransactionHistory[]}) => {
  return (
    <div className={historyCard}>
      <div className={header}>
        <h2 className={title}>History</h2>
        <ButtonSmall text='View All'/>
      </div>
      <div className={listContainer}>
        <table className={table}>
          <tbody className={tableBody}>
            {
              data?.map((item) => (
                <tr key={item.id} className={tableRow}>
                  <td className={progress}>
                    { item.value.slice(0, 1) === '+'
                      ? <span className={upArrow}><BsArrowUpShort className={icon}/></span>
                      : <span className={downArrow}><BsArrowDownShort className={icon}/></span>
                    }
                  </td>
                  <td className={transactionName}>{item.transactionName}</td>
                  <td className={item.value.slice(0, 1) === '+' ? `${valueGreen}` : `${valueRed}`}>{item.value}</td>
                  <td className={time}>{item.time}</td>
                  <td className={transactionStatus}>
                    { item.type === 'pending'
                      ? <span className={pending}>pending</span>
                      : <span className={done}>Done</span>
                    }
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryCard;
