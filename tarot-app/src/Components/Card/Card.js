
import React from 'react';
import '../Card/styles.css';



class Card extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <img className="cardSelected" src={this.props.card} />

      </div>
    )
  }
}

export default Card;


