import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { UPDATE_PROFILE, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_RESET } from './UpdateProfileTypes'
export const UpdateProfile = () => {
    return{
        type: UPDATE_PROFILE
    }
}

export const UpdateProfileSuccess = (user) => {
    return{
        type: UPDATE_PROFILE_SUCCESS,
        payload: user
    }
}
export const UpdateProfileFailure = (error) => {
    return{
        type: UPDATE_PROFILE_FAILURE,
        payload: error
    }
}

export const UpdateProfileReset = () => {
    return{
        type: UPDATE_PROFILE_RESET
    }
}

export const hitUpdateProfileApi = (fields) => {
    // console.log('inside update profile action', fields)
    return (dispatch) => {
        dispatch(UpdateProfile)
        var formData = new FormData();
        formData.append('image', fields.profileImage);
        formData.append('device_id', DEVICE_ID);
        formData.append('user_id',  USER_ID);
        formData.append('name', fields.profileName);
        formData.append('bio', fields.profileBio);
        formData.append('dob', fields.profileDOB );
        formData.append('gender', fields.profileGender );
            axios.post(`${BASE_URL}update_profile`, formData).then( response => {
                // console.log('response from update profile api', response)
                  const userInfo = response.data
                  dispatch(UpdateProfileSuccess(userInfo))
                  setTimeout(function(){
                    dispatch(UpdateProfileReset())
               }, 3000);
            }).catch(error => {
                    const errorMsg = error.message
                    dispatch(UpdateProfileFailure(errorMsg))
            })
        }
    }

        