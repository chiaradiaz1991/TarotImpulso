import React, { Component } from 'react';
import images from '../../data';
import Button from '../../Components/Button/Button';
import AllCollection from '../AllCollection/AllCollection';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

class AllDetailCards extends Component {
  render() {
    return (
      <div className="mainContainerAllCards">
        <div className="allDetailTextContainer">
          <Link to="/all-collection" className="viewAllCollectionText">Ver toda la colección</Link>
          <p className="textTitleCards">ARCANOS MAYORES</p>
        </div>
        <div className="buttonActiveOptions">
          {
            images.map((elem, index) => {
              return <Button id={elem.id} info={elem} key={index} />
            })
          }
        </div>
        <div className="allCardsContainer">
          {images.map(({ id, src, title2, romanNumber, description }) =>
            <div className={id % 2 === 0 ? 'par' : 'impar'}>
              <img key={id} src={src} id={id} className="imageCards" />
              <div className="textContainer">
                <div className="textCardNameContainer">
                  <p className="cardName1">{romanNumber}.</p>
                  <p className="cardName2">{title2}</p>
                </div>

                <p className="cardDescription">{description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}



export default AllDetailCards;