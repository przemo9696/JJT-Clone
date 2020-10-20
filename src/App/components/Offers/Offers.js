import React from "react";
import styles from "./offers.module.scss";
import OfferTile from "../../components/Offers/OfferTile/OfferTile";

const Offers = () => {
  const jobOffers = [
    {
      companyName: "",
      companyType: "",
      companyWebsite: "",
      companySize: "",
      companyIndustry: "",
      title: "",
      experienceLevel: "",
      employmentType: "",
      salaryFrom: "",
      salaryTo: "",
      currency: "",
      onlineRecruitment: false,
      mainTechnology: "",
      technologies: [{ techName: "", techLevel: 0 }],
      jobDescription: "",
      locationCity: "",
      locationStreet: "",
      isRemote: false,
      logo: "",
      publicationDate: "",
    },
  ];

  return (
    <div className={styles.sidebarOffers}>
      <ul>
        <OfferTile technology="JavaScript" />
        <OfferTile technology="PHP" />
      </ul>
    </div>
  );
};

export default Offers;
