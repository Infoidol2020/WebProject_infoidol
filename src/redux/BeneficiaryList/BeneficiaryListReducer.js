import { BENEFICIARY_LIST, BENEFICIARY_LIST_SUCCESS, BENEFICIARY_LIST_FAILURE, BENEFICIARY_LIST_RESET } from './BeneficiaryListTypes'
const initialState = {
    beneficiaryListGetApi:{
    beneficiaryListInProgress: false,
    beneficiaryListSuccess:false,
    beneficiaryListFailed:false,
    beneficiaryList: [],
    }
}

const BeneficiaryListReducer = (state = initialState, action) => {
    switch(action.type){
        case BENEFICIARY_LIST:
            return{
                ...state,
                beneficiaryListGetApi:{
                    beneficiaryListInProgress: true,
                    beneficiaryListSuccess:false,
                    beneficiaryListFailed:false,
                    beneficiaryList: [],
                    }

            }
            case BENEFICIARY_LIST_SUCCESS:
                return{
                    ...state,
                    beneficiaryListGetApi:{
                        beneficiaryListInProgress: false,
                        beneficiaryListSuccess:true,
                        beneficiaryListFailed:false,
                        beneficiaryList: action.payload,
                        }

                }
            case BENEFICIARY_LIST_FAILURE:
                return{
                    ...state,
                    beneficiaryListGetApi:{
                        beneficiaryListInProgress: false,
                        beneficiaryListSuccess:false,
                        beneficiaryListFailed:true,
                        beneficiaryList: [],
                        }

                }
                case BENEFICIARY_LIST_RESET:
                    return{
                        ...state,
                        beneficiaryListGetApi:{
                            beneficiaryListInProgress: false,
                            beneficiaryListSuccess:false,
                            beneficiaryListFailed:false,
                            }
                    }
            default: return state 
    }
}

export default BeneficiaryListReducer