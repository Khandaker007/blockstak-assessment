import React from 'react';

import { Navbar, Sidebar } from '@/shared/components';

import style from './layout.module.scss';
const { layout, navbarContainer, sidebarContainer } = style;

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
      {children}
      <div className={sidebarContainer}>
        <Sidebar/>
      </div>
    </div>
  );
};

export default Layout;
