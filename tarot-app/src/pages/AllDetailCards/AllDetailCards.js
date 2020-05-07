import React, { Component } from 'react';
import './styles.css';
import images from '../../data';
import Button from '../../Components/Button/Button';

class AllDetailCards extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="buttonContainer">
          {
            images.map((elem, index) => {
              return <Button id={elem.id} info={elem} key={index} />
            })
          }
        </div>
        <div>
          {images.map(({ id, src, title, description }) =>
            <div className={id % 2 === 0 ? 'par' : 'impar'}>
              <img key={id} src={src} id={id} />
              <div className="textContainer">
                <div>{title}</div>
                <div>{description}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}



export default AllDetailCards;