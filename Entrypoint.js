/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
//import Navigator from 'app/navigation';
import Navigator from './navigation';
// import configureStore from './store/configureStore';

import configureStore from './store/Store';
// const { persistor, store } = configureStore();

const store = configureStore();

export default class Entrypoint extends Component {
    render() {
        console.disableYellowBox = true;
        return (
            <Provider store={store}>

                <Navigator />

            </Provider>
        );
    }
}













//  {/* <PersistGate */}
//                     {/* loading={<ActivityIndicator />} */}
//                     {/* persistor={persistor} */}
//                 {/* > */}
//                 <Navigator />
//                 {/* </PersistGate> */}
