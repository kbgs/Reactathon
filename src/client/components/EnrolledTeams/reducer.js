import * as constants from '../../constants';

export function teams (state=[], action={}) {
	switch (action.type) {
		case constants.GET_TEAMS_SUCCESS:
			return [Object.assign({}, state = [], {
				type: action.type,
				data: action.data
			})];
		default: return state;
	}
}