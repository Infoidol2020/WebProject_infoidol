import { GET_CUSTOMIZED_FEEDS, GET_CUSTOMIZED_FEEDS_SUCCESS, GET_CUSTOMIZED_FEEDS_FAILURE } from './CustomizeFeedsTypes'
const initialState = {
    CustomizeFeedsGetApi:{
    CustomizeFeedsInProgress: false,
    CustomizeFeedsSuccess:false,
    CustomizeFeedsFailed:false,
    customizedFeeds: [],
    }
}

 const CustomizeFeedsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CUSTOMIZED_FEEDS:
            return{
                ...state,
                CustomizeFeedsGetApi:{
                    CustomizeFeedsInProgress: true,
                    CustomizeFeedsSuccess:false,
                    CustomizeFeedsFailed:false,
                    customizedFeeds: [],
                    }
               
            }
            case GET_CUSTOMIZED_FEEDS_SUCCESS:
                return{
                    ...state,
                    CustomizeFeedsGetApi:{
                        CustomizeFeedsInProgress: false,
                        CustomizeFeedsSuccess:true,
                        CustomizeFeedsFailed:false,
                        customizedFeeds: action.payload,
                        }
                   
                }
            case GET_CUSTOMIZED_FEEDS_FAILURE:
                return{
                    ...state,
                    CustomizeFeedsGetApi:{
                        CustomizeFeedsInProgress: false,
                        CustomizeFeedsSuccess:false,
                        CustomizeFeedsFailed:true,
                        customizedFeeds: [],
                        }
                   
                }
            default: return state 
    }
}

export default CustomizeFeedsReducer
