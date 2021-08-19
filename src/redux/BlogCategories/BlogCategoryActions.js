import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { GET_BLOG_CATEGORY, GET_BLOG_CATEGORY_SUCCESS, GET_BLOG_CATEGORY_FAILURE } from './BlogCategoryTypes'
export const getBlogCategories = () => {
    return{
        type: GET_BLOG_CATEGORY
    }
}

export const getBlogCategoriesSuccess = (blogCategories) => {
    return{
        type: GET_BLOG_CATEGORY_SUCCESS,
        payload: blogCategories
    }
}

export const getBlogCategoriesFailure = (error) => {
    return{
        type: GET_BLOG_CATEGORY_FAILURE ,
        payload: error
    }
}

export const fetchBlogCategories = () => {
    return (dispatch) => {
        dispatch(getBlogCategories)
        axios.post(`${BASE_URL}blog_category`,{
          "device_id": DEVICE_ID,
          "user_id": USER_ID,
      }).then( response => {
          const allBlogcategories = response.data.data
          dispatch(getBlogCategoriesSuccess(allBlogcategories))
      }).catch(error => {
          const errorMsg = error.message
          dispatch(getBlogCategoriesFailure(errorMsg))
      })
    }
}