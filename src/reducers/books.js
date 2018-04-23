import {
  CREATE_BOOK,
  GET_BOOK_LIST,
  GET_BOOK_DETAIL,
  UPDATE_BOOK_DETAIL,
  DELETE_BOOK,
} from '../constants/ActionTypes';

let initialState = {
};

export default function books(state = initialState, action) {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state,
        createBook: action.payload.data || []
      }
    case GET_BOOK_LIST:
      return {
        ...state,
        bookList: action.payload.data || []
      }
    case GET_BOOK_DETAIL:
      return {
        ...state,
        bookDetail: action.payload.data || []
      }
    case UPDATE_BOOK_DETAIL:
      return {
        ...state
      }
    case DELETE_BOOK:
      const deleteId = action.meta.previousAction.payload.id;
      const currentBooks = state.bookList;
      return {
        ...state,
        bookList: currentBooks.filter( item => item.id !== deleteId)
      }

      default:
  }

  return state;
};
