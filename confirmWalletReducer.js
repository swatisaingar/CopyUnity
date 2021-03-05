
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
    isLoggedIn: false,
    confirmWalletResponse: ''
};

const confirmWalletReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CONFIRMWALLET_REQUEST:
            return {
                ...state,
            }
        case types.CONFIRMWALLET_FAILED:
            return {
                ...state,
            }
        case types.CONFIRMWALLET_RESPONSE:
            return {
                ...state,
                confirmWalletResponse: action.response
            }
        default:
            return state;
    }
}
export default confirmWalletReducer;


