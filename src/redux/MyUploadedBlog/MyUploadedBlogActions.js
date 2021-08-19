import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { UPLOADED_BLOG, UPLOADED_BLOG_SUCCESS, UPLOADED_BLOG_FAILURE, UPLOADED_BLOG_RESET } from './MyUploadedBlogTypes'

export const MyUploadedBlog = () => {
    return{
        type: UPLOADED_BLOG
    }
}

export const MyUploadedBlogSuccess = (MyUploadedBlogData) => {
    return{
        type: UPLOADED_BLOG_SUCCESS,
        payload: MyUploadedBlogData
    }
}
export const MyUploadedBlogFailure = (error) => {
    return{
        type: UPLOADED_BLOG_FAILURE,
        payload: error
    }
}

export const MyUploadedBlogReset = () => {
    return{
        type: UPLOADED_BLOG_RESET
    }
}



export const hitMyUploadedBlogAPI = (profile_id, offset) => {
    // console.log('executed from MyUploadedBlog action')
    return (dispatch) => {
        dispatch(MyUploadedBlog())
        // axios.post(`${BASE_URL}view_all_tranding_UPLOADED_BLOG`,{
            axios.post(`https://dev.infoidol.com/admin/WebApi/uploaded_blog`,{
            "user_id": USER_ID,
            "device_id": DEVICE_ID,
            "profile_id": profile_id,
            "offset": offset,
        }).then( response => {
        // console.log('response from MyUploadedBlog action', response.data)
            const MyUploadedBlogResponse = response.data
            dispatch(MyUploadedBlogSuccess(MyUploadedBlogResponse))
        //     setTimeout(function(){
        //         dispatch(MyUploadedBlogReset())
        //    }, 1000);
    }).catch(error => {
        const errorMsg = error.message
        dispatch(MyUploadedBlogFailure(errorMsg))
    })
    }
}

