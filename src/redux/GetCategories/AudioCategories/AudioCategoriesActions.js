import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../../Constants/ApiConstants'
import { GET_ALL_AUDIO_CATEGORIES, GET_ALL_AUDIO_CATEGORIES_SUCCESS, GET_ALL_AUDIO_CATEGORIES_FAILURE } from './AudioCategoriesTypes'
export const getAllAudioCategories = () => {
    return{
        type: GET_ALL_AUDIO_CATEGORIES
    }
}

export const getAllAudioCategoriesSuccess = (AudioCategories) => {
    return{
        type: GET_ALL_AUDIO_CATEGORIES_SUCCESS,
        payload: AudioCategories
    }
}
export const getAllAudioCategoriesFailure = (error) => {
    return{
        type: GET_ALL_AUDIO_CATEGORIES_FAILURE,
        payload: error
    }
}

export const fetchAllAudioCategories = () => {
    // console.log('executed from Audio categories actions')
    return (dispatch) => {
        dispatch(getAllAudioCategories())
        axios.post(`${BASE_URL}music_page`,{
          "device_id": DEVICE_ID,
          "user_id": USER_ID,
      }).then( response => {
            // console.log('response from Audio categories action', response.data.data)
            const allAudioCategories = response.data.data
            dispatch(getAllAudioCategoriesSuccess(allAudioCategories))
      }).catch(error => {
          const errorMsg = error.message
          dispatch(getAllAudioCategoriesFailure(errorMsg))
      })
    }
}
