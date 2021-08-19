import axios from 'axios';
import { GET_ALL_AUDIOS, GET_ALL_AUDIOS_SUCCESS, GET_ALL_AUDIOS_FAILURE } from './AudioPageTypes'
import { BASE_URL, USER_ID, DEVICE_ID} from '../Constants/ApiConstants'
export const getAllAudios = () => {
    return{
        type: GET_ALL_AUDIOS
    }
}

export const getAllAudiosSuccess = (Audios) => {
    return{
        type: GET_ALL_AUDIOS_SUCCESS,
        payload: Audios
    }
}

export const getAllAudiosFailure = (error) => {
    return{
        type: GET_ALL_AUDIOS_FAILURE,
        payload: error
    }
}

export const fetchAllAudios = () => {
    // console.log('audio action Page')
    return (dispatch) => {
        dispatch(getAllAudios)
        axios.post(`${BASE_URL}webmusic_list`,{
          "device_id": DEVICE_ID,
          "user_id": USER_ID,
      }).then( response => {
          const allAudios = response.data.data
          dispatch(getAllAudiosSuccess(allAudios))
      }).catch(error => {
          const errorMsg = error.message
          dispatch(getAllAudiosFailure(errorMsg))
      })
    }
}