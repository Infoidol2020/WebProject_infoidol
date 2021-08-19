import { GET_REPORT_CATEGORIES, GET_REPORT_CATEGORIES_SUCCESS, GET_REPORT_CATEGORIES_FAILURE } from './ReportTypes'
import { POST_REPORT, POST_REPORT_SUCCESS, POST_REPORT_FAILURE } from './ReportTypes'
const initialState = {
// to get the report list
    ReportCategoriesGetApi:{
    ReportCategoriesInProgress: false,
    ReportCategoriesSuccess:false,
    ReportCategoriesFailed:false,
    reportCategories: [],
    error: '',
    },
// to post the report
    ReportPostApi:{
        ReportPostInProgress: false,
        ReportPostSuccess:false,
        ReportPostFailed:false,
        reportPost: [],
        error: '',
        }
}

 const ReportReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_REPORT_CATEGORIES:
            return{
                ...state,
                ReportCategoriesGetApi:{
                    ReportCategoriesInProgress: true,
                    ReportCategoriesSuccess:false,
                    ReportCategoriesFailed:false,
                    reportCategories: [],
                    error: '',
                    }
               
            }
            case GET_REPORT_CATEGORIES_SUCCESS:
                return{
                    ...state,
                    ReportCategoriesGetApi:{
                        ReportCategoriesInProgress: false,
                        ReportCategoriesSuccess:true,
                        ReportCategoriesFailed:false,
                        reportCategories: action.payload,
                        error: '',
                        }
                   
                }
            case GET_REPORT_CATEGORIES_FAILURE:
                return{
                    ...state,
                    ReportCategoriesGetApi:{
                        ReportCategoriesInProgress: false,
                        ReportCategoriesSuccess:false,
                        ReportCategoriesFailed:true,
                        reportCategories: [],
                        error: '',
                        }
                   
                }

                case POST_REPORT:
                    return{
                        ...state,
                        ReportPostApi:{
                            ReportPostInProgress: true,
                            ReportPostSuccess:false,
                            ReportPostFailed:false,
                            reportPost: [],
                            error: '',
                            }
                       
                    }
                    case POST_REPORT_SUCCESS:
                        return{
                            ...state,
                            ReportPostApi:{
                                ReportPostInProgress: false,
                                ReportPostSuccess:true,
                                ReportPostFailed:false,
                                reportPost: action.payload,
                                error: '',
                                }
                           
                        }
                    case POST_REPORT_FAILURE:
                        return{
                            ...state,
                            ReportPostApi:{
                                ReportPostInProgress: false,
                                ReportPostSuccess:false,
                                ReportPostFailed:true,
                                reportPost: [],
                                error: '',
                                }
                           
                        }
            default: return state 
    }
}

export default ReportReducer
