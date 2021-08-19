import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../../Constants/ApiConstants'
import { GET_NEW_USERS, GET_NEW_USERS_SUCCESS, GET_NEW_USERS_FAILURE } from './NewUserTypes'
export const getNewUsers = () => {
    return{
        type: GET_NEW_USERS
    }
}

export const getNewUsersSuccess = (users) => {
    return{
        type: GET_NEW_USERS_SUCCESS,
        payload: users
    }
}
export const getNewUsersFailure = (error) => {
    return{
        type: GET_NEW_USERS_FAILURE,
        payload: error
    }
}

export const fetchNewUsers = () => {
    // console.log('executed from new user action')
    return (dispatch) => {
        dispatch(getNewUsers)
        axios.post(`${BASE_URL}new_user`,{}).then( response => {
        //   console.log('responseeeeeeeeeeeeeee', response)
            const newUsers = response.data.date
            dispatch(getNewUsersSuccess(newUsers))
      }).catch(error => {
          const errorMsg = error.message
          dispatch(getNewUsersFailure(errorMsg))
      })
    }
}
