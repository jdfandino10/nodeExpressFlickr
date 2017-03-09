import React, { Component } from 'react';
import Pics from './Pics';

class Rainbow extends Component {

  constructor(props) {
  	super(props);
  	this.state = {
  		'colors': ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']
  	};
  }

  componentWillReceiveProps(props) {
    console.log(props.newColor);
    var colors = this.state.colors;
    console.log(props.newColor!==colors[colors.length-1]);
    if(props.newColor!==colors[colors.length-1] && props.newColor){
      console.log([...colors, props.newColor]);
      this.setState({'colors':[...colors, props.newColor]});
    }
  }


  render() {

    return (

      <div className="row rainbow-container">
      	{this.state.colors.map((color, index) =>{
      		return (
      			<div key={index} className="col-xs-1 column">
        			<Pics color={color} query={this.props.query} getImgs={this.props.getImgs} />
        		</div>
      		);
      	})}
      </div>
    );
  }
}

export default Rainbow;