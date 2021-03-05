import * as types from './types';

export function requestAllBundles(){
    return {
        type: types.BUNDLE_REQUEST
    }
}

export function allBundlesFailed() {
    return {
        type: types.BUNDLE_FAILED
    };
}

export function allBundlesResponse(response) {
    return {
        type: types.BUNDLE_RESPONSE,
        response
    };
}