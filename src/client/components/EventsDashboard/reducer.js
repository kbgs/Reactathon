import * as constants from '../../constants';

export function events (state=[], action={}) {
	switch (action.type) {
		case constants.GET_EVENTS_SUCCESS:
			return [Object.assign({}, state = [], {
				type: action.type,
				data: action.data
			})];
		default: return state;
	}
}

export function addEventMsg (state=[], action={}) {
	switch (action.type) {
		case constants.ADD_EVENTS_SUCCESS:
			return [Object.assign({}, state = [], {
				type: action.type,
				data: action.data
			})];
		default: return state;
	}
}