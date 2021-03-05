
import { put, takeLatest, takeEvery, call } from 'redux-saga/effects'
import { delay } from 'redux-saga';

import { Alert } from 'react-native';
// import loginUser from '../../app/api/methods/loginUser';
import { retrieveWallet } from '../api/methods/bookingUser'
import * as retrieveWalletAction from '../actions/retrieveWalletAction';
import * as navigationActions from '../actions/navigationActions';
import * as types from '../actions/types';
import { enableLoader, disableLoader } from '../actions/loadingActions';
import { setData } from '../utils/Utils'
import NavigationService from '../navigation/NavigationService';

// Our worker Saga that logins the user
export function* watchWallet() {

    yield takeEvery(types.RETRIEVEWALLET_REQUEST, retrieveWalletAsync)
}

function* retrieveWalletAsync(action) {
    yield put(enableLoader());

    const response = yield call(retrieveWallet);


    console.log('retrieveWalletresponse==== ', response)

    if (response.status != 403) {
        yield put(retrieveWalletAction.walletResponse(response));
        yield put(disableLoader({}));
        NavigationService.navigate('Wallet')

    } else {
        yield put(retrieveWalletAction.walletFailed());
        yield put(disableLoader({}));
        NavigationService.navigate('Login')

        // setTimeout(() => {
        //     Alert.alert('SOU', 'Somethig went wrong');
        // }, 200);
    }
}
