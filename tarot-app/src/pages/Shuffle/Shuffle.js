import React from 'react';
// import style from "./style.css";
import './styles.css';
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
import data from '../../data';




class Shuffle extends React.Component {
  constructor(props) {
    super(props)
    this.cards = [image1, image2, image3, image4, image5, image6];

    this.state = {
      cards: this.cards,
      active: false,
      card: '',
      description: {},
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

    console.log(desordenadas, 'DESORDENADAS');


    this.setState({
      cards: desordenadas,
      active: false,
    });
  }

  cardName(number) {
    let selectedCard;
    let text;
    switch (number) {
      case 0:
        selectedCard = this.state.cards[0];
        text= this.description(selectedCard);
        break;
      case 1:
        selectedCard = this.state.cards[1];
        text= this.description(selectedCard);
        break;
      case 2:
        selectedCard = this.state.cards[2];
        text= this.description(selectedCard);
        break;
      default:
        selectedCard = this.state.cards[0];
        text= this.description(selectedCard);
        break;
    }

    

    this.setState({
      card: selectedCard,
      active: true,
      description: text,
    });

  }

  description(card) {
    let descriptionCard={
      title: '',
      description: '',
    };
    switch(card) {
      case image1:
        descriptionCard.title = "hola soy la carta 1";
        descriptionCard.description= "el mago Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere.";
      break;
      case image2:
        descriptionCard.title = "hola soy la carta 1";
        descriptionCard.description= "el mago Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere.";
      break;
      case image3:
        descriptionCard.title = "hola soy la carta 2";
        descriptionCard.description= "el mago Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere.";
      break;
      case image4:
        descriptionCard.title = "hola soy la carta 3";
        descriptionCard.description= "el mago Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere.";
      break;
      case image5:
        descriptionCard.title = "hola soy la carta 4";
        descriptionCard.description= "el mago Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere.";
      break;
      case image6:
        descriptionCard.title = "hola soy la carta 5";
        descriptionCard.description= "el mago Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere.";
      break;
      default:
        descriptionCard="nada";
        break;
    }
    console.log('HOLIS---> ', descriptionCard)
    return descriptionCard;
  }



  componentDidMount() {
    this.handleSuffle();
  }





  render() {
    const { cards, active, card, description } = this.state;
    return (
      <div className="mainContainer">
        <p>Elegí tu carta del día</p>
        <div className="cardsContainer">
        {
          active === false && (
            <div className="backSideContainer">
              <img className="card" id="one" src={backImage} onClick={() => this.cardName(0)} />
              <img className="card" id="two" src={backImage} onClick={() => this.cardName(1)} />
              <img className="card" id="three" src={backImage} onClick={() => this.cardName(2)} />
            </div>
          )
        }
        <div className="cardSelectedContainer">
          {
            active === true && (
              <Card
                cards={cards}
                card={card}
                active={active}
                text={description}
              />
            )
          }
        </div>
        </div>
        <button className={ active ? 'buttonActive' : 'buttonInactive' } onClick={() => this.handleSuffle()}>
          Click me
      </button>
      </div >
    )
  }
}


export default Shuffle;

