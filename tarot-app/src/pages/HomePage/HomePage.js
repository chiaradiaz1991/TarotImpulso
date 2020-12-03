import React, { Component } from "react";
import { Link } from "react-router-dom";
import imageBall from "../../assets/ball.png";
import Cards from "../../assets/Cartas.png";

const HomePage = () => {
  return (
    <div className="mainContainerHome" role="main">
      <div className="imageContainer">
        <img src={Cards} alt="" className="frontImagesHome" />
      </div>
      <div className="textContainer">
        <p className="textDescription">
          El universo tiene un mensaje único para vos en este momento de tu
          vida, venga de donde venga debes creerlo y ponerlo en sintonía con tu
          realidad, tomar acción para impulsarte y avanzar hacia ese punto en
          donde queres estar mañana.
        </p>
        <span />
        <div className="textDescriptionBContainer">
          <div className="textDescriptionBContainerTexts">
            <p className="textDescriptionB">Me alegro que estés acá</p>
            <p className="textDescriptionB">¿Querés poner a prueba el azar?</p>
          </div>
          <img src={imageBall} atl="" />
        </div>
        <div className="buttonMainContainer">
          <div className="buttonContainer">
            <Link to="/shuffle" className="linkHome">
              Tirar cartas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
