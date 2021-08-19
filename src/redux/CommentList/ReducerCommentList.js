import { GET_COMMENT_LIST, GET_COMMENT_LIST_SUCCESS, GET_COMMENT_LIST_FAILURE } from './TypesCommentList'
const initialState ={
    CommentsListGetApi : {
        CommentsListInProgress : false,
        CommentsListSuccess : false,
        CommentsListFailed : false,
        allCommentsListFromCommentApi : [],
        error : '',
    }
}
const ReducerCommentList = (state = initialState, action) => {
    switch(action.type){
        case GET_COMMENT_LIST:
            return{
                ...state,
                CommentsListGetApi:{
                    CommentsListInProgress: true,
                    CommentsListSuccess:false,
                    CommentsListFailed:false,
                    allCommentsListFromCommentApi: [],
                    error: '',
                    }
            }
            case GET_COMMENT_LIST_SUCCESS:
                return{
                    ...state,
                    CommentsListGetApi:{
                        CommentsListInProgress: false,
                        CommentsListSuccess:true,
                        CommentsListFailed:false,
                        allCommentsListFromCommentApi: action.payload,
                        error: '',
                        }
                }
            case GET_COMMENT_LIST_FAILURE:
                return{
                    ...state,
                    CommentsListGetApi:{
                        CommentsListInProgress: false,
                        CommentsListSuccess:false,
                        CommentsListFailed:true,
                        allCommentsListFromCommentApi: [],
                        error: '',
                        }
                }
            default: return state 
    }
}
export default ReducerCommentList
