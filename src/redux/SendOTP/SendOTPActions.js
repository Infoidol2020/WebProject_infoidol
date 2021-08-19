import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { SEND_OTP, SEND_OTP_SUCCESS, SEND_OTP_FAILURE } from './SendOTPTypes'
export const SendOtp = () => {
    return{
        type: SEND_OTP
    }
}

export const SendOtpSuccess = (user) => {
    return{
        type: SEND_OTP_SUCCESS,
        payload: user
    }
}
export const SendOtpFailure = (error) => {
    return{
        type: SEND_OTP_FAILURE,
        payload: error
    }
}

export const resendOTPApi = (number) => {
// console.log('number', number)
    return (dispatch) => {
        dispatch(SendOtp)
            axios.post(`${BASE_URL}resend_otp`,{
                "mobile": number
            }).then( response => {
                // console.log('response from resend otp api', response)
                const otp_response = response.data.data
                dispatch(SendOtpSuccess(otp_response))
            }).catch(error => {
                    const errorMsg = error.message
                    dispatch(SendOtpFailure(errorMsg))
            })
        }

     
}
