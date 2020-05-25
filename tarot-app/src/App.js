
import React from 'react';
import AllDetailCards from './pages/AllDetailCards/AllDetailCards';
import HomePage from './pages/HomePage/HomePage';
import Shuffle from './pages/Shuffle/Shuffle';
import DetailCard from './pages/AboutMe/AboutMe';
import Donate from './pages/Donate/Donate';
import Wrapper from './Components/Wrapper/Wrapper';
import BurgerMenu from './Components/BurgerMenu/BurgerMenu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import logo from '../src/assets/Logo.svg'
import AllCollection from './pages/AllCollection/AllCollection';




const App = () => {
  return (
    <>
      <div className="mainContainerApp">
        <div className="mainContainerAppNavLinks">
          <Router>
            <Wrapper>
              <div className="listContainer">
                <div className="desktop-view">
                  <ul>
                    <div className="logoContainer" >
                      <li className="links">
                        <Link to="/" className="navMenuLinks"><img src={logo} alt="logo" /></Link>
                      </li>
                    </div>
                    <div className="otherLinks">
                      <li className="links">
                        <NavLink to="/all-cards" className="navMenuLinks" activeClassName="activeLink">Cartas</NavLink>
                      </li>
                      <li className="links">
                        <NavLink to="/about-me" className="navMenuLinks" activeClassName="activeLink">Sobre Mí</NavLink>
                      </li>
                      <li className="links">
                        <NavLink to="/donate" className="navMenuLinks" activeClassName="activeLink">Donar</NavLink>
                      </li>
                    </div>
                  </ul>
                </div>
                <div className="mobile-view">
                  <div className="logoContainerMobile" >
                    <li className="linkLogoMobile">
                      <Link to="/" className="navMenuLogoMobile"><img src={logo} alt="logo" /></Link>
                    </li>
                  </div>
                  <div className="burgerMenuContent">
                    <BurgerMenu />
                  </div>
                </div>
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route path="/all-cards">
                    <AllDetailCards />
                  </Route>
                  <Route path="/about-me">
                    <DetailCard />
                  </Route>
                  <Route path="/shuffle">
                    <Shuffle />
                  </Route>
                  <Route path="/donate">
                    <Donate />
                  </Route>
                  <Route path="/all-collection">
                    <AllCollection />
                  </Route>
                </Switch>
              </div>
            </Wrapper>
          </Router>
        </div>
        <div className="footer">
          <p className="footerUs">Esta página fue desarrollada por&nbsp;<a href="https://chiaradiaz.com" target="_blank" className="footerUsA">Chiara Diaz&nbsp;</a>y diseñada por&nbsp;<a href="https://www.behance.net/DeandraDelgado" target="_blank" className="footerUsA">Deandra Delgado</a>&nbsp;con 💖.&nbsp;®️ All rights reserved</p>
        </div>
        <div className="footerMobile">
          <p className="footerUsMobile">Esta página fue desarrollada por&nbsp;<a href="https://chiaradiaz.com" target="_blank" className="footerUsAMobile">Chiara Diaz&nbsp;</a></p>
          <p className="footerUsMobile">diseñada por&nbsp;<a href="https://www.behance.net/DeandraDelgado" target="_blank" className="footerUsAMobile">Deandra Delgado</a></p>
          <p className="footerUsMobile">®️ All rights reserved</p>
        </div>
      </div>
    </>
  );
}

export default App;



