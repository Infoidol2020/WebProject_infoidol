import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { GET_REPORT_CATEGORIES, GET_REPORT_CATEGORIES_SUCCESS, GET_REPORT_CATEGORIES_FAILURE } from './ReportTypes'
import { POST_REPORT, POST_REPORT_SUCCESS, POST_REPORT_FAILURE } from './ReportTypes'

export const GetReportCategories = () => {
    return{
        type: GET_REPORT_CATEGORIES
    }
}

export const GetReportCategoriesSuccess = (categories) => {
    return{
        type: GET_REPORT_CATEGORIES_SUCCESS,
        payload: categories
    }
}
export const GetReportCategoriesFailure = (error) => {
    return{
        type: GET_REPORT_CATEGORIES_FAILURE,
        payload: error
    }
}

export const postReport = () => {
    return{
        type: POST_REPORT
    }
}

export const postReportSuccess = (report) => {
    return{
        type: POST_REPORT_SUCCESS,
        payload: report
    }
}
export const postReportFailure = (error) => {
    return{
        type: POST_REPORT_FAILURE,
        payload: error
    }
}

export const fetchReportCategories = () => {
    // console.log('executed from report categories action')
    return (dispatch) => {
        dispatch(GetReportCategories)
        axios.post(`${BASE_URL}report_categories`,{
          "device_id": DEVICE_ID,
          "user_id": USER_ID,
      }).then( response => {
        //   console.log('response from report categories action', response)
            const reportCategories = response.data.data
            dispatch(GetReportCategoriesSuccess(reportCategories))
      }).catch(error => {
          const errorMsg = error.message
          dispatch(GetReportCategoriesFailure(errorMsg))
      })
    }
}

export const postReportAPI = (categoryName,elementId, elementType) => {
    // console.log('executed from  post report actions')
    return (dispatch) => {
        dispatch(postReport)
        axios.post('https://infoidol.com/admin/WebApi/report',{
            "device_id": "SYSTEM",
            "user_id":"1",
            "content": categoryName,
            "type": elementType,
            "data_id": elementId
        }).then( response => {
        //   console.log('response from post report actions', response)
            const postReportResponse = response.data.data
            dispatch(postReportSuccess(postReportResponse))
      }).catch(error => {
          const errorMsg = error.message
          dispatch(postReportFailure(errorMsg))
      })
    }
}
