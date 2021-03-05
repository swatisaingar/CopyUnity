import { put, takeLatest, takeEvery, call } from 'redux-saga/effects'
import { delay } from 'redux-saga';
import { Alert, ToastAndroid, AsyncStorage } from 'react-native';
import { reserveBooking } from '../api/methods/cartApis';
import * as reserveBookingAction from '../actions/reserveBookingAction';
import * as navigationActions from '../actions/navigationActions';
import * as types from '../actions/types';
import { enableLoader, disableLoader } from '../actions/loadingActions';
import { setData } from '../utils/Utils'
import NavigationService from '../navigation/NavigationService';


export function* watchBookingRequest() {

    yield takeEvery(types.Booking_REQUEST, bookingRequest)
}

function* bookingRequest(action) {
    yield put(enableLoader());

    const response = yield call(reserveBooking, action.data, action.service, action.totalamount);

    console.log("reservebooking===", response)

    if (response.status === 'OK') {
        yield put(reserveBookingAction.bookingResponse(response));
        yield put(disableLoader({}));

        setData('@bookingdata', response.data)
        console.log('bookingref', response.data)

        if (response.status === 403) {
            NavigationService.navigate('Login')
        } else {
            NavigationService.navigate('customerinfo')
        }
        //  ToastAndroid.show(response.data,ToastAndroid.SHORT)

        // yield call(navigationActions.navigateToCart);
    } else {
        yield put(disableLoader({}));
        if (response.status === 403) {
            NavigationService.navigate('Login')
        } else {
            yield put(reserveBookingAction.bookingFailed());
           
            setTimeout(() => {
                Alert.alert('ERROR !','Please select a different date or slot to create booking');
            }, 200);
        }
    }
}