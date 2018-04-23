import * as types from '../constants/ActionTypes';
import { Cookies } from 'react-cookie';

let getToken = () => {
    const cookies = new Cookies();
    let auth = cookies.get('authState').token || {};
    let header = {
        "Uid": auth['uid'],
        "Access-token": auth['access-token'],
        "Client": auth['client']
    }

    return header;
}


export const userLogin = (data) => (dispatch, getState) => dispatch({
    types: [ types.API_REQUEST_SEND, types.USER_LOGIN, types.API_REQUEST_ERROR ],
    payload: {
        request: {
            url: `/auth/sign_in`,
            method: 'POST',
            params: data
        }
    }
});

export const userLogout = () => (dispatch, getState) => dispatch({
    types: [ types.API_REQUEST_SEND, types.USER_LOGOUT, types.API_REQUEST_ERROR ],
    payload: {
        request: {
            url: '/auth/sign_out',
            method: 'DELETE',
            headers: getToken(),
        }
    }
});

export const userRegister = (data) => (dispatch, getState) => dispatch({
    types: [ types.API_REQUEST_SEND, types.USER_REGISTER, types.API_REQUEST_ERROR ],
    payload: {
        request: {
            url: '/auth',
            method: 'POST',
            data
        }
    }
});

export const updateUserProfile = (data = {}) => (dispatch, getState) => dispatch({
    types: [ types.API_REQUEST_SEND, types.UPDATE_USER_PROFILE, types.API_REQUEST_ERROR ],
    payload: {
        request: {
            url: '/auth',
            method: 'PUT',
            data,
            headers: getToken(),
        },
    }
});

export const createBook = (data = {}) => (dispatch, getState) => dispatch({
    types: [ types.API_REQUEST_SEND, types.CREATE_BOOK, types.API_REQUEST_ERROR ],
    payload: {
        request: {
            url: '/books',
            method: 'POST',
            data,
            headers: getToken(),
        }
    }
});

export const getBookList = () => (dispatch, getState) => dispatch({
    types: [ types.API_REQUEST_SEND, types.GET_BOOK_LIST, types.API_REQUEST_ERROR ],
    payload: {
        request: {
            url: '/books',
            method: 'GET',
            headers: getToken(),
        }
    }
});

export const getBookDetail = (id) => (dispatch, getState) => dispatch({
    types: [ types.API_REQUEST_SEND, types.GET_BOOK_DETAIL, types.API_REQUEST_ERROR ],
    payload: {
        request: {
            url: `/books/${id}`,
            method: 'GET',
            headers: getToken(),
        }
    }
});

export const updateBookDetail = (id, data = {}) => (dispatch, getState) => dispatch({
    types: [ types.API_REQUEST_SEND, types.UPDATE_BOOK_DETAIL, types.API_REQUEST_ERROR ],
    payload: {
        request: {
            url: `/books/${id}`,
            method: 'PATCH',
            data,
            headers: getToken(),
        }
    }
});

export const deleteBook = (id) => (dispatch, getState) => dispatch({
    types: [ types.API_REQUEST_SEND, types.DELETE_BOOK, types.API_REQUEST_ERROR ],
    payload: {
        id: id,
        request: {
            url: `/books/${id}`,
            method: 'DELETE',
            headers: getToken(),
        }
    }
});

let notifyId = 0;

// Have 4 kind of role: success, danger, info and warning. Default role is success
export const addNotification = (text, role = 'success') => {
    return (dispatch, getState) => {
        dispatch({
            type: types.ADD_NOTIFY_MESSAGE,
            payload: {
                id: notifyId++,
                text: text,
                role: role,
            }
        });

        ((notifyId) => {
            setTimeout(() => dispatch({
                type: types.REMOVE_NOTIFY_MESSAGE,
                payload: {
                    id: notifyId - 1,
                }
            }), 4000);
        })(notifyId);
    }
}

export const removeNotification = (id) => (dispatch, getState) => dispatch({
    type: types.REMOVE_NOTIFY_MESSAGE,
    payload: {
        id: id,
    }
});

export const resetNotification = () => (dispatch, getState) => dispatch({
    type: types.RESET_NOTIFY_MESSAGE
});
