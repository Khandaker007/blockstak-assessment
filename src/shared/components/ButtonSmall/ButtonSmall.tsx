import React from 'react';

import style from './buttonSmall.module.scss';
import { IButtonSmall } from './ButtonSmall.types';
const { btn } = style;

const ButtonSmall = ({ text }: IButtonSmall) => {
  return (
    <button className={btn}>{text}</button>
  );
};

export default ButtonSmall;
