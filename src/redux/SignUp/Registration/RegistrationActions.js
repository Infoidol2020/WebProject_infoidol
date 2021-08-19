import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../../Constants/ApiConstants'
import { SET_NEW_USERS, SET_NEW_USERS_SUCCESS, SET_NEW_USERS_FAILURE } from './RegistrationTypes'
export const setNewUsers = () => {
    return{
        type: SET_NEW_USERS
    }
}

export const setNewUsersSuccess = (users) => {
    return{
        type: SET_NEW_USERS_SUCCESS,
        payload: users
    }
}
export const setNewUsersFailure = (error) => {
    return{
        type: SET_NEW_USERS_FAILURE,
        payload: error
    }
}

export const newUserRegistration = (userData) => {
    // console.log('executed from new user action', userData)
    return (dispatch) => {
        dispatch(setNewUsers)
    //     axios.post('https://infoidol.com/admin/WebApi/new_user',{}).then( response => {
    //       console.log('response from signup', response)
    //         const newUsers = response.data.data
    //         dispatch(setNewUsersSuccess(newUsers))
    //   }).catch(error => {
    //       const errorMsg = error.message
    //       dispatch(setNewUsersFailure(errorMsg))
    //   })

    axios.post(`${BASE_URL}signup`,{
            "name":userData.name,
            "device_id": 'SYSTEM',
            "email":userData.email,
            "mobile":`91${userData.mobile}`,
            "dob":userData.dob,
            "password":userData.password,
            "reffreral_by" : userData.reffreral_by,
            "user_name": userData.user_name,
            "gender": userData.Gender

    }).then( response => {
        // console.log('responseeeeeeeeeeeeeee', response)
        const newUsers = response.data
        dispatch(setNewUsersSuccess(newUsers))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(setNewUsersFailure(errorMsg))
        })

    }
}
