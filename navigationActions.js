/*
 * Reducer actions related with navigation
 */
import NavigationService from '../navigation/NavigationService';
import { StackActions, NavigationActions } from 'react-navigation';

export function navigateToHome(params) {
    const data = ["a", "b", "c", "d"]
    NavigationService.navigate('Home', { something: data, });
}
export function navigateBack() {
    NavigationService.goBack();
}
export function navigateToLogin(params) {
    NavigationService.navigate('Login', params);
}
export function navigateToCart(params) {
    NavigationService.navigate('Cart', params);
}

export function navigateToCart1(params) {

    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Cart' })],
    });
    //  this.props.navigation.dispatch(resetAction)

    NavigationService.dispatch(resetAction);
}
