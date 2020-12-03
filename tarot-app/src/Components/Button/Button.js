import React from "react";

const Button = (props) => (
  <div className="buttonMainContainer">
    <button className="cardButton" role="none" tabindex="-1">
      <a href={`#${props.id}`}>{props.info.romanNumber}</a>
    </button>
  </div>
);

export default Button;
