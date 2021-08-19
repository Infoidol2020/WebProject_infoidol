import axios from 'axios';
import { BASE_URL, DEVICE_ID, USER_ID } from '../Constants/ApiConstants';
import {GET_ALL_RECOMMENDED_BLOGS,GET_ALL_RECOMMENDED_BLOGS_SUCCESS,GET_ALL_RECOMMENDED_BLOGS_FAILURE, GET_ALL_RECOMMENDED_BLOGS_RESET} from './TypesRecommendedBlogs'

export const getAllRecmBlogs = () =>{
    return{
        type : GET_ALL_RECOMMENDED_BLOGS
    }
}
export const getAllRecmBlogsSuccess = (RecommendedBlogs) => {
    return{
        type : GET_ALL_RECOMMENDED_BLOGS_SUCCESS,
        payload : RecommendedBlogs
    }
}

export const getAllRecmBlogsFailure =(error) =>{
    return{
        type : GET_ALL_RECOMMENDED_BLOGS_FAILURE,
        payload : error
    }
}

export const getAllRecmBlogsreset = (RecommendedBlogs) => {
    return{
        type: GET_ALL_RECOMMENDED_BLOGS_RESET
    }
}

export const fetchAllRecmBlogs = (blog_id) =>{
    // console.log('Action Recom Blogs  is OK',blog_id)
    return(dispatch) => {
        dispatch(getAllRecmBlogs);
        axios.post(`${BASE_URL}blog_detail_page`,{
            "device_id":DEVICE_ID,
            "user_id":USER_ID,
            "blog_id":blog_id
    }).then( response => {
        const allRecBlog = response.data.data;
        // console.log('response of Action Recm Blogs is OK',response);
        dispatch(getAllRecmBlogsSuccess(allRecBlog));
        // dispatch(getAllRecmBlogsreset(allRecBlog))
        // console.log('dispatch Successfull')
    }).catch(error =>{
        const errorMsg = error.message
        dispatch(getAllRecmBlogsFailure(errorMsg))
    })
    }
}