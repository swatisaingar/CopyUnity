import * as types from '../actions/types';

const initialState = {
    isLoggedIn: false,

    bundleInsertionArray: []
};

const bundlesArrayReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.BUNDLES_REQUEST:
            
            return {
                ...state,
                bundleInsertionArray: [...state.bundleInsertionArray, action]
            }
        case types.BUNDLES_FAILED:
            let array = [...state.bundleInsertionArray]
            array.splice(action.position, 1)
            console.log('cominghere rnot', action.position)
            return {
                ...state,
                bundleInsertionArray: array
                
            }
        case types.BUNDLES_RESPONSE:
            let emptyarray = []
            return {
                ...state,
                bundleInsertionArray: emptyarray
                
            }

        default:
            return state;
    }
}
export default bundlesArrayReducer;