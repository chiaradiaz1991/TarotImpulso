import React from 'react';
import './styles.css';


const Button = (props) => (
    <div className="buttonContainer">
      <button><a href={`#${props.id}`}>{props.info.title}</a></button>
    </div>
  );

  export default Button;