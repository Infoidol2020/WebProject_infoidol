import { GET_MUSIC_COMMENT_LIST, GET_MUSIC_COMMENT_LIST_SUCCESS, GET_MUSIC_COMMENT_LIST_FAILURE } from './TypesMusic'
const initialState ={
    MusicCommentsListGetApi : {
        MusicCommentsListInProgress : false,
        MusicCommentsListSuccess : false,
        MusicCommentsListFailed : false,
        allMusicCommentsList : [],
        error : '',
    }
}
const ReducerMusic = (state = initialState, action) => {
    switch(action.type){
        case GET_MUSIC_COMMENT_LIST:
            return{
                ...state,
                MusicCommentsListGetApi:{
                    MusicCommentsListInProgress: true,
                    MusicCommentsListSuccess:false,
                    MusicCommentsListFailed:false,
                    allMusicCommentsList: [],
                    error: '',
                    }
            }
            case GET_MUSIC_COMMENT_LIST_SUCCESS:
                return{
                    ...state,
                    MusicCommentsListGetApi:{
                        MusicCommentsListInProgress: false,
                        MusicCommentsListSuccess:true,
                        MusicCommentsListFailed:false,
                        allMusicCommentsList: action.payload,
                        error: '',
                        }
                }
            case GET_MUSIC_COMMENT_LIST_FAILURE:
                return{
                    ...state,
                    MusicCommentsListGetApi:{
                        MusicCommentsListInProgress: false,
                        MusicCommentsListSuccess:false,
                        MusicCommentsListFailed:true,
                        allMusicCommentsList: [],
                        error: '',
                        }
                }
            default: return state 
    }
}
export default ReducerMusic
