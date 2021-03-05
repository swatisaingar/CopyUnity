import { put, takeLatest, takeEvery, call } from 'redux-saga/effects'
import { delay } from 'redux-saga';
import { Alert,ToastAndroid,AsyncStorage } from 'react-native';
import {getBundleInfo} from '../api/methods/bookingUser';
import * as bundleInfoAction from '../actions/bundleInfoAction';
import * as navigationActions from '../actions/navigationActions';
import * as types from '../actions/types';
import { enableLoader, disableLoader } from '../actions/loadingActions';
import {setUserid,setData} from '../utils/Utils'

export function* watchBundleinfo() {
    console.log("resotp====")
    yield takeEvery(types.BUNDLEINFO_REQUEST,BundleInfo)
}

function* BundleInfo(action) {
    yield put(enableLoader());

    const response = yield call(getBundleInfo, action.id);

    console.log("resbundleinfo===", response)

    if (response != '') {
        yield put(bundleInfoAction.bundleInfoResponse(response));
        yield put(disableLoader({}));
  
        
    } else {
        yield put(bundleInfoAction.bundleInfoFailed());
        yield put(disableLoader({}));
        setTimeout(() => {
            Alert.alert('SOU', 'Login Failed');
        }, 200);
    }
}