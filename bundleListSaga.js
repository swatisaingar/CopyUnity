import { put, takeLatest, takeEvery, call } from 'redux-saga/effects'
import { delay } from 'redux-saga';
import { Alert,ToastAndroid,AsyncStorage } from 'react-native';
import {getAllVenues, getAllBundleswithinfo} from '../api/methods/bookingUser';
import * as bundleListAction from '../actions/bundleListAction';
import * as navigationActions from '../actions/navigationActions';
import * as types from '../actions/types';
import { enableLoader, disableLoader } from '../actions/loadingActions';


export function* watchAllBundlesinfo() {
    yield takeEvery(types.BUNDLELIST_REQUEST, allVenuesAsync)
}

function* allVenuesAsync(action) {
    yield put(enableLoader());

    const response = yield call(getAllBundleswithinfo);

    console.log("resbundleslist===", response)

    if (response != '') {
        yield put(bundleListAction.allBundlelistResponse(response));
        yield put(disableLoader());
        
    } else {
        yield put(bundleListAction.allBundlelistFailed());
        yield put(disableLoader());
        setTimeout(() => {
            Alert.alert('SOU', 'API Response Failed');
        }, 200);
    }
}