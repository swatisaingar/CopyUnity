import {api} from '../../api';
import ApiConstants from '../ApiConstants';

export function getAllVenues() {
    return api(
        ApiConstants.ALL_VENUES,
        null,
        'get',
        null,
    );
}

export function getAllBundles() {
    return api(
        ApiConstants.BUNDLESERVICES,
        null,
        'get',
        null,
    );
}

export function getAllBundleswithinfo() {
    return api(
        ApiConstants.BUNDLESLIST,
        null,
        'get',
        null,
    );
}

export function getBundleInfo(id) {
    return api(
        ApiConstants.GETBUNDLEINFO + id,
        null,
        'get',
        null,
    );
}

export function getConfirmBooking(venue,bookingref) {
    return api(
        ApiConstants.CUSTOMERINFO + venue + '/reservation/' + bookingref + '/book',
        null,
        'post',
        null,
    );
}

export function retrieveBookingss(name) {
    return api(
        ApiConstants.RETRIEVEBOOKINGS + '?page=' + name + '&pageSize=10',
        null,
        'get',
        null,
    );
}

export function retrieveWallet() {
    return api(
        ApiConstants.RETRIEVEWALLET,
        null,
        'get',
        null,
    );
}

export function confirmRechargeWallet(reservationID) {
    return api(
        ApiConstants.CONFIRMRECHARGEWALLET + reservationID + '/recharge',
        null,
        'get',
        null,
    );
}