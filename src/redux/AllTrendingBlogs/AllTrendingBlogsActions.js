import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { TRENDING_BLOGS, TRENDING_BLOGS_SUCCESS, TRENDING_BLOGS_FAILURE, TRENDING_BLOGS_RESET } from './AllTrendingBlogsTypes'

export const AllTrendingBlogs = () => {
    return{
        type: TRENDING_BLOGS
    }
}

export const AllTrendingBlogsSuccess = (AllTrendingBlogsData) => {
    return{
        type: TRENDING_BLOGS_SUCCESS,
        payload: AllTrendingBlogsData
    }
}
export const AllTrendingBlogsFailure = (error) => {
    return{
        type: TRENDING_BLOGS_FAILURE,
        payload: error
    }
}

export const AllTrendingBlogsReset = () => {
    return{
        type: TRENDING_BLOGS_RESET
    }
}



export const hitAllTrendingBlogsAPI = (offset) => {
    // console.log('executed from AllTrendingBlogs action')
    return (dispatch) => {
        dispatch(AllTrendingBlogs())
            axios.post(`${BASE_URL}view_all_tranding_blog`,{
            "device_id": DEVICE_ID,
            "user_id": USER_ID,
            "offset": offset
        }).then( response => {
        // console.log('response from AllTrendingBlogs action', response.data.data)
            const AllTrendingBlogsResponse = response.data
            dispatch(AllTrendingBlogsSuccess(AllTrendingBlogsResponse))
        //     setTimeout(function(){
        //         dispatch(AllTrendingBlogsReset())
        //    }, 1000);
    }).catch(error => {
        const errorMsg = error.message
        dispatch(AllTrendingBlogsFailure(errorMsg))
    })
    }
}

