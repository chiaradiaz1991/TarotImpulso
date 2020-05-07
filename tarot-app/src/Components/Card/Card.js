
import React from 'react';
import './styles.css';



class Card extends React.Component {
  render() {
    return (
      <div className="mainContainerCard">
        <div className="cardContainer">
          <img className="cardSelected" src={this.props.card} />
        </div>
        <div className="textContainer">
          <h1>{this.props.text.title}</h1>
          <p>{this.props.text.description}</p>
        </div>
      </div>
    )
  }
}

export default Card;


