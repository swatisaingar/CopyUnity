import * as types from './types';

export function requestCustomerInfo(venue,key,data){
    return {
        type: types.Customerinfo_REQUEST,
        venue,
        key,
        data
    }
}

export function CustomerinfoFailed() {
    return {
        type: types.Customerinfo_FAILED
    };
}

export function CustomerinfoResponse(response) {
    return {
        type: types.Customerinfo_RESPONSE,
        response
    };
}