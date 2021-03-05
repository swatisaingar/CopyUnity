
import * as types from './types';

export function requestRetrieveBookings(name) {
    return {
        type: types.RETRIEVEBOOKNG_REQUEST,
        name
        
    };
}

export function retrieveBookingsFailed() {
    return {
        type: types.RETRIEVEBOOKING_FAILED
    };
}

export function retrieveBookingsResponse(response) {
    return {
        type: types.RETRIEVEBOOKING_RESPONSE,
        response
    };
}

