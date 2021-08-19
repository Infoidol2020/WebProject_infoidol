import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID, LATITUDE, LONGITUDE } from '../../Constants/ApiConstants'
import { UPLOAD_VIDEO, UPLOAD_VIDEO_SUCCESS, UPLOAD_VIDEO_FAILURE } from './UploadVideoTypes'
export const uploadVideo = () => {
    return{
        type: UPLOAD_VIDEO
    }
}

export const uploadVideoSuccess = (audio) => {
    return{
        type: UPLOAD_VIDEO_SUCCESS,
        payload: audio
    }
}
export const uploadVideoFailure = (error) => {
    return{
        type: UPLOAD_VIDEO_FAILURE,
        payload: error
    }
}

export const uploadVideoAPI = (fields) => {
    // console.log('executed from video categories actions')
    return (dispatch) => {
        dispatch(uploadVideo())
        var formData = new FormData();
        formData.append('video_file', fields.videofile);
        formData.append('device_id', DEVICE_ID);
        formData.append('user_id', localStorage.getItem('WebAppUserKey'));
        formData.append('cat_id', fields.category);
        formData.append('title', fields.title);
        formData.append('longitude', LATITUDE);
        formData.append('latitude', LONGITUDE);
        formData.append('caption', fields.description );
        formData.append('thumbnail', fields.thumbnail );
        axios.post(`${BASE_URL}upload_video`,formData).then( response => {
            // console.log('response from video upload action', response.data)
            const videoUploaded = response.data
            dispatch(uploadVideoSuccess(videoUploaded))
    }).catch(error => {
    const errorMsg = error.message
        dispatch(uploadVideoFailure(errorMsg))
    })
    }
}
