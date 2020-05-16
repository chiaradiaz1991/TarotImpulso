
import React from 'react';

const Wrapper = (props) => {
  return (
    <div className="wrapperContainer">
      {props.children}
    </div>
  )
}

export default Wrapper;