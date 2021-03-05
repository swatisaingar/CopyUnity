
import * as types from './types';

export function requestBundleinfo(id){
    return {
        type: types.BUNDLEINFO_REQUEST,
        id
    }
}

export function bundleInfoFailed() {
    return {
        type: types.BUNDLEINFO_FAILED
    };
}

export function bundleInfoResponse(response) {
    return {
        type: types.BUNDLEINFO_RESPONSE,
        response
    };
}


