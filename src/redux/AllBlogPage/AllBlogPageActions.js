import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { ALL_BLOG_PAGE, ALL_BLOG_PAGE_SUCCESS, ALL_BLOG_PAGE_FAILURE, ALL_BLOG_PAGE_RESET } from './AllBlogPageTypes'

export const AllBlogPage = () => {
    return{
        type: ALL_BLOG_PAGE
    }
}

export const AllBlogPageSuccess = (AllBlogPageData) => {
    return{
        type: ALL_BLOG_PAGE_SUCCESS,
        payload: AllBlogPageData
    }
}
export const AllBlogPageFailure = (error) => {
    return{
        type: ALL_BLOG_PAGE_FAILURE,
        payload: error
    }
}

export const AllBlogPageReset = () => {
    return{
        type: ALL_BLOG_PAGE_RESET
    }
}



export const hitAllBlogPageAPI = (offset, type) => {
    // console.log('executed from AllBlogPage action', DEVICE_ID, USER_ID, offset, type)
    return (dispatch) => {
        dispatch(AllBlogPage())
            axios.post(`${BASE_URL}view_all_blog_page`,{
            "device_id": DEVICE_ID,
            "user_id": USER_ID,
            "offset": offset, 
            "type": type
        }).then( response => {
        // console.log('response from AllBlogPage action', response.data)
            const AllBlogPageResponse = response.data
            dispatch(AllBlogPageSuccess(AllBlogPageResponse))
        //     setTimeout(function(){
        //         dispatch(AllBlogPageReset())
        //    }, 1000);
    }).catch(error => {
        const errorMsg = error.message
        dispatch(AllBlogPageFailure(errorMsg))
    })
    }
}

