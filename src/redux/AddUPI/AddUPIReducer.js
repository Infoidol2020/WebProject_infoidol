import { ADD_UPI, ADD_UPI_SUCCESS, ADD_UPI_FAILURE, ADD_UPI_RESET } from './AddUPITypes'
const initialState = {
    addupiApi:{
    addUPIInProgress: false,
    addUPISuccess:false,
    addUPIFailed:false,
    addUPI: [],
    }
}

const AddUPIReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_UPI:
            return{
                ...state,
                addupiApi:{
                    addUPIInProgress: true,
                    addUPISuccess:false,
                    addUPIFailed:false,
                    addUPI: [],
                    }

            }
            case ADD_UPI_SUCCESS:
                return{
                    ...state,
                    addupiApi:{
                        addUPIInProgress: false,
                        addUPISuccess:true,
                        addUPIFailed:false,
                        addUPI: action.payload,
                        }

                }
            case ADD_UPI_FAILURE:
                return{
                    ...state,
                    addupiApi:{
                        addUPIInProgress: false,
                        addUPISuccess:false,
                        addUPIFailed:true,
                        addUPI: [],
                        }

                }
                case ADD_UPI_RESET:
                    return{
                        ...state,
                        addupiApi:{
                            addUPIInProgress: false,
                            addUPISuccess:false,
                            addUPIFailed:false,
                            }
                    }
            default: return state 
    }
}

export default AddUPIReducer