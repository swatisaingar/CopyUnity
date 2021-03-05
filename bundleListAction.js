import * as types from './types';

export function requestAllBundleslist(){
    return {
        type: types.BUNDLELIST_REQUEST
    }
}

export function allBundlelistFailed() {
    return {
        type: types.BUNDLELIST_FAILED
    };
}

export function allBundlelistResponse(response) {
    return {
        type: types.BUNDLELIST_RESPONSE,
        response
    };
}