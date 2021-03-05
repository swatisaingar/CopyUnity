
import * as types from './types';

export function requestWallet() {
    return {
        type: types.RETRIEVEWALLET_REQUEST,
      
    }
}

export function walletFailed() {
    return {
        type: types.RETRIEVEWALLET_FAILED
    };
}

export function walletResponse(response) {
    return {
        type: types.RETRIEVEWALLET_RESPONSE,
        response
    };
}


