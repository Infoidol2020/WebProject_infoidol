import { UPDATE_MOB_EMAIL, UPDATE_MOB_EMAIL_SUCCESS, UPDATE_MOB_EMAIL_FAILURE } from './UpdateMob&EmailTypes'

const initialState = {
    UpdateMobEmailGetApi:{
    UpdateMobEmailInProgress: false,
    UpdateMobEmailSuccess:false,
    UpdateMobEmailFailed:false,
    allUpdateMobEmail: [],
    error: '',
    }
}

const UpdatedMobEmailReducer= (state = initialState, action) => {
    switch(action.type){
        case UPDATE_MOB_EMAIL:
            return{
                ...state,
                UpdateMobEmailGetApi:{
                    UpdateMobEmailInProgress: true,
                    UpdateMobEmailSuccess:false,
                    UpdateMobEmailFailed:false,
                    allUpdateMobEmail: [],
                    error: '',
                    }
            }
            case UPDATE_MOB_EMAIL_SUCCESS:
                return{
                    ...state,
                    UpdateMobEmailGetApi:{
                        UpdateMobEmailInProgress: false,
                        UpdateMobEmailSuccess:true,
                        UpdateMobEmailFailed:false,
                        allUpdateMobEmail: action.payload,
                        error: '',
                        }
                }
            case UPDATE_MOB_EMAIL_FAILURE:
                return{
                    ...state,
                    UpdateMobEmailGetApi:{
                        UpdateMobEmailInProgress: false,
                        UpdateMobEmailSuccess:false,
                        UpdateMobEmailFailed:true,
                        allUpdateMobEmail: [],
                        error: '',
                        }
                }
            default: return state 
    }
}
export default UpdatedMobEmailReducer
