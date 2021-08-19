import { TRENDING_PICTURES, TRENDING_PICTURES_SUCCESS, TRENDING_PICTURES_FAILURE, TRENDING_PICTURES_RESET } from './AllTrendingPicturesTypes'

const initialState = {
    TrendingPicturesApi:{
    TrendingPicturesInProgress: false,
    TrendingPicturesSuccess:false,
    TrendingPicturesFailed:false,
    TrendingPictures: [],
    }
}

const TrendingPicturesReducer = (state = initialState, action) => {
    switch(action.type){
        case TRENDING_PICTURES:
            return{
                ...state,
                TrendingPicturesApi:{
                    TrendingPicturesInProgress: true,
                    TrendingPicturesSuccess:false,
                    TrendingPicturesFailed:false,
                    TrendingPictures: [],
                    }
            
            }
            case TRENDING_PICTURES_SUCCESS:
                return{
                    ...state,
                    TrendingPicturesApi:{
                        TrendingPicturesInProgress: false,
                        TrendingPicturesSuccess:true,
                        TrendingPicturesFailed:false,
                        TrendingPictures: action.payload,
                        }
                
                }
            case TRENDING_PICTURES_FAILURE:
                return{
                    ...state,
                    TrendingPicturesApi:{
                        TrendingPicturesInProgress: false,
                        TrendingPicturesSuccess:false,
                        TrendingPicturesFailed:true,
                        TrendingPictures: [],
                        }
                
                }

                case TRENDING_PICTURES_RESET:
                    return{
                        ...state,
                        TrendingPicturesApi:{
                            TrendingPicturesInProgress: false,
                            TrendingPicturesSuccess:false,
                            TrendingPicturesFailed:false,
                            }
                    
                    }

            default: return state 
    }
}

export default TrendingPicturesReducer