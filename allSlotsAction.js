import * as types from './types';

export function requestAllSlots(venue){
    return {
        type: types.ALL_SLOTS_REQUEST,
        venue
    }
}

export function allSlotsFailed() {
    return {
        type: types.ALL_SLOTS_FAILED
    };
}

export function allSlotsResponse(response) {
    return {
        type: types.ALL_SLOTS_RESPONSE,
        response
    };
}