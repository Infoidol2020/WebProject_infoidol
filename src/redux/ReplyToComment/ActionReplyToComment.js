import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import {GET_BLOGS_COMMENT_REPLY,GET_BLOGS_COMMENT_REPLY_SUCCESS,GET_BLOGS_COMMENT_REPLY_FAILURE} from './TypeReplyToComment'

export const getReplyFromComments = () =>{
    return{
        type : GET_BLOGS_COMMENT_REPLY
    }
}
export const getReplyFromCommentsSuccess = (CommentsReply) => {
    return{
        type : GET_BLOGS_COMMENT_REPLY_SUCCESS,
        payload : CommentsReply
    }
}

export const getReplyFromCommentsFailure =(error) =>{
    return{
        type : GET_BLOGS_COMMENT_REPLY_FAILURE,
        payload : error
    }
}

export const fetchAllCommentsReply = (dataReply, commentId) =>{
    // console.log('Action Comment Reply is OK yoooooooooooo', dataReply, commentId)
    return(dispatch) => {
        dispatch(getReplyFromComments());
        axios.post(`${BASE_URL}give_reply`,{
            "device_id": DEVICE_ID,
            "user_id": USER_ID,
            "comment_id": commentId,
            "reply": dataReply
        }).then( response => {
        const allCommentsReply = response.data;
        // console.log('response of Action reply from Comment is OK',response.data);
        dispatch(getReplyFromCommentsSuccess(allCommentsReply));
        // console.log('dispatch  Comments reply Successfull')
    }).catch(error =>{
        const errorMsg = error.message
        dispatch(getReplyFromCommentsFailure(errorMsg))
    })
    }
}