import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../../Constants/ApiConstants'
import { GET_ALL_PICTURE_CATEGORIES, GET_ALL_PICTURE_CATEGORIES_SUCCESS, GET_ALL_PICTURE_CATEGORIES_FAILURE } from './PictureCategoriesTypes'
export const getAllPictureCategories = () => {
    return{
        type: GET_ALL_PICTURE_CATEGORIES
    }
}

export const getAllPictureCategoriesSuccess = (pictures) => {
    return{
        type: GET_ALL_PICTURE_CATEGORIES_SUCCESS,
        payload: pictures
    }
}

export const getAllPictureCategoriesFailure = (error) => {
    return{
        type: GET_ALL_PICTURE_CATEGORIES_FAILURE,
        payload: error
    }
}

export const fetchAllPictureCategories = () => {
    // console.log('executed from feed page actions')
    return (dispatch) => {
        dispatch(getAllPictureCategories())
        axios.post(`${BASE_URL}picture_page`,{
          "device_id": DEVICE_ID,
          "user_id": USER_ID,
      }).then( response => {
        //   console.log('response from picture categories action', response.data.data)
            const pictureCategories = response.data.data
            dispatch(getAllPictureCategoriesSuccess(pictureCategories))
      }).catch(error => {
          const errorMsg = error.message
          dispatch(getAllPictureCategoriesFailure(errorMsg))
      })
    }
}