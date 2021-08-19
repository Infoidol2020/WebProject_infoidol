import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { GET_ORDER_DETAIL, GET_ORDER_DETAIL_SUCCESS, GET_ORDER_DETAIL_FAILURE, GET_ORDER_DETAIL_RESET } from './OrderDetailType'
export const getOrderDetail = () => {
    return{
        type: GET_ORDER_DETAIL
    }
}

export const getOrderDetailSuccess = (Feeds) => {
    return{
        type: GET_ORDER_DETAIL_SUCCESS,
        payload: Feeds
    }
}
export const getOrderDetailFailure = (error) => {
    return{
        type: GET_ORDER_DETAIL_FAILURE,
        payload: error
    }
}

export const getOrderDetailReset = () => {
    return{
        type: GET_ORDER_DETAIL_RESET
    }
}

export const fetchOrderDetail = (orderId) => {
    // console.log('executed from user order action ....')
    return (dispatch) => {
        dispatch(getOrderDetail)
        // axios.post(`${BASE_URL}order_detail`,{
        axios.post(`https://dev.infoidol.com/admin/WebApi/order_detail`,{
          "device_id": DEVICE_ID,
          "user_id": USER_ID,
          "order_id": orderId
      }).then( response => {
            const orderDetail = response.data.data
            dispatch(getOrderDetailSuccess(orderDetail))
      }).catch(error => {
          const errorMsg = error.message
          dispatch(getOrderDetailFailure(errorMsg))
      })
    }
}
