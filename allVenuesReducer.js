import * as types from '../actions/types';

const initialState = {
    isLoggedIn: false,

    allVenuesResponse: []
};

const allVenuesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ALL_VENUES_REQUEST:
            return {
                ...state,
            }
        case types.ALL_VENUES_FAILED:
            return {
                ...state,
            }
        case types.ALL_VENUES_RESPONSE:
            console.log(action)
            return {
                ...state,
                allVenuesResponse: action.response
            }
        default:
            return state;
    }
}
export default allVenuesReducer;