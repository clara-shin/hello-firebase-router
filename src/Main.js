import React, {Component} from 'react';
import * as firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react';

export default class Main extends Component {
  
  //관리해야할 상태 3가지: currentUser(user), 로딩인디케이터(보여줄 상태인지), 리다이렉트(로그인상태에 대한 페이지처리에대한 flag) 

  //데이터구조
  state = {
    currentUser: null,
    loading: false,
    redirectToLogin: false
  }


  componentWillMount() {
    //mount되기 직전에 실행됨
    const currentUser = firebase.auth().currentUser;
    if(currentUser) {
      this.setState({
        currentUser
      })
    } else { //물음표상태, currentUser 가 null인 상태
      
      //우선 로딩인디케이터 보이도록
      this.setState({
        loading:true
      })

      const unsubscribe = firebase.auth().onAuthStateChanged(user => { //인증상태 변경 구독중인걸 풀어줘야함 .subscribe()
        //https://firebase.google.com/docs/reference/js/firebase.auth.Auth?authuser=0#onAuthStateChanged
        unsubscribe(); //인정상태 변경 구독취소
        if(user) {
          this.setState({
            currentUser: user.uid,
            loading: false //로딩인디케이터 끔
          })
        } else {
          this.setState({
            redirectToLogin: true
          })
        }
      })
    }
  } 

  render() {
    if(this.state.redirectToLogin) {
      return <Redirect to="/login" />

    } else if(this.state.loading) {
      return (
        <Dimmer active={this.state.loading} >
          <Loader>Loading</Loader>
        </Dimmer>
      )
    } else {
      return (
        <div>{this.state.currentUser}</div>
      )
    }
  }
}