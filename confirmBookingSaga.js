import { put, takeLatest, takeEvery, call } from 'redux-saga/effects'
import { delay } from 'redux-saga';
import { Alert,ToastAndroid,AsyncStorage } from 'react-native';
import {getConfirmBooking} from '../api/methods/bookingUser';
import * as confirmBookingAction from '../actions/confirmBookingAction';
import * as navigationActions from '../actions/navigationActions';
import * as types from '../actions/types';
import { enableLoader, disableLoader } from '../actions/loadingActions';
import {setUserid,setData} from '../utils/Utils'

export function* watchConfirmBooking() {
   
    yield takeEvery(types.CONFIRMBOOKNG_REQUEST, confirmBooking)
}

function* confirmBooking(action) {
    yield put(enableLoader());

    const response = yield call(getConfirmBooking, action.venue, action.bookingref);

    console.log("resconfirmbooking===", response)
    //ToastAndroid.show(response.type,ToastAndroid.SHORT)
    //console.log('Headers==== ',response.headers.get('x-authorization'))

    if (response != '') {
        yield put(confirmBookingAction.confirmBookingResponse(response));
        yield put(disableLoader({}));
      
    } else {
        yield put(confirmBookingAction.confirmBoookingFailed());
        yield put(disableLoader({}));
        setTimeout(() => {
            Alert.alert('SOU', 'Login Failed');
        }, 200);
    }
}