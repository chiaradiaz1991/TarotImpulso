
import React, { Component } from 'react';
// import './style.css';
import image1 from '../../assets/image01.jpg';
import image2 from '../../assets/image02.jpg';
import image3 from '../../assets/image03.jpg';
import image4 from '../../assets/image04.jpg';
import image5 from '../../assets/image05.jpg';
import image6 from '../../assets/image06.jpg';
import image7 from '../../assets/image07.jpg';
import image8 from '../../assets/image08.jpg';
import image9 from '../../assets/image09.jpg';
import image10 from '../../assets/image10.jpg';
import image11 from '../../assets/image11.jpg';
import image12 from '../../assets/image12.jpg';
import image13 from '../../assets/image13.jpg';
import backImage from '../../assets/back.png';


class Card extends React.Component {
  render() {
    console.log(this.props.active, 'holis');
    return (
      <>
        {
          this.props.active == true && (
            <div>
                      {/* {cards.map((item, i) => {
          return (
            <img src={item} />
          )
        })} */}
              <img src={this.props.image} />
            </div>
          )
        }
      </>
    )
  }
}

export default Card;


