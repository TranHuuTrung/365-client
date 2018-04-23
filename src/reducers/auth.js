import { Cookies } from 'react-cookie';
import {
    USER_LOGIN,
    UPDATE_USER_PROFILE,
	USER_LOGOUT,
} from '../constants/ActionTypes';

const cookies = new Cookies();
let initialState = cookies.get('authState') || {};

export default function auth(state = initialState, action) {
	let authState = state;

	switch (action.type) {
		case USER_LOGIN:
			authState = {
				...state,
				token: action.payload.headers,
				user: action.payload.data.data,
			};
			break;

        case UPDATE_USER_PROFILE:
            authState = {
                ...state,
                user: action.payload.data.data,
            };
           
            break;

        case USER_LOGOUT:
            return authState = {};
            
		default:
			authState = state;
	}

	cookies.set('authState', authState, { path: '/' });

	return authState;
};
