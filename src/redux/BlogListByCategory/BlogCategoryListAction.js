import axios from 'axios';
import { BASE_URL, DEVICE_ID, USER_ID } from '../Constants/ApiConstants';
import { GET_ALL_BLOGCAT_LIST,GET_ALL_BLOGCAT_LIST_SUCCESS,GET_ALL_BLOGCAT_LIST_FAILURE } from './BlogCategoryListType'
export const getAllBlogCatList = () => {
    return{
        type: GET_ALL_BLOGCAT_LIST
    }
}

export const getAllBlogCatListSuccess = (BlogCatList) => {
    return{
        type:GET_ALL_BLOGCAT_LIST_SUCCESS,
        payload: BlogCatList
    }
}

export const getAllBlogCatListFailure = (error) => {
    return{
        type:GET_ALL_BLOGCAT_LIST_FAILURE,
        payload: error
    }
}

export const fetchAllBlogCatList = (cat_id) => {
    // console.log('executed from video catlist actions',cat_id )
    return (dispatch) => {
        dispatch(getAllBlogCatList());
        // console.log('inside return');
        axios.post(`${BASE_URL}blog_list_by_category`,{
            "device_id":DEVICE_ID,
            "user_id":USER_ID,
            "cat_id":cat_id
        }).then( response => {
            const allBlogCatList = response.data.data;
            // console.log('response from Blog cat listzzzz action ', response.data);
            dispatch(getAllBlogCatListSuccess(allBlogCatList));
        }).catch(error => {
            const errorMsg = error.message
            dispatch(getAllBlogCatListFailure(errorMsg))
        })
    }
}