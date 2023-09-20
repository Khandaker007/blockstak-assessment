'use client';

import React, { useContext } from 'react';
import Image from 'next/image';

import logo from '@/assets/logo/logo.svg';
import { SidebarToggleContext } from '@/providers/SidebarToggleProvider';

import { BiSolidDashboard, BiTransferAlt } from 'react-icons/bi';
import { MdCandlestickChart, MdHelpOutline, MdLogout } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { RiSettings5Fill } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';

import style from './sidebar.module.scss';
const {
  sidebar, logoContainer, navList, navItem, icon, divider, img, logout, closeBtn
} = style;

const Sidebar = () => {
  const { toggle, setToggle } = useContext(SidebarToggleContext);

  return (
    <div className={sidebar}>
      <button className={closeBtn} onClick={() => setToggle(!toggle)}>
        <RxCross2 className={icon}/>
      </button>
      <div className={logoContainer}>
        <Image className={img} src={logo} alt='logo'/>
      </div>
      <ul className={navList}>
        <li className={navItem}>
          <BiSolidDashboard className={icon}/>
          <span>Dashboard</span>
        </li>
        <li className={navItem}>
          <MdCandlestickChart className={icon}/>
          Markets
        </li>
        <li className={navItem}>
          <BiTransferAlt className={icon}/>
          Transactions
        </li>
        <li className={navItem}>
          <AiOutlineUser className={icon}/>
          Profile
        </li>
        <li className={navItem}>
          <RiSettings5Fill className={icon}/>
          Setting
        </li>
      </ul>
      <div className={divider}/>
      <ul className={navList}>
        <li className={navItem}>
          <MdHelpOutline className={icon}/>
          Help
        </li>
        <li className={`${navItem} ${logout}`}>
          <MdLogout className={icon}/>
          Log Out
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
