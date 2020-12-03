import React from "react";
import { Link } from "react-router-dom";
import imageBall from "../../assets/ball.png";
import Cards from "../../assets/Cartas.png";
import { withNamespaces } from "react-i18next";

const HomePage = ({ t }) => {
  return (
    <div className="mainContainerHome" role="main">
      <div className="imageContainer">
        <img src={Cards} alt="" className="frontImagesHome" />
      </div>
      <div className="textContainer">
        <p className="textDescription">
        {t("home-page.content.message")} 
        </p>
        <span />
        <div className="textDescriptionBContainer">
          <div className="textDescriptionBContainerTexts">
            <p className="textDescriptionB">{t("home-page.content.glad")}</p>
            <p className="textDescriptionB">{t("home-page.content.randomness")}</p>
          </div>
          <img src={imageBall} atl="" />
        </div>
        <div className="buttonMainContainer">
          <div className="buttonContainer">
            <Link to="/shuffle" className="linkHome">
            {t("home-page.content.throw")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(HomePage);
