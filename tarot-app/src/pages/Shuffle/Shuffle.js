import React from 'react';
// import style from "./style.css";
import '../Shuffle/style.css';
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
    this.cards = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13];

    this.state = {
      cards: this.cards,
      active: false,
      card: '',
    }
  }

  handleActive() {
    this.setState({
      active: !this.state.active,
    });
  }

  handleSuffle() {
    console.log('ESTOY EN Card.JS')
    let desordenadas = this.state.cards.sort(function () {
      return Math.random() - 0.5
    });

    this.setState({
      cards: desordenadas,
      active: false,
    });
  }

  cardName(number) {
    let selectedCard;
    switch (number) {
      case 0:
        selectedCard = this.state.cards[0];
        break;
      case 1:
        selectedCard = this.state.cards[1];
        break;
      case 2:
        selectedCard = this.state.cards[2];
        break;
      default:
        selectedCard = this.state.cards[0];
        break;
    }

    this.setState({
      card: selectedCard,
      active: true,
    });
  }


  componentDidMount() {
    this.handleSuffle();
  }





  render() {
    const { cards, active, card } = this.state;

    return (
      // <div className="mainContainer">
      <div className={active ? 'mainContainerFront' : 'mainContainerBack' }>
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

