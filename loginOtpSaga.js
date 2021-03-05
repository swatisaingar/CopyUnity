import { put, takeLatest, takeEvery, call } from 'redux-saga/effects'
import { delay } from 'redux-saga';
import { Alert, ToastAndroid, AsyncStorage } from 'react-native';
import { loginUserOtp } from '../api/methods/loginUser';
import * as loginOtpActions from '../actions/loginOtpActions';
import * as navigationActions from '../actions/navigationActions';
import * as types from '../actions/types';
import { enableLoader, disableLoader } from '../actions/loadingActions';
import { setUserid, setData } from '../utils/Utils'
import NavigationService from '../navigation/NavigationService';
import {getProfile} from '../api/methods/loginUser'
import * as profileAction from '../actions/profileAction';

export function* watchLoginOtp() {
    console.log("resotp====")
    yield takeEvery(types.LOGIN_REQUEST_OTP, loginAsyncOtp)
}

function* loginAsyncOtp(action) {
    yield put(enableLoader());

    const response = yield call(loginUserOtp, action.mobilenumber, action.otp);

    console.log("resotp===", response)
    //ToastAndroid.show(response.type,ToastAndroid.SHORT)
    //console.log('Headers==== ',response.headers.get('x-authorization'))

    if (response != '') {
        yield put(loginOtpActions.onLoginOtpResponse(response));
        yield put(disableLoader({}));
        var userid = response.id;
        var userID = '' + userid;
        var mobilenumber = '' + response.mobile;
       
        if (response.fieldName != undefined) {
            if (response.fieldName === 'Invalid otp ') {
                ToastAndroid.show(response.fieldName + '',ToastAndroid.SHORT)
                NavigationService.goBack()

            }
        } else {
            setUserid(userID);
            setData('loggedIn', 'true')
            setData('mobile', mobilenumber)
            setData('@username', response.username);
            // NavigationService.goBack()

            yield put(enableLoader());

            const responseprofile = yield call(getProfile);
            console.log("getprofilecalled===", responseprofile)
        
            if (responseprofile!='') {
                yield put(profileAction.profileResponse(responseprofile));
                yield put(disableLoader({}));
                if(responseprofile.status === 403){
                    // ToastAndroid.show('coming',ToastAndroid.SHORT)
                    NavigationService.navigate('Login')
                }else{
                    setData('@username',responseprofile.username);
                    setData('@firstname',responseprofile.firstName);
                    setData('@lastname',responseprofile.lastName);
                    setData('@email',responseprofile.emailAddress);
                    
                    NavigationService.goBack()
                   
                }
                
            } else {
                yield put(profileAction.profileFailed());
                yield put(disableLoader({}));
                setTimeout(() => {
                    Alert.alert('SOU', 'API Failed');
                }, 200);
            }
        }



        // NavigationService.navigate('Home',{data:'http://new.stageunity.tk/'})
    } else {
        yield put(loginOtpActions.loginOtpFailed());
        yield put(disableLoader({}));
        setTimeout(() => {
            Alert.alert('SOU', 'Login Failed');
        }, 200);
    }
}