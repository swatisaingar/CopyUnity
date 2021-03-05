import { put, takeLatest, takeEvery, call } from 'redux-saga/effects'
import { delay } from 'redux-saga';
import { Alert,ToastAndroid,AsyncStorage } from 'react-native';
import {confirmRechargeWallet} from '../api/methods/bookingUser';
import * as confirmWalletAction from '../actions/confirmWalletAction';
import * as types from '../actions/types';
import { enableLoader, disableLoader } from '../actions/loadingActions';


export function* watchConfirmWallet() {
   
    yield takeEvery(types.CONFIRMWALLET_REQUEST, confirmWallet)
}

function* confirmWallet(action) {
    yield put(enableLoader());

    const response = yield call(confirmRechargeWallet, action.reservationID);

    console.log("resconfirmwallet===", response)
    //ToastAndroid.show(response.type,ToastAndroid.SHORT)
    //console.log('Headers==== ',response.headers.get('x-authorization'))

    if (response != '') {
        yield put(confirmWalletAction.confirmWalletResponse(response));
        yield put(disableLoader({}));
      
    } else {
        yield put(confirmWalletAction.confirmWalletFailed());
        yield put(disableLoader({}));
        setTimeout(() => {
            Alert.alert('SOU', 'Something  went wrong !');
        }, 200);
    }
}