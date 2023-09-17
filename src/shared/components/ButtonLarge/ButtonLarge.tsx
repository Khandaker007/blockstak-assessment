import React from 'react';

import { IButtonLarge } from './BottonLarge.types';

import style from './buttonLarge.module.scss';
const { btn } = style;

const ButtonLarge = ({ text }: IButtonLarge) => {
  return (
    <button className={btn}>{text}</button>
  );
};

export default ButtonLarge;
