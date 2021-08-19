import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { GET_USER_PROFILE, GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE_FAILURE, GET_USER_PROFILE_RESET } from './UserProfileTypes'
export const getUserProfile = () => {
    return{
        type: GET_USER_PROFILE
    }
}

export const getUserProfileSuccess = (Feeds) => {
    return{
        type: GET_USER_PROFILE_SUCCESS,
        payload: Feeds
    }
}
export const getUserProfileFailure = (error) => {
    return{
        type: GET_USER_PROFILE_FAILURE,
        payload: error
    }
}

export const getUserProfileReset = () => {
    return{
        type: GET_USER_PROFILE_RESET
    }
}

export const fetchUserProfile = (profileId) => {
    // console.log('executed from user profile action ....')
    return (dispatch) => {
        dispatch(getUserProfile)
        axios.post(`${BASE_URL}user_profile`,{
          "device_id": DEVICE_ID,
          "user_id": USER_ID,
          "profile_id": profileId
      }).then( response => {
        //   console.log('response from user profile action', response.data.data)
            const userProfile = response.data.data
            dispatch(getUserProfileSuccess(userProfile))
        //     setTimeout(function(){
        //         dispatch(getUserProfileReset()) 
        //    }, 2000);
      }).catch(error => {
          const errorMsg = error.message
          dispatch(getUserProfileFailure(errorMsg))
      })
    }
}
