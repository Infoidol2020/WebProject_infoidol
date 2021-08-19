import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants';
import { EDIT_AUDIO, EDIT_AUDIO_SUCCESS, EDIT_AUDIO_FAILURE, EDIT_AUDIO_RESET} from './EditAudioType'

export const editAudio = () => {
    // console.log('from editAudio actionnnnn')
    return{
        type: EDIT_AUDIO
    }
}

export const editAudioSuccess = (editAudioPayloadSuccess) => {
    // console.log('from editAudio action suxxxx')
    return{
        type: EDIT_AUDIO_SUCCESS,
        payload: editAudioPayloadSuccess
    }
}
export const editAudioReset = () => {
    // console.log('from editAudio action reset')
    return{
        type: EDIT_AUDIO_RESET,
    }
}
export const editAudioFailure = (error) => {
    // console.log('from editAudio action errrrrrrr')
    return{
        type: EDIT_AUDIO_FAILURE,
        payload: error
    }
}

export const hiteditAudioAPI = (file, cat_id, title , caption, thumbnail, music_id) => {
    // console.log('executed from editAudio action---',file, cat_id, title , caption, thumbnail, music_id)
    // console.log('file', file);
    // console.log('cat_id', cat_id);
    // console.log('title', title);
    // console.log('caption', caption);
    // console.log('thumbnail', thumbnail);
    // console.log('video_id', music_id)
    return (dispatch) => {
        dispatch(editAudio)
        var formData = new FormData();
        formData.append('video_file', file);
        formData.append('device_id', 'SYSTEM');
        formData.append('user_id',  localStorage.getItem('WebAppUserKey'));
        formData.append('cat_id', cat_id);
        formData.append('title', title);
        formData.append('caption', caption);
        formData.append('thumbnail', thumbnail);
        formData.append('music_id', music_id);

        // axios.post(`${BASE_URL}edit_EDIT_AUDIO`,formData).then( response => {
        axios.post(`${BASE_URL}edit_music`, formData).then( response => {
        // console.log('response from editAudio action', response.data)
            const editAudio_Response = response.data.data
            dispatch(editAudioSuccess(editAudio_Response));
            dispatch(editAudioReset())

      }).catch(error => {
          const errorMsg = error.message
          dispatch(editAudioFailure(errorMsg))
      })
    }
}
