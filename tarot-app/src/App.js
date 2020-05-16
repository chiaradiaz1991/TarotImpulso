
import React from 'react';
import AllDetailCards from './pages/AllDetailCards/AllDetailCards';
import HomePage from './pages/HomePage/HomePage';
import Shuffle from './pages/Shuffle/Shuffle';
import DetailCard from './pages/AboutMe/AboutMe';
import Donate from './pages/Donate/Donate';
import Wrapper from './Components/Wrapper/Wrapper';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from '../src/assets/Logo.svg'




const App = () => {
  return (
    <>
      <div className="mainContainerApp">
        <div className="mainContainerAppNavLinks">
          <Router>
            <Wrapper>
              <div className="listContainer">
                <ul>
                  <div className="logoContainer" >
                    <li className="links">
                      <Link to="/" className="navMenuLinks"><img src={logo} alt="logo" /></Link>
                    </li>
                  </div>
                  <div className="otherLinks">
                    <li className="links">
                      <Link to="/all-cards" className="navMenuLinks">Cartas</Link>
                    </li>
                    <li className="links">
                      <Link to="/about-me" className="navMenuLinks">Sobre Mí</Link>
                    </li>
                    <li className="links">
                      <Link to="/donate" className="navMenuLinks">Donar</Link>
                    </li>
                  </div>
                </ul>
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
                </Switch>
              </div>
            </Wrapper>
          </Router>
        </div>
        <div className="footer">
          <p className="footerUs">Esta página fue desarrollada por <a href="https://www.github.com/chiaradiaz1991" target="_blank" className="footerUsA"> Chiara Diaz</a> y diseñada por <a href="https://www.behance.net/DeandraDelgado" target="_blank" className="footerUsA"> Deandra Delgado</a> con 💖</p>
        </div>
      </div>
    </>
  );
}

export default App;



