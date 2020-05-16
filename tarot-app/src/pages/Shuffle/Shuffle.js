import React from 'react';
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
import image14 from '../../assets/image13.jpg';
import image15 from '../../assets/image13.jpg';
import image16 from '../../assets/image13.jpg';
import image17 from '../../assets/image13.jpg';
import image18 from '../../assets/image13.jpg';
import image19 from '../../assets/image13.jpg';
import image20 from '../../assets/image13.jpg';
import image21 from '../../assets/image13.jpg';
import image22 from '../../assets/image13.jpg';
import backImage from '../../assets/back.png';
import Card from '../../Components/Card/Card';
import data from '../../data';




class Shuffle extends React.Component {
  constructor(props) {
    super(props)
    this.cards = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22];

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
        text = this.description(selectedCard);
        break;
      case 1:
        selectedCard = this.state.cards[1];
        text = this.description(selectedCard);
        break;
      case 2:
        selectedCard = this.state.cards[2];
        text = this.description(selectedCard);
        break;
      default:
        selectedCard = this.state.cards[0];
        text = this.description(selectedCard);
        break;
    }



    this.setState({
      card: selectedCard,
      active: true,
      description: text,
    });

  }

  description(card) {
    let descriptionCard = {
      title: '',
      description: '',
    };
    switch (card) {
      case image1:
        data.map((item, i) => {
          if (item.id === 1) {
            descriptionCard.title = item.title;
            descriptionCard.description = item.description;
          }
        });
        break;
      case image2:
        data.map((item, i) => {
          if (item.id === 2) {
            descriptionCard.title = item.title;
            descriptionCard.description = item.description;
          }
        });
        break;
      case image3:
        data.map((item, i) => {
          if (item.id === 3) {
            descriptionCard.title = item.title;
            descriptionCard.description = item.description;
          }
        });
        break;
      case image4:
        data.map((item, i) => {
          if (item.id === 4) {
            descriptionCard.title = item.title;
            descriptionCard.description = item.description;
          }
        });
        break;
      case image5:
        data.map((item, i) => {
          if (item.id === 5) {
            descriptionCard.title = item.title;
            descriptionCard.description = item.description;
          }
        });
        break;
      case image6:
        data.map((item, i) => {
          if (item.id === 6) {
            descriptionCard.title = item.title;
            descriptionCard.description = item.description;
          }
        });
        break;
      case image7:
        data.map((item, i) => {
          if (item.id === 7) {
            descriptionCard.title = item.title;
            descriptionCard.description = item.description;
          }
        });
        break;
      case image8:
        data.map((item, i) => {
          if (item.id === 8) {
            descriptionCard.title = item.title;
            descriptionCard.description = item.description;
          }
        });
        break;
      case image9:
        data.map((item, i) => {
          if (item.id === 9) {
            descriptionCard.title = item.title;
            descriptionCard.description = item.description;
          }
        });
        break;
      case image10:
        data.map((item, i) => {
          if (item.id === 10) {
            descriptionCard.title = item.title;
            descriptionCard.description = item.description;
          }
        });
        break;
      case image11:
        data.map((item, i) => {
          if (item.id === 11) {
            descriptionCard.title = item.title;
            descriptionCard.description = item.description;
          }
        });
        break;
      case image12:
        data.map((item, i) => {
          if (item.id === 12) {
            descriptionCard.title = item.title;
            descriptionCard.description = item.description;
          }
        });
        break;
      case image13:
        data.map((item, i) => {
          if (item.id === 13) {
            descriptionCard.title = item.title;
            descriptionCard.description = item.description;
          }
        });
        break;
      case image14:
        data.map((item, i) => {
          if (item.id === 14) {
            descriptionCard.title = item.title;
            descriptionCard.description = item.description;
          }
        });
        break;
      case image15:
        data.map((item, i) => {
          if (item.id === 15) {
            descriptionCard.title = item.title;
            descriptionCard.description = item.description;
          }
        });
        break;
      case image16:
        data.map((item, i) => {
          if (item.id === 16) {
            descriptionCard.title = item.title;
            descriptionCard.description = item.description;
          }
        });
        break;
      case image17:
        data.map((item, i) => {
          if (item.id === 17) {
            descriptionCard.title = item.title;
            descriptionCard.description = item.description;
          }
        });
        break;
      case image18:
        data.map((item, i) => {
          if (item.id === 18) {
            descriptionCard.title = item.title;
            descriptionCard.description = item.description;
          }
        });
        break;
      case image19:
        data.map((item, i) => {
          if (item.id === 19) {
            descriptionCard.title = item.title;
            descriptionCard.description = item.description;
          }
        });
        break;
      case image20:
        data.map((item, i) => {
          if (item.id === 20) {
            descriptionCard.title = item.title;
            descriptionCard.description = item.description;
          }
        });
        break;
      case image21:
        data.map((item, i) => {
          if (item.id === 21) {
            descriptionCard.title = item.title;
            descriptionCard.description = item.description;
          }
        });
        break;
      case image22:
        data.map((item, i) => {
          if (item.id === 22) {
            descriptionCard.title = item.title;
            descriptionCard.description = item.description;
          }
        });
        break;
      default:
        descriptionCard = '';
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
      <div className="mainContainerShuffle">
        <div className="containerTitleShuffle">
          {active == false && (
            <p className="pickACard">Elegí tu carta del día</p>
          )}
        </div>
        <div className="cardsContainerShuffle">
          {
            active === false && (
              <div className="backSideContainer">
                <img className="card" id="one" src={backImage} onClick={() => this.cardName(0)} />
                <img className="card" id="two" src={backImage} onClick={() => this.cardName(1)} />
                <img className="card" id="three" src={backImage} onClick={() => this.cardName(2)} />
              </div>
            )
          }
          <div className="cardSelectedContainerShuffle">
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
        <div className="buttonActiveContainer">
          <button className={active ? 'buttonActive' : 'buttonInactive'} onClick={() => this.handleSuffle()}>
            Tirá otra
      </button>
        </div>
      </div >
    )
  }
}


export default Shuffle;

