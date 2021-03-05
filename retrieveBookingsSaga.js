
import { put, takeLatest, takeEvery, call } from 'redux-saga/effects'
import { delay } from 'redux-saga';

import { Alert } from 'react-native';
// import loginUser from '../../app/api/methods/loginUser';
import { retrieveBookingss } from '../api/methods/bookingUser'

import * as retrieveBookings from '../actions/retrieveBookings';
import * as navigationActions from '../actions/navigationActions';
import * as types from '../actions/types';
import { enableLoader, disableLoader } from '../actions/loadingActions';
import { setData } from '../utils/Utils'
import NavigationService from '../navigation/NavigationService';

// Our worker Saga that logins the user
export function* watchRetrieveBookings() {

    yield takeEvery(types.RETRIEVEBOOKNG_REQUEST, retrieveBookingsAsync)
}

function* retrieveBookingsAsync(action) {
    yield put(enableLoader());

    const response = yield call(retrieveBookingss,action.name);


    console.log('retrieveBookingsresponse==== ', response)

    if (response.status != 403) {
        yield put(retrieveBookings.retrieveBookingsResponse(response));
        yield put(disableLoader({}));
        // if (action.name != 'cancellation') 
        NavigationService.navigate('MyBookings')



    } else {
        // yield put(profileAction.profileFailed());
        yield put(disableLoader({}));
        NavigationService.navigate('Login')

        // setTimeout(() => {
        //     Alert.alert('SOU', 'Somethig went wrong');
        // }, 200);
    }
}
