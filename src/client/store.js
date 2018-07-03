import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const initialState = {};

const middlewares = [thunk];


export default createStore(reducers, initialState, applyMiddleware(...middlewares));
