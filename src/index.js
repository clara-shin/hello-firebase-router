import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import 'semantic-ui-css/semantic.min.css';

const config = {
  apiKey: "AIzaSyB-xAfiMYvnq6vwhgTmeJ-kQ6lhDt93iRI",
  authDomain: "fir-sample-37800.firebaseapp.com",
  databaseURL: "https://fir-sample-37800.firebaseio.com",
  projectId: "fir-sample-37800",
  storageBucket: "fir-sample-37800.appspot.com",
  messagingSenderId: "495354813469"
};
firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
