
import * as types from './types';

export function requestConfirmWallet(reservationID){
    return {
        type: types.CONFIRMWALLET_REQUEST,
        reservationID,
        
    }
}

export function confirmWalletFailed() {
    return {
        type: types.CONFIRMWALLET_FAILED
    };
}

export function confirmWalletResponse(response) {
    return {
        type: types.CONFIRMWALLET_RESPONSE,
        response
    };
}


