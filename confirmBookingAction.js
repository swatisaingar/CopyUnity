/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestConfirmBooking(venue,bookingref){
    return {
        type: types.CONFIRMBOOKNG_REQUEST,
        venue,
        bookingref
    }
}
export function clearConfirmBooking(){
    return {
        type: types.CONFIRMBOOKING_CLEAR
        
    }
}

export function confirmBoookingFailed() {
    return {
        type: types.CONFIRMBOOKING_FAILED
    };
}

export function confirmBookingResponse(response) {
    return {
        type: types.CONFIRMBOOKING_RESPONSE,
        response
    };
}


