import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { SUBSCRIPTION_LIST, SUBSCRIPTION_LIST_SUCCESS, SUBSCRIPTION_LIST_FAILURE, SUBSCRIPTION_LIST_RESET } from './SubscriptionListTypes'

export const SubscriptionList = () => {
    return{
        type: SUBSCRIPTION_LIST
    }
}

export const SubscriptionListSuccess = (SubscriptionListData) => {
    return{
        type: SUBSCRIPTION_LIST_SUCCESS,
        payload: SubscriptionListData
    }
}
export const SubscriptionListFailure = (error) => {
    return{
        type: SUBSCRIPTION_LIST_FAILURE,
        payload: error
    }
}

export const SubscriptionListReset = () => {
    return{
        type: SUBSCRIPTION_LIST_RESET
    }
}



export const hitSubscriptionListAPI = () => {
    // console.log('executed from SubscriptionList action', DEVICE_ID, USER_ID, appId, customerName, customerEmail, customerPhone, orderAmount, orderCurrency, returnUrl, notifyUrl, orderId)
    return (dispatch) => {
        dispatch(SubscriptionList())
            // axios.post(`${BASE_URL}generate_token_for_android_sdk`,{
            axios.post(`https://dev.infoidol.com/admin/WebApi/subscription_list`,{
            "device_id": DEVICE_ID,
            "user_id": USER_ID,
        }).then( response => {
        // console.log('response from SubscriptionList action', response.data)
            const SubscriptionListResponse = response.data
            dispatch(SubscriptionListSuccess(SubscriptionListResponse))
        //     setTimeout(function(){
        //         dispatch(SubscriptionListReset())
        //    }, 1000);
    }).catch(error => {
        const errorMsg = error.message
        dispatch(SubscriptionListFailure(errorMsg))
    })
    }
}

