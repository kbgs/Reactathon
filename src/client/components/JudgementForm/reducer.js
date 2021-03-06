import * as constants from '../../constants';

export function judgementMsg (state=[], action={}) {
	switch (action.type) {
		case constants.SUBMIT_JUDGEEMENT_SUCCESS:
			return [Object.assign({}, state = [], {
				type: action.type,
				data: action.data
			})];
		default: return state;
	}
}