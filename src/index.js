import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './header.js'

class CounterParent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
    this.increase = this.increase.bind(this);
  }
   increase(e) {
   		var currentCount = this.state.count;

   		if (e.shiftKey) {
   			currentCount += 10;
   		} else {
   			currentCount += 1;
   		}
   		
    	this.setState({
    		count: currentCount
    	})
    }

  render() {
    var backgroundStyle = {
      padding: 50,
      backgroundColor: "#FFC53A",
      width: 250,
      height: 100,
      borderRadius: 10,
      textAlign: "center"
    };

    var buttonStyle = {
      fontSize: "1em",
      width: 30,
      height: 30,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold",
      lineHeight: "3px"
    };

    return (
      <div style={backgroundStyle}>
        <Counter display={this.state.count} />
        <button onClick={this.increase} style={buttonStyle}>+</button>
      </div>
    );
  }
}

ReactDOM.render(<CounterParent/>, document.getElementById('app'));