import * as types from '../actions/types';

const initialState = {
    isLoggedIn: false,

    updatedArray: []
};

const updatemybookingReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.MYBOOKING_REQUEST:
            
            return {
                ...state,
                updatedArray: [...state.updatedArray, action]
            }
        case types.MYBOOKING_RESPONSE:
            // let array = [...state.updatedArray]
            // array.splice(action.position, 1)
            // console.log('cominghere rnot', action.position)
            let array = action.response
            array.map((item,i) => {
                if(item.bid === action.id){
                    item.bstatus = 'CANCELLED'
                }
            })
            console.log('action',array)
            return {
                ...state,
                updatedArray: array
                
            }
        case types.MYBOOKING_FAILED:
            let emptyarray = []
            return {
                ...state,
                updatedArray: emptyarray
                
            }

        default:
            return state;
    }
}
export default updatemybookingReducer;