import { put, takeLatest, takeEvery, call } from 'redux-saga/effects'
import { delay } from 'redux-saga';
import { Alert,ToastAndroid,AsyncStorage } from 'react-native';
import {getAllVisitors} from '../api/methods/slotsVenues';
import * as allVisitorsAction from '../actions/allVisitorsAction';
import * as navigationActions from '../actions/navigationActions';
import * as types from '../actions/types';
import { enableLoader, disableLoader } from '../actions/loadingActions';


export function* watchAllVisitors() {
    yield takeEvery(types.ALL_SLOTS_REQUEST, allVisitorssAsync)
}

function* allVisitorssAsync(action) {
    yield put(enableLoader());

    const response = yield call(getAllVisitors,action.venue);

    console.log("resvenues===", response)

    if (response != '') {
        yield put(allVisitorsAction.allVisitorsResponse(response));
        yield put(disableLoader());
        
    } else {
        yield put(allVisitorsAction.allVisitorsFailed());
        yield put(disableLoader());
        setTimeout(() => {
            Alert.alert('SOU', 'API Response Failed');
        }, 200);
    }
}