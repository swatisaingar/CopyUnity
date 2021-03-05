
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
    isLoggedIn: false,

    mobilenumber: '',
    loginOtpResponse: ''
};

const loginOtpReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST_OTP:
            return {
                ...state,
            }
        case types.LOGIN_FAILED_OTP:
            return {
                ...state,
            }
        case types.LOGIN_RESPONSE_OTP:
            return {
                ...state,
                loginOtpResponse: action.response
            }
        default:
            return state;
    }
}
export default loginOtpReducer;


