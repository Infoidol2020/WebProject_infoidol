import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { BLOG_RECOMMENDED, BLOG_RECOMMENDED_SUCCESS, BLOG_RECOMMENDED_FAILURE, BLOG_RECOMMENDED_RESET } from './BlogRecommendedTypes'

export const BlogRecommended = () => {
    return{
        type: BLOG_RECOMMENDED
    }
}

export const BlogRecommendedSuccess = (BlogRecommendedData) => {
    return{
        type: BLOG_RECOMMENDED_SUCCESS,
        payload: BlogRecommendedData
    }
}
export const BlogRecommendedFailure = (error) => {
    return{
        type: BLOG_RECOMMENDED_FAILURE,
        payload: error
    }
}

export const BlogRecommendedReset = () => {
    return{
        type: BLOG_RECOMMENDED_RESET
    }
}



export const hitBlogRecommendedAPI = (offset, artist_id) => {
    // console.log('executed from BlogRecommended action', offset, artist_id)
    return (dispatch) => {
        dispatch(BlogRecommended())
            axios.post(`${BASE_URL}recommended_blog_detail_page`,{
            "device_id": DEVICE_ID,
            "user_id": USER_ID,
            "offset": offset,
            "artist_id": artist_id
        }).then( response => {
        // console.log('response from BlogRecommended action', response.data.data)
            const BlogRecommendedResponse = response.data
            dispatch(BlogRecommendedSuccess(BlogRecommendedResponse))
        //     setTimeout(function(){
        //         dispatch(BlogRecommendedReset())
        //    }, 1000);
    }).catch(error => {
        const errorMsg = error.message
        dispatch(BlogRecommendedFailure(errorMsg))
    })
    }
}

