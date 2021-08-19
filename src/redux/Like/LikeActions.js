import axios from 'axios';
import { BASE_URL, DEVICE_ID, USER_ID } from '../Constants/ApiConstants';
import { USER_LIKE, USER_LIKE_SUCCESS, USER_LIKE_FAILURE, USER_LIKE_RESET } from './LikeTypes'
export const UserLike = () => {
    return{
        type: USER_LIKE
    }
}
export const UserLikeSuccess = (user) => {
    return{
        type: USER_LIKE_SUCCESS,
        payload: user
    }
}
export const UserLikeFailure = (error) => {
    return{
        type: USER_LIKE_FAILURE,
        payload: error
    }
}
export const UserLikeReset = () => {
    return{
        type: USER_LIKE_RESET
    }
}
export const hitLikeApi = (dataId, type) => {
    // console.log('executed from like action', dataId, type)

    return (dispatch) => {
        dispatch(UserLike)
        // console.log('axios url', URL, dataId, data_type)
        //video like api
        if( type == '1'){
            axios.post(`${BASE_URL}video_like`,{
                "video_id" : dataId,  
                "user_id": localStorage.getItem('WebAppUserKey'),
                "device_id": "SYSTEM",
                "emoji_code": ""
            }).then( response => {
                // console.log('response from like api', response)
                const newUsers = response.data.data
                dispatch(UserLikeSuccess(newUsers))
                dispatch(UserLikeReset())
                // setTimeout(function(){ 
                // }, 3000);
            }).catch(error => {
                    const errorMsg = error.message
                    dispatch(UserLikeFailure(errorMsg))
            })
        }
        //music like api
        if(type == '2'){
            axios.post(`${BASE_URL}music_like`,{
                "music_id" : dataId,  
                "user_id": localStorage.getItem('WebAppUserKey'),
                "device_id": 'SYSTEM',
                "emoji_code": ""
            }).then( response => {
                // console.log('response from like api', response)
                const newUsers = response.data.data
                dispatch(UserLikeSuccess(newUsers))
                dispatch(UserLikeReset())
            }).catch(error => {
                    const errorMsg = error.message
                    dispatch(UserLikeFailure(errorMsg))
            })
        }
        //picture like api
        if(type == '3'){
            axios.post(`${BASE_URL}picture_like`,{
                "image_id" : dataId,  
                "user_id": localStorage.getItem('WebAppUserKey'),
                "device_id": "SYSTEM",
                "emoji_code": ""
            }).then( response => {
                // console.log('response from like api', response)
                const newUsers = response.data.data
                dispatch(UserLikeSuccess(newUsers))
                dispatch(UserLikeReset())
            }).catch(error => {
                    const errorMsg = error.message
                    dispatch(UserLikeFailure(errorMsg))
            })
        }
        if(type == '4'){
            axios.post(`${BASE_URL}blog_like`,{
                "blog_id" : dataId,  
                "user_id": localStorage.getItem('WebAppUserKey'),
                "device_id": "SYSTEM",
                "emoji_code": ""
            }).then( response => {
                // console.log('response from like api', response)
                const newUsers = response.data.data
                dispatch(UserLikeSuccess(newUsers))
                dispatch(UserLikeReset())
            }).catch(error => {
                    const errorMsg = error.message
                    dispatch(UserLikeFailure(errorMsg))
            })
        }
    }
}