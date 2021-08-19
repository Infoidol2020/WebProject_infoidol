import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../../Constants/ApiConstants'
import { UPLOAD_IMAGE, UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_FAILURE } from './UploadImageTypes'
export const uploadImage = () => {
    return{
        type: UPLOAD_IMAGE
    }
}

export const uploadImageSuccess = (Image) => {
    return{
        type: UPLOAD_IMAGE_SUCCESS,
        payload: Image
    }
}
export const uploadImageFailure = (error) => {
    return{
        type: UPLOAD_IMAGE_FAILURE,
        payload: error
    }
}

export const uploadImageAPI = (fields) => {
    // console.log('executed from upload Image actions')
    return (dispatch) => {
        dispatch(uploadImage())
        var formData = new FormData();
        formData.append('picture_file', fields.imagefile);
        formData.append('device_id',  DEVICE_ID);
        formData.append('user_id',  localStorage.getItem('WebAppUserKey'));
        formData.append('cat_id', fields.category);
        formData.append('title', fields.title);
        formData.append('caption', fields.description );
        axios.post(`${BASE_URL}upload_picture`,formData).then( response => {
            // console.log('response from Image upload action', response.data)
            const ImageUploaded = response.data
            dispatch(uploadImageSuccess(ImageUploaded))
      }).catch(error => {
          const errorMsg = error.message
          dispatch(uploadImageFailure(errorMsg))
      })
    }
}
