import {
    CLEAR_AUTH_STATE,
    LOGIN_FAIL,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGOUT_USER,
    REGISTER_FAIL,
    REGISTER_LOADING,
    REGISTER_SUCCESS,
} from '../../constants/actionTypes';

const auth = (state, { type, payload }) => {
    switch (type) {
        case LOGIN_LOADING:
            return {
                ...state,
                loading: true,
                error: ""
            };
        case REGISTER_LOADING:
            return {
                ...state,
                loading: true,
            };

        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: payload,
                isLoggedIn: true,
            };

        case LOGOUT_USER:
            return {
                ...state,
                loading: false,
                user: null,
                isLoggedIn: false,
            };

        case REGISTER_FAIL:
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };

        case CLEAR_AUTH_STATE:
            return {
                ...state,
                loading: false,
                user: null,
                error: null,
            };

        default:
            return state;
    }
};

export default auth;