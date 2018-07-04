import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import {events} from './components/EventsDashboard/reducer';
import {teams} from './components/EnrolledTeams/reducer';

export default combineReducers({
  events,
  teams
});
