import { GET_ORDER_DETAIL_INTERNSHIP, GET_ORDER_DETAIL_INTERNSHIP_SUCCESS, GET_ORDER_DETAIL_INTERNSHIP_FAILURE, GET_ORDER_DETAIL_INTERNSHIP_RESET } from './OrderDetailInternshipType'
const initialState = {
    orderDetailInternshipGetApi:{
    orderDetailInternshipInProgress: false,
    orderDetailInternshipSuccess:false,
    orderDetailInternshipFailed:false,
    orderDetailInternship: [],
    }
}

 const OrderDetailInternshipReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ORDER_DETAIL_INTERNSHIP:
            return{
                ...state,
                orderDetailInternshipGetApi:{
                    orderDetailInternshipInProgress: true,
                    orderDetailInternshipSuccess:false,
                    orderDetailInternshipFailed:false,
                    orderDetailInternship: [],
                    }
               
            }
            case GET_ORDER_DETAIL_INTERNSHIP_SUCCESS:
                return{
                    ...state,
                    orderDetailInternshipGetApi:{
                        orderDetailInternshipInProgress: false,
                        orderDetailInternshipSuccess:true,
                        orderDetailInternshipFailed:false,
                        orderDetailInternship: action.payload,
                        }
                   
                }
            case GET_ORDER_DETAIL_INTERNSHIP_FAILURE:
                return{
                    ...state,
                    orderDetailInternshipGetApi:{
                        orderDetailInternshipInProgress: false,
                        orderDetailInternshipSuccess:false,
                        orderDetailInternshipFailed:true,
                        orderDetailInternship: [],
                        }
                   
                }
                case GET_ORDER_DETAIL_INTERNSHIP_RESET:
                    return{
                        ...state,
                        orderDetailInternshipGetApi:{
                            orderDetailInternshipInProgress: false,
                            orderDetailInternshipSuccess:false,
                            orderDetailInternshipFailed:false,
                            }
                    }
            default: return state 
    }
}

export default OrderDetailInternshipReducer