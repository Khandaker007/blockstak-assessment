import React from 'react';

import { RxDotsHorizontal } from 'react-icons/rx';
import { ConvertInput } from '../ConvertInput';

import style from './convertCard.module.scss';
import { ButtonLarge } from '..';
const {
  convertCard,
  header,
  title,
  optionButton,
  icon,
  convertFrom,
  convertTo,
  btnContainer,
  text
} = style;

const ConvertCard = () => {
  return (
    <div className={convertCard}>
      <div className={header}>
        <h2 className={title}>Convert</h2>
        <button className={optionButton}>
          <RxDotsHorizontal className={icon}/>
        </button>
      </div>
      <div className={convertFrom}>
        <ConvertInput/>
      </div>
      <div className={convertTo}>
        <ConvertInput/>
      </div>
      <div className={btnContainer}>
        <ButtonLarge text='Convert Now'/>
      </div>
      <p className={text}>
        The ultimate price and output is determined by the amount
        of tokens in the pool at the time of your swap.
      </p>
    </div>
  );
};

export default ConvertCard;
