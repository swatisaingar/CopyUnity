import React, { Component } from 'react'
import { Text, View, BackHandler, ActivityIndicator, Dimensions, Image, ToastAndroid, Alert } from 'react-native';

import { WebView } from 'react-native-webview'
import NavigationService from '../navigation/NavigationService';
import { Icon } from 'native-base';
import { widthScale, heightscale } from '../utils/Utils';
import Loader from '../components/Loader';
import { TouchableOpacity } from 'react-native-gesture-handler';

let showhide = 'false'
export default class addMoneyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            showWebView: true,
        };
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        if (showhide != 'true') {
            Alert.alert(
                'SOU',
                'Error occured, Transaction failed !',
                [

                    {
                        text: 'OK', onPress: () => {
                            ToastAndroid.show('Transaction Cancelled', ToastAndroid.SHORT)
                            NavigationService.navigate('Home', { data: 'http://new.stageunity.tk/' });
                            return true;
                        }
                    },
                ],
                { cancelable: false },
            );

        } else {
            NavigationService.navigate('Home', { data: 'http://new.stageunity.tk/' });
            return true;
        }
    }

    hideSpinner() {
        this.setState({ visible: false });
    }
    _onNavigationStateChange(webViewState) {
        console.log('webviewaddurl', webViewState.url)

        if (webViewState.url === 'http://tickets.stageunity.tk/#/payment-successful') {
            this.setState({ showWebView: false })
            let venue = this.props.navigation.state.params.venue;
            let bookingref = this.props.navigation.state.params.bookingref;
            this.props.confirmBooking(venue, bookingref);
            showhide = 'true'

        }
    }
    render() {
        let accesscode = this.props.navigation.state.params.accesscode;
        let encrequest = this.props.navigation.state.params.encrequest;
        let redirectURL = this.props.navigation.state.params.redirectURL;

        let url = redirectURL + '&encRequest=' + encrequest + '&access_code=' + accesscode;

        return (
            <View style={{ flex: 1 }}>
                {this.state.showWebView && (
                    <WebView
                        ref="webview"
                        onNavigationStateChange={this._onNavigationStateChange.bind(this)}
                        onLoad={() => this.hideSpinner()}
                        style={{ flex: 1 }}
                        source={{ uri: url }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        startInLoadingState={false}
                    />
                )}
                {this.state.visible && (
                    <ActivityIndicator
                        style={{ position: "absolute", top: Dimensions.get('window').height / 2.5, left: Dimensions.get('window').width / 2.2 }}
                        size="large"
                    />
                )}
                <Loader />

            </View>
        )
    }
}
