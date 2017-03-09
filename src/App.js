import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Rainbow from './Rainbow';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'search':''
    };
  }

  setText = (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      this.setState({[e.target.name]: e.target.value});
      if(e.target.value === 'newColor') e.target.value = "";
    }
    return true;
  };


  getImgs = (query, callback)=>{
    console.log('va a hacer getImgs '+query);
    axios.get('/flickr/' + query)
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
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  }


  render() {
    return (

      <div className="row">
        <Header />
        <div className="row"></div>
        <div className="row">
          <div className="col-xs-2"></div>
          <div className="col-xs-6 col-md-4">
            <input id="search" name="search" type="text" placeholder="Ingrese la imagen a buscar" onKeyPress={this.setText} />
          </div>
          <div className="col-xs-4 col-md-6"></div>
        </div>
        <div className="row"></div>
        <div className="row">
          <div className="col-xs-2"></div>
          <div className="col-xs-6 col-md-4">
            <input id="newColor" name="newColor" type="text" placeholder="Ingresa un nuevo color" onKeyPress={this.setText}/>  
          </div>
          <div className="col-xs-4 col-md-6"></div>
        </div>
        <div className="row">
          <div className="col-xs-2"></div>
          <div className="col-xs-8">
            <Rainbow query={this.state.search} newColor={this.state.newColor} getImgs={this.getImgs} />
          </div>
          <div className="col-xs-2"></div>
        </div>
      </div>
    );
  }
}

export default App;
