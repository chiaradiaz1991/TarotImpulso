import React from "react";

const Card = ({card, text}) => {
  return (
    <div className="mainContainerCard">
      <div className="cardContainer">
        <img className="cardSelected" src={card} />
      </div>
      <div className="textContainerCard">
        <h1 className="textTitleCard">{text.title}</h1>
        <p className="textDescriptionCard">{text.description}</p>
      </div>
    </div>
  );
};
export default Card;
