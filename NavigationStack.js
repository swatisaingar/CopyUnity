import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Splash from '../screens/splash';
import Profile from '../screens/profile'
import EditProfile from '../screens/editProfile'
import DrawerMenu from '../screens/DrawerMenu';
import Test from '../screens/demo/test';

const RNApp = createStackNavigator(
    {
        // Test:{
        //     screen: Test,

        // },
        
        Splash: {
            screen: Splash,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        Login: {
            screen: Login,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        Home: {
            screen: DrawerMenu,
            navigationOptions: null
        },
        // Profile: {
        //     screen: Profile,
        //     headerMode: 'none',
        //     navigationOptions: {
        //         headerVisible: false,
        //     }
        // },
        // EditProfile: {
        //     screen: EditProfile
        // },
       
    },
     navigationOptions = {
        headerMode: 'none'

    },
    {
        initialRouteName: 'Splash'
    }
);

export const RNAppMain = createAppContainer(createSwitchNavigator(
    {
        RNApp: RNApp,
        //MainDrawer: MainDrawer,

    },
    {
        initialRouteName: 'RNApp',

    }
))

// const MainDrawer = createDrawerNavigator({//declare screen here of navigation drawer
//     FirstScreen: { screen: FirstScreen },
//     SecondSCreen: { screen: SecondSCreen }

// }, {
//     contentComponent: DrawerMenu,
//     drawerOpenRoute: 'DrawerOpen',
//     drawerCloseRoute: 'DrawerClose',
//     drawerToggleRoute: 'DrawerToggle',
//     contentOptions: {
//         drawerBackgroundColor: "transparent",
//         itemsContainerStyle: {
//             marginVertical: 0,
//         },
//         iconContainerStyle: {
//             opacity: 1,
//         }
//     },
// });



//export default createAppContainer(MainAppNavigator);
