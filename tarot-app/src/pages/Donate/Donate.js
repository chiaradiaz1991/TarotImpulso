
import React, { Component } from 'react';
import CreditCardsImage from '../../assets/credit-Cards.svg';

class Donate extends Component {
  render() {
    return (
      <div className="donateContainer">
        <p className="donateText">Amo programar y para desarrollar ésta web e ilustrar el mazo de cartas</p>
        <p className="donateText">invertí un monton de tiempo y energía ⚡👩🏽‍💻</p>
        <div className="containerLinks">
          <p className="likeProject">Si te gustó este proyecto podes donar mediante los siguientes links 👇</p>
          <div className="donate-desktop">
            <div className="linksDonate">
              <div className="link">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input type="hidden" name="hosted_button_id" value="LXVVBEV3FUPNA" />
                  <input type="image" src="https://github.com/chiaradiaz1991/tarot/blob/master/tarot-app/src/assets/1-estrella.png?raw=true" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                  <img alt="" border="0" src="https://www.paypal.com/en_PL/i/scr/pixel.gif" width="1" height="1" />
                </form>
              </div>
              <div className="link">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input type="hidden" name="hosted_button_id" value="SB39XEQKXWP84" />
                  <input type="image" src="https://raw.githubusercontent.com/chiaradiaz1991/tarot/724684c27dcaafa23d74bcf7c5849301e5a58898/tarot-app/src/assets/3-estrellas.svg" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                  <img alt="" border="0" src="https://www.paypal.com/en_PL/i/scr/pixel.gif" width="1" height="1" />
                </form>
              </div>
              <div className="link">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input type="hidden" name="hosted_button_id" value="5VAXSPCC7VW6J" />
                  <input type="image" src="https://raw.githubusercontent.com/chiaradiaz1991/tarot/724684c27dcaafa23d74bcf7c5849301e5a58898/tarot-app/src/assets/5-estrellas.svg" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                  <img alt="" border="0" src="https://www.paypal.com/en_PL/i/scr/pixel.gif" width="1" height="1" />
                </form>

              </div>
            </div>
          </div>
          <div className="donate-mobile">
            <div className="linksDonate">
              <div className="link">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input type="hidden" name="hosted_button_id" value="74KPMTFUZCK78" />
                  <input type="image" src="https://raw.githubusercontent.com/chiaradiaz1991/tarot/724684c27dcaafa23d74bcf7c5849301e5a58898/tarot-app/src/assets/1-estrella-mobile.svg" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                  <img alt="" border="0" src="https://www.paypal.com/en_PL/i/scr/pixel.gif" width="1" height="1" />
                </form>
              </div>
              <div className="link"></div>
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="QPL48XPBXFU3A" />
                <input type="image" src="https://raw.githubusercontent.com/chiaradiaz1991/tarot/724684c27dcaafa23d74bcf7c5849301e5a58898/tarot-app/src/assets/3-estrellas-mobile.svg" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_PL/i/scr/pixel.gif" width="1" height="1" />
              </form>

            </div>
            <div className="link">
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="WFZMXCD34FVWS" />
                <input type="image" src="https://raw.githubusercontent.com/chiaradiaz1991/tarot/724684c27dcaafa23d74bcf7c5849301e5a58898/tarot-app/src/assets/5-estrellas-mobile.svg" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_PL/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </div>
          </div>
        </div>
        <div className="donateFooter">
          <img src={CreditCardsImage} alt="footer-cards" className="cards" />
          <p className="footerText">Y si no podés donar, estoy muy contenta que estés acá 💜</p>
        </div>
      </div>
    )
  }
}


export default Donate;




