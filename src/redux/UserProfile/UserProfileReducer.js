import { GET_USER_PROFILE, GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE_FAILURE, GET_USER_PROFILE_RESET } from './UserProfileTypes'
const initialState = {
    userProfileGetApi:{
    userProfileInProgress: false,
    userProfileSuccess:false,
    userProfileFailed:false,
    userProfile: [],
    }
}

 const UserProfileReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_USER_PROFILE:
            return{
                ...state,
                userProfileGetApi:{
                    userProfileInProgress: true,
                    userProfileSuccess:false,
                    userProfileFailed:false,
                    userProfile: [],
                    }
               
            }
            case GET_USER_PROFILE_SUCCESS:
                return{
                    ...state,
                    userProfileGetApi:{
                        userProfileInProgress: false,
                        userProfileSuccess:true,
                        userProfileFailed:false,
                        userProfile: action.payload,
                        }
                   
                }
            case GET_USER_PROFILE_FAILURE:
                return{
                    ...state,
                    userProfileGetApi:{
                        userProfileInProgress: false,
                        userProfileSuccess:false,
                        userProfileFailed:true,
                        userProfile: [],
                        }
                   
                }
                case GET_USER_PROFILE_RESET:
                    return{
                        ...state,
                        userProfileGetApi:{
                            userProfileInProgress: false,
                            userProfileSuccess:false,
                            userProfileFailed:false,
                            }
                       
                    }
            default: return state 
    }
}

export default UserProfileReducer