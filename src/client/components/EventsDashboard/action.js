import api from '../../interceptors';
import * as constants from '../../constants';


export function getEventsSuccess(data) {
	return {
		type: constants.GET_EVENTS_SUCCESS,
		data
	}
}

export function getEventsFailure(data) {
	return {
		type: constants.GET_EVENTS_FAILURE,
		data
	}
}

export function getEvents() {
	console.log('Action triggered  : ');
	return dispatch => {
		return api.get('http://localhost:8080/vzevents/events')
			.then(res => {
				console.log('events res : ', res);
				dispatch(getEventsSuccess(res.data))
			})
			.catch(errors => dispatch(getEventsFailure(errors)))
	}
}