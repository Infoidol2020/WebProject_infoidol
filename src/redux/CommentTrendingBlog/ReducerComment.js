import { GET_TRENDING_BLOGS_COMMENT, GET_TRENDING_BLOGS_COMMENT_SUCCESS, GET_TRENDING_BLOGS_COMMENT_FAILURE } from './TypesComment'
const initialState ={
    CommentsTrendingPageGetApi : {
        CommentsTrendingPageInProgress : false,
        CommentsTrendingPageSuccess : false,
        CommentsTrendingPageFailed : false,
        allCommentsFromCommentApi : [],
        error : '',
    }
}
const ReducerComment = (state = initialState, action) => {
    switch(action.type){
        case GET_TRENDING_BLOGS_COMMENT:
            return{
                ...state,
                CommentsTrendingPageGetApi:{
                    CommentsTrendingPageInProgress: true,
                    CommentsTrendingPageSuccess:false,
                    CommentsTrendingPageFailed:false,
                    allCommentsFromCommentApi: [],
                    error: '',
                    }
            }
            case GET_TRENDING_BLOGS_COMMENT_SUCCESS:
                return{
                    ...state,
                    CommentsTrendingPageGetApi:{
                        CommentsTrendingPageInProgress: false,
                        CommentsTrendingPageSuccess:true,
                        CommentsTrendingPageFailed:false,
                        allCommentsFromCommentApi: action.payload,
                        error: '',
                        }
                }
            case GET_TRENDING_BLOGS_COMMENT_FAILURE:
                return{
                    ...state,
                    CommentsTrendingPageGetApi:{
                        CommentsTrendingPageInProgress: false,
                        CommentsTrendingPageSuccess:false,
                        CommentsTrendingPageFailed:true,
                        allCommentsFromCommentApi: [],
                        error: '',
                        }
                }
            default: return state 
    }
}
export default ReducerComment
