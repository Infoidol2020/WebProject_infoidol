import { INTERNSHIP_REGISTERATION, INTERNSHIP_REGISTERATION_SUCCESS, INTERNSHIP_REGISTERATION_FAILURE, INTERNSHIP_REGISTERATION_RESET } from './InternshipRegisterationTypes'
const initialState = {
    internshipRegisterationGetApi:{
    internshipRegisterationInProgress: false,
    internshipRegisterationSuccess:false,
    internshipRegisterationFailed:false,
    internshipRegisteration: [],
    }
}

const internshipRegisterationReducer = (state = initialState, action) => {
    switch(action.type){
        case INTERNSHIP_REGISTERATION:
            return{
                ...state,
                internshipRegisterationGetApi:{
                    internshipRegisterationInProgress: true,
                    internshipRegisterationSuccess:false,
                    internshipRegisterationFailed:false,
                    internshipRegisteration: [],
                    }

            }
            case INTERNSHIP_REGISTERATION_SUCCESS:
                return{
                    ...state,
                    internshipRegisterationGetApi:{
                        internshipRegisterationInProgress: false,
                        internshipRegisterationSuccess:true,
                        internshipRegisterationFailed:false,
                        internshipRegisteration: action.payload,
                        }

                }
            case INTERNSHIP_REGISTERATION_FAILURE:
                return{
                    ...state,
                    internshipRegisterationGetApi:{
                        internshipRegisterationInProgress: false,
                        internshipRegisterationSuccess:false,
                        internshipRegisterationFailed:true,
                        internshipRegisteration: [],
                        }

                }
                case INTERNSHIP_REGISTERATION_RESET:
                    return{
                        ...state,
                        internshipRegisterationGetApi:{
                            internshipRegisterationInProgress: false,
                            internshipRegisterationSuccess:false,
                            internshipRegisterationFailed:false,
                            }
                    }
            default: return state 
    }
}

export default internshipRegisterationReducer