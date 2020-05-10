
import React, { Component } from 'react';
import './App.css';
import AllDetailCards from './pages/AllDetailCards/AllDetailCards';
import HomePage from './pages/HomePage/HomePage';
import Shuffle from './pages/Shuffle/Shuffle';
import DetailCard from './pages/AboutMe/AboutMe';
import Donate from './pages/Donate/Donate';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/globalStyles";
import { lightTheme, darkTheme } from "./theme";
import  {useDarkMode} from "./Components/useDarkMode";
import Toggle from './Components/Toggle/Toggle';


// class App extends Component {

const App = () => {
  // const [videos, setVideos] = useState([]);
  // const [theme, setTheme] = useState('light');
  // const themeToggler = () => {
  //   theme === 'light' ? setTheme('dark') : setTheme('light')
  // }

  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;



  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={themeToggler} />
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
                <li classNAme="links" >
                  <Link to="/donate" className="navMenuLinks">Donar</Link>
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
                <Route path="/donate">
                  <Donate />
                </Route>
              </Switch>
            </div>
          </Router>
          <div className="footer">
            <p className="footerUs">Esta página fue desarrollada con 💖por <a href="https://www.github.com/chiaradiaz1991" target="_blank" className="footerUsA"> Chiara Diaz</a></p>
            <p className="footerUs">Esta página fue diseñada con 💖por <a href="https://www.behance.net/DeandraDelgado" target="_blank" className="footerUsA"> Deandra Delgado</a></p>
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;



