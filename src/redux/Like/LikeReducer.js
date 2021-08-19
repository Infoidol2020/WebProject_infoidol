import { USER_LIKE, USER_LIKE_SUCCESS, USER_LIKE_FAILURE, USER_LIKE_RESET } from './LikeTypes'
const initialState = {
    LikeApi:{
    LikeApiInProgress: false,
    LikeApiSuccess:false,
    LikeApiFailed:false,
    LikeResponse: {},
    }
}
 const LikeReducer = (state = initialState, action) => {
    switch(action.type){
        case USER_LIKE:
            return{
                ...state,
                LikeApi:{
                    LikeApiInProgress: true,
                    LikeApiSuccess:false,
                    LikeApiFailed:false,
                    LikeResponse: {},
                    }
            }
            case USER_LIKE_SUCCESS:
                return{
                    ...state,
                    LikeApi:{
                        LikeApiInProgress: false,
                        LikeApiSuccess:true,
                        LikeApiFailed:false,
                        LikeResponse: action.payload,
                        }
                }
            case USER_LIKE_FAILURE:
                return{
                    ...state,
                    LikeApi:{
                        LikeApiInProgress: false,
                        LikeApiSuccess:false,
                        LikeApiFailed:true,
                        LikeResponse: {},
                        }
                }
                case USER_LIKE_RESET:
                    return{
                        ...state,
                        LikeApi:{
                            LikeApiInProgress: false,
                            LikeApiSuccess:false,
                            LikeApiFailed:false,
                            }
                    }
            default: return state 
    }
}
export default LikeReducer