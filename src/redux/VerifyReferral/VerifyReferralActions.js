import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { VERIFY_REFERRAL, VERIFY_REFERRAL_SUCCESS, VERIFY_REFERRAL_FAILURE, VERIFY_REFERRAL_RESET } from './VerifyReferralTypes'

export const VerifyReferral = () => {
    return{
        type: VERIFY_REFERRAL
    }
}

export const VerifyReferralSuccess = (VerifyReferralData) => {
    return{
        type: VERIFY_REFERRAL_SUCCESS,
        payload: VerifyReferralData
    }
}
export const VerifyReferralFailure = (error) => {
    return{
        type: VERIFY_REFERRAL_FAILURE,
        payload: error
    }
}

export const VerifyReferralReset = () => {
    return{
        type: VERIFY_REFERRAL_RESET
    }
}



export const hitVerifyReferralAPI = (orderId, referralCode, subscriptionId) => {
    return (dispatch) => {
        dispatch(VerifyReferral())
        var formData = new FormData();
        formData.append('orderId', orderId);
        formData.append('refferal_code', referralCode);
        formData.append('subscription_id', subscriptionId);
        formData.append('user_id', USER_ID);

        // axios.post(`${BASE_URL}generate_token_for_android_sdk`,{
            axios.post(`https://infoidol.com/admin/WebApi/verify_refferal`,formData).then( response => {
        // console.log('response from VerifyReferral action', response)
            const VerifyReferralResponse = response.data
            dispatch(VerifyReferralSuccess(VerifyReferralResponse))
            setTimeout(function(){
                dispatch(VerifyReferralReset())
        }, 2000);
    }).catch(error => {
        const errorMsg = error.message
        dispatch(VerifyReferralFailure(errorMsg))
    })
}
}

