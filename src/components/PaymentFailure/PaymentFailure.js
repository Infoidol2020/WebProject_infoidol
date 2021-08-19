import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

import ErrorIcon from '@material-ui/icons/Error';

import { fetchOrderDetail } from '../../redux/OrderDetail/OrderDetailAction'


const PaymentFailure = (props) => {
    const [orderDetails, setOrderDetails] = useState()
    // console.log('hoooooo',props.OrderDetails.OrderDetail.orderDetailGetApi.orderDetail)
    useEffect(() => {
        props.fetchOrderDetail(sessionStorage.getItem('orderId'))
    }, [])

    useEffect(() => {
        if(props.OrderDetails.OrderDetail.orderDetailGetApi.orderDetailSuccess){
            setOrderDetails(props.OrderDetails.OrderDetail.orderDetailGetApi.orderDetail)
        }

    }, [props.OrderDetails.OrderDetail.orderDetailGetApi.orderDetailSuccess])
    return (
        <div>
            <Navbar />
            <Sidebar />
            <div style={{marginTop: '10vh',  marginLeft: '4vw', textAlign: 'center'}}>
            <div style={{background: '#999', width: '40vw', margin: 'auto'}}>
                <ErrorIcon style={{fontSize: '5rem', color: 'brown'}} />
                <h3>Your Payment Failed</h3>
                <h4>Please Try Again</h4>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <h4>Transaction Id: </h4>
                    <h4 style={{marginLeft: '3vw'}}>{orderDetails && orderDetails.referenceId}</h4>
                </div>

            </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{ 
        OrderDetails: state,
    
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchOrderDetail: (orderId) => dispatch(fetchOrderDetail(orderId)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PaymentFailure)
