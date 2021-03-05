import * as types from '../actions/types';

const initialState = {
    isLoggedIn: false,

    visitorsResponse: []
};

const slotsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ALL_VISITORS_REQUEST:
            return {
                ...state,
            }
        case types.ALL_VISITORS_FAILED:
            return {
                ...state,
            }
        case types.ALL_VISITORS_RESPONSE:
            console.log(action)
            return {
                ...state,
                visitorsResponse: action.response
            }
        default:
            return state;
    }
}
export default slotsReducer;