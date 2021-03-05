import * as types from './types';

export function profileRequest(){
    return {
        type: types.GetProfile_REQUEST,
        
    }
}

export function profileFailed() {
    return {
        type: types.GetProfile_FAILED
    };
}

export function profileResponse(response) {
    return {
        type: types.GetProfile_RESPONSE,
        response
    };
}