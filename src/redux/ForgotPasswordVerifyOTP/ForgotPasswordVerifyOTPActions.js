import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { VERIFY_OTP, VERIFY_OTP_SUCCESS, VERIFY_OTP_FAILURE } from './ForgotPasswordVerifyOTPTypes'
export const VerifyOtp = () => {
    return{
        type: VERIFY_OTP
    }
}

export const VerifyOtpSuccess = (user) => {
    return{
        type: VERIFY_OTP_SUCCESS,
        payload: user
    }
}
export const VerifyOtpFailure = (error) => {
    return{
        type: VERIFY_OTP_FAILURE,
        payload: error
    }
}

export const ForgotPasswordVerifyOTPApi = (number, OTP) => {
    // console.log('number, otp', number, OTP);
    return (dispatch) => {
        dispatch(VerifyOtp)
            axios.post(`${BASE_URL}forget_password_verify_otp`,{
                "otp": OTP,
                "username":number
            }).then( response => {
                // console.log('response from forget_password_verify_otp apiii', response)
                const otp_response = response.data
                dispatch(VerifyOtpSuccess(otp_response))
            }).catch(error => {
                    const errorMsg = error.message
                    dispatch(VerifyOtpFailure(errorMsg))
            })
        }


}
