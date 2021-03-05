import React, { Component } from 'react'
import {
    Dimensions,
} from 'react-native';
import { createDrawerNavigator, DrawerItems, createStackNavigator, withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";
import Home from '../screens/Home'
import Detail from '../screens/detail'
import Profile from '../screens/profile'
import EditProfile from '../screens/editProfile'
import Cart from '../screens/cart'
import Wallet from '../screens/wallet'
import WalletDetail from '../screens/walletDetail'
import NavDrawerMenu from './drawerMenu/NavDrawerMenu'
import Booking from '../screens/booking'
import Payment from '../screens/payment'
import BookingDetail from '../screens/bookingDetail'
import MyBookings from '../screens/myBookings'
import customerinfo from '../screens/customerinfo'
import addMoney from '../screens/addMoney'
import editBooking from '../screens/editBooking'
import ticketView from '../screens/ticketView'

const WIDTH = Dimensions.get('window').width;



const MenuDrawer = withNavigation(NavDrawerMenu);

const DrawerConfig = {
    unmountInactiveRoutes: true,
    drawerWidth: WIDTH * 0.75,
    contentComponent: ({ navigation }) => {
        return (<MenuDrawer navigation={navigation} />)
    }
}


const MainStackNavigator = createStackNavigator(
    {
        Home: {
            screen: Home
        },
        Detail: {
            screen: Detail
        },
        Profile: {
            screen: Profile,
            headerMode: 'none',
            navigationOptions: {
                headerVisible: false,
            }
        },
        EditProfile: {
            screen: EditProfile
        },
        ticketView: {
            screen: ticketView
        },
        Booking: {
            screen: Booking

        },
        Cart: {
            screen: Cart
        },
        Wallet: {
            screen: Wallet
        },
        WalletDetail: {
            screen: WalletDetail
        },
        MyBookings: {
            screen: MyBookings
        },
        BookingDetail: {
            screen: BookingDetail
        },
        Payment: {
            screen: Payment
        },
        customerinfo: {
            screen: customerinfo
        },
        addMoney:{
            screen: addMoney
        },
        editBooking:{
            screen:editBooking
        },
    },
    {
        initialRouteName: "Home"
    }
)

export default createDrawerNavigator(
    {
        Main: MainStackNavigator
    },

    DrawerConfig
)


// const MenuContainer = ({ navigation }) => {
//     return (
//         <View style={styles.root}>
//             <View style={{ height: 150, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
//                 <Image style={{
//                     width: 80,
//                     height: 80,
//                     borderRadius: 100 / 2,
//                     overflow: "hidden",
//                     borderWidth: 0,
//                     borderColor: "red",

//                 }} source={require('../me.jpg')}></Image>
//                 <View style = {{flexDirection: 'column',marginLeft: 10}}>
//                 <Text style={{ color: 'white',fontSize: 18 }}>Raja kumar giri</Text>
//                 <Text style={{ color: 'white',fontSize:10,marginTop:6 }}>Wallet Balance: ₹1000</Text>
//                 </View>
//             </View>
//             <View style={styles.contentWrapper}>

//                 <Button style = {{padding: 5}} title="Go To Detail" onPress={() => navigation.navigate('Detail')} />


//             </View>
//         </View>
//     )
// }


// const CustomDrawerComponent = props => (
//     <SafeAreaView>
//         <View
//             style={{
//                 height: 150,
//                 backgroundColor: "white",
//                 alignItems: "center",
//                 justifyContent: "center"
//             }}
//         >
//             <Image
//                 source={require("../utils/menu.png")}
//                 style={{ height: 120, width: 120, borderRadius: 60 }}
//             />
//         </View>
//         <ScrollView>
//             <DrawerItems {...props} />
//         </ScrollView>
//     </SafeAreaView>
// );


// export default createDrawerNavigator(
//     {
//         Home: {
//             screen: FirstScreen,
//             navigationOptions: {
//                 drawerLabel: "Home",
//                 drawerIcon: ({ tintColor }) => <Icon name="cog" size={17} />
//             }
//         },

//         DrawerScreen1: {
//             screen: SecondSCreen,
//             navigationOptions: {
//                 drawerLabel: "Second Screen",
//                 drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} />
//             }
//         }
//     },
//     {
//         drawerPosition: 'left',
//         contentComponent: CustomDrawerComponent
//     }
// )

// export default class DrawerMenu extends Component {
//     render() {
//         return (
//             <View>
//                 <Text> Your menu appears here </Text>
//             </View>
//         )
//     }
// }
