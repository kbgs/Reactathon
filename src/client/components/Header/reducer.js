import * as constants from '../../constants';

export function appUser (state=[], action={}) {
	switch (action.type) {
		case constants.APP_USER_SUCCESS:
			return [Object.assign({}, state = [], {
				type: action.type,
				data: action.data
			})];
		default: return state;
	}
}