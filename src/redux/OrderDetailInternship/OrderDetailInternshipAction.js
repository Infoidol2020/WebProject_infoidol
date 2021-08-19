import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { GET_ORDER_DETAIL_INTERNSHIP, GET_ORDER_DETAIL_INTERNSHIP_SUCCESS, GET_ORDER_DETAIL_INTERNSHIP_FAILURE, GET_ORDER_DETAIL_INTERNSHIP_RESET } from './OrderDetailInternshipType'
export const getOrderDetailInternship = () => {
    return{
        type: GET_ORDER_DETAIL_INTERNSHIP
    }
}

export const getOrderDetailInternshipSuccess = (details) => {
    return{
        type: GET_ORDER_DETAIL_INTERNSHIP_SUCCESS,
        payload: details
    }
}
export const getOrderDetailInternshipFailure = (error) => {
    return{
        type: GET_ORDER_DETAIL_INTERNSHIP_FAILURE,
        payload: error
    }
}

export const getOrderDetailInternshipReset = () => {
    return{
        type: GET_ORDER_DETAIL_INTERNSHIP_RESET
    }
}

export const fetchOrderDetail = (orderId) => {
    // console.log('executed from user order action ....')
    return (dispatch) => {
        dispatch(getOrderDetailInternship)
        axios.post(`${BASE_URL}order_detail_internship`,{
        // axios.post(`https://dev.infoidol.com/admin/WebApi/order_detail_internship`,{
          "device_id": DEVICE_ID,
          "user_id": USER_ID,
          "order_id": orderId
      }).then( response => {
            const orderDetail = response.data.data
            dispatch(getOrderDetailInternshipSuccess(orderDetail))
      }).catch(error => {
          const errorMsg = error.message
          dispatch(getOrderDetailInternshipFailure(errorMsg))
      })
    }
}
