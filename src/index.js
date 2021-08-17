import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';

import store from 'store';
import { Provider } from 'react-redux';

import firebaseConfig from 'firebase/config';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const rrfConfig = { userProfile: 'users' };

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

