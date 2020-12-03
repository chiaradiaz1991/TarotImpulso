import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CloseMenu from "../../assets/Union.svg";
import OpenMenu from "../../assets/menu.svg";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="burgerMainContainer">
      <div className="iconBurgerMenu" onClick={() => handleMenu()}>
        {open ? (
          <img src={CloseMenu} alt="image" />
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
            Cartas
          </NavLink>
        </li>
        <li className="linksBurgerMenu">
          <NavLink
            to="/about-me"
            className="navMenuLinksBurger"
            activeClassName="activeLinkBurger"
            onClick={() => handleMenu()}
          >
            Sobre Mí
          </NavLink>
        </li>
        <li className="linksBurgerMenu">
          <NavLink
            to="/donate"
            className="navMenuLinksBurger"
            activeClassName="activeLinkBurger"
            onClick={() => handleMenu()}
          >
            Donar
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
