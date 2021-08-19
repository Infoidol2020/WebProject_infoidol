import { GET_ALL_FEEDS, GET_ALL_FEEDS_SUCCESS, GET_ALL_FEEDS_FAILURE, GET_ALL_FEEDS_RESET } from './FeedPageTypes'
const initialState = {
    FeedPageGetApi:{
    FeedPageInProgress: false,
    FeedPageSuccess:false,
    FeedPageFailed:false,
    allFeeds: [],
    error: '',
    }
}

 const FeedPageReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_FEEDS:
            return{
                ...state,
                FeedPageGetApi:{
                    FeedPageInProgress: true,
                    FeedPageSuccess:false,
                    FeedPageFailed:false,
                    allFeeds: [],
                    error: '',
                    }
               
            }
            case GET_ALL_FEEDS_SUCCESS:
                return{
                    ...state,
                    FeedPageGetApi:{
                        FeedPageInProgress: false,
                        FeedPageSuccess:true,
                        FeedPageFailed:false,
                        allFeeds: action.payload,
                        error: '',
                        }
                   
                }
            case GET_ALL_FEEDS_FAILURE:
                return{
                    ...state,
                    FeedPageGetApi:{
                        FeedPageInProgress: false,
                        FeedPageSuccess:false,
                        FeedPageFailed:true,
                        allFeeds: [],
                        error: '',
                        }
                   
                }
                case GET_ALL_FEEDS_RESET:
                return{
                    ...state,
                    FeedPageGetApi:{
                        FeedPageInProgress: false,
                        FeedPageSuccess:false,
                        FeedPageFailed:false,
                        error: '',
                        }
                   
                }
            default: return state 
    }
}

export default FeedPageReducer
