import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import {GET_COMMENT_LIST,GET_COMMENT_LIST_SUCCESS,GET_COMMENT_LIST_FAILURE} from './TypesCommentList'

export const getAllCommentsList = () =>{
    return{
        type : GET_COMMENT_LIST
    }
}
export const getAllCommentsListSuccess = (BlogsCommentsList) => {
    return{
        type : GET_COMMENT_LIST_SUCCESS,
        payload : BlogsCommentsList
    }
}

export const getAllCommentsListFailure =(error) =>{
    return{
        type : GET_COMMENT_LIST_FAILURE,
        payload : error
    }
}

export const fetchCommentList = (data_id, type) =>{

    return(dispatch) => {
        dispatch(getAllCommentsList());
        axios.post(`${BASE_URL}comment_list`,{
            "device_id": DEVICE_ID,
            "user_id": USER_ID,
            "data_id":data_id,
            "type": type
        }).then( response => {
        const allTrendingComments = response.data.data;
        // console.log('response from comment list',response);
        dispatch(getAllCommentsListSuccess(allTrendingComments));
        // console.log('dispatch of Blogs Comment list Successfull')
    }).catch(error =>{
        const errorMsg = error.message
        dispatch(getAllCommentsListFailure(errorMsg))
    })
    }
}