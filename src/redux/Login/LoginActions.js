import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { NEW_USER_LOGIN, NEW_USER_LOGIN_SUCCESS, NEW_USER_LOGIN_FAILURE, NEW_USER_LOGIN_RESET } from './LoginTypes'
export const newUserLogin = () => {
    return{
        type: NEW_USER_LOGIN
    }
}

export const newUserLoginSuccess = (user) => {
    // console.log('wertyuioll', user)
    return{
        type: NEW_USER_LOGIN_SUCCESS,
        payload: user
    }
}
export const newUserLoginFailure = (error) => {
    return{
        type: NEW_USER_LOGIN_FAILURE,
        payload: error
    }
}

export const newUserLoginReset = () => {
    return{
        type: NEW_USER_LOGIN_RESET,

    }
}

export const userLogin = (userData) => {
    // console.log('executed from new user action', userData)
    return (dispatch) => {
        dispatch(newUserLogin())

      axios.post(`${BASE_URL}login`,{
             "password": userData.password,
             "username": userData.username,    
             "push_id":"",
             "device_id": DEVICE_ID

       }).then( response => {
        // console.log('response from new user action', response.data)
          const newUsers = response.data
          dispatch(newUserLoginSuccess(newUsers))
    //       setTimeout(function(){
    //       dispatch(newUserLoginReset())
    //    }, 1000);
        }).catch(error => {
            const errorMsg = error.message
            dispatch(newUserLoginFailure(errorMsg))
        })

    }
}
