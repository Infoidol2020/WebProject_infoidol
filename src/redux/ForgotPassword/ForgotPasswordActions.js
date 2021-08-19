import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { FORGOT_PASSWORD, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE } from './ForgotPasswordTypes'
export const ForgotPassword = () => {
    return{
        type: FORGOT_PASSWORD
    }
}

export const ForgotPasswordSuccess = (user) => {
    return{
        type: FORGOT_PASSWORD_SUCCESS,
        payload: user
    }
}
export const ForgotPasswordFailure = (error) => {
    return{
        type: FORGOT_PASSWORD_FAILURE,
        payload: error
    }
}

export const hitForgotPasswordApi = (username) => {
    // console.log('inside forgot password action', username)
    return (dispatch) => {
        dispatch(ForgotPassword)
            axios.post(`${BASE_URL}forget_password`,{
                "username": username
            }).then( response => {
                // console.log('response from like api', response)
                  const userInfo = response.data
                  dispatch(ForgotPasswordSuccess(userInfo))
            }).catch(error => {
                    const errorMsg = error.message
                    dispatch(ForgotPasswordFailure(errorMsg))
            })
        }
    }

        