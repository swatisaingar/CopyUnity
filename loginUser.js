import {Api} from '../../api';
import {apiforotp,apiNoAuth,api} from '../../api'
import ApiConstants from '../ApiConstants';
import {ToastAndroid} from 'react-native'

export function loginUser(mobilenumber) {
    return apiNoAuth(
        ApiConstants.LOGIN + mobilenumber,
        null,
        'get',
        null,
    );
}

export function loginUserOtp(mobilenumber,otp) {

    return apiforotp(
        ApiConstants.LOGIN_OTP + mobilenumber + "/" + otp,
        null,
        'get',
        null,
    );
}

export function getProfile() {

    return api(
        ApiConstants.PROFILE,
        null,
        'get',
        null,
    );
}
export function editProfile(data) {

    return api(
        ApiConstants.EDITPROFILE,
        data,
        'put',
        null,
    );
}
