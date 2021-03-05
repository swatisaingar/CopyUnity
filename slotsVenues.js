import { api } from '../../api';
import ApiConstants from '../ApiConstants';


export function getAllSlots(venue) {
    return api(
        ApiConstants.SLOTS + venue + '/slots',
        null,
        'get',
        null,
    );
}


export function getAllVisitors(venue) {
    return api(
        ApiConstants.SLOTS + venue + '/visitors',
        null,
        'get',
        null,
    );
}

export function getAllDates(venue) {
    return api(
        ApiConstants.SLOTS + venue + '/available-days',
        null,
        'get',
        null,
    );
}

export function getAvailableTickets(venue, slotid, date) {
    return api(
        ApiConstants.SLOTS + venue + '/slots/' + slotid + '/' + date + '/availablity',
        null,
        'get',
        null,
    );
}

export function addToCart(data) {
    return api(
        ApiConstants.ADDTOCART,
        data,
        'post',
        null,
    );
}

export function getCart(id) {
    return api(
        ApiConstants.VIEWCART + id,
        null,
        'get',
        null,
    );
}

export function cleanSlots(venuename,bookingref) {
    return api(
        ApiConstants.CLEANSLOTS + venuename + '/reservation/' + bookingref + '/clean',
        null,
        'post',
        null,
    );
}

//http://localhost:8080/api/v2/public/venue/sou/reservation/ed5dd8f8-2059-41ec-8eb6-61bb08ff2592/clean