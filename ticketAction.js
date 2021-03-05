
import * as types from './types';

export function requestTicket(venue, slotid, date) {
    return {
        type: types.Ticket_REQUEST,
        venue,
        slotid,
        date
    }
}

export function ticketFailed() {
    return {
        type: types.Ticket_FAILED
    };
}

export function ticketResponse(response) {
    return {
        type: types.Ticket_RESPONSE,
        response
    };
}


