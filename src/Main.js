import React, {Component} from 'react';
import * as firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react';
import withAuth from './hocs/withAuth';

class Main extends Component {

  render() {
    const currentUser = firebase.auth().currentUser;
    const {color = 'black'} = this.props; //분해대입의 기본값을 지정할 수 있음
    return (
      <div style={{color: color}}>{currentUser.uid}</div>//인라인스탈인은 객체{}가 들어감
    )
  }
}

export default withAuth(Main); //고차컴포넌트에 프롭을 줌
