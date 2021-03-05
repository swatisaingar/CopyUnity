
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
    isLoggedIn: false,

    bunldeInfoResponse: ''
};

const bundleInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.BUNDLEINFO_REQUEST:
            return {
                ...state,
            }
        case types.BUNDLEINFO_FAILED:
            return {
                ...state,
            }
        case types.BUNDLEINFO_RESPONSE:
            return {
                ...state,
                bunldeInfoResponse: action.response
            }
        default:
            return state;
    }
}
export default bundleInfoReducer;


