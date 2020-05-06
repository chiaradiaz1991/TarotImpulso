import React, { Component } from 'react';
import './style.css';
import image1 from '../../assets/image01.jpg'
import { Link } from "react-router-dom";


class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main-container">
        <div className="image-container">
          <img className="image1" src={image1} />
          <img className="image2" src={image1} />
          <img className="image3" src={image1} />
          <img className="image4" src={image1} />
        </div>
        <div className="text-container">
          <div className="text-title">HOLA HOME PAGE!</div>
          <div className="text-description">It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here, content here', making it look
          like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
          as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
          their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).</div>
          <div className="button-container">
            <Link to="/shuffle">Shuffle</Link>
          </div>
        </div>
      </div>
    )
  }
}



export default HomePage;