import { put, takeLatest, takeEvery, call } from 'redux-saga/effects'
import { delay } from 'redux-saga';
import { Alert, ToastAndroid, AsyncStorage } from 'react-native';
import { addToCart } from '../api/methods/slotsVenues';
import * as addToCartAction from '../actions/addToCartAction';
import * as navigationActions from '../actions/navigationActions';
import * as types from '../actions/types';
import {getCart} from '../api/methods/cartApis';
import * as getCartAction from '../actions/getCartAction';
import { enableLoader, disableLoader } from '../actions/loadingActions';
import NavigationService from '../navigation/NavigationService';
import { StackActions, NavigationActions } from 'react-navigation';
import { g_date } from '../screens/booking/BookingView';
import { setData } from '../utils/Utils';


export function* watchaddToCart() {

    yield takeEvery(types.Add_Cart_REQUEST, callCart)
}

function* callCart(action) {
    yield put(enableLoader());

    const response = yield call(addToCart, action.data);

    console.log("resaddtocart===", response)

    if (response != '') {
        yield put(addToCartAction.addCartResponse(response));
        yield put(disableLoader({}));
        if (response.status === 403) {
            NavigationService.navigate('Login')
        } else {
            yield put(enableLoader());

            const responsecart = yield call(getCart, action.id);
            console.log("getcart===", responsecart)
        
            if (responsecart!='') {
                yield put(getCartAction.getCartResponse(responsecart));
                yield put(disableLoader({}));
                if(responsecart.status === 403){
                    // ToastAndroid.show('coming',ToastAndroid.SHORT)
                    NavigationService.navigate('Login')
                }else{
                    console.log('g_dddddaaa------','added successfully');
                    if(action.todate != ''){
                        setData('enddate',action.todate)
                        setData('startdate',action.fromdate)
                    }else{
                        setData('enddate','')
                        setData('startdate','')
                    }
                    NavigationService.navigate('Cart',{startdate:action.fromdate,enddate:action.todate})
                   
                }
                
            } else {
                yield put(getCartAction.getCartFailed());
                yield put(disableLoader({}));
                setTimeout(() => {
                    Alert.alert('SOU', 'API Failed');
                }, 200);
            }
            // const resetAction = StackActions.reset({
            //     index: 0,
            //     actions: [NavigationActions.navigate({ routeName: 'Cart' })],
            //   });
            //  this.props.navigation.dispatch(resetAction)

            // yield call(navigationActions.navigateToCart);
        }
    } else {
        yield put(addToCartAction.addCartFailed());
        yield put(disableLoader({}));
        setTimeout(() => {
            Alert.alert('SOU', 'Somethig went wrong! Add to cart Failed');
        }, 200);
    }
}