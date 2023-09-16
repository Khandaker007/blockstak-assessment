import React from 'react';
import Image from 'next/image';

import { FiSearch } from 'react-icons/fi';
import notification from '@/assets/icons/notification.svg';
import userImg from '@/assets/images/user.png';

import style from './navbar.module.scss';
const {
  navbar,
  searchContainer,
  icon,
  container,
  notiButton,
  img,
  menuButton,
  userImage,
  userInfo,
  userName,
  userEmail,
  dotButton,
  dot
} = style;

const Navbar = () => {
  return (
    <div className={navbar}>
      <div className={searchContainer}>
        <input type="text" placeholder='Search...'/>
        <FiSearch className={icon}/>
      </div>
      <div className={container}>
        <div className={notiButton}>
          <Image className={img} src={notification} alt="noti-icon" />
        </div>
        <div className={menuButton}>
          <div className={userImage}>
            <Image className={img} src={userImg} alt='user-image'/>
          </div>
          <div className={userInfo}>
            <h3 className={userName}>Khandaker Nabiul</h3>
            <p className={userEmail}>khandaker.nabiul@gmail.com</p>
          </div>
          <div className={dotButton}>
            <span className={dot}/>
            <span className={dot}/>
            <span className={dot}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
