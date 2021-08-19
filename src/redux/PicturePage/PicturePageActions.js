import axios from 'axios';
import { BASE_URL, DEVICE_ID, USER_ID } from '../Constants/ApiConstants';
import { GET_ALL_PICTURES, GET_ALL_PICTURES_SUCCESS,GET_PICTURES_BY_CATEGORIES, GET_ALL_PICTURES_FAILURE, GET_ALL_PICTURES_LIST_BY_CATEGORY } from './PicturePageTypes'
export const getAllPictures = () => {
    return{
        type: GET_ALL_PICTURES
    }
}

export const getAllPicturesSuccess = (pictures) => {
    // console.log("sdsdsdsd",21212)
    return{
        type: GET_ALL_PICTURES_SUCCESS,
        payload: pictures
    }
}
export const getAllCatPicturesSuccess = (CatPictures) => {
    // console.log("sdsdsdsd",21212)
    return{
        type: GET_PICTURES_BY_CATEGORIES,
        payload: CatPictures
    }
}

export const getAllPicturesFailure = (error) => {
    return{
        type: GET_ALL_PICTURES_FAILURE,
        payload: error
    }
}

export const getAllPicturesListByCategory = (pictures) => {
    return{
        type: GET_ALL_PICTURES_LIST_BY_CATEGORY,
        payload: pictures
    }
}
export const fetchAllPictures = () => {

// console.log("dkkdkmdmkdmk",2522)
    let Picture_page_URL = `${BASE_URL}picture_page`;
    let picture_list_URL = `${BASE_URL}picture_list`;
    
    // console.log('executedddd from picture page actions',22222)
    return (dispatch) => {
        dispatch(getAllPictures())
        const promise1 = axios.post(Picture_page_URL,{
            "device_id":DEVICE_ID,
            "user_id":USER_ID,

        });
        // const promise2 = axios.post(picture_list_URL, {
            const promise2 = axios.post(`https://infoidol.com/admin/WebApi/webpicture_list`, {
            "device_id":DEVICE_ID,
            "user_id":USER_ID,
        });
        // console.log("sdsd",promise1,promise2)
        Promise.all([promise1, promise2]).then(response =>  {
            // console.log('sss', response);
        
            const allPictures = response;
            // const catpictures= response[1].data.data
            dispatch(getAllPicturesSuccess(allPictures))
            // dispatch(getAllCatPicturesSuccess(catpictures))
        
            }).catch(error => {
                    const errorMsg = error.message
                    dispatch(getAllPicturesFailure(errorMsg))
                })

}
}