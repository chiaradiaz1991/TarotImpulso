import React, { Component } from 'react';
import imageUser from '../../assets/userimage.png';

class AboutMe extends Component {
  render() {
    return (
      <div className="aboutMeMainContainer">
        <img className="imageAboutMe" src={imageUser} />
        <div className="textAboutMe">
          <p>¡Hola, Mi nombre es Chiara!</p>
          <p>Soy programadora front end e ilustradora</p>
          <p>Me alegro que estés acá. Te invito a que conozcas el mazo de Tarot que ilustré con mucho amor y dedicación. Le puse el nombre de Tarot Esta basado en los 22 arcanos mayores del Tarot Marselle.</p>
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