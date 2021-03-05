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
import { getProfile } from '../api/methods/loginUser'
import * as profileAction from '../actions/profileAction';
import * as navigationActions from '../actions/navigationActions';
import * as types from '../actions/types';
import { enableLoader, disableLoader } from '../actions/loadingActions';
import { setData } from '../utils/Utils'

// Our worker Saga that logins the user
export function* watchProfile() {
    console.log("res====")
    yield takeEvery(types.GetProfile_REQUEST, profileAsync)
}

function* profileAsync(action) {
    yield put(enableLoader());

    const response = yield call(getProfile);


    console.log('profileresponse==== ', response)

    if (response.status != 403) {
        yield put(profileAction.profileResponse(response));
        yield put(disableLoader({}));
        setData('@username', response.username);
        setData('@firstname', response.firstName);
        setData('@lastname', response.lastName);
        setData('@email', response.emailAddress);



    } else {
        yield put(profileAction.profileFailed());
        yield put(profileAction.profileResponse(response));
        yield put(disableLoader({}));
        // setTimeout(() => {
        //     Alert.alert('SOU', 'Login Failed');
        // }, 200);
    }
}
