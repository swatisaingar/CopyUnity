import * as types from '../actions/types';

const initialState = {
    isLoggedIn: false,

    datesResponse: []
};

const allDatesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ALL_DATES_REQUEST:
            return {
                ...state,
            }
        case types.ALL_DATES_FAILED:
            return {
                ...state,
            }
        case types.ALL_DATES_RESPONSE:
            console.log(action)
            return {
                ...state,
                datesResponse: action.response
            }
        default:
            return state;
    }
}
export default allDatesReducer;