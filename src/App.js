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
          <Route path="/" exact render={ () => <Main color="red"/>} />
          {/*withAuth에서 업그레이드 된 Main 임, 실제 Main은 프롭을 받지 못한 것 */}
          <Route path="/login" component={Login}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
