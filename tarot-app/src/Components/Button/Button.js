import React from 'react';
import './styles.css';


const Button = (props) => (
    <div className="buttonMainContainer">
      <button className="cardButton"><a href={`#${props.id}`}>{props.info.title}</a></button>
    </div>
  );

  export default Button;