import React, { Component, useState } from 'react';
import './style.css';
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
import Card from '../../Components/Card/Card';




class Shuffle extends React.Component {
  constructor(props) {
    super(props)

    this.backCards = [backImage, backImage, backImage]
    this.cards = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13];

    this.state = {
      cards: this.cards,
      active: false,
    }
  }

  handleActive() {
    this.setState({
      active: !this.state.active,
    });
  }

  handleSuffle() {
    let desordenadas = this.state.cards.sort(function () {
      return Math.random() - 0.5
    });

    this.setState({
      cards: desordenadas,
      active: !this.state.active,
    });

  }


  componentDidMount() {
    this.handleSuffle();

  }





  render() {
    const { cards, active } = this.state;
    console.log(cards, active, 'DESP DEL RENDER')
    return (
      <div>
        <div>HOLA SHUFFLE PAGE!</div>
        {cards.map((item, i) => {
          if (i < 3) {
            return (
              <>
                {/* <Card
                  key={i}
                  active={active}
                  image={item}
                /> */}
                <img src={item} />
              </>
            )
          }
        })}
        <button onClick={() => this.handleSuffle()}>
          Click me
      </button>
      </div>
    )
  }
}


//poner en un component la accion de mostrar o no el reverso y la logica va  a acá 
// no usar hooks, en el componentDidMount actualizar el state del array de cartas que estoy usando


export default Shuffle;

