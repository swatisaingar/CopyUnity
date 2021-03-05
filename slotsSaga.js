import { put, takeLatest, takeEvery, call } from 'redux-saga/effects'
import { delay } from 'redux-saga';
import { Alert,ToastAndroid,AsyncStorage } from 'react-native';
import {getAllSlots} from '../api/methods/slotsVenues';
import * as allSlotsAction from '../actions/allSlotsAction';
import * as navigationActions from '../actions/navigationActions';
import * as types from '../actions/types';
import { enableLoader, disableLoader } from '../actions/loadingActions';


export function* watchAllSlots() {
    yield takeEvery(types.ALL_SLOTS_REQUEST, allSlotsAsync)
}

function* allSlotsAsync(action) {
    yield put(enableLoader());

    const response = yield call(getAllSlots,action.venue);

    console.log("resvenues===", response)

    if (response != '') {
        yield put(allSlotsAction.allSlotsResponse(response));
        yield put(disableLoader());
        
    } else {
        yield put(allSlotsAction.allSlotsFailed());
        yield put(disableLoader());
        setTimeout(() => {
            Alert.alert('SOU', 'API Response Failed');
        }, 200);
    }
}