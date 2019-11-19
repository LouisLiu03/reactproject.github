import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.scss";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <div class="test"> test </div>
      </div>
    );
  }
}

export default hot(module)(App);