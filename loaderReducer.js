import { LOGIN_ENABLE_LOADER, LOGIN_DISABLE_LOADER } from '../actions/types';

const initialState = {
    loaderStatus: false,
}

const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_ENABLE_LOADER:
            return {
                ...state,
                loaderStatus: true,
            }
        case LOGIN_DISABLE_LOADER:
            return {
                ...state,
                loaderStatus: false,
            }
        default:
            return state;
    }
}
export default loaderReducer;