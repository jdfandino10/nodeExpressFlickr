import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Rainbow from './Rainbow';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'search':''
    };
  }

  setText = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };


  render() {
    return (

      <div className="row">
        <Header />
        <div className="row">
          <input id="search" name="search" type="text" placeholder="Ingrese la imagen a buscar" value={this.state.search}
                onChange={this.setText} required="required" />
        </div>
        <Rainbow query={this.state.search} />
      </div>
    );
  }
}

export default App;
