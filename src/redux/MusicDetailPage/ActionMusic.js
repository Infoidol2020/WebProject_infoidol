import axios from 'axios';
import { BASE_URL, DEVICE_ID, USER_ID } from '../Constants/ApiConstants';
import {GET_MUSIC_COMMENT_LIST,GET_MUSIC_COMMENT_LIST_SUCCESS,GET_MUSIC_COMMENT_LIST_FAILURE} from './TypesMusic'

export const getAllMusicCommentsList = () =>{
    return{
        type : GET_MUSIC_COMMENT_LIST
    }
}
export const getAllMusicCommentsListSuccess = (MusicCommentsList) => {
    // console.log('Music Comments List actions',MusicCommentsList)
    return{
        type : GET_MUSIC_COMMENT_LIST_SUCCESS,
        payload : MusicCommentsList
    }
}

export const getAllMusicCommentsListFailure =(error) =>{
    return{
        type : GET_MUSIC_COMMENT_LIST_FAILURE,
        payload : error
    }
}

export const fetchMusicCommentList = (music_data) =>{
    // console.log('Action Music Comment List  is OKkkkkkkkkkkkkkkkkkkkk', music_data)

    return(dispatch) => {
        dispatch(getAllMusicCommentsList());
        axios.post(`${BASE_URL}music_detail_page`,{
            "device_id":DEVICE_ID,
            "user_id":USER_ID,
            "music_id":music_data
        }).then( response => {
        const allMusicPageComments = response.data.data;
        // console.log('resss from Music Comments List actions response',response);
        dispatch(getAllMusicCommentsListSuccess(allMusicPageComments));
        // console.log('dispatch of Music Comment list Successfull')
    }).catch(error =>{
        const errorMsg = error.message
        dispatch(getAllMusicCommentsListFailure(errorMsg))
    })
    }
}