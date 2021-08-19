import { INTERNSHIP_SUBJECTS, INTERNSHIP_SUBJECTS_SUCCESS, INTERNSHIP_SUBJECTS_FAILURE, INTERNSHIP_SUBJECTS_RESET } from './InternshipSubjectTypes'
const initialState = {
    internshipSubjectsGetApi:{
    internshipSubjectsInProgress: false,
    internshipSubjectsSuccess:false,
    internshipSubjectsFailed:false,
    internshipSubjects: [],
    }
}

const InternshipSubjectsReducer = (state = initialState, action) => {
    switch(action.type){
        case INTERNSHIP_SUBJECTS:
            return{
                ...state,
                internshipSubjectsGetApi:{
                    internshipSubjectsInProgress: true,
                    internshipSubjectsSuccess:false,
                    internshipSubjectsFailed:false,
                    internshipSubjects: [],
                    }

            }
            case INTERNSHIP_SUBJECTS_SUCCESS:
                return{
                    ...state,
                    internshipSubjectsGetApi:{
                        internshipSubjectsInProgress: false,
                        internshipSubjectsSuccess:true,
                        internshipSubjectsFailed:false,
                        internshipSubjects: action.payload,
                        }

                }
            case INTERNSHIP_SUBJECTS_FAILURE:
                return{
                    ...state,
                    internshipSubjectsGetApi:{
                        internshipSubjectsInProgress: false,
                        internshipSubjectsSuccess:false,
                        internshipSubjectsFailed:true,
                        internshipSubjects: [],
                        }

                }
                case INTERNSHIP_SUBJECTS_RESET:
                    return{
                        ...state,
                        internshipSubjectsGetApi:{
                            internshipSubjectsInProgress: false,
                            internshipSubjectsSuccess:false,
                            internshipSubjectsFailed:false,
                            }
                    }
            default: return state 
    }
}

export default InternshipSubjectsReducer