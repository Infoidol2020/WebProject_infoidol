
import { EMI_DETAILS, EMI_DETAILS_SUCCESS, EMI_DETAILS_FAILURE, EMI_DETAILS_RESET } from './EMIDetailTypes'
const initialState = {
    emiDetailsGetApi:{
    emiDetailsInProgress: false,
    emiDetailsSuccess:false,
    emiDetailsFailed:false,
    emiDetails: [],
    }
}

const EMIDetailsReducer = (state = initialState, action) => {
    switch(action.type){
        case EMI_DETAILS:
            return{
                ...state,
                emiDetailsGetApi:{
                    emiDetailsInProgress: true,
                    emiDetailsSuccess:false,
                    emiDetailsFailed:false,
                    emiDetails: [],
                    }

            }
            case EMI_DETAILS_SUCCESS:
                return{
                    ...state,
                    emiDetailsGetApi:{
                        emiDetailsInProgress: false,
                        emiDetailsSuccess:true,
                        emiDetailsFailed:false,
                        emiDetails: action.payload,
                        }

                }
            case EMI_DETAILS_FAILURE:
                return{
                    ...state,
                    emiDetailsGetApi:{
                        emiDetailsInProgress: false,
                        emiDetailsSuccess:false,
                        emiDetailsFailed:true,
                        emiDetails: [],
                        }

                }
                case EMI_DETAILS_RESET:
                    return{
                        ...state,
                        emiDetailsGetApi:{
                            emiDetailsInProgress: false,
                            emiDetailsSuccess:false,
                            emiDetailsFailed:false,
                            }
                    }
            default: return state 
    }
}

export default EMIDetailsReducer