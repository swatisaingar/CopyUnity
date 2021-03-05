import * as types from './types';

export function requestBooking(data,service,totalamount){
    return {
        type: types.Booking_REQUEST,
        data,
        service,
        totalamount
    }
}

export function bookingFailed() {
    return {
        type: types.Booking_FAILED
    };
}

export function bookingResponse(response) {
    return {
        type: types.Booking_RESPONSE,
        response
    };
}