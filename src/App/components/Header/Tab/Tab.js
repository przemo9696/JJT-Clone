import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './tab.module.scss';



const Tab = ({ text, to, isActive, icon}) => (
  <Link to={to} className={`${styles.tab} ${isActive ? styles.activeTab : ''}`}>
    <img className={`${styles.icon} ${isActive ? styles.activeIcon : ''}`} src={icon} alt=''/>
    <p>{text}</p>
  </Link>
);


Tab.propTypes = {
  isActive: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Tab;
