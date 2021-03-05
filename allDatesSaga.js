import { put, takeLatest, takeEvery, call } from 'redux-saga/effects'
import { delay } from 'redux-saga';
import { Alert,ToastAndroid,AsyncStorage } from 'react-native';
import {getAllDates} from '../api/methods/slotsVenues';
import * as allDatesAction from '../actions/allDatesAction';
import * as navigationActions from '../actions/navigationActions';
import * as types from '../actions/types';
import { enableLoader, disableLoader } from '../actions/loadingActions';


export function* watchAllDates() {
    yield takeEvery(types.ALL_DATES_REQUEST, allDatesAsync)
}

function* allDatesAsync(action) {
    yield put(enableLoader());

    const response = yield call(getAllDates,action.venue);

    console.log("resdates===", response)

    if (response != '') {
        yield put(allDatesAction.allDatesResponse(response));
        yield put(disableLoader());
        
    } else {
        yield put(allDatesAction.allDatesFailed());
        yield put(disableLoader());
        setTimeout(() => {
            Alert.alert('SOU', 'API Response Failed availbledays');
        }, 200);
    }
}