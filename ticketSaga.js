import { put, takeLatest, takeEvery, call } from 'redux-saga/effects'
import { delay } from 'redux-saga';
import { Alert, ToastAndroid, AsyncStorage } from 'react-native';
import { getAvailableTickets } from '../api/methods/slotsVenues';
import * as ticketAction from '../actions/ticketAction';
import * as navigationActions from '../actions/navigationActions';
import * as types from '../actions/types';
import { enableLoader, disableLoader } from '../actions/loadingActions';


export function* watchTickets() {
    yield takeEvery(types.Ticket_REQUEST, ticketAsync)
}

function* ticketAsync(action) {
    yield put(enableLoader());

    const response = yield call(getAvailableTickets, action.venue, action.slotid, action.date);

    console.log("tickets===", response)

    if (response != '') {
        yield put(disableLoader());
        if (response.availableTickets != undefined) {
            yield put(ticketAction.ticketResponse(response));
           
        } else {
            yield put(ticketAction.ticketResponse(response));
            // Alert.alert('SOU ERROR', 'This slot is not available! Please try selecting a different slot/date');
        }

    } else {
        yield put(ticketAction.ticketFailed());
        yield put(disableLoader());
        setTimeout(() => {
            Alert.alert('SOU', 'API Response Failed');
        }, 200);
    }
}