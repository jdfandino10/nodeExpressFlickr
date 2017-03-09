import React, { Component } from 'react';
import Pics from './Pics';

class Rainbow extends Component {

  constructor(props) {
  	super(props);
  	this.state = {
  		'colors': ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']
  	};
  }


  render() {
    return (

      <div className="row">
      	{this.state.colors.map(color =>{
      		return (
      			<div className="col-xs-2">
        			<Pics color={color} query={this.props.query} />
        		</div>
      		);
      	})}
      </div>
    );
  }
}

export default Rainbow;