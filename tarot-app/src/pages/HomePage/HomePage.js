import React, { Component } from 'react';
import './styles.css';
import image1 from '../../assets/image01.jpg'
import { Link } from "react-router-dom";


class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="mainContainerHome">
        <div className="imageContainer">
          <img className="image1" src={image1} />
          <img className="image2" src={image1} />
          <img className="image3" src={image1} />
          <img className="image4" src={image1} />
        </div>
        <div className="textContainer">
          <p className="textTitle">¡Bienvenidx!</p>
          <p className="textDescription">
          ✨Te invito a que conozcas el mazo de Tarot que ilustré. Descubrí que energía disponible tenés el día de hoy ✨ (cambiar texto, agregar titulo del tarot)
          </p>
          <div className="buttonContainer">
            <Link to="/shuffle" className="linkHome">Azar</Link>
          </div>
        </div>
      </div>
    )
  }
}



export default HomePage;