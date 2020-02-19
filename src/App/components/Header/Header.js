import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import styles from './header.module.scss';
import Tab from './Tab/Tab';
import jjtLogo from '../../assets/images/jjt-logo2.png';
import briefcase from '../../assets/icons/briefcase.svg';
import buisness from '../../assets/icons/buisness.svg';
import newspapper from '../../assets/icons/newspaper.svg';
import Logo from '../../components/Header/Logo/Logo.js'

const tabs = [
  {
    to: '/home',
    text: 'Job offers',
    icon: briefcase,
  },
  {
    to: '/ski-cams',
    text: 'Brand Stories',
    icon: buisness,
  },
  {
    to: '/contact',
    text: 'Just Geek IT',
    icon: newspapper,
  },
  {
    to: '/matchmaking',
    text: 'Matchmaking',
    icon: briefcase,
  },
];

//&#x276F
const Header = ({ location }) => {
  const isActive = destination => location.pathname === destination;
  return (

    <div className={styles.header}>
      <Logo />
      <div className={styles.navigation}>
        {
          tabs.map(({to, text, icon}) => (
            <Tab
              icon={icon}
              key={to}
              to={to}
              text={text}
              isActive={isActive(to)}
            />
          ))
        }
      </div>
      <div className={styles.postJobButton}>Post a Job</div>
    </div>

  );
};

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Header);
