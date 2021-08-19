import { ADD_BENEFICIARY, ADD_BENEFICIARY_SUCCESS, ADD_BENEFICIARY_FAILURE, ADD_BENEFICIARY_RESET } from './AddBeneficiaryTypes'

const initialState = {
    AddBeneficiaryApi:{
    AddBeneficiaryInProgress: false,
    AddBeneficiarySuccess:false,
    AddBeneficiaryFailed:false,
    AddBeneficiary: [],
    }
}

const AddBeneficiaryReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_BENEFICIARY:
            return{
                ...state,
                AddBeneficiaryApi:{
                    AddBeneficiaryInProgress: true,
                    AddBeneficiarySuccess:false,
                    AddBeneficiaryFailed:false,
                    AddBeneficiary: [],
                    }
            
            }
            case ADD_BENEFICIARY_SUCCESS:
                return{
                    ...state,
                    AddBeneficiaryApi:{
                        AddBeneficiaryInProgress: false,
                        AddBeneficiarySuccess:true,
                        AddBeneficiaryFailed:false,
                        AddBeneficiary: action.payload,
                        }
                
                }
            case ADD_BENEFICIARY_FAILURE:
                return{
                    ...state,
                    AddBeneficiaryApi:{
                        AddBeneficiaryInProgress: false,
                        AddBeneficiarySuccess:false,
                        AddBeneficiaryFailed:true,
                        AddBeneficiary: [],
                        }
                
                }

                case ADD_BENEFICIARY_RESET:
                    return{
                        ...state,
                        AddBeneficiaryApi:{
                            AddBeneficiaryInProgress: false,
                            AddBeneficiarySuccess:false,
                            AddBeneficiaryFailed:false,
                            }
                    
                    }

            default: return state 
    }
}

export default AddBeneficiaryReducer