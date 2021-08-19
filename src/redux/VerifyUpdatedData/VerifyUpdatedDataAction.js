import axios from 'axios';
import { BASE_URL, DEVICE_ID, USER_ID } from '../Constants/ApiConstants';
import { VERIFY_UPDATED_DATA, VERIFY_UPDATED_DATA_SUCCESS, VERIFY_UPDATED_DATA_FAILURE } from './VerifyUpdatedDataType'
export const getVerifiedUpdatedDataOTP = () => {
    return{
        type: VERIFY_UPDATED_DATA
    }
}

export const getVerifiedUpdatedDataOTPSuccess = (Mob_Email_OTP) => {
    return{
        type: VERIFY_UPDATED_DATA_SUCCESS,
        payload: Mob_Email_OTP
    }
}

export const getVerifiedUpdatedDataOTPFailure = (error) => {
    return{
        type: VERIFY_UPDATED_DATA_FAILURE,
        payload: error 
    }
}

export const fetchVerifiedUpdatedOTP = (usersUpdatedDataOTP,type,Otp) => {
    // console.log('updated OTP mob & email Actions',usersUpdatedDataOTP,type,Otp)
    var userData;
    if(type == '2'){
        userData = `91${usersUpdatedDataOTP}`
    }
    if(type == '1'){
        userData = usersUpdatedDataOTP
    }
    return (dispatch) => {
        // console.log('Dispatch ok from Otp Section')
        dispatch(getVerifiedUpdatedDataOTP())
        axios.post(`${BASE_URL}verify_updated_data`,{
            "device_id": DEVICE_ID,
            "user_id": USER_ID,
            "data": userData,
            "type": type,
            "otp": Otp

    }).then( response => {
        // console.log('response of VERIFIED_OTP_UPDATED_DATA is ok',response.data)
        const updateVerifiedDataOTP = response.data
        dispatch(getVerifiedUpdatedDataOTPSuccess(updateVerifiedDataOTP))
        // console.log('dispatch mob email OTP Successfull')
    }).catch(error => {
        const errorMsg = error.message
        dispatch(getVerifiedUpdatedDataOTPFailure(errorMsg))
    })
    }
}