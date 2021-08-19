import { UPDATE_PROFILE, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_RESET } from './UpdateProfileTypes'
const initialState = {
    UpdateProfile:{
    UpdateProfileInProgress: false,
    UpdateProfileSuccess:false,
    UpdateProfileFailed:false,
    UpdateProfileData: [],
    }
}

 const UpdateProfileReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_PROFILE:
            return{
                ...state,
                UpdateProfile:{
                    UpdateProfileInProgress: true,
                    UpdateProfileSuccess:false,
                    UpdateProfileFailed:false,
                    UpdateProfileData: [],
                    }
               
            }
            case UPDATE_PROFILE_SUCCESS:
                return{
                    ...state,
                    UpdateProfile:{
                        UpdateProfileInProgress: false,
                        UpdateProfileSuccess:true,
                        UpdateProfileFailed:false,
                        UpdateProfileData: action.payload,
                        }
                   
                }
            case UPDATE_PROFILE_FAILURE:
                return{
                    ...state,
                    UpdateProfile:{
                        UpdateProfileInProgress: false,
                        UpdateProfileSuccess:false,
                        UpdateProfileFailed:true,
                        UpdateProfileData: [],
                        }
                   
                }
                case UPDATE_PROFILE_RESET:
                    return{
                        ...state,
                        UpdateProfile:{
                            UpdateProfileInProgress: false,
                            UpdateProfileSuccess:false,
                            UpdateProfileFailed:false,
                            }
                       
                    }
            default: return state 
    }
}

export default UpdateProfileReducer
