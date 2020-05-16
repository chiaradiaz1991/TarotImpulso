
import React, { Component } from 'react';

class Donate extends Component {
  render() {
    return (
      <div className="donateContainer">
        <p className="donate">¡Hola! Si bien amo programar, desarrollar ésta web e ilustrar el mazo de cartas me llevó muchas horas silla 👩🏽‍💻</p>
        <p className="donate">Podes donar mediante los siguientes links 👇</p>
        <div className="containerLinks">
          <div className="link">
            <p className="stars">✨1 Estrella</p>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="PZXS4YNZTX4WL" />
              <input type="image" src="https://www.paypalobjects.com/en_US/PL/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
              <img alt="" border="0" src="https://www.paypal.com/en_PL/i/scr/pixel.gif" width="1" height="1" />
            </form>
          </div>
          <div className="link">
            <p className="stars">✨✨✨3 Estrellas</p>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="N4R48PA9522CS" />
              <input type="image" src="https://www.paypalobjects.com/en_US/PL/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
              <img alt="" border="0" src="https://www.paypal.com/en_PL/i/scr/pixel.gif" width="1" height="1" />
            </form>
          </div>
          <div className="link">
            <p className="stars">✨ Estrellas ✨</p>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="4783EDM8W8LDQ" />
              <input type="image" src="https://www.paypalobjects.com/en_US/PL/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
              <img alt="" border="0" src="https://www.paypal.com/en_PL/i/scr/pixel.gif" width="1" height="1" />
            </form>
          </div>
        </div>
        <p className="footerText">Y si no podés donar, estoy muy contenta que estés acá 💜</p>
        <p className="footerTextThanks">Agradecimientos inmensos a Deandra Delgado, una amiga muy especial y quien diseñó el sitio.</p>
      </div>
    )
  }
}


export default Donate;