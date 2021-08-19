import { GET_ALL_VIDEOCATLIST, GET_ALL_VIDEOCATLIST_SUCCESS, GET_ALL_VIDEOCATLIST_FAILURE } from './VideoCategoryListType'
const initialState = {
    VideoCatListPageGetApi:{
    VideoCatListPageInProgress: false,
    VideoCatListPageSuccess:false,
    VideoCatListPageFailed:false,
    allVideoCatList: [],
    error: '',
    }
}
 const VideoCategoryListReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_VIDEOCATLIST:
            return{
                ...state,
                VideoCatListPageGetApi:{
                    VideoCatListPageInProgress: true,
                    VideoCatListPageSuccess:false,
                    VideoCatListPageFailed:false,
                    allVideoCatList: [],
                    error: '',
                    }
            }
            case GET_ALL_VIDEOCATLIST_SUCCESS:
                return{
                    ...state,
                    VideoCatListPageGetApi:{
                        VideoCatListPageInProgress: false,
                        VideoCatListPageSuccess:true,
                        VideoCatListPageFailed:false,
                        allVideoCatList: action.payload,
                        error: '',
                        }
                }
            case GET_ALL_VIDEOCATLIST_FAILURE:
                return{
                    ...state,
                    VideoCatListPageGetApi:{
                        VideoCatListPageInProgress: false,
                        VideoCatListPageSuccess:false,
                        VideoCatListPageFailed:true,
                        allVideoCatList: [],
                        error: '',
                        }
                }
            default: return state 
    }
}
export default VideoCategoryListReducer
