import React, { useEffect, useState } from "react";
import image1 from "../../assets/image01.png";
import image2 from "../../assets/image02.png";
import image3 from "../../assets/image03.png";
import image4 from "../../assets/image04.png";
import image5 from "../../assets/image05.png";
import image6 from "../../assets/image06.png";
import image7 from "../../assets/image07.png";
import image8 from "../../assets/image08.png";
import image9 from "../../assets/image09.png";
import image10 from "../../assets/image10.png";
import image11 from "../../assets/image11.png";
import image12 from "../../assets/image12.png";
import image13 from "../../assets/image13.png";
import image14 from "../../assets/image13.png";
import image15 from "../../assets/image13.png";
import image16 from "../../assets/image13.png";
import image17 from "../../assets/image13.png";
import image18 from "../../assets/image13.png";
import image19 from "../../assets/image13.png";
import image20 from "../../assets/image13.png";
import image21 from "../../assets/image13.png";
import image22 from "../../assets/image13.png";
import backImage from "../../assets/back.png";
import Card from "../../Components/Card/Card";
import data from "../../data";
import { withNamespaces } from "react-i18next";


const IMAGES = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
];

const Shuffle = ({ t }) => {
  const [cards, setCards] = useState(IMAGES);
  const [active, setActive] = useState(false);
  const [card, setCard] = useState();
  const [descriptionCard, setDescriptionCard] = useState("");

  const handleSuffle = () => {
    let desordenadas = cards.sort(function () {
      return Math.random() - 0.5;
    });

    setCards(desordenadas);
    setActive(false);
  };

  const cardName = (number) => {
    let selectedCard;
    let text;
    switch (number) {
      case 0:
        selectedCard = cards[0];
        text = description(selectedCard);
        break;
      case 1:
        selectedCard = cards[1];
        text = description(selectedCard);
        break;
      case 2:
        selectedCard = cards[2];
        text = description(selectedCard);
        break;
      default:
        selectedCard = cards[0];
        text = description(selectedCard);
        break;
    }
    console.log({text})
    setDescriptionCard(text);
    setCard(selectedCard);
    setActive(true);
  };

  const description = (card) => {
    let contentCard = {
      title: t(""),
      description: t(""),
    };
    switch (card) {
      case image1:
        data.map((item, i) => {
          if (item.id === 1) {
            contentCard.title = t(item.title);
            contentCard.description = t(item.description);
          }
        });
        break;
      case image2:
        data.map((item, i) => {
          if (item.id === 2) {
            contentCard.title = t(item.title);
            contentCard.description = t(item.description);
          }
        });
        break;
      case image3:
        data.map((item, i) => {
          if (item.id === 3) {
            contentCard.title = t(item.title);
            contentCard.description = t(item.description);
          }
        });
        break;
      case image4:
        data.map((item, i) => {
          if (item.id === 4) {
            contentCard.title = t(item.title);
            contentCard.description = t(item.description);
          }
        });
        break;
      case image5:
        data.map((item, i) => {
          if (item.id === 5) {
            contentCard.title = t(item.title);
            contentCard.description = t(item.description);
          }
        });
        break;
      case image6:
        data.map((item, i) => {
          if (item.id === 6) {
            contentCard.title = t(item.title);
            contentCard.description = t(item.description);
          }
        });
        break;
      case image7:
        data.map((item, i) => {
          if (item.id === 7) {
            contentCard.title = t(item.title);
            contentCard.description = t(item.description);
          }
        });
        break;
      case image8:
        data.map((item, i) => {
          if (item.id === 8) {
            contentCard.title = t(item.title);
            contentCard.description = t(item.description);
          }
        });
        break;
      case image9:
        data.map((item, i) => {
          if (item.id === 9) {
            contentCard.title = t(item.title);
            contentCard.description = t(item.description);
          }
        });
        break;
      case image10:
        data.map((item, i) => {
          if (item.id === 10) {
            contentCard.title = t(item.title);
            contentCard.description = t(item.description);
          }
        });
        break;
      case image11:
        data.map((item, i) => {
          if (item.id === 11) {
            contentCard.title = t(item.title);
            contentCard.description = t(item.description);
          }
        });
        break;
      case image12:
        data.map((item, i) => {
          if (item.id === 12) {
            contentCard.title = t(item.title);
            contentCard.description = t(t(item.description));
          }
        });
        break;
      case image13:
        data.map(({id, title, description}) => {
          if (id === 13) {
            contentCard.title = t(title);
            contentCard.description = t(description);
          }
        });
        break;
      case image14:
        data.map((item, i) => {
          if (item.id === 14) {
            contentCard.title = t(item.title);
            contentCard.description = t(item.description);
          }
        });
        break;
      case image15:
        data.map((item, i) => {
          if (item.id === 15) {
            contentCard.title = t(item.title);
            contentCard.description = t(item.description);
          }
        });
        break;
      case image16:
        data.map((item, i) => {
          if (item.id === 16) {
            contentCard.title = t(item.title);
            contentCard.description = t(item.description);
          }
        });
        break;
      case image17:
        data.map((item, i) => {
          if (item.id === 17) {
            contentCard.title = t(item.title);
            contentCard.description = t(item.description);
          }
        });
        break;
      case image18:
        data.map((item, i) => {
          if (item.id === 18) {
            contentCard.title = t(item.title);
            contentCard.description = t(item.description);
          }
        });
        break;
      case image19:
        data.map((item, i) => {
          if (item.id === 19) {
            contentCard.title = t(item.title);
            contentCard.description = t(item.description);
          }
        });
        break;
      case image20:
        data.map((item, i) => {
          if (item.id === 20) {
            contentCard.title = t(item.title);
            contentCard.description = t(item.description);
          }
        });
        break;
      case image21:
        data.map((item, i) => {
          if (item.id === 21) {
            contentCard.title = t(item.title);
            contentCard.description = t(item.description);
          }
        });
        break;
      case image22:
        data.map((item, i) => {
          if (item.id === 22) {
            contentCard.title = t(item.title);
            contentCard.description = t(item.description);
          }
        });
        break;
      default:
        contentCard = "";
        break;
    }
    return contentCard;
  };

  useEffect(() => {
    handleSuffle();
  }, []);

  return (
    <div className="mainContainerShuffle" role="main">
      <div className="containerTitleShuffle">
        {active == false && (
          <h1 className="pickACard">Elegí tu carta del día</h1>
        )}
      </div>
      <div className="cardsContainerShuffle">
        {active === false && (
          <div className="backSideContainer">
            <img
              className="card"
              id="one"
              src={backImage}
              alt="select card 1"
              role="button"
              onClick={() => cardName(0)}
              onKeyPress={(e) => (e.key === "Enter" ? cardName(0) : "")}
            />
            <img
              className="card"
              id="two"
              src={backImage}
              alt="select card 2"
              role="button"
              onClick={() => cardName(1)}
              onKeyPress={(e) => (e.key === "Enter" ? cardName(1) : "")}
            />
            <img
              className="card"
              id="three"
              src={backImage}
              alt="select card 3"
              role="button"
              onClick={() => cardName(2)}
              onKeyPress={(e) => (e.key === "Enter" ? cardName(2) : "")}
            />
          </div>
        )}
        <div className="cardSelectedContainerShuffle">
          {active === true && (
            <Card
              cards={cards}
              card={card}
              active={active}
              text={descriptionCard}
            />
          )}
        </div>
      </div>
      <div className="buttonActiveContainer">
        <button
          className={active ? "buttonActive" : "buttonInactive"}
          onClick={() => handleSuffle()}
        >
          Tirá otra
        </button>
      </div>
    </div>
  );
};

export default withNamespaces()(Shuffle);

