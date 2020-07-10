import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import styles from "../../../views/Home/Filters/filters.module.scss";

const locFilters = [
  {
    to: '/warszawa',
    loc: 'Warszawa',
    map: {},
  },
  {
    to: '/krakow',
    loc: 'Kraków',
    map: {}
  },
  {
    to: '/wroclaw',
    loc: 'Wrocław',
    map: {},
  },
  {
    to: '/poznan',
    loc: 'Poznań',
    map: {},
  },
  {
    to: '/trojmiasto',
    loc: 'Trójmiasto',
    map: {},
  },
  {
    to: '/remote',
    loc: 'Remote',
    map: {},
  },
  {
    to: '/world',
    loc: 'World',
    map: {},
  },
];

const Locations = ({to, loc, isLocationActive}) => (
  <div className={styles.locFilters}>
    <Link to={to} className={`${styles.locFilter} ${isLocationActive ? styles.activeLocFilters : ''}`}>
      <div className={styles.locLabel}>{loc} </div>
    </Link>
  </div>
);

const LocationsFilter = () => {

  const isLocationActive = destination => window.location.pathname === destination;
  console.log(isLocationActive());

  return (
    <div className={styles.locFilters}>
      {
        locFilters.map(({to, loc}) => (
          <Locations
            key={to}
            to={to}
            loc={loc}
            isLocationActive={isLocationActive(to)}
          />
        ))
      }
    </div>
  );
};


export default withRouter(LocationsFilter);
