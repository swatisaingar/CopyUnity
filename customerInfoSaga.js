import { put, takeLatest, takeEvery, call } from 'redux-saga/effects'
import { delay } from 'redux-saga';
import { Alert,ToastAndroid,AsyncStorage } from 'react-native';
import {getCustomerInfo} from '../api/methods/cartApis';
import * as cutomerInfoAction from '../actions/cutomerInfoAction';
import * as navigationActions from '../actions/navigationActions';
import * as types from '../actions/types';
import { enableLoader, disableLoader } from '../actions/loadingActions';
import NavigationService from '../navigation/NavigationService';


export function* watchCustomerinfoUpdate() {
 
    yield takeEvery(types.Customerinfo_REQUEST, customerinfo)
}

function* customerinfo(action) {
    yield put(enableLoader());

    const response = yield call(getCustomerInfo, action.venue, action.key,action.data);

    console.log("rescustomerinfoupdate===", response)

    if (response.value === true) {
        yield put(cutomerInfoAction.CustomerinfoResponse(response));
        yield put(disableLoader({}));
        NavigationService.navigate('Payment')
  
    } else {
        yield put(cutomerInfoAction.CustomerinfoFailed());
        yield put(disableLoader({}));
        setTimeout(() => {
            Alert.alert('SOU', 'Something Went Wrong ! Make sure to fill all the fields');
        }, 200);
    }
}