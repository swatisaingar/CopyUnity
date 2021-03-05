import { api } from '../../api';
import ApiConstants from '../ApiConstants';

export function getCart(id) {
    return api(
        ApiConstants.VIEWCART,
        null,
        'get',
        null,
    );
}

export function deleteItemCart(data) {
    return api(
        ApiConstants.DELETEITEMCART,
        data,
        'delete',
        null,
    );
}

export function reserveBooking(data, service, totalamount) {
    return api(
        ApiConstants.RESERVEBOOKING + service + '/reserve-tickets',
        data,
        'post',
        null,
    );
}

export function getCustomerInfo(venue, key,data) {
    const datatosend = {
        firstName: "Raja kumar",
        lastName: "Kumar",
        email: "rajakumar@hashstudioz.com",
        mobile: "8929673671",
        invoiceRequested: false,
        addCompanyBillingDetails: null,
        customerReference: null,
        tickets: null,
        billingAddressCompany: null,
        billingAddressLine1: null,
        billingAddressLine2: null,
        billingAddressZip: null,
        billingAddressCity: null,
        postponeAssignment: true
    }
    return api(
        ApiConstants.CUSTOMERINFO + venue + '/reservation/' + key + '/validate-to-overview?lang=en',
        data,
        'post',
        null,
    );
}
