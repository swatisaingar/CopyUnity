import { put, takeLatest, takeEvery, call } from 'redux-saga/effects'
import { delay } from 'redux-saga';
import { Alert,ToastAndroid,AsyncStorage } from 'react-native';
import {getAllBundles} from '../api/methods/bookingUser';
import * as bundleServices from '../actions/bundleServices';
import * as navigationActions from '../actions/navigationActions';
import * as types from '../actions/types';
import { enableLoader, disableLoader } from '../actions/loadingActions';


export function* watchAllBundles() {
    yield takeEvery(types.BUNDLE_REQUEST, bundlesAsync)
}

function* bundlesAsync(action) {
    yield put(enableLoader());

    const response = yield call(getAllBundles);

    console.log("resbundles===", response)

    if (response != '') {
        yield put(bundleServices.allBundlesResponse(response));
        yield put(disableLoader());
        
    } else {
        yield put(bundleServices.allBundlesFailed());
        yield put(disableLoader());
        setTimeout(() => {
            Alert.alert('SOU', 'API Response Failed');
        }, 200);
    }
}