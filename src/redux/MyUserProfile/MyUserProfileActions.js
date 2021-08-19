import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { MY_USER_PROFILE, MY_USER_PROFILE_SUCCESS, MY_USER_PROFILE_FAILURE, MY_USER_PROFILE_RESET } from './MyUserProfileTypes'
export const myUserProfile = () => {
    return{
        type: MY_USER_PROFILE
    }
}

export const myUserProfileSuccess = (Feeds) => {
    return{
        type: MY_USER_PROFILE_SUCCESS,
        payload: Feeds
    }
}
export const myUserProfileFailure = (error) => {
    return{
        type: MY_USER_PROFILE_FAILURE,
        payload: error
    }
}

export const myUserProfileReset = () => {
    return{
        type: MY_USER_PROFILE_RESET
    }
}

export const hitMyUserProfileAPI = () => {
    // console.log('executed from my user profile action',localStorage.getItem("WebAppUserKey"))
    return (dispatch) => {
        dispatch(myUserProfile())
        axios.post(`${BASE_URL}my_user_profile`,{
          "device_id": DEVICE_ID,
          "user_id": localStorage.getItem("WebAppUserKey"),
      }).then( response => {
        //   console.log('response from my user profile action', response.data.data)
            const myUserProfile = response.data.data
            dispatch(myUserProfileSuccess(myUserProfile))
            setTimeout( () => {
                // console.log('fdgvwrhvccsdaccdsa', response.data.data)
               
               }, 4000);
      }).catch(error => {
          const errorMsg = error.message
          dispatch(myUserProfileFailure(errorMsg))
      })
    }
}
