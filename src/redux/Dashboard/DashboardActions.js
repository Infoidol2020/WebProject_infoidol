import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID, LATITUDE, LONGITUDE } from '../Constants/ApiConstants'
import { GET_ALL_DASHBOARD, GET_ALL_DASHBOARD_SUCCESS, GET_ALL_DASHBOARD_FAILURE } from './DashboardTypes'
export const getAllDashboard = () => {
    return{
        type: GET_ALL_DASHBOARD
    }
}

export const getAllDashboardSuccess = (Dashboard) => {
    return{
        type: GET_ALL_DASHBOARD_SUCCESS,
        payload: Dashboard
    }
}

export const getAllDashboardFailure = (error) => {
    return{
        type: GET_ALL_DASHBOARD_FAILURE,
        payload: error
    }
}

export const fetchAllDashboard = () => {
    // console.log('Dashboard executed')
    return (dispatch) => {
        dispatch(getAllDashboard);
        axios.post(`${BASE_URL}dashboard`,{
            "device_id": DEVICE_ID,
            "user_id": USER_ID,
            "latitude": LATITUDE,
            "longitude": LONGITUDE
        }).then( response => {
            const allDashboards = response.data.data
            allDashboards && dispatch(getAllDashboardSuccess(allDashboards))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(getAllDashboardFailure(errorMsg))
    })
    }
}