
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
    isLoggedIn: false,

  
    getCartResponse: {}
};

const getCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.Get_Cart_REQUEST:
            return {
                ...state,
            }
        case types.Get_Cart_FAILED:
            return {
                ...state,
            }
        case types.Get_Cart_RESPONSE:
            return {
                ...state,
                getCartResponse: action.response
            }
        default:
            return state;
    }
}
export default getCartReducer;


