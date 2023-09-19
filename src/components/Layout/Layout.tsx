'use client';

import React, { useContext } from 'react';

import { Navbar, Sidebar } from '@/shared/components';
import { SidebarToggleContext } from '@/providers/SidebarToggleProvider';

import style from './layout.module.scss';
const {
  layout,
  navbarContainer,
  sidebarContainer,
  mainContainer,
  tabSidebarContainer
} = style;

const Layout = ({
  children
}: {
  children: React.ReactNode
}) => {
  const { toggle } = useContext(SidebarToggleContext);

  return (
    <div className={layout}>
      <div className={navbarContainer}>
        <Navbar/>
      </div>
      <div className={mainContainer}>
        {children}
      </div>
      <div className={toggle ? `${sidebarContainer} ${tabSidebarContainer}` : `${sidebarContainer}`}>
        <Sidebar/>
      </div>
    </div>
  );
};

export default Layout;
