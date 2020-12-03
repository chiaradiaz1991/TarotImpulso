import React from "react";
import CreditCardsImage from "../../assets/credit-Cards.svg";
import { withNamespaces } from "react-i18next";

const Donate = ({ t }) => {
  return (
    <div className="donateContainer" role="main">
      <p className="donateText">
         {t("donate.love-what-I-do")}
      </p>
      <div className="containerLinks">
        <p className="likeProject">
          {t("donate.how-to")}
        </p>
        <div className="donate-desktop">
          <div className="linksDonate">
            <div className="link">
              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_top"
              >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="LXVVBEV3FUPNA"
                />
                <input
                  type="image"
                  src="https://github.com/chiaradiaz1991/tarot/blob/master/tarot-app/src/assets/1-estrella.png?raw=true"
                  border="0"
                  name="submit"
                  title="PayPal - The safer, easier way to pay online!"
                  alt="Donate with PayPal button"
                />
                <img
                  alt=""
                  border="0"
                  src="https://www.paypal.com/en_PL/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </div>
            <div className="link">
              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_top"
              >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="SB39XEQKXWP84"
                />
                <input
                  type="image"
                  src="https://raw.githubusercontent.com/chiaradiaz1991/tarot/724684c27dcaafa23d74bcf7c5849301e5a58898/tarot-app/src/assets/3-estrellas.svg"
                  border="0"
                  name="submit"
                  title="PayPal - The safer, easier way to pay online!"
                  alt="Donate with PayPal button"
                />
                <img
                  alt=""
                  border="0"
                  src="https://www.paypal.com/en_PL/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </div>
            <div className="link">
              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_top"
              >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="5VAXSPCC7VW6J"
                />
                <input
                  type="image"
                  src="https://raw.githubusercontent.com/chiaradiaz1991/tarot/724684c27dcaafa23d74bcf7c5849301e5a58898/tarot-app/src/assets/5-estrellas.svg"
                  border="0"
                  name="submit"
                  title="PayPal - The safer, easier way to pay online!"
                  alt="Donate with PayPal button"
                />
                <img
                  alt=""
                  border="0"
                  src="https://www.paypal.com/en_PL/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="donate-mobile">
          <div className="linksDonate">
            <div className="link">
              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_top"
              >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="74KPMTFUZCK78"
                />
                <input
                  type="image"
                  src="https://raw.githubusercontent.com/chiaradiaz1991/tarot/724684c27dcaafa23d74bcf7c5849301e5a58898/tarot-app/src/assets/1-estrella-mobile.svg"
                  border="0"
                  name="submit"
                  title="PayPal - The safer, easier way to pay online!"
                  alt="Donate with PayPal button"
                />
                <img
                  alt=""
                  border="0"
                  src="https://www.paypal.com/en_PL/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </div>
            <div className="link"></div>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="QPL48XPBXFU3A"
              />
              <input
                type="image"
                src="https://raw.githubusercontent.com/chiaradiaz1991/tarot/724684c27dcaafa23d74bcf7c5849301e5a58898/tarot-app/src/assets/3-estrellas-mobile.svg"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypal.com/en_PL/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </div>
          <div className="link">
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="WFZMXCD34FVWS"
              />
              <input
                type="image"
                src="https://raw.githubusercontent.com/chiaradiaz1991/tarot/724684c27dcaafa23d74bcf7c5849301e5a58898/tarot-app/src/assets/5-estrellas-mobile.svg"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypal.com/en_PL/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="donateFooter">
        <span aria-hidden="true" role="presentation">
          <img
            src={CreditCardsImage}
            alt="Payment methods: Mastercard, Visa and American Express"
            className="cards"
          />
        </span>
      </div>
    </div>
  );
};

export default withNamespaces()(Donate);
