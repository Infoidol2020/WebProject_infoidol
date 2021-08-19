import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants';
import { EDIT_VIDEO, EDIT_VIDEO_SUCCESS, EDIT_VIDEO_FAILURE, EDIT_VIDEO_RESET} from './EditVideoType'

export const editVideo = () => {
    // console.log('from editVideo actionnnnn')
    return{
        type: EDIT_VIDEO
    }
}

export const editVideoSuccess = (editVideoPayloadSuccess) => {
    // console.log('from editVideo action suxxxx')
    return{
        type: EDIT_VIDEO_SUCCESS,
        payload: editVideoPayloadSuccess
    }
}
export const editVideoReset = () => {
    // console.log('from editVideo action reset')
    return{
        type: EDIT_VIDEO_RESET,
    }
}
export const editVideoFailure = (error) => {
    // console.log('from editVideo action errrrrrrr')
    return{
        type: EDIT_VIDEO_FAILURE,
        payload: error
    }
}

export const hiteditVideoAPI = (file, cat_id, title , caption, thumbnail, video_id) => {
    // console.log('executed from editVideo action---',file, cat_id, title , caption, thumbnail, video_id)
    // console.log('file', file);
    // console.log('cat_id', cat_id);
    // console.log('title', title);
    // console.log('caption', caption);
    // console.log('thumbnail', thumbnail);
    // console.log('video_id', video_id)

    return (dispatch) => {
        dispatch(editVideo)
        var formData = new FormData();
        formData.append('video_file', file);
        formData.append('device_id', 'SYSTEM');
        formData.append('user_id',  localStorage.getItem('WebAppUserKey'));
        formData.append('cat_id', cat_id);
        formData.append('title', title);
        formData.append('caption', caption);
        formData.append('thumbnail', thumbnail);
        formData.append('video_id', video_id);

        // axios.post(`${BASE_URL}edit_video`,formData).then( response => {
        axios.post(`${BASE_URL}edit_video`, formData).then( response => {
        // console.log('response from editVideo action', response.data)
            const editVideo_Response = response.data.data
            dispatch(editVideoSuccess(editVideo_Response));
            dispatch(editVideoReset())

      }).catch(error => {
          const errorMsg = error.message
          dispatch(editVideoFailure(errorMsg))
      })
    }
}
