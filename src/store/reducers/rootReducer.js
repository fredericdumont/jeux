import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import { combineReducers } from 'redux';

import drawReducer from './drawReducer';

const rootReducer = combineReducers({
    draw: drawReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;