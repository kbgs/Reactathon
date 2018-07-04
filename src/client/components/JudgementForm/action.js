import api from '../../interceptors';
import * as constants from '../../constants';


export function submitJudgementFailure(data) {
	return {
		type: constants.GET_EVENTS_FAILURE,
		data
	}
}

export function submitJudgementSuccess(data) {
	return {
		type: constants.SUBMIT_JUDGEEMENT_SUCCESS,
		data
	}
}

export function submitJudgement(judgementData) {
	console.log('enrollment data : ', judgementData);
	console.log('Action triggered  : ');
	return dispatch => {
		return api.post('http://localhost:8080/vzevents/updateGroup', judgementData)
			.then(res => {
				dispatch(submitJudgementSuccess(res))
			})
			.catch(errors => dispatch(submitJudgementFailure(errors)))
	}
}