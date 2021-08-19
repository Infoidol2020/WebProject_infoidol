import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

import { fetchOrderDetail } from '../../redux/OrderDetail/OrderDetailAction'

const PaymentSuccess = (props) => {
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
            <div style={{marginTop: '10vh', marginLeft: '5vw'}}>
                <div style={{width: '50vw', margin: 'auto', background: '#030826'}}>
                <div style={{textAlign: 'center'}}>
                    <CheckCircleIcon  style={{ fontSize: '5rem', color: '#00ff80'}}/>
                </div>
                <div style={{color: '#00ff80', textAlign: 'center'}}>
                    <h3>Payment Successful</h3> 
                </div>
                <div style={{width: '40vw', margin: 'auto', marginTop: '2vh', color: '#fff'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '1.5rem', opacity: '0.8', fontWeight: 'bold', marginTop: '1vh'}}>
                        <div>Payment Mode</div>
                        <div>{orderDetails && orderDetails.paymentMode}</div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '1.5rem', opacity: '0.8', fontWeight: 'bold', marginTop: '1vh'}}>
                        <div>Refrence Id</div>
                        <div>{orderDetails && orderDetails.referenceId}</div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '1.5rem', opacity: '0.8', fontWeight: 'bold', marginTop: '1vh'}}>
                        <div>Transaction date and time</div>
                        <div>{orderDetails && orderDetails.txTime}</div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '1.5rem', opacity: '0.8', fontWeight: 'bold', marginTop: '1vh'}}>
                        <div>Amount Paid</div>
                        <div>{orderDetails && orderDetails.orderAmount}</div>
                    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(PaymentSuccess)
