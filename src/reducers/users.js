import {
  USER_REGISTER,
} from '../constants/ActionTypes';

let initialState = {
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTER:
      return {
        ...state,
        userRegister: action.payload.data || []
      }

      default:
  }

  return state;
};
