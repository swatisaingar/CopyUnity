import { put, takeLatest, takeEvery, call } from 'redux-saga/effects'
import { delay } from 'redux-saga';
import { Alert,ToastAndroid,AsyncStorage } from 'react-native';
import {cleanSlots} from '../api/methods/slotsVenues';
import * as cleanAction from '../actions/cleanAction';
import * as navigationActions from '../actions/navigationActions';
import * as types from '../actions/types';
import { enableLoader, disableLoader } from '../actions/loadingActions';
import NavigationService from '../navigation/NavigationService';


export function* watchClean() {
    yield takeEvery(types.CLEAN_REQUEST, cleanAsync)
}

function* cleanAsync(action) {
    // yield put(enableLoader());

    const response = yield call(cleanSlots,action.venuename,action.bookingref);

    console.log("rescleanslots===", response)

    if (response != '') {
        yield put(cleanAction.cleanResponse(response));
        // yield put(disableLoader());
        NavigationService.goBack()
        
    } else {
        NavigationService.goBack()
        yield put(cleanAction.cleanFailed());
        // yield put(disableLoader());
        setTimeout(() => {
            Alert.alert('SOU', 'API Response Failed');
        }, 200);
    }
}