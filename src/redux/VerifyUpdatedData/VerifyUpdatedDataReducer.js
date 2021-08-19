import { VERIFY_UPDATED_DATA, VERIFY_UPDATED_DATA_SUCCESS, VERIFY_UPDATED_DATA_FAILURE } from './VerifyUpdatedDataType'

const initialState = {
    VerifyUpdatedDataGetApi:{
    VerifyUpdatedDataInProgress: false,
    VerifyUpdatedDataSuccess:false,
    VerifyUpdatedDataFailed:false,
    allVerifyUpdatedData: [],
    error: '',
    }
}

const VerifyUpdatedDataReducer= (state = initialState, action) => {
    switch(action.type){
        case VERIFY_UPDATED_DATA:
            return{
                ...state,
                VerifyUpdatedDataGetApi:{
                    VerifyUpdatedDataInProgress: true,
                    VerifyUpdatedDataSuccess:false,
                    VerifyUpdatedDataFailed:false,
                    allVerifyUpdatedData: [],
                    error: '',
                    }
            }
            case VERIFY_UPDATED_DATA_SUCCESS:
                return{
                    ...state,
                    VerifyUpdatedDataGetApi:{
                        VerifyUpdatedDataInProgress: false,
                        VerifyUpdatedDataSuccess:true,
                        VerifyUpdatedDataFailed:false,
                        allVerifyUpdatedData: action.payload,
                        error: '',
                        }
                }
            case VERIFY_UPDATED_DATA_FAILURE:
                return{
                    ...state,
                    VerifyUpdatedDataGetApi:{
                        VerifyUpdatedDataInProgress: false,
                        VerifyUpdatedDataSuccess:false,
                        VerifyUpdatedDataFailed:true,
                        allVerifyUpdatedData: [],
                        error: '',
                        }
                }
            default: return state 
    }
}
export default VerifyUpdatedDataReducer
