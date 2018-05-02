import {
    CREATE_CLIENT_REPORT,
    GET_CLIENT_REPORT,
    DELETE_CLIENT_REPORT,
  } from '../constants/ActionTypes';
  
  let initialState = {
  };
  
  export default function report(state = initialState, action) {
    switch (action.type) {
      case CREATE_CLIENT_REPORT:
        return {
          ...state,
          createReport: action.payload.data || []
        }
      case GET_CLIENT_REPORT:
        return {
          ...state,
          report: action.payload.data.reports || []
        }
      case DELETE_CLIENT_REPORT:
        const deleteId = action.meta.previousAction.payload.id;
        const currentReport = state.report;
        return {
          ...state,
          report: currentReport.filter( item => item.id !== deleteId)
        }
  
        default:
    }
  
    return state;
  };
  