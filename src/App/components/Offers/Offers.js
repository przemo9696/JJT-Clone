import React from "react";
import styles from "./offers.module.scss";
import OfferTile from "../../components/Offers/OfferTile/OfferTile";

const Offers = () => {
  const jobOffers = [1, 2, 3];

  return (
    <div className={styles.sidebarOffers}>
      <ul>
        {jobOffers.map((x) => (
          <li>{x}</li>
        ))}
        <OfferTile technology="JavaScript" />
      </ul>
    </div>
  );
};

export default Offers;
