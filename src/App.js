import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';
//HashRouter찾아보기
import Login from './Login';
import Main from './Main';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Main} />
          <Route path="/login" component={Login}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
