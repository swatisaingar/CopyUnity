import * as types from './types';

export function requestgetCart(id){
    return {
        type: types.Get_Cart_REQUEST,
        id
    }
}

export function getCartFailed() {
    return {
        type: types.Get_Cart_FAILED
    };
}

export function getCartResponse(response) {
    return {
        type: types.Get_Cart_RESPONSE,
        response
    };
}