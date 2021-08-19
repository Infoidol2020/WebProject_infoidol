import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { INTERNSHIP_SUBJECTS, INTERNSHIP_SUBJECTS_SUCCESS, INTERNSHIP_SUBJECTS_FAILURE, INTERNSHIP_SUBJECTS_RESET } from './InternshipSubjectTypes'
export const internshipSubjects = () => {
    return{
        type: INTERNSHIP_SUBJECTS
    }
}

export const internshipSubjectsSuccess = (internshipSubPayload) => {
    return{
        type: INTERNSHIP_SUBJECTS_SUCCESS,
        payload: internshipSubPayload
    }
}
export const internshipSubjectsFailure = (error) => {
    return{
        type: INTERNSHIP_SUBJECTS_FAILURE,
        payload: error
    }
}

export const internshipSubjectsReset = () => {
    return{
        type: INTERNSHIP_SUBJECTS_RESET
    }
}

export const fetchInternshipCourses = () => {
    // console.log('executed from user order action ....')
    return (dispatch) => {
        dispatch(internshipSubjects)
        // axios.post(`${BASE_URL}Internship_subject`,{
        axios.post(`https://dev.infoidol.com/admin/LearningApi/subjectList`,{
            "device_id": DEVICE_ID,
            "user_id": USER_ID,
        }).then( response => {
                const internshipSubject = response.data.data
                console.log('sdf')
                dispatch(internshipSubjectsSuccess(internshipSubject))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(internshipSubjectsFailure(errorMsg))
        })
    }
}
