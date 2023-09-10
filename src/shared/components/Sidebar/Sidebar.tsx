import React from 'react';

import style from './sidebar.module.scss';
const { sidebar } = style;

const Sidebar = () => {
  return (
    <div className={sidebar}>
      <h1>Sidebar</h1>
    </div>
  );
};

export default Sidebar;
