import * as types from '../actions/types';

const initialState = {
    isLoggedIn: false,

    allBundleListResponse: []
};

const bundleListReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.BUNDLELIST_REQUEST:
            return {
                ...state,
            }
        case types.BUNDLELIST_FAILED:
            return {
                ...state,
            }
        case types.BUNDLELIST_RESPONSE:
            console.log(action)
            return {
                ...state,
                allBundleListResponse: action.response
            }
        default:
            return state;
    }
}
export default bundleListReducer;