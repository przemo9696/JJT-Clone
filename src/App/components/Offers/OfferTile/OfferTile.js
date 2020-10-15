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
      <div className={styles.offerInfoContainer}>
        <div className={styles.offerInfo_top}>
          <div className={styles.jobTitleContainer}>
            <div className={styles.jobTitle}>Junior Front-End Developer</div>
          </div>
          <div className={styles.jobSalaryContainer}>
            <span className={styles.jobSalary}>3 500 - 4 500</span>
            <div className={styles.releaseTime}>New</div>
          </div>
        </div>
        <div className={styles.offerInfo_bottom}>
          <div className={styles.companyDetails}>Company</div>
          <div className={styles.techDetails}>JavaScript</div>
        </div>
      </div>
    </div>
  );
};

export default OfferTile;
