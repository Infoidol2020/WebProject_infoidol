import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { UPLOADED_PICTURES, UPLOADED_PICTURES_SUCCESS, UPLOADED_PICTURES_FAILURE, UPLOADED_PICTURES_RESET } from './MyUploadedPicturesTypes'

export const MyUploadedPicture = () => {
    return{
        type: UPLOADED_PICTURES
    }
}

export const MyUploadedPictureSuccess = (MyUploadedPictureData) => {
    return{
        type: UPLOADED_PICTURES_SUCCESS,
        payload: MyUploadedPictureData
    }
}
export const MyUploadedPictureFailure = (error) => {
    return{
        type: UPLOADED_PICTURES_FAILURE,
        payload: error
    }
}

export const MyUploadedPictureReset = () => {
    return{
        type: UPLOADED_PICTURES_RESET
    }
}



export const hitMyUploadedPictureAPI = (profile_id, offset) => {
    // console.log('executed from MyUploadedPicture action')
    return (dispatch) => {
        dispatch(MyUploadedPicture())
        // axios.post(`${BASE_URL}view_all_tranding_UPLOADED_PICTURES`,{
            axios.post(`https://dev.infoidol.com/admin/WebApi/uploaded_picture`,{
            "user_id": USER_ID,
            "device_id": DEVICE_ID,
            "profile_id": profile_id,
            "offset": offset,
        }).then( response => {
        // console.log('response from MyUploadedPicture action', response.data)
            const MyUploadedPictureResponse = response.data
            dispatch(MyUploadedPictureSuccess(MyUploadedPictureResponse))
        //     setTimeout(function(){
        //         dispatch(MyUploadedPictureReset())
        //    }, 1000);
    }).catch(error => {
        const errorMsg = error.message
        dispatch(MyUploadedPictureFailure(errorMsg))
    })
    }
}

