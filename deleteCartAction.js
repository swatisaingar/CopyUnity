import * as types from './types';

export function requestdeleteCart(data){
    return {
        type: types.Delete_Cart_REQUEST,
        data
    }
}

export function deleteCartFailed() {
    return {
        type: types.Delete_Cart_FAILED
    };
}

export function deleteCartResponse(response) {
    return {
        type: types.Delete_Cart_RESPONSE,
        response
    };
}