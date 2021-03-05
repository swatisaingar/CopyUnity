import * as types from './types';

export function requestAllVenues(){
    return {
        type: types.ALL_VENUES_REQUEST
    }
}

export function allVenuesFailed() {
    return {
        type: types.ALL_VENUES_FAILED
    };
}

export function allVenuesResponse(response) {
    return {
        type: types.ALL_VENUES_RESPONSE,
        response
    };
}