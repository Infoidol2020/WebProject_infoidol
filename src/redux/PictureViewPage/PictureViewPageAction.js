import axios from 'axios';
import { BASE_URL, DEVICE_ID, USER_ID } from '../Constants/ApiConstants';
import { GET_ALL_PICTUREVIEW, GET_ALL_PICTUREVIEW_SUCCESS, GET_ALL_PICTUREVIEW_FAILURE } from './PictureViewTypes'
export const getAllPictureView = () => {
    return{
        type: GET_ALL_PICTUREVIEW
    }
}

export const getAllPictureViewSuccess = (PictureView) => {
    return{
        type: GET_ALL_PICTUREVIEW_SUCCESS,
        payload: PictureView
    }
}

export const getAllPictureViewFailure = (error) => {
    return{
        type: GET_ALL_PICTUREVIEW_FAILURE,
        payload: error
    }
}

export const fetchAllPictureView = (image_id) => {
    // console.log('executed from Picture detail actions',image_id)
    return (dispatch) => {
        dispatch(getAllPictureView);
        axios.post(`${BASE_URL}picture_detail_page`,{
            "device_id":DEVICE_ID,
            "user_id":USER_ID,
            "picture_id":image_id
        }).then( response => {
            const allPictureView = response.data.data;
            // console.log('response from Picture View page', response.data.data);
            allPictureView && dispatch(getAllPictureViewSuccess(allPictureView));
        }).catch(error => {
            const errorMsg = error.message
            dispatch(getAllPictureViewFailure(errorMsg))
        })
    }
}