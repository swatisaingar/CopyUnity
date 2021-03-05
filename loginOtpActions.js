/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestLoginOtp(mobilenumber,otp){
    return {
        type: types.LOGIN_REQUEST_OTP,
        mobilenumber,
        otp
    }
}

export function loginOtpFailed() {
    return {
        type: types.LOGIN_FAILED_OTP
    };
}

export function onLoginOtpResponse(response) {
    return {
        type: types.LOGIN_RESPONSE_OTP,
        response
    };
}


