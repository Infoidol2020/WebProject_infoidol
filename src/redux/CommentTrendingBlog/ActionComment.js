import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import {GET_TRENDING_BLOGS_COMMENT,GET_TRENDING_BLOGS_COMMENT_SUCCESS,GET_TRENDING_BLOGS_COMMENT_FAILURE} from './TypesComment'

export const getAllComments = () =>{
    return{
        type : GET_TRENDING_BLOGS_COMMENT
    }
}
export const getAllCommentsSuccess = (TrendingBlogsComments) => {
    return{
        type : GET_TRENDING_BLOGS_COMMENT_SUCCESS,
        payload : TrendingBlogsComments
    }
}

export const getAllCommentsFailure =(error) =>{
    return{
        type : GET_TRENDING_BLOGS_COMMENT_FAILURE,
        payload : error
    }
}

export const fetchAllComments = (data, music_id, type) =>{
    // console.log('Action Trending vvv', data, music_id, type, DEVICE_ID, USER_ID)
    return(dispatch) => {
        dispatch(getAllComments());
        // console.log('exccccc')
        axios.post(`${BASE_URL}give_comments`,{
            "device_id": 'SYSTEM',
            "user_id": localStorage.getItem('WebAppUserKey'),
            "data_id": music_id,
            "type": type,
            "comment": data
        }).then( response => {
        const allTrendingComments = response.data;
        // console.log('response of Action Trending Blogs Comment is OK',response.data);
        dispatch(getAllCommentsSuccess(allTrendingComments));
        // console.log('dispatch Trending Blogs Comment Successfull')
    }).catch(error =>{
        const errorMsg = error.message
        dispatch(getAllCommentsFailure(errorMsg))
    })
    }
}