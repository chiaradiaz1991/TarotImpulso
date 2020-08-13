import React, { Component } from 'react';
import imageUser from '../../assets/userimage.png';
import Behance from '../../assets/behance.svg';
import Github from '../../assets/github.svg';
import Instagram from '../../assets/instagram.svg';

class AboutMe extends Component {
  render() {
    return (
      <div className="aboutMeMainContainer" role="main">
        <div className="leftContainer">
          <div className="imageAboutMeContainer">
            <img className="imageAboutMe" src={imageUser} alt="" />
          </div>
          <div className="socialAboutMe">
            <span aria-hidden="true" role="presentation">
              <a href="https://www.behance.net/chiaradiaz/" target="_blank" aria-label="go to/visit my Behance">
                <img src={Behance} alt="" className="socialAboutMeIcon" />
              </a>
            </span>
            <span aria-hidden="true" role="presentation">
              <a href="https://github.com/chiaradiaz1991" target="_blank" aria-label="go to/visit my Github">
                <img src={Github} alt="" className="socialAboutMeIcon" />
              </a>
            </span>
            <span aria-hidden="true" role="presentation">
              <a href="https://www.instagram.com/chiarailustra/" target="_blank" aria-label="go to/visit my Instagram">
                <img src={Instagram} alt="" className="socialAboutMeIcon" />
              </a>
            </span>
          </div>
        </div>
        <div className="textAboutMe">
          <h1 className="myName">¡Hola, mi nombre es Chiara!✨</h1>
          <p className="presentation">Desde pequeña siempre me gustó expresarme a través del arte. En el momento en que obtuve mi título de Creativa Publicitaria, fue cuando estuve en contacto con el arte en todas sus fases, desde la escultura, pintura, ilustración, cine, etc. Ilustrar fue y es un motor para conectarme conmigo de una manera muy valiosa. Hoy en día trabajo como programadora web, pero una gran parte de mí tiene pasión por la ilustración gracias a mi mamá, que es una artista que admiro mucho.</p>
          <p className="presentationTwo">🔮 Así nació este proyecto, Tarot Impulso. El universo es un gran generador de eventos necesarios para nuestra propia evolución y tratar de exprimir el jugo es clave. Todo esta perfectamente ordenado para que sea lo que tenga que ser. Cada situación/persona que se nos presenta, es un IMPULSO para surfear la vida.</p>
          <p className="presentationTwo">Si querés escribirme un e-mail podes hacerlo a ✉️ chiara.diaz1991@gmail.com</p>
        </div>
      </div>
    )
  }
}

export default AboutMe;