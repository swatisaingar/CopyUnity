/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
    isLoggedIn: false,
    id: -1,
    mobilenumber: '',
    loginResponse: ''
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return {
                ...state,
            }
        case types.LOGIN_FAILED:
            return {
                ...state,
            }
        case types.LOGIN_RESPONSE:
            return {
                ...state,
                loginResponse: action.response
            }
        default:
            return state;
    }
}
export default loginReducer;


