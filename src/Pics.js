import React, { Component } from 'react';
import axios from 'axios';

class Pics extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'imgs':[]
    };
    
  }

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
  setImgs = (obj)=> {
    this.setState({'imgs':obj});
  };

  getImgs = (query, callback)=>{
    axios.get('http://localhost:9000/flickr/' + query)
    .then(function(response) {
      console.log(response);
      if(response.statusText === 'OK') {
        console.log("??");
        callback(response.data.photos.photo);
      }else{
      throw new Error('Network response was not ok.');
      }
    })
    .then(function(data) {
      console.log("Gotit!");
      callback(data.photos);
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  }

  render() {
    this.getImgs(this.props.color+"_"+this.props.query, this.setImgs);
    return (
      <div>
      {this.state.imgs.map(img => {
                  return (
                    <div className="row">
                    <img src={this.getUrl(img.farm, img.server, img.id, img.secret)} />
                    </div>
                    );}) }
    </div>
      
      );
  }
}

export default Pics;