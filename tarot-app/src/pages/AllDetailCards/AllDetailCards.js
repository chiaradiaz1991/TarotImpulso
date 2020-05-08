import React, { Component } from 'react';
import './styles.css';
import images from '../../data';
import Button from '../../Components/Button/Button';

class AllDetailCards extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="buttonCardsContainer">
          {
            images.map((elem, index) => {
              return <Button id={elem.id} info={elem} key={index} />
            })
          }
        </div>
        <div>
          {images.map(({ id, src, title, description }) =>
            <div className={id % 2 === 0 ? 'par' : 'impar'}>
              <img key={id} src={src} id={id} className="imageCards" />
              <div className="textContainer">
                <p className="cardName">{title}</p>
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