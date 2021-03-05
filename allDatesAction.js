import * as types from './types';

export function requestAllDates(venue){
    return {
        type: types.ALL_DATES_REQUEST,
        venue
    }
}

export function allDatesFailed() {
    return {
        type: types.ALL_DATES_FAILED
    };
}

export function allDatesResponse(response) {
    return {
        type: types.ALL_DATES_RESPONSE,
        response
    };
}