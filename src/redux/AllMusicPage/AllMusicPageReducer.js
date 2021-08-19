import { ALL_MUSIC_PAGE, ALL_MUSIC_PAGE_SUCCESS, ALL_MUSIC_PAGE_FAILURE, ALL_MUSIC_PAGE_RESET } from './AllMusicPageTypes'

const initialState = {
    AllMusicPageApi:{
    AllMusicPageInProgress: false,
    AllMusicPageSuccess:false,
    AllMusicPageFailed:false,
    AllMusicPage: [],
    }
}

const AllMusicPageReducer = (state = initialState, action) => {
    switch(action.type){
        case ALL_MUSIC_PAGE:
            return{
                ...state,
                AllMusicPageApi:{
                    AllMusicPageInProgress: true,
                    AllMusicPageSuccess:false,
                    AllMusicPageFailed:false,
                    AllMusicPage: [],
                    }
            
            }
            case ALL_MUSIC_PAGE_SUCCESS:
                return{
                    ...state,
                    AllMusicPageApi:{
                        AllMusicPageInProgress: false,
                        AllMusicPageSuccess:true,
                        AllMusicPageFailed:false,
                        AllMusicPage: action.payload,
                        }
                
                }
            case ALL_MUSIC_PAGE_FAILURE:
                return{
                    ...state,
                    AllMusicPageApi:{
                        AllMusicPageInProgress: false,
                        AllMusicPageSuccess:false,
                        AllMusicPageFailed:true,
                        AllMusicPage: [],
                        }
                
                }

                case ALL_MUSIC_PAGE_RESET:
                    return{
                        ...state,
                        AllMusicPageApi:{
                            AllMusicPageInProgress: false,
                            AllMusicPageSuccess:false,
                            AllMusicPageFailed:false,
                            }
                    
                    }

            default: return state 
    }
}

export default AllMusicPageReducer