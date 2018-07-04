import * as constants from '../../constants';

export function enrollmentMsg (state=[], action={}) {
	switch (action.type) {
		case constants.GET_ENROLL_SUCCESS:
			return [Object.assign({}, state = [], {
				type: action.type,
				data: action.data
			})];
		default: return state;
	}
}