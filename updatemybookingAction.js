import * as types from './types';

export function requestupdatemybooking(data){
    return {
        type: types.MYBOOKING_REQUEST,
        data
    }
}

export function failedmybooking() {
    return {
        type: types.MYBOOKING_FAILED
    };
}

export function updatemybookingresponse(response,id) {
    return {
        type: types.MYBOOKING_RESPONSE,
        response,
        id
    };
}