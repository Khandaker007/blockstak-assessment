import React from 'react';

import { Navbar, Sidebar } from '@/shared/components';

import style from './layout.module.scss';
const {
  layout, navbarContainer, sidebarContainer, mainContainer
} = style;

const Layout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className={layout}>
      <div className={navbarContainer}>
        <Navbar/>
      </div>
      <div className={mainContainer}>
        {children}
      </div>
      <div className={sidebarContainer}>
        <Sidebar/>
      </div>
    </div>
  );
};

export default Layout;
