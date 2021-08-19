import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { GET_ALL_CHANGEPASSWORD, GET_ALL_CHANGEPASSWORD_SUCCESS, GET_ALL_CHANGEPASSWORD_FAILURE } from './ChangePasswordTypes'
export const getAllChangePassword = () => {
    return{
        type: GET_ALL_CHANGEPASSWORD
    }
}

export const getAllChangePasswordSuccess = (ChangePassword) => {
    return{
        type: GET_ALL_CHANGEPASSWORD_SUCCESS,
        payload: ChangePassword
    }
}

export const getAllChangePasswordFailure = (error) => {
    return{
        type: GET_ALL_CHANGEPASSWORD_FAILURE,
        payload: error
    }
}

export const fetchChngPswdData = (password, username) => {
    // console.log('executed from change Password actions',username, password)
    return (dispatch) => {
        dispatch(getAllChangePassword);
        axios.post(`${BASE_URL}change_password`,{
            "username": username,
            "password": password
        }).then( response => {
            const allChngPswd = response.data;
            // console.log('response from change password actions', response);
            dispatch(getAllChangePasswordSuccess(allChngPswd));
        }).catch(error => {
            const errorMsg = error.message
            dispatch(getAllChangePasswordFailure(errorMsg))
    })
    }
}