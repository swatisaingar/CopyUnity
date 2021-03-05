import * as types from './types';

export function requestaddCart(data,todate,fromdate){
    return {
        type: types.Add_Cart_REQUEST,
        data,
        todate,
        fromdate
    }
}

export function addCartFailed() {
    return {
        type: types.Add_Cart_FAILED
    };
}

export function addCartResponse(response) {
    return {
        type: types.Add_Cart_RESPONSE,
        response
    };
}