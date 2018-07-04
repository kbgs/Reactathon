import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import {events} from './components/EventsDashboard/reducer';
import {teams} from './components/EnrolledTeams/reducer';
import {appUser} from './components/Header/reducer';
import {enrollmentMsg} from './components/EnrollmentForm/reducer';
import {judgementMsg} from './components/judgementForm/reducer';

export default combineReducers({
  events,
  teams,
  appUser,
  enrollmentMsg,
  judgementMsg
});
