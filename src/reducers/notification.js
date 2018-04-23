import {
	ADD_NOTIFY_MESSAGE,
	REMOVE_NOTIFY_MESSAGE,
	RESET_NOTIFY_MESSAGE,
} from '../constants/ActionTypes';

let initialState = {
	message: [],
};

export default function notification(state = initialState, action) {
	const message = state.message;	
	switch (action.type) {
		case ADD_NOTIFY_MESSAGE:
			return {
				...state,
				message: [action.payload, ...message]
			}
        case REMOVE_NOTIFY_MESSAGE:
            const deleteId = action.payload.id;
			return {
				...state,
				message: message.filter( item => item.id !== deleteId)
			}
        case RESET_NOTIFY_MESSAGE:
			return {
				...state,
				message: []
			}

		default:
	}

	return state;
};
