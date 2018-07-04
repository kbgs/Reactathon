import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import {events} from './components/EventsDashboard/reducer';

export default combineReducers({
  events
});
