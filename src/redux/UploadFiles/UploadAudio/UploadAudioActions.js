import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID, LATITUDE, LONGITUDE } from '../../Constants/ApiConstants'
import { UPLOAD_AUDIO, UPLOAD_AUDIO_SUCCESS, UPLOAD_AUDIO_FAILURE } from './UploadAudioTypes'
export const uploadAudio = () => {
    return{
        type: UPLOAD_AUDIO
    }
}

export const uploadAudioSuccess = (audio) => {
    return{
        type: UPLOAD_AUDIO_SUCCESS,
        payload: audio
    }
}
export const uploadAudioFailure = (error) => {
    return{
        type: UPLOAD_AUDIO_FAILURE,
        payload: error
    }
}

export const uploadAudioAPI = (fields) => {
    // console.log('executed from upload audio actions')
    return (dispatch) => {
        dispatch(uploadAudio())
        var formData = new FormData();
        formData.append('music_file', fields.audiofile);
        formData.append('device_id',  DEVICE_ID);
        formData.append('user_id',  localStorage.getItem('WebAppUserKey'));
        formData.append('cat_id', fields.category);
        formData.append('title', fields.title);
        formData.append('longitude', LONGITUDE);
        formData.append('latitude', LATITUDE);
        formData.append('caption', fields.description );
        formData.append('thumbnail', fields.thumbnail );
        axios.post(`${BASE_URL}upload_music`,formData).then( response => {
            // console.log('response from audio upload action', response.data)
            const audioUploaded = response.data
            dispatch(uploadAudioSuccess(audioUploaded))
      }).catch(error => {
          const errorMsg = error.message
          dispatch(uploadAudioFailure(errorMsg))
      })
    }
}
