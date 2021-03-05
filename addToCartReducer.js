
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
    isLoggedIn: false,

  
    addToCartResponse: ''
};

const addToCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.Add_Cart_REQUEST:
            return {
                ...state,
            }
        case types.Add_Cart_FAILED:
            return {
                ...state,
            }
        case types.Add_Cart_RESPONSE:
            return {
                ...state,
                addToCartResponse: action.response
            }
        default:
            return state;
    }
}
export default addToCartReducer;


