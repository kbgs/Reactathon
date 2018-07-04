import api from '../../interceptors';
import * as constants from '../../constants';


export function setAppUserSuccess(data) {
	return {
		type: constants.APP_USER_SUCCESS,
		data
	}
}

export function setAppUser(user) {
	return dispatch => {
		dispatch(setAppUserSuccess(user))
	}
}