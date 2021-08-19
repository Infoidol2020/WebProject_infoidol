import { MY_USER_PROFILE, MY_USER_PROFILE_SUCCESS, MY_USER_PROFILE_FAILURE, MY_USER_PROFILE_RESET } from './MyUserProfileTypes'
const initialState = {
    myUserProfileApi:{
    myUserProfileInProgress: false,
    myUserProfileSuccess:false,
    myUserProfileFailed:false,
    myUserProfile: [],
    }
}

 const myUserProfileReducer = (state = initialState, action) => {
    switch(action.type){
        case MY_USER_PROFILE:
            return{
                ...state,
                myUserProfileApi:{
                    myUserProfileInProgress: true,
                    myUserProfileSuccess:false,
                    myUserProfileFailed:false,
                    myUserProfile: [],
                    }
               
            }
            case MY_USER_PROFILE_SUCCESS:
                // console.log("Ssszaaaaa",action.payload)
                return{
                    ...state,
                    myUserProfileApi:{
                        myUserProfileInProgress: false,
                        myUserProfileSuccess:true,
                        myUserProfileFailed:false,
                        myUserProfile: action.payload,
                        }
                   
                }
            case MY_USER_PROFILE_FAILURE:
                return{
                    ...state,
                    myUserProfileApi:{
                        myUserProfileInProgress: false,
                        myUserProfileSuccess:false,
                        myUserProfileFailed:true,
                        myUserProfile: [],
                        }
                   
                }
                case MY_USER_PROFILE_RESET:
                    return{
                        ...state,
                        myUserProfileApi:{
                            myUserProfileInProgress: false,
                            myUserProfileSuccess:false,
                            myUserProfileFailed:false,
                            }
                       
                    }
            default: return state 
    }
}

export default myUserProfileReducer