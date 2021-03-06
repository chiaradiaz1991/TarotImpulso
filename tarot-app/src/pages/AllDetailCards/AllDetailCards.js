import React from "react";
import card from "../../data";
import Button from "../../Components/Button/Button";
import ScrollTopUp from "../../Components/ScrollTopUp/ScrollTopUp";
import { BrowserRouter as Route, Link } from "react-router-dom";
import { withNamespaces } from "react-i18next";

const AllDetailCards = ({ t }) => {
  return (
    <div className="mainContainerAllCards" role="main">
      <div className="allDetailTextContainer">
        <h1 className="textTitleCards">{t("cards.major-arcana")}</h1>
      </div>
      <div className="buttonActiveOptions">
        {card.map((elem, index) => {
          return <Button id={elem.id} info={elem} key={index} />;
        })}
      </div>
      <div className="viewAllCollectionTextContainer">
        <Link to="/all-collection" className="viewAllCollectionText">
          {t("cards.all-collection")}
        </Link>
      </div>
      <div className="allCardsContainer">
        {card.map(({ id, src, title, description }) => {
        return (
          <div className={id % 2 === 0 ? "par" : "impar"}>
            <img key={id} src={src} id={id} className="imageCards" alt="" />
            <div className="textContainer">
              <p className="cardTitleName">{t(title)}</p>
              <p className="cardDescription">{t(description)}</p>
            </div>
          </div>
        )})}
      </div>
      <ScrollTopUp scrollStepInPx="50" delayInMs="16.66" />
    </div>
  );
};

export default withNamespaces()(AllDetailCards);