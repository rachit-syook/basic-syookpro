import React, { Component } from 'react';
import {routes} from './routes'

class App extends Component {
  componentWillMount() {
    const loginToken =  localStorage.getItem("loginToken");
    console.log(loginToken, "loginToken")
  }


  render() {
    return (
      <div>
        {routes()}
      </div>
    );
  }
}

export default App;
