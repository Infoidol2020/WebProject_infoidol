import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { UPLOAD_COVER_PIC, UPLOAD_COVER_PIC_SUCCESS, UPLOAD_COVER_PIC_FAILURE, UPLOAD_COVER_PIC_RESET } from './UploadCoverPicTypes'
export const uploadCoverPic = () => {
    return{
        type: UPLOAD_COVER_PIC
    }
}

export const uploadCoverPicSuccess = (coverPicData) => {
    return{
        type: UPLOAD_COVER_PIC_SUCCESS,
        payload: coverPicData
    }
}
export const uploadCoverPicFailure = (error) => {
    return{
        type: UPLOAD_COVER_PIC_FAILURE,
        payload: error
    }
}

export const uploadCoverPicReset = () => {
    return{
        type: UPLOAD_COVER_PIC_RESET
    }
}

export const hituploadCoverPicAPI = (coverPic) => {
    // console.log('executed from upload cover pic action', coverPic)
    return (dispatch) => {
        dispatch(uploadCoverPic())
        var formData = new FormData();
        formData.append('picture_file', coverPic);
        formData.append('device_id',  DEVICE_ID);
        formData.append('user_id',  USER_ID);
        axios.post(`${BASE_URL}upload_cover_pic`,formData).then( response => {
        //   console.log('response from upload cover pic action', response.data)
            const coverPicResponse = response.data
            dispatch(uploadCoverPicSuccess(coverPicResponse))
            setTimeout(function(){
                dispatch(uploadCoverPicReset())
           }, 2000);
      }).catch(error => {
          const errorMsg = error.message
          dispatch(uploadCoverPicFailure(errorMsg))
      })
    }
}
