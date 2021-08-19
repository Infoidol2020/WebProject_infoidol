import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../../Constants/ApiConstants'
import { GET_ALL_BLOG_CATEGORIES, GET_ALL_BLOG_CATEGORIES_SUCCESS, GET_ALL_BLOG_CATEGORIES_FAILURE } from './BlogCategoriesTypes'
export const getAllBlogCategories = () => {
    return{
        type: GET_ALL_BLOG_CATEGORIES
    }
}

export const getAllBlogCategoriesSuccess = (BlogCategories) => {
    return{
        type: GET_ALL_BLOG_CATEGORIES_SUCCESS,
        payload: BlogCategories
    }
}
export const getAllBlogCategoriesFailure = (error) => {
    return{
        type: GET_ALL_BLOG_CATEGORIES_FAILURE,
        payload: error
    }
}

export const fetchAllBlogCategories = () => {
    // console.log('executed from Blog categories actions')
    return (dispatch) => {
        dispatch(getAllBlogCategories())
        axios.post(`${BASE_URL}blog_page`,{
          "device_id": DEVICE_ID,
          "user_id": USER_ID,
      }).then( response => {
            // console.log('response from Blog categories action', response.data.data)
            const allBlogCategories = response.data.data
            dispatch(getAllBlogCategoriesSuccess(allBlogCategories))
      }).catch(error => {
          const errorMsg = error.message
          dispatch(getAllBlogCategoriesFailure(errorMsg))
      })
    }
}
