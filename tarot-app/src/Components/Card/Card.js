import React from "react";
import { withNamespaces } from "react-i18next";


const Card = ({card, text, t}) => {
  console.log('card ', card, 'text ', text)
  return (
    <div className="mainContainerCard">
      <div className="cardContainer">
        <img className="cardSelected" src={card} />
      </div>
      <div className="textContainerCard">
        <h1 className="textTitleCard">{t(text.title)}</h1>
        <p className="textDescriptionCard">{t(text.description)}</p>
      </div>
    </div>
  );
};

export default withNamespaces()(Card);
