
import React, { Component } from 'react';
import './App.css';
import AllDetailCards from './pages/AllDetailCards/AllDetailCards';
import HomePage from './pages/HomePage/HomePage';
import Shuffle from './pages/Shuffle/Shuffle';
import DetailCard from './pages/DetailCard/DetailCard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import images from './assets/1.jpg  ';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="list-container">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/all-cards">All Cards</Link>
              </li>
              <li>
                <Link to="/detail-card">Detail Card</Link>
              </li>
              {/* <li>
                <Link to="/shuffle">Shuffle!</Link>
              </li> */}
            </ul>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/all-cards">
                <AllDetailCards />
              </Route>
              <Route path="/detail-card">
                <DetailCard />
              </Route>
              <Route path="/shuffle">
                <Shuffle />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;



