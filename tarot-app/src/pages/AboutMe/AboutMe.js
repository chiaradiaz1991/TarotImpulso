import React, { Component } from 'react';
import imageUser from '../../assets/userimage.png';
import Behance from '../../assets/behance.svg';
import Github from '../../assets/github.svg';
import Instagram from '../../assets/instagram.svg';

class AboutMe extends Component {
  render() {
    return (
      <div className="aboutMeMainContainer">
        <div className="leftContainer">
          <div className="imageAboutMeContainer">
            <img className="imageAboutMe" src={imageUser} />
          </div>
          <div className="socialAboutMe">
            <a href="https://www.behance.net/chiaradiaz/" target="_blank">
              <img src={Behance} alt="social-media" className="socialAboutMeIcon" />
            </a>
            <a href="https://github.com/chiaradiaz1991" target="_blank"><img src={Github} alt="social-media" className="socialAboutMeIcon" /></a>
            <a href="https://www.instagram.com/creativitychiara/" target="_blank"><img src={Instagram} alt="social-media" className="socialAboutMeIcon" /></a>

          </div>
        </div>
        <div className="textAboutMe">
          <p className="myName">¡Hola, mi nombre es Chiara!✨</p>
          <p className="presentation">Desde pequeña siempre me gusto expresarme a través del arte. En el momento en que obtuve mi título creativo publicitario fue cuando estuve en contacto con el arte en todas sus fases, desde la escultura, los dibujos y las películas. Dibujar fue un motor para conectarme conmigo de una manera muy valiosa y también fue una gran recepción positiva de mi entorno. Hoy en día trabajo como desarrolladora web, pero una gran parte de mí tiene pasión por la ilustración gracias a mi madre, que es un artista que admiro mucho.</p>
          <p className="presentationTwo">🔮 Así nacio este proyecto. El universo es un gran generador de eventos necesarios para nuestra propia evolución y tratar de exprimir el jugo es clave. Todo esta perfectamente ordenado para que sea lo que tenga que ser. Cada situación/persona que se nos presenta, es un IMPULSO para surfear la vida.</p>
        </div>
      </div >
    )
  }
}

export default AboutMe;