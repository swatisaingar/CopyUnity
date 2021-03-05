import * as types from '../actions/types';

const initialState = {
    isLoggedIn: false,

    slotsResponse: []
};

const slotsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ALL_SLOTS_REQUEST:
            return {
                ...state,
            }
        case types.ALL_SLOTS_FAILED:
            return {
                ...state,
            }
        case types.ALL_SLOTS_RESPONSE:
            console.log(action)
            return {
                ...state,
                slotsResponse: action.response
            }
        default:
            return state;
    }
}
export default slotsReducer;