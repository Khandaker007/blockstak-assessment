import React from 'react';

import style from './convertInput.module.scss';
const { convertInput } = style;

const ConvertInput = () => {
  return (
    <div className={convertInput}>
      <input type="text" placeholder='Value'/>
      <select>
        <option value="USD">USD</option>
        <option value="USD">USD</option>
        <option value="USD">USD</option>
        <option value="USD">USD</option>
      </select>
    </div>
  );
};

export default ConvertInput;
