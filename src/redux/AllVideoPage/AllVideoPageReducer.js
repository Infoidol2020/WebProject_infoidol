import { ALL_VIDEO_PAGE, ALL_VIDEO_PAGE_SUCCESS, ALL_VIDEO_PAGE_FAILURE, ALL_VIDEO_PAGE_RESET } from './AllVideoPageTypes'

const initialState = {
    AllVideoPageApi:{
    AllVideoPageInProgress: false,
    AllVideoPageSuccess:false,
    AllVideoPageFailed:false,
    AllVideoPage: [],
    }
}

const AllVideoPageReducer = (state = initialState, action) => {
    switch(action.type){
        case ALL_VIDEO_PAGE:
            return{
                ...state,
                AllVideoPageApi:{
                    AllVideoPageInProgress: true,
                    AllVideoPageSuccess:false,
                    AllVideoPageFailed:false,
                    AllVideoPage: [],
                    }
            
            }
            case ALL_VIDEO_PAGE_SUCCESS:
                return{
                    ...state,
                    AllVideoPageApi:{
                        AllVideoPageInProgress: false,
                        AllVideoPageSuccess:true,
                        AllVideoPageFailed:false,
                        AllVideoPage: action.payload,
                        }
                
                }
            case ALL_VIDEO_PAGE_FAILURE:
                return{
                    ...state,
                    AllVideoPageApi:{
                        AllVideoPageInProgress: false,
                        AllVideoPageSuccess:false,
                        AllVideoPageFailed:true,
                        AllVideoPage: [],
                        }
                
                }

                case ALL_VIDEO_PAGE_RESET:
                    return{
                        ...state,
                        AllVideoPageApi:{
                            AllVideoPageInProgress: false,
                            AllVideoPageSuccess:false,
                            AllVideoPageFailed:false,
                            }
                    
                    }

            default: return state 
    }
}

export default AllVideoPageReducer