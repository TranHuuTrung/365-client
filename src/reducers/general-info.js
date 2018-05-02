import {
    PHONE_INFO,
} from '../constants/ActionTypes';

let initialState = {
};

export default function generalInfo(state = initialState, action) {
  switch (action.type) {
    case PHONE_INFO:
      return {
        ...state,
        phoneInfo: action.payload.data.phones || {}
      }

      default:
  }

  return state;
};
