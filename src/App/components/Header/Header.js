import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import styles from './header.module.scss';
import Tab from './Tab/Tab';
import briefcase from '../../assets/icons/briefcase.svg';
import buisness from '../../assets/icons/buisness.svg';
import newspapper from '../../assets/icons/newspaper.svg';
import menu from '../../assets/icons/menu.svg';
import Logo from '../../components/Header/Logo/Logo.js';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';


const tabs = [
  {
    to: '/',
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
const Header = ({location}) => {

  const isActive = (destination) => location.pathname === destination;

  const toggleSidebar = () => {
    return (
      alert('Work in progress')
    );
  };

  return (

    <div className={styles.header}>
      <Logo/>
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
      <div className={styles.buttonsSection}>
        <div className={styles.postJobButton}>Post a Job</div>
        <div className={styles.signInButton}>
          Sign In
          <ExpandMoreIcon className={styles.expandIcon}/>
        </div>
        <div className={styles.menuButton} onClick={toggleSidebar}>
          <MenuIcon fontSize="inherit" />
        </div>
      </div>
    </div>

  );
};

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Header);
