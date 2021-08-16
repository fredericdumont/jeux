import { combineReducers } from 'redux';

import drawReducer from './drawReducer';

const rootReducer = combineReducers({
    draw: drawReducer
});

export default rootReducer;