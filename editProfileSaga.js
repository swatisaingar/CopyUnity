import { put, takeLatest, takeEvery, call } from 'redux-saga/effects'
import { delay } from 'redux-saga';
import { Alert, ToastAndroid, AsyncStorage } from 'react-native';
import { editProfile } from '../api/methods/loginUser';
import * as editProfileAction from '../actions/editProfileAction';
import * as navigationActions from '../actions/navigationActions';
import * as types from '../actions/types';
import { enableLoader, disableLoader } from '../actions/loadingActions';
import NavigationService from '../navigation/NavigationService';


export function* watchEditProfile() {

    yield takeEvery(types.EDITProfile_REQUEST, callEditProfile)
}

function* callEditProfile(action) {
    yield put(enableLoader());

    const response = yield call(editProfile, action.data);

    console.log("reseditprofile===", response)

    if (response != '') {
        yield put(editProfileAction.editprofileResponse(response));
        yield put(disableLoader({}));
        if (response.status === 403) {
            NavigationService.navigate('Login')
        } else {
            ToastAndroid.show('Profile updated Successfully...',ToastAndroid.SHORT)

            NavigationService.navigate('Splash')
        }
    } else {
        yield put(editProfileAction.editprofileFailed());
        yield put(disableLoader({}));
        setTimeout(() => {
            Alert.alert('SOU', 'API Failed');
        }, 200);
    }
}