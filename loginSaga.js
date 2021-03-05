/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, takeLatest, takeEvery, call } from 'redux-saga/effects'
import { delay } from 'redux-saga';

import { Alert } from 'react-native';
// import loginUser from '../../app/api/methods/loginUser';
import { loginUser } from '../api/methods/loginUser'
import * as loginActions from '../actions/loginActions';
import * as navigationActions from '../actions/navigationActions';
import * as types from '../actions/types';
import { enableLoader, disableLoader } from '../actions/loadingActions';

// Our worker Saga that logins the user
export function* watchLogin() {
    console.log("res====")
    yield takeEvery(types.LOGIN_REQUEST, loginAsync)
}

function* loginAsync(action) {
    yield put(enableLoader());

    const response = yield call(loginUser, action.mobilenumber);

    console.log("res====", response)
    console.log('HeadersLogin==== ', response.headers)

    //if (response != '') {
    yield put(loginActions.onLoginResponse(response));
    yield put(disableLoader({}));
    // setTimeout(() => {
    //     Alert.alert('SOU LOGIN OTP IS : ' + '', response+'');
    // }, 200);
    // yield call(navigationActions.navigateToHome);
    // } else {
    //     yield put(loginActions.loginFailed());
    //     yield put(disableLoader({}));
    //     // setTimeout(() => {
    //     //     Alert.alert('SOU', 'Login Failed');
    //     // }, 200);
    // }
}
