import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { WITHDRAW_REFERRAL_AMOUNT, WITHDRAW_REFERRAL_AMOUNT_SUCCESS, WITHDRAW_REFERRAL_AMOUNT_FAILURE, WITHDRAW_REFERRAL_AMOUNT_RESET } from './WithdrawReferralAmountTypes'

export const WithdrawReferralAmount = () => {
    return{
        type: WITHDRAW_REFERRAL_AMOUNT
    }
}

export const WithdrawReferralAmountSuccess = (WithdrawReferralAmountData) => {
    return{
        type: WITHDRAW_REFERRAL_AMOUNT_SUCCESS,
        payload: WithdrawReferralAmountData
    }
}
export const WithdrawReferralAmountFailure = (error) => {
    return{
        type: WITHDRAW_REFERRAL_AMOUNT_FAILURE,
        payload: error
    }
}

export const WithdrawReferralAmountReset = () => {
    return{
        type: WITHDRAW_REFERRAL_AMOUNT_RESET
    }
}



export const hitWithdrawReferralAmountAPI = (beneId, amount, transferMode) => {
    // console.log('executed from WithdrawReferralAmount action', DEVICE_ID, USER_ID, appId, customerName, customerEmail, customerPhone, orderAmount, orderCurrency, returnUrl, notifyUrl, orderId)
    return (dispatch) => {
        dispatch(WithdrawReferralAmount())
            // axios.post(`${BASE_URL}withdraw`,{
            axios.post(`https://dev.infoidol.com/admin/WebApi/withdraw`,{
            "user_id": USER_ID,
            "beneId": beneId,
            "amount": amount,
            "transferMode": transferMode,


        }).then( response => {
        // console.log('response from WithdrawReferralAmount action', response.data)
            const WithdrawReferralAmountResponse = response.data
            dispatch(WithdrawReferralAmountSuccess(WithdrawReferralAmountResponse))
        //     setTimeout(function(){
        //         dispatch(WithdrawReferralAmountReset())
        //    }, 1000);
    }).catch(error => {
        const errorMsg = error.message
        dispatch(WithdrawReferralAmountFailure(errorMsg))
    })
    }
}

