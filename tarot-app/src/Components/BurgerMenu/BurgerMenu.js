import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CloseMenu from "../../assets/Union.svg";
import OpenMenu from "../../assets/menu.svg";
import { withNamespaces } from "react-i18next";
import i18n from "../../i18n";

const BurgerMenu = ({ t }) => {
  const [open, setOpen] = useState(false);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="burgerMainContainer">
      <div className="iconBurgerMenu" onClick={() => handleMenu()}>
        {open ? (
          <img src={CloseMenu} alt="close-img" />
        ) : (
          <img src={OpenMenu} alt="imageOpen" />
        )}
      </div>
      <ul
        className={
          open ? "linksBurgerMenuContainer" : "linksBurgerMenuContainerInactive"
        }
      >
        <li className="linksBurgerMenu">
          <NavLink
            to="/all-cards"
            className="navMenuLinksBurger"
            activeClassName="activeLinkBurger"
            onClick={() => handleMenu()}
          >
            {t("home-page.nav-link.cards")}
          </NavLink>
        </li>
        <li className="linksBurgerMenu">
          <NavLink
            to="/about-me"
            className="navMenuLinksBurger"
            activeClassName="activeLinkBurger"
            onClick={() => handleMenu()}
          >
            {t("home-page.nav-link.about-me")}
          </NavLink>
        </li>
        <li className="linksBurgerMenu">
          <NavLink
            to="/donate"
            className="navMenuLinksBurger"
            activeClassName="activeLinkBurger"
            onClick={() => handleMenu()}
          >
            {t("home-page.nav-link.donate")}
          </NavLink>
        </li>
        <li className="linksBurgerMenu">
          <div className="localizationInnerContainer">
            <button
              className="localizationButton"
              onClick={() => changeLanguage("es")}
            >
              ES
            </button>
            <span className="localizationDiv">/</span>
            <button
              className="localizationButton"
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default withNamespaces()(BurgerMenu);
