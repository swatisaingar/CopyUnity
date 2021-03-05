
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
    isLoggedIn: false,

  
    deleteCartResponse: ''
};

const deleteCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.Delete_Cart_REQUEST:
            return {
                ...state,
            }
        case types.Delete_Cart_FAILED:
            return {
                ...state,
            }
        case types.Delete_Cart_RESPONSE:
            return {
                ...state,
                deleteCartResponse: action.response
            }
        default:
            return state;
    }
}
export default deleteCartReducer;


