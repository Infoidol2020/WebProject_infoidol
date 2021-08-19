import axios from 'axios';
import { BASE_URL, DEVICE_ID, USER_ID } from '../Constants/ApiConstants';
import { GET_ALL_VIDEOCATLIST, GET_ALL_VIDEOCATLIST_SUCCESS, GET_ALL_VIDEOCATLIST_FAILURE } from './VideoCategoryListType'
export const getAllVideoCatList = () => {
    return{
        type: GET_ALL_VIDEOCATLIST
    }
}

export const getAllVideoCatListSuccess = (VideoCatList) => {
    return{
        type: GET_ALL_VIDEOCATLIST_SUCCESS,
        payload: VideoCatList
    }
}

export const getAllVideoCatListFailure = (error) => {
    return{
        type: GET_ALL_VIDEOCATLIST_FAILURE,
        payload: error
    }
}

export const fetchAllVideoCatList = (cat_id) => {
    // console.log('executed from video catlist actions',cat_id )
    return (dispatch) => {
        dispatch(getAllVideoCatList());
        // console.log('inside return');
        axios.post(`${BASE_URL}video_list_by_category`,{
            "device_id":DEVICE_ID,
            "user_id":USER_ID,
            "cat_id":cat_id
        }).then( response => {
            const allVideoCatList = response.data.data;
            // console.log('response from Video cat list page1111', response);
            dispatch(getAllVideoCatListSuccess(allVideoCatList));
        }).catch(error => {
            const errorMsg = error.message
            dispatch(getAllVideoCatListFailure(errorMsg))
        })
    }
}