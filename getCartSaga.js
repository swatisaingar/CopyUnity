import { put, takeLatest, takeEvery, call } from 'redux-saga/effects'
import { delay } from 'redux-saga';
import { Alert,ToastAndroid,AsyncStorage } from 'react-native';
import {getCart} from '../api/methods/cartApis';
import * as getCartAction from '../actions/getCartAction';
import * as navigationActions from '../actions/navigationActions';
import * as types from '../actions/types';
import { enableLoader, disableLoader } from '../actions/loadingActions';
import NavigationService from '../navigation/NavigationService';
import { setData } from '../utils/Utils';


export function* watchgetCart() {
    yield takeEvery(types.Get_Cart_REQUEST, getCartdata)
}

function* getCartdata(action) {
    yield put(enableLoader());
    const response = yield call(getCart, action.id);
    // console.log("getcart===", response)

    if (response!='') {
        yield put(getCartAction.getCartResponse(response));
        yield put(disableLoader({}));
        if(response.status === 403){
            // ToastAndroid.show('coming',ToastAndroid.SHORT)
            NavigationService.navigate('Login')
        }
        if(response === 'No value present'){
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