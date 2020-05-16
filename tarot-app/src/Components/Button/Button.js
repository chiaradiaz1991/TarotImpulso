import React from 'react';


const Button = (props) => (
    <div className="buttonMainContainer">
      <button className="cardButton"><a href={`#${props.id}`}>{props.info.title}</a></button>
    </div>
  );

  export default Button;