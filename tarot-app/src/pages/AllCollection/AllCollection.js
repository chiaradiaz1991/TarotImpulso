import React from "react";
import images from "../../data";
import IconGoBack from "../../assets/icon-go-back.svg";
import { Link } from "react-router-dom";
import backImage from "../../assets/back.png";
import { withNamespaces } from "react-i18next";

const AllCollection = ({ t }) => {
  return (
    <div className="mainContainerAllCollection">
      <div className="headerContainerAllCollection">
        <Link to="/all-cards">
          <img src={IconGoBack} alt="go-back-logo" className="iconBackLink" />
        </Link>
        <p className="textTitleCards">{t("cards.collection-complete")}</p>
      </div>
      <div className="imagesContainerAllCollection">
        {images.map((elem, index) => {
          return (
            <img
              src={elem.src}
              key={index}
              id={elem.id}
              alt="image-card"
              className={`imageAllCollection ${elem.romanNumber}`}
            />
          );
        })}
        <img
          src={backImage}
          id="back"
          alt="image-card"
          className="imageAllCollection"
        />
      </div>
    </div>
  );
};

export default withNamespaces()(AllCollection);