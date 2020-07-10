import React from 'react';
import { Link } from 'react-router-dom';
import styles from './logo.module.scss';
import jjtLogo from "../../../assets/images/jjt-logo2.png";

export const Logo = () => {
  return(
  <Link to='/' className={styles.logo}>
    <div className={styles.headerLogo}>
      <img src={jjtLogo} alt="jjt logo"/>
    </div>
  </Link>
  )
};

export default Logo;
