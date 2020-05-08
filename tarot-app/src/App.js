
import React, { Component } from 'react';
import './App.css';
import AllDetailCards from './pages/AllDetailCards/AllDetailCards';
import HomePage from './pages/HomePage/HomePage';
import Shuffle from './pages/Shuffle/Shuffle';
import DetailCard from './pages/AboutMe/AboutMe';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="list-container">
            <ul>
              <li classNAme="links" >
                <Link to="/" className="navMenuLinks">Home</Link>
              </li>
              <li classNAme="links" >
                <Link to="/all-cards" className="navMenuLinks">Cartas</Link>
              </li>
              <li classNAme="links" >
                <Link to="/about-me" className="navMenuLinks">Sobre Mí</Link>
              </li>
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
            </Switch>
          </div>
        </Router>
        <div className="footer">
          <p className="footerUs">Esta página fue desarrollada con 💖por <a href="https://www.github.com/chiaradiaz1991" target="_blank" className="footerUsA"> Chiara Diaz</a></p>
          <p className="footerUs">Esta página fue diseñada con 💖por <a href="https://www.behance.net/DeandraDelgado" target="_blank" className="footerUsA"> Deandra Delgado</a></p>
        </div>
      </div>
    );
  }
}

export default App;



