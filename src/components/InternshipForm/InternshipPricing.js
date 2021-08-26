import { PersonPinSharp } from '@material-ui/icons';
import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';


import { hitTokenGenerationAPI } from '../../redux/TokenGeneration/TokenGenerationActions'

const InternshipPricing = (props) => {
    // const userInfo = props.location.data.userDetails
    console.log('tokenprops',props)
    useEffect(() => {
        props.hitTokenGenerationAPI(appId, customerName, customerEmail, customerPhone, orderAmount, orderCurrency, returnUrl, notifyUrl, sessionStorage.getItem('internshipOrderId'))
        console.log('hbkxj',appId, customerName, customerEmail, customerPhone, orderAmount, orderCurrency, returnUrl, notifyUrl, sessionStorage.getItem('internshipOrderId'))

    }, [])
    useEffect(() => {
        if(props.TokenGeneration.TokenGeneration.TokenGenerationApi.TokenGenerationSuccess &&
            props.TokenGeneration.TokenGeneration.TokenGenerationApi.TokenGeneration.status
            ){
                setToken(props.TokenGeneration.TokenGeneration.TokenGenerationApi.TokenGeneration.data.signature)
                console.log('signature',props.TokenGeneration.TokenGeneration.TokenGenerationApi.TokenGeneration.data.signature,props.TokenGeneration.TokenGeneration.TokenGenerationApi.TokenGenerationSuccess)
            }
    }, [props.TokenGeneration.TokenGeneration.TokenGenerationApi.TokenGenerationSuccess])
    // console.log('props', props)
    const [token, setToken] = useState()

    // const [appId, setAppId] = useState('751028e31e3ca4ef21cd75c6c20157')
    const [appId, setAppId] = useState('121418d4bd3f626e1dfdc73fab814121')
    const [orderAmount, setOrderAmount] = useState(sessionStorage.getItem('internshipPrice'))
    // const [orderAmount, setOrderAmount] = useState('1499')

    const [customerName, setCustomerName] = useState(sessionStorage.getItem('internFirstName'))
    const [customerEmail, setCustomerEmail] = useState(sessionStorage.getItem('internEmail'))
    const [customerPhone, setCustomerPhone] = useState(sessionStorage.getItem('internphoneNo'))
    const [orderCurrency, setOrderCurrency] = useState('INR')
    const [returnUrl, setReturnUrl] = useState('https://dev.infoidol.com/admin/LearningApi/setTxnStatus')
    const [notifyUrl, setNotifyUrl] = useState('https://dev.infoidol.com/admin/LearningApi/setTxnStatus')


    return (
        <>
        <div style={{background: 'linear-gradient(to right, #ea1d6f 0%, #eb466b 100%)', height: '100vh', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{background: '#4d4d4f', width: '40vw', height: '15vw',borderRadius: '10px'}}>
                <div style={{color: '#fff', textAlign: 'center', marginTop: '10vh'}}>Hey <b style={{color:'yellow'}}>{customerName && customerName}</b>. Thanks for joining our Learning program.</div>
                <div style={{display:'flex',alignItems: 'center', justifyContent: 'center', marginTop: '3vh', border: 'solid 1px #ea1d6f'}}>
                    <div style={{color: '#fff'}}>Your package pricing is <b>{orderAmount}</b></div>
                    <div style={{marginLeft: '2vw'}}>
                    <form id="redirectForm" method="post" action="https://www.cashfree.com/checkout/post/submit">
                    <input type="hidden" name="appId" value={appId}/>
                    <input type="hidden" name="orderId" value={sessionStorage.getItem('internshipOrderId')} />
                    <input type="hidden" name="orderAmount" value={orderAmount}/>
                    <input type="hidden" name="orderCurrency" value={orderCurrency}/>
                    {/* <input type="hidden" name="orderNote" value=""/> */}
                    <input type="hidden" name="customerName" value={customerName}/>
                    <input type="hidden" name="customerEmail" value={customerEmail}/>
                    <input type="hidden" name="customerPhone" value={customerPhone}/>
                    <input type="hidden" name="returnUrl" value={returnUrl}/>
                    <input type="hidden" name="notifyUrl" value={notifyUrl}/>
                    <input type="hidden" name="signature" value={token}/> 
                    {/* <button type="submit" value="pay" className="purchaseNowBtn">PURCHASE NOW</button> */}
                    <button type="submit" value="pay" style={{color: 'yellow', background: 'transparent', border: '0', fontSize: '1.8rem'}}>Pay Now</button>

                    </form>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return{ 
        TokenGeneration: state,
    
    }
}
const mapDispatchToProps = dispatch => {
    return {
        hitTokenGenerationAPI: (appId, customerName, customerEmail, customerPhone, orderAmount, orderCurrency, returnUrl, notifyUrl, orderId) => dispatch(hitTokenGenerationAPI(appId, customerName, customerEmail, customerPhone, orderAmount, orderCurrency, returnUrl, notifyUrl, orderId)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InternshipPricing)
