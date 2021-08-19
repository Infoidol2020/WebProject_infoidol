import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants';
import { EDIT_PICTURE, EDIT_PICTURE_SUCCESS, EDIT_PICTURE_FAILURE, EDIT_PICTURE_RESET} from './EditPictureType'

export const editPicture = () => {
    // console.log('from editPicture actionnnnn')
    return{
        type: EDIT_PICTURE
    }
}

export const editPictureSuccess = (editPicturePayloadSuccess) => {
    // console.log('from editPicture action suxxxx')
    return{
        type: EDIT_PICTURE_SUCCESS,
        payload: editPicturePayloadSuccess
    }
}
export const editPictureReset = () => {
    // console.log('from editPicture action reset')
    return{
        type: EDIT_PICTURE_RESET,
    }
}
export const editPictureFailure = (error) => {
    // console.log('from editPicture action errrrrrrr')
    return{
        type: EDIT_PICTURE_FAILURE,
        payload: error
    }
}

export const hiteditPictureAPI = (file, cat_id, title , caption, picture_id) => {
    // console.log('executed from editPicture action---',file, cat_id, title , caption, video_id)
    // console.log('file', file);
    // console.log('cat_id', cat_id);
    // console.log('title', title);
    // console.log('caption', caption);
    // console.log('picture_id', picture_id)

    return (dispatch) => {
        dispatch(editPicture)
        var formData = new FormData();
        formData.append('picture_file', file);
        formData.append('device_id', 'SYSTEM');
        formData.append('user_id',  localStorage.getItem('WebAppUserKey'));
        formData.append('cat_id', cat_id);
        formData.append('title', title);
        formData.append('caption', caption);
        formData.append('picture_id', picture_id);

        // axios.post(`${BASE_URL}edit_PICTURE`,formData).then( response => {
        axios.post(`${BASE_URL}edit_picture`, formData).then( response => {
        // console.log('response from editPicture action', response.data)
            const editPicture_Response = response.data.data
            dispatch(editPictureSuccess(editPicture_Response));
            dispatch(editPictureReset())

      }).catch(error => {
          const errorMsg = error.message
          dispatch(editPictureFailure(errorMsg))
      })
    }
}
