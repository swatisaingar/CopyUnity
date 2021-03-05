import * as types from './types';

export function requestAllVisitors(venue){
    return {
        type: types.ALL_VISITORS_REQUEST,
        venue
    }
}

export function allVisitorsFailed() {
    return {
        type: types.ALL_VISITORS_FAILED
    };
}

export function allVisitorsResponse(response) {
    return {
        type: types.ALL_VISITORS_RESPONSE,
        response
    };
}