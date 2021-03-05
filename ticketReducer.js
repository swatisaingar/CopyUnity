import * as types from '../actions/types';

const initialState = {
    isLoggedIn: false,

    ticketsResponse: ''
};

const ticketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.Ticket_REQUEST:
            return {
                ...state,
            }
        case types.Ticket_FAILED:
            return {
                ...state,
            }
        case types.Ticket_RESPONSE:
            
            return {
                ...state,
                ticketsResponse: action.response
            }
        default:
            return state;
    }
}
export default ticketsReducer;