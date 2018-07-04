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

export function getEvents(eventType) {
	console.log('Action triggered  : ');
	let event = eventType.substr(1, eventType.length).toLowerCase();
	return dispatch => {
		return api.get('http://localhost:8080/vzevents/'+event)
			.then(res => {
				console.log('events res : ', res);
				dispatch(getEventsSuccess(res.data))
			})
			.catch(errors => dispatch(getEventsFailure(errors)))
	}
}


export function addEventSuccessData(data) {
	return {
		type: constants.ADD_EVENTS_SUCCESS,
		data
	}
}

export function addEventFailureData(data) {
	return {
		type: constants.ADD_EVENTS_FAILURE,
		data
	}
}

export function addEventData(eventData) {
	return dispatch => {
		return api.post('http://localhost:8080/vzevents/addEvent', eventData)
			.then(res => {
				console.log('events res : ', res);
				dispatch(addEventSuccessData(res))
			})
			.catch(errors => dispatch(addEventFailureData(errors)))
	}
}