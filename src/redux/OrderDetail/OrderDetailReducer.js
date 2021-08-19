import { GET_ORDER_DETAIL, GET_ORDER_DETAIL_SUCCESS, GET_ORDER_DETAIL_FAILURE, GET_ORDER_DETAIL_RESET } from './OrderDetailType'
const initialState = {
    orderDetailGetApi:{
    orderDetailInProgress: false,
    orderDetailSuccess:false,
    orderDetailFailed:false,
    orderDetail: [],
    }
}

 const OrderDetailReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ORDER_DETAIL:
            return{
                ...state,
                orderDetailGetApi:{
                    orderDetailInProgress: true,
                    orderDetailSuccess:false,
                    orderDetailFailed:false,
                    orderDetail: [],
                    }
               
            }
            case GET_ORDER_DETAIL_SUCCESS:
                return{
                    ...state,
                    orderDetailGetApi:{
                        orderDetailInProgress: false,
                        orderDetailSuccess:true,
                        orderDetailFailed:false,
                        orderDetail: action.payload,
                        }
                   
                }
            case GET_ORDER_DETAIL_FAILURE:
                return{
                    ...state,
                    orderDetailGetApi:{
                        orderDetailInProgress: false,
                        orderDetailSuccess:false,
                        orderDetailFailed:true,
                        orderDetail: [],
                        }
                   
                }
                case GET_ORDER_DETAIL_RESET:
                    return{
                        ...state,
                        orderDetailGetApi:{
                            orderDetailInProgress: false,
                            orderDetailSuccess:false,
                            orderDetailFailed:false,
                            }
                    }
            default: return state 
    }
}

export default OrderDetailReducer