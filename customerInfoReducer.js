
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
    isLoggedIn: false,

  
    customerinfoResponse: ''
};

const CustomerinfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.Customerinfo_REQUEST:
            return {
                ...state,
            }
        case types.Customerinfo_FAILED:
            return {
                ...state,
            }
        case types.Customerinfo_RESPONSE:
            return {
                ...state,
                customerinfoResponse: action.response
            }
        default:
            return state;
    }
}
export default CustomerinfoReducer;


