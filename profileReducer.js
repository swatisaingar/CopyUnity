/* profile Reducer
 * handles profile states in the app
 */
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
    isLoggedIn: false,
    
    profileResponse: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GetProfile_REQUEST:
            return {
                ...state,
            }
        case types.GetProfile_FAILED:
            return {
                ...state,
            }
        case types.GetProfile_RESPONSE:
            return {
                ...state,
                profileResponse: action.response
            }
        default:
            return state;
    }
}
export default profileReducer;


