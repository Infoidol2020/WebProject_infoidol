import { GET_ALL_VIDEO_CATEGORIES, GET_ALL_VIDEO_CATEGORIES_SUCCESS, GET_ALL_VIDEO_CATEGORIES_FAILURE } from './VideoCategoriesTypes'
const initialState = {
    VideoCategoriesGetApi:{
    VideoCategoriesInProgress: false,
    VideoCategoriesSuccess:false,
    VideoCategoriesFailed:false,
    VideoCategories: [],
    error: '',
    }
}

 const VideoCategoriesReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_VIDEO_CATEGORIES:
            return{
                ...state,
                VideoCategoriesGetApi:{
                    VideoCategoriesInProgress: true,
                    VideoCategoriesSuccess:false,
                    VideoCategoriesFailed:false,
                    VideoCategories: [],
                    error: '',
                    }
               
            }
            case GET_ALL_VIDEO_CATEGORIES_SUCCESS:
                return{
                    ...state,
                    VideoCategoriesGetApi:{
                        VideoCategoriesInProgress: false,
                        VideoCategoriesSuccess:true,
                        VideoCategoriesFailed:false,
                        VideoCategories: action.payload,
                        error: '',
                        }
                   
                }
            case GET_ALL_VIDEO_CATEGORIES_FAILURE:
                return{
                    ...state,
                    VideoCategoriesGetApi:{
                        VideoCategoriesInProgress: false,
                        VideoCategoriesSuccess:false,
                        VideoCategoriesFailed:true,
                        VideoCategories: [],
                        error: '',
                        }
                   
                }
            default: return state 
    }
}

export default VideoCategoriesReducer
