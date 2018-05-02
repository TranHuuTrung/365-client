import auth from './auth';
import generalInfo from './general-info';
import report from './report';
import notification from './notification';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const appReducer = combineReducers({
  auth,
  generalInfo,
  report,
  notification,
  routing: routerReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;
