import React from "react";
import styles from "./offerTile.module.scss";

const OfferTile = (props) => {
  let technologyColor = null;

  switch (props.technology) {
    case "JavaScript": {
      technologyColor = styles.javaScript;
      break;
    }

    default:
      console.log("error");
  }

  return (
    <div className={styles.offerTile}>
      <div className={`${styles.techColorContainer} ${technologyColor}`}></div>
      <div className={styles.logoContainer}>{props.logo}</div>
      <div className={styles.offerInfo}>data</div>
    </div>
  );
};

export default OfferTile;
