import * as types from './types';

export function requestClean(venuename,bookingref){
    return {
        type: types.CLEAN_REQUEST,
        venuename,
        bookingref,
    }
}

export function cleanFailed() {
    return {
        type: types.CLEAN_FAILED
    };
}

export function cleanResponse(response) {
    return {
        type: types.CLEAN_RESPONSE,
        response
    };
}