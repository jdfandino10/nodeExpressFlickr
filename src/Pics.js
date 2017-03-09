import React, { Component } from 'react';
import Pic from './Pic';

class Pics extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'imgs':[]
    };
  }
  componentWillReceiveProps(props) {
    var str = this.props.color+"_"+ props.query;
    this.props.getImgs(str, this.setImgs);
  }

  componentDidMount() {
    if(this.props.query){
      var str = this.props.color+"_"+ this.props.query;
      this.props.getImgs(str, this.setImgs);
    }
  }

  setImgs = (obj) => {
    this.setState({'imgs':obj});
  };

  getUrl(farm, server, id, secret) {
    return "https://farm"+
    farm +
    ".staticflickr.com/" +
    server +
    "/"+
    id+
    "_" +
    secret +
    "_s.jpg";
  }

  render() {
    var style = {
      'border': '1px solid '+this.props.color,
      'backgroundColor': this.props.color,
      'width': '80px'
    };
    return (
      <div style={style}>
      {this.state.imgs.map((img, index) => {
                  return (
                    <div key={index} className="row">
                    <Pic source={this.getUrl(img.farm, img.server, img.id, img.secret)} color={this.props.color} /> 
                    </div>
                    );}) }
    </div>
      
      );
  }
}

export default Pics;