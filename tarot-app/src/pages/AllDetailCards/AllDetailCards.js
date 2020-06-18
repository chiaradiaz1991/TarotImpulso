import React, { Component } from 'react';
import images from '../../data';
import Button from '../../Components/Button/Button';
import ScrollTopUp from '../../Components/ScrollTopUp/ScrollTopUp';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


class AllDetailCards extends Component {
  render() {
    return (
      <div className="mainContainerAllCards" role="main">
        <div className="allDetailTextContainer">
          <h1 className="textTitleCards">ARCANOS MAYORES</h1>
        </div>
        <div className="buttonActiveOptions">
          {
            images.map((elem, index) => {
              return <Button id={elem.id} info={elem} key={index} />
            })
          }
        </div>
        <div className="viewAllCollectionTextContainer">
          <Link to="/all-collection" className="viewAllCollectionText">Ver toda la colección</Link>
        </div>
        <div className="allCardsContainer">
          {images.map(({ id, src, title, description }) =>
            <div className={id % 2 === 0 ? 'par' : 'impar'}>
              <img key={id} src={src} id={id} className="imageCards" alt="" />
              <div className="textContainer">
                <p className="cardTitleName">{title}</p>
                <p className="cardDescription">{description}</p>
              </div>
            </div>
          )}
        </div>
        <ScrollTopUp scrollStepInPx="50" delayInMs="16.66"/>
      </div>
    )
  }
}



export default AllDetailCards;