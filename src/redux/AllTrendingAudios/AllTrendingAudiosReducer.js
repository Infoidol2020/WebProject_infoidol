import { TRENDING_AUDIOS, TRENDING_AUDIOS_SUCCESS, TRENDING_AUDIOS_FAILURE, TRENDING_AUDIOS_RESET } from './AllTrendingAudiosTypes'

const initialState = {
    TrendingAudiosApi:{
    TrendingAudiosInProgress: false,
    TrendingAudiosSuccess:false,
    TrendingAudiosFailed:false,
    TrendingAudios: [],
    }
}

const TrendingAudiosReducer = (state = initialState, action) => {
    switch(action.type){
        case TRENDING_AUDIOS:
            return{
                ...state,
                TrendingAudiosApi:{
                    TrendingAudiosInProgress: true,
                    TrendingAudiosSuccess:false,
                    TrendingAudiosFailed:false,
                    TrendingAudios: [],
                    }
            
            }
            case TRENDING_AUDIOS_SUCCESS:
                return{
                    ...state,
                    TrendingAudiosApi:{
                        TrendingAudiosInProgress: false,
                        TrendingAudiosSuccess:true,
                        TrendingAudiosFailed:false,
                        TrendingAudios: action.payload,
                        }
                
                }
            case TRENDING_AUDIOS_FAILURE:
                return{
                    ...state,
                    TrendingAudiosApi:{
                        TrendingAudiosInProgress: false,
                        TrendingAudiosSuccess:false,
                        TrendingAudiosFailed:true,
                        TrendingAudios: [],
                        }
                
                }

                case TRENDING_AUDIOS_RESET:
                    return{
                        ...state,
                        TrendingAudiosApi:{
                            TrendingAudiosInProgress: false,
                            TrendingAudiosSuccess:false,
                            TrendingAudiosFailed:false,
                            }
                    
                    }

            default: return state 
    }
}

export default TrendingAudiosReducer