import React, { Component } from 'react';
import './style.css';
import imageUser from '../../assets/userimage.png';

class AboutMe extends Component {
  render() {
    return (
      <div className="aboutMeMainContainer">
        <img className="image" src={imageUser} />
        <div className="texts">
          <p>¡Hola, Mi nombre es Chiara!</p>
          <p>Soy programadora front end e ilustradora</p>
          <p>agregar un poco mas de mi</p>
          <div>icono behance</div>
          <div>icono instagram</div>
          <div>icono github</div>
          <div>mail</div>
          <div>link para donacion</div>
          <div>agregar el link en el footer</div>
        </div>
      </div >
    )
  }
}

export default AboutMe;