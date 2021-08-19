import { INTERNSHIP_SUBJECTS_DETAILS, INTERNSHIP_SUBJECTS_DETAILS_SUCCESS, INTERNSHIP_SUBJECTS_DETAILS_FAILURE, INTERNSHIP_SUBJECTS_DETAILS_RESET } from './InternshipSubjectDetailsType'
const initialState = {
    internshipSubjectsDetailsDetailsGetApi:{
    internshipSubjectsDetailsInProgress: false,
    internshipSubjectsDetailsSuccess:false,
    internshipSubjectsDetailsFailed:false,
    internshipSubjectsDetails: [],
    }
}

const InternshipSubjectsDetailsReducer = (state = initialState, action) => {
    switch(action.type){
        case INTERNSHIP_SUBJECTS_DETAILS:
            return{
                ...state,
                internshipSubjectsDetailsDetailsGetApi:{
                    internshipSubjectsDetailsInProgress: true,
                    internshipSubjectsDetailsSuccess:false,
                    internshipSubjectsDetailsFailed:false,
                    internshipSubjectsDetails: [],
                    }

            }
            case INTERNSHIP_SUBJECTS_DETAILS_SUCCESS:
                return{
                    ...state,
                    internshipSubjectsDetailsDetailsGetApi:{
                        internshipSubjectsDetailsInProgress: false,
                        internshipSubjectsDetailsSuccess:true,
                        internshipSubjectsDetailsFailed:false,
                        internshipSubjectsDetails: action.payload,
                        }

                }
            case INTERNSHIP_SUBJECTS_DETAILS_FAILURE:
                return{
                    ...state,
                    internshipSubjectsDetailsDetailsGetApi:{
                        internshipSubjectsDetailsInProgress: false,
                        internshipSubjectsDetailsSuccess:false,
                        internshipSubjectsDetailsFailed:true,
                        internshipSubjectsDetails: [],
                        }

                }
                case INTERNSHIP_SUBJECTS_DETAILS_RESET:
                    return{
                        ...state,
                        internshipSubjectsDetailsDetailsGetApi:{
                            internshipSubjectsDetailsInProgress: false,
                            internshipSubjectsDetailsSuccess:false,
                            internshipSubjectsDetailsFailed:false,
                            }
                    }
            default: return state 
    }
}

export default InternshipSubjectsDetailsReducer