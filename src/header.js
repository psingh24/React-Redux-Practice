import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  render() {
    var textStyle = {
      fontSize: 72,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold"
    };

    return (
      <div style={textStyle}>
        {this.props.display}
      </div>
    );
  }
}

export default Counter;