
import React from 'react';


class Card extends React.Component {
  render() {
    return (
      <div className="mainContainerCard">
        <div className="cardContainer">
          <img className="cardSelected" src={this.props.card} />
        </div>
        <div className="textContainerCard">
          <h1 className="textTitleCard">{this.props.text.title}</h1>
          <p className="textDescriptionCard">{this.props.text.description}</p>
        </div>
      </div>
    )
  }
}

export default Card;


