import * as types from '../actions/types';

const initialState = {
    isLoggedIn: false,

    bundleResponse: []
};

const bundleServicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.BUNDLE_REQUEST:
            return {
                ...state,
            }
        case types.BUNDLE_FAILED:
            return {
                ...state,
            }
        case types.BUNDLE_RESPONSE:
            console.log(action)
            return {
                ...state,
                bundleResponse: action.response
            }
        default:
            return state;
    }
}
export default bundleServicesReducer;