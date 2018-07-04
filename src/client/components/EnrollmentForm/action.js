import api from '../../interceptors';
import * as constants from '../../constants';


// export function getEventsSuccess(data) {
// 	return {
// 		type: constants.GET_EVENTS_SUCCESS,
// 		data
// 	}
// }

export function enrollToEventFailure(data) {
	return {
		type: constants.GET_EVENTS_FAILURE,
		data
	}
}

export function enrollToEvent(enrollmentData) {
	console.log('enrollment data : ', enrollmentData);
	console.log('Action triggered  : ');
	return dispatch => {
		return api.post('http://localhost:8080/vzevents/addGroup', enrollmentData)
			.then(res => {
				console.log('events res : ', res);
			})
			.catch(errors => dispatch(enrollToEventFailure(errors)))
	}
}