import { put, takeLatest, takeEvery, call } from 'redux-saga/effects'
import { delay } from 'redux-saga';
import { Alert,ToastAndroid,AsyncStorage } from 'react-native';
import {getAllVenues} from '../api/methods/bookingUser';
import * as allVenuesActions from '../actions/allVenuesActions';
import * as navigationActions from '../actions/navigationActions';
import * as types from '../actions/types';
import { enableLoader, disableLoader } from '../actions/loadingActions';


export function* watchAllVenues() {
    yield takeEvery(types.ALL_VENUES_REQUEST, allVenuesAsync)
}

function* allVenuesAsync(action) {
    yield put(enableLoader());

    const response = yield call(getAllVenues);

    console.log("resvenues===", response)

    if (response != '') {
        yield put(allVenuesActions.allVenuesResponse(response));
        yield put(disableLoader());
        
    } else {
        yield put(allVenuesActions.allVenuesFailed());
        yield put(disableLoader());
        setTimeout(() => {
            Alert.alert('SOU', 'API Response Failed');
        }, 200);
    }
}