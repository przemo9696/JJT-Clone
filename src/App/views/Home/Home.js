import View from "../../components/View/View";
import styles from "../Home/home.module.scss";
import React from "react";
import MyMap from "../../components/Map/MyMap";

const Home = () => (
  <View>
    <div className={styles.homeWrapper}>
      <div className={styles.filterContainer}>
        Filters comming soon
      </div>
      <div className={styles.sidebarOffers}>
        Offers comming soon
      </div>
      <div className={styles.mapOffers}>
        <MyMap />
      </div>
    </div>
  </View>
);

export default Home;
