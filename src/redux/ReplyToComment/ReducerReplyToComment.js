import { GET_BLOGS_COMMENT_REPLY, GET_BLOGS_COMMENT_REPLY_SUCCESS, GET_BLOGS_COMMENT_REPLY_FAILURE } from './TypeReplyToComment'
const initialState ={
    CommentsReplyGetApi : {
        CommentsReplyInProgress : false,
        CommentsReplySuccess : false,
        CommentsReplyFailed : false,
        allCommentsReplyFromCommentApi : [],
        error : '',
    }
}
const ReplyCommentReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_BLOGS_COMMENT_REPLY:
            return{
                ...state,
                CommentsReplyGetApi:{
                    CommentsReplyInProgress: true,
                    CommentsReplySuccess:false,
                    CommentsReplyFailed:false,
                    allCommentsReplyFromCommentApi: [],
                    error: '',
                    }
            }
            case GET_BLOGS_COMMENT_REPLY_SUCCESS:
                return{
                    ...state,
                    CommentsReplyGetApi:{
                        CommentsReplyInProgress: false,
                        CommentsReplySuccess:true,
                        CommentsReplyFailed:false,
                        allCommentsReplyFromCommentApi: action.payload,
                        error: '',
                        }
                }
            case GET_BLOGS_COMMENT_REPLY_FAILURE:
                return{
                    ...state,
                    CommentsReplyGetApi:{
                        CommentsReplyInProgress: false,
                        CommentsReplySuccess:false,
                        CommentsReplyFailed:true,
                        allCommentsReplyFromCommentApi: [],
                        error: '',
                        }
                }
            default: return state 
    }
}
export default ReplyCommentReducer
