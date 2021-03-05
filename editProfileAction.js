import * as types from './types';

export function editprofileRequest(data){
    return {
        type: types.EDITProfile_REQUEST,
        data
        
    }
}

export function editprofileFailed() {
    return {
        type: types.EDITProfile_FAILED
    };
}

export function editprofileResponse(response) {
    return {
        type: types.EDITProfile_RESPONSE,
        response
    };
}