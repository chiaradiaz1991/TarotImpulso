
import React from 'react';
import {
  NavLink
} from "react-router-dom";
import CloseMenu from '../../assets/Union.svg';
import OpenMenu from '../../assets/menu.svg';


class BurgerMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  handleMenu() {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    const { open } = this.state;
    return (
      <div className="burgerMainContainer">
        <div className="iconBurgerMenu" onClick={() => this.handleMenu()}>
          {
            open ? (
              <img src={CloseMenu} alt="image" />
            ) : (
                <img src={OpenMenu} alt="imageOpen" />
              )
          }

        </div>
        <ul className={open ? "linksBurgerMenuContainer" : "linksBurgerMenuContainerInactive"}>
          <li className="linksBurgerMenu">
            <NavLink to="/all-cards" className="navMenuLinksBurger" activeClassName="activeLinkBurger" onClick={() => this.handleMenu()}>Cartas</NavLink>
          </li>
          <li className="linksBurgerMenu">
            <NavLink to="/about-me" className="navMenuLinksBurger" activeClassName="activeLinkBurger" onClick={() => this.handleMenu()}>Sobre Mí</NavLink>
          </li>
          <li className="linksBurgerMenu">
            <NavLink to="/donate" className="navMenuLinksBurger" activeClassName="activeLinkBurger" onClick={() => this.handleMenu()}>Donar</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}


export default BurgerMenu;