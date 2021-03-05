import { put, takeLatest, takeEvery, call } from 'redux-saga/effects'
import { delay } from 'redux-saga';
import { Alert, ToastAndroid, AsyncStorage } from 'react-native';
import { deleteItemCart } from '../api/methods/cartApis';
import * as deleteCartAction from '../actions/deleteCartAction';
import * as getCartAction from '../actions/getCartAction';
import * as navigationActions from '../actions/navigationActions';
import * as types from '../actions/types';
import { enableLoader, disableLoader } from '../actions/loadingActions';
import NavigationService from '../navigation/NavigationService';
import { setData } from '../utils/Utils';


export function* watchdeleteCart() {

    yield takeEvery(types.Delete_Cart_REQUEST, deleteCart)
}

function* deleteCart(action) {
    yield put(enableLoader());

    const response = yield call(deleteItemCart, action.data);

    console.log("resdeletecart===", response)

    if (response != '') {
        yield put(getCartAction.getCartResponse(response));
        yield put(disableLoader({}));
        if (response.status === 403) {
            NavigationService.navigate('Login')
        }
        if (response.cartEventList.length > 0) {
            
        }else{
            setData('startdate','')
            setData('enddate','')
        }


    } else {
        yield put(getCartAction.getCartFailed());
        yield put(disableLoader({}));
        setTimeout(() => {
            Alert.alert('SOU', 'API Failed');
        }, 200);
    }
}