import { GET_ALL_DASHBOARD, GET_ALL_DASHBOARD_SUCCESS, GET_ALL_DASHBOARD_FAILURE } from './DashboardTypes'
const initialState = {
    DashboardGetApi:{
        DashboardInProgress: true,
        DashboardSuccess:false,
        DashboardFailed:false,
        allDashboards: [],
        error: '',
        }
}
 const DashboardReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_DASHBOARD:
            return{
                ...state,
                DashboardGetApi:{
                    DashboardInProgress: true,
                    DashboardSuccess:false,
                    DashboardFailed:false,
                    allDashboards: [],
                    error: '',
                    }
            }
            case GET_ALL_DASHBOARD_SUCCESS:
                return{
                    ...state,
                    DashboardGetApi:{
                        DashboardInProgress: false,
                        DashboardSuccess:true,
                        DashboardFailed:false,
                        allDashboards: action.payload,
                        error: '',
                        }
                }
            case GET_ALL_DASHBOARD_FAILURE:
                return{
                    ...state,
                    DashboardGetApi:{
                        DashboardInProgress: false,
                        DashboardSuccess:false,
                        DashboardFailed:true,
                        allDashboards: [],
                        error: '',
                        }
                }
            default: return state 
    }
}
export default DashboardReducer
