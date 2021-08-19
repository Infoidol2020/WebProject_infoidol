import axios from 'axios';
import { BASE_URL, DEVICE_ID, USER_ID } from '../Constants/ApiConstants';
import { 
    GET_ALL_PICTURES_LIST_BY_CATEGORY, 
    GET_ALL_PICTURES_LIST_BY_CATEGORY_SUCCESS, 
    GET_ALL_PICTURES_LIST_BY_CATEGORY_FAILURE, 
    }
    from './PictureListByCategoryTypes'
  

    
 export const getPicturebycatergory = () => {
        return{
            type: GET_ALL_PICTURES_LIST_BY_CATEGORY
        }
    }
    
    export const getPictureCategorySuccess = (pictures) => {
        console.log("sdsdsdsd",21212)
        return{
            type: GET_ALL_PICTURES_LIST_BY_CATEGORY_SUCCESS,
            payload: pictures
        }
    }
 
    
    export const getPictureCategoryFailure = (error) => {
        return{
            type: GET_ALL_PICTURES_LIST_BY_CATEGORY_FAILURE,
            payload: error
        }
    }
    

export const fetchPictureListByCategory = (cat_id) => {

    console.log('fetchPictureListByCategory executed', cat_id)
        return (dispatch) => {
            dispatch(getPicturebycatergory())


            axios.post(`${BASE_URL}picture_list_by_category`,{
            "device_id":DEVICE_ID,
            "user_id":USER_ID,
            "cat_id": cat_id
        }).then( response => {
            const Picture = response.data.data
            console.log("Ssxxsxsx",response)
            dispatch(getPictureCategorySuccess(Picture))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(getPictureCategoryFailure(errorMsg))
        })
    }
}


