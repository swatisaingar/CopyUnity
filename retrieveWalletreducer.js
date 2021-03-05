import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
    isLoggedIn: false,

  
    retrieveWalletResponse: ''
};

const retrieveWalletReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.RETRIEVEWALLET_REQUEST:
            return {
                ...state,
            }
        case types.RETRIEVEWALLET_FAILED:
            return {
                ...state,
            }
        case types.RETRIEVEWALLET_RESPONSE:
            return {
                ...state,
                retrieveWalletResponse: action.response
            }
        default:
            return state;
    }
}
export default retrieveWalletReducer;


