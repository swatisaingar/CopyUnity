/* App config for apis
 */
const ApiConstants = {
    // BASE_URL: 'http://tickets.stageunity1.tk/api/',
    BASE_URL: 'https://www.soutickets.in/api/',

    LOGIN: 'public/otp/generateOtp/',
    LOGIN_OTP: 'public/otp/verifyOtp/',
    ALL_VENUES: 'public/venues/short-info',
    SLOTS: 'public/venues/',

    BUNDLESERVICES: 'public/bundles/short-info',
    BUNDLESLIST: 'public/bundles',

    ADDTOCART:'public/cart/item/new',
    VIEWCART:'public/cart',
    DELETEITEMCART:'public/cart/item/remove',
    RESERVEBOOKING: 'v2/public/venues/',

    GETBUNDLEINFO: 'public/bundles/',
    CUSTOMERINFO:'v2/public/venue/',
    PROFILE:'public/customer/',
    EDITPROFILE: 'public/customer/edit',
    RETRIEVEBOOKINGS: 'public/customer/mybookings',
    RETRIEVEWALLET: 'public/customer/wallet/balance',
    CONFIRMRECHARGEWALLET: 'public/customer/wallet/',
    CLEANSLOTS: 'v2/public/venue/'
    //TICKETS: 'venues/River-Rafting/slots/29/2019-10-09/availablity'
};


export default ApiConstants;
