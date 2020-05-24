
import React from 'react';
import upButton from '../../assets/UPbtn.svg';

class ScrollTopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    };
  }

  handleScrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.id);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  handleScrollToTop() {
    let id = setInterval(this.handleScrollStep.bind(this), this.props.delayInMs);
    this.setState({ id: id });
  }

  render() {
    return (
      <button className="scroll" onClick={() => { this.handleScrollToTop()}}>
        <img src={upButton} alt="up-button" className="upButton" />
      </button>
    )
  }
}

export default ScrollTopUp;
