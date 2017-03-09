import React, { Component } from 'react';

class Pic extends Component {


  render() {
    var style = {
      'border': '2px solid '+this.props.color
    };
    return (<img style={style} src={this.props.source} alt=":(" />);
  }
}

export default Pic;