import React from "react";
import AllDetailCards from "./pages/AllDetailCards/AllDetailCards";
import HomePage from "./pages/HomePage/HomePage";
import Shuffle from "./pages/Shuffle/Shuffle";
import DetailCard from "./pages/AboutMe/AboutMe";
import Donate from "./pages/Donate/Donate";
import Wrapper from "./Components/Wrapper/Wrapper";
import BurgerMenu from "./Components/BurgerMenu/BurgerMenu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import logo from "../src/assets/Logo.svg";
import AllCollection from "./pages/AllCollection/AllCollection";
import { withNamespaces } from "react-i18next";
import i18n from './i18n';

const App = ({ t }) => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <div>
        <button onClick={() => changeLanguage("es")}>es</button>
        <button onClick={() => changeLanguage("en")}>en</button>
      </div>
      <div className="mainContainerApp">
        <div className="mainContainerAppNavLinks">
          <Router>
            <Wrapper>
              <div className="listContainer">
                <div className="desktop-view">
                  <ul>
                    <div className="logoContainer">
                      <li className="links">
                        <Link to="/" className="navMenuLinks">
                          <img src={logo} alt="" />
                        </Link>
                      </li>
                    </div>
                    <div className="otherLinks" role="navigation">
                      <li className="links">
                        <NavLink
                          to="/all-cards"
                          className="navMenuLinks"
                          activeClassName="activeLink"
                        >
                          {t("home-page.nav-link.cards")}
                        </NavLink>
                      </li>
                      <li className="links">
                        <NavLink
                          to="/about-me"
                          className="navMenuLinks"
                          activeClassName="activeLink"
                        >
                          {t("home-page.nav-link.about-me")}
                        </NavLink>
                      </li>
                      <li className="links">
                        <NavLink
                          to="/donate"
                          className="navMenuLinks"
                          activeClassName="activeLink"
                        >
                          {t("home-page.nav-link.donate")}
                        </NavLink>
                      </li>
                    </div>
                  </ul>
                </div>
                <div className="mobile-view">
                  <div className="logoContainerMobile">
                    <li className="linkLogoMobile">
                      <Link to="/" className="navMenuLogoMobile">
                        <img src={logo} alt="logo" />
                      </Link>
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
          <p className="footerUs">
          {t("footer.developed")}{'\u00A0'}
            <a
              href="https://chiaradiaz.com"
              target="_blank"
              className="footerUsA"
            >
              Chiara Diaz&nbsp;
            </a>
            {t("footer.designed")} {'\u00A0'}
            <a
              href="https://www.behance.net/DeandraDelgado"
              target="_blank"
              className="footerUsA"
            >
              Deandra Delgado
            </a>
            {t("footer.rights")} {'\u00A0'}
          </p>
        </div>
        <div className="footerMobile">
          <p className="footerUsMobile">
          {t("footer.developed")} {'\u00A0'}
            <a
              href="https://chiaradiaz.com"
              target="_blank"
              className="footerUsAMobile"
            >
              Chiara Diaz&nbsp;
            </a>
          </p>
          <p className="footerUsMobile">
          {t("footer.designed")} {'\u00A0'}
            <a
              href="https://www.behance.net/DeandraDelgado"
              target="_blank"
              className="footerUsAMobile"
            >
              Deandra Delgado
            </a>
          </p>
          <p className="footerUsMobile">{t("footer.rights")}{'\u00A0'}</p>
        </div>
      </div>
    </>
  );
};

export default withNamespaces()(App);
