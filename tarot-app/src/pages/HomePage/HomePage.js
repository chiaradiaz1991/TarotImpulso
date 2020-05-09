import React, { Component } from 'react';
import './styles.css';
import image14 from '../../assets/image14.jpg';
import image17 from '../../assets/image17.jpg';
import image18 from '../../assets/image18.jpg';
import image19 from '../../assets/image19.jpg';
import { Link } from "react-router-dom";


class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="mainContainerHome">
        <div className="imageContainer">
          <img className="image1" src={image19} />
          <img className="image2" src={image14} />
          <img className="image3" src={image17} />
          <img className="image4" src={image18} />
        </div>
        <div className="textContainer">
          <p className="textTitle">¡Bienvenidx! cambiar la tipografia</p>
          <p className="textDescription">
          Te invito a que conozcas el mazo de Tarot que ilustré. Descubrí que energía disponible tenés el día de hoy. Esta basado en los 22 arcanos mayores del tarot Marselle (cambiar texto, agregar titulo del tarot)
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