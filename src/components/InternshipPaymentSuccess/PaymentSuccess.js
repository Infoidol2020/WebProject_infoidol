import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

import { fetchOrderDetail } from '../../redux/OrderDetailInternship/OrderDetailInternshipAction'

const PaymentSuccess = (props) => {
    const [orderDetails, setOrderDetails] = useState()
    // console.log('hoooooo',props.OrderDetails)
    useEffect(() => {
        props.fetchOrderDetail(sessionStorage.getItem('internshipOrderId'))
    }, [])

    useEffect(() => {
        if(props.OrderDetails.OrderDetailInternship.orderDetailInternshipGetApi.orderDetailInternshipSuccess){
            setOrderDetails(props.OrderDetails.OrderDetailInternship.orderDetailInternshipGetApi.orderDetailInternship)
        }

    }, [props.OrderDetails.OrderDetailInternship.orderDetailInternshipGetApi.orderDetailInternshipSuccess])
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
