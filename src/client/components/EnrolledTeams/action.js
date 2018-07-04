import api from '../../interceptors';
import * as constants from '../../constants';


export function getTeamsSuccess(data) {
	return {
		type: constants.GET_TEAMS_SUCCESS,
		data
	}
}

export function getTeamsFailure(data) {
	return {
		type: constants.GET_TEAMS_FAILURE,
		data
	}
}

export function getTeams(eventId) {
	console.log('Action triggered  : ');
	return dispatch => {
		return api.get('http://localhost:8080/vzevents/group/'+eventId)
			.then(res => {
				console.log('teams res : ', res);
				dispatch(getTeamsSuccess(res.data))
			})
			.catch(errors => dispatch(getTeamsFailure(errors)))
	}
}