import React, {useEffect, useState, useRef} from 'react'
import {connect} from 'react-redux';

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import BusinessImg from '../../assets/Business.png'
import './Business.css'

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

import { hitTokenGenerationAPI } from '../../redux/TokenGeneration/TokenGenerationActions'
import { hitMyUserProfileAPI } from '../../redux/MyUserProfile/MyUserProfileActions'// fetch my profile
import { hitVerifyReferralAPI } from '../../redux/VerifyReferral/VerifyReferralActions'


const Business = (props) => {
    const [token, setToken] = useState()
    const [profile, setProfile] = useState()

    //referral code
    const [referralCode, setReferralCode] = useState()
    
    // referral message
    const [referralMessage, setReferralMessage] = useState()

    //show referral message
    const [showReferralMessage, setShowReferralMessage] = useState(false)
    
    //clear referral input box
    const referralInput = useRef()

        // tokenGeneration fields
        const [appId, setAppId] = useState('121418d4bd3f626e1dfdc73fab814121')
        const [customerName, setCustomerName] = useState()
        const [customerEmail, setCustomerEmail] = useState()
        const [customerPhone, setCustomerPhone] = useState()
        const [orderAmount, setOrderAmount] = useState(sessionStorage.getItem('subscription price'))
        const [orderCurrency, setOrderCurrency] = useState('INR')
        const [returnUrl, setReturnUrl] = useState('https://infoidol.com/admin/WebApi/get_txn_status')
        const [notifyUrl, setNotifyUrl] = useState('https://infoidol.com/admin/WebApi/get_txn_status')
        const [orderId, setOrderId] = useState('')
        useEffect(() => {
            props.hitMyUserProfileAPI()
        }, [])
        useEffect(() => {
            if(props.TokenGeneration.myUserProfile.myUserProfileApi.myUserProfileSuccess &&
                props.TokenGeneration.myUserProfile.myUserProfileApi &&
                props.TokenGeneration.myUserProfile.myUserProfileApi.myUserProfile)
                {
                    if(props.TokenGeneration.myUserProfile.myUserProfileApi.myUserProfile){
                        const userInfo = props.TokenGeneration.myUserProfile.myUserProfileApi.myUserProfile
                        setProfile(props.TokenGeneration.myUserProfile.myUserProfileApi.myUserProfile)
                        setCustomerName(userInfo.user_name)
                        setCustomerPhone(userInfo.mobile)
                        setCustomerEmail(userInfo.email)
                        // if(sessionStorage.getItem('orderId') == undefined || sessionStorage.getItem('orderId' == null)){
                        //     sessionStorage.setItem('orderId', uuid())
                        // }
                        props.hitTokenGenerationAPI(appId, userInfo.user_name, userInfo.email, userInfo.mobile, orderAmount, orderCurrency, returnUrl, notifyUrl, sessionStorage.getItem('orderId'))
                    }
                }
        }, [props.TokenGeneration.myUserProfile.myUserProfileApi.myUserProfileSuccess])
    
        useEffect(() => {
            if(props.TokenGeneration.TokenGeneration.TokenGenerationApi.TokenGenerationSuccess &&
                props.TokenGeneration.TokenGeneration.TokenGenerationApi.TokenGeneration.status
                ){
                    setToken(props.TokenGeneration.TokenGeneration.TokenGenerationApi.TokenGeneration.data.signature)
                }
        }, [props.TokenGeneration.TokenGeneration.TokenGenerationApi.TokenGenerationSuccess])

        useEffect(() => {
            if(props.TokenGeneration.VerifyReferral.VerifyReferralApi.VerifyReferralSuccess && 
                props.TokenGeneration.VerifyReferral.VerifyReferralApi.VerifyReferral.status)
                {
                    if(props.TokenGeneration.VerifyReferral.VerifyReferralApi.VerifyReferral.message == 'Refferal Verify Successfully'){
                        setReferralMessage('Valid Referral Code')
                        setShowReferralMessage(true)
                        setTimeout(function(){
                            setShowReferralMessage(false)
                        }, 5000);
                    }
                }
                if(props.TokenGeneration.VerifyReferral.VerifyReferralApi.VerifyReferralSuccess && 
                    !props.TokenGeneration.VerifyReferral.VerifyReferralApi.VerifyReferral.status)
                    {
                    if(props.TokenGeneration.VerifyReferral.VerifyReferralApi.VerifyReferral.message == 'Refferal Verify Failed'){
                        setReferralMessage('Invalid Referral Code')
                        setShowReferralMessage(true)
                        setTimeout(function(){
                            setShowReferralMessage(false)
                        }, 5000);
                    }
                }
    
        }, [props.TokenGeneration.VerifyReferral.VerifyReferralApi.VerifyReferralSuccess])
        const handleReferralVerification = (e) => {
            e.preventDefault()
            referralInput.current.value= ''
            props.hitVerifyReferralAPI(sessionStorage.getItem('orderId'), referralCode, 2)
        }
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <section className="Business_Business">
                <div className="Business_Header">
                    <div className="Pb_LeftSectiom">
                        <h4>Business</h4>
                        <button className="amtBtn"><span className="PB_RupeeSymbol">&#8377;</span>3999/Year</button>
                    </div>
                    <div  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <form onSubmit={handleReferralVerification}>
                        <input ref={referralInput} type="text" placeholder="Enter Referral Code Here" onChange={(e) => setReferralCode(e.target.value)}/>
                        <button type="submit" style={{marginLeft: '1rem', color: '#fff', background: '#0F2552'}}>Verify</button>
                        </form>
                    </div>

                    <form id="redirectForm" method="post" action="https://www.cashfree.com/checkout/post/submit">
                    <input type="hidden" name="appId" value={appId}/>
                    <input type="hidden" name="orderId" value={sessionStorage.getItem('orderId')} />
                    <input type="hidden" name="orderAmount" value={orderAmount}/>
                    <input type="hidden" name="orderCurrency" value={orderCurrency}/>
                    {/* <input type="hidden" name="orderNote" value=""/> */}
                    <input type="hidden" name="customerName" value={profile && profile.user_name}/>
                    <input type="hidden" name="customerEmail" value={profile && profile.email}/>
                    <input type="hidden" name="customerPhone" value={profile && profile.mobile}/>
                    <input type="hidden" name="returnUrl" value={returnUrl}/>
                    <input type="hidden" name="notifyUrl" value={notifyUrl}/>
                    <input type="hidden" name="signature" value={token}/> 
                    <button type="submit" value="pay" className="purchaseNowBtn">PURCHASE NOW</button>
                    </form>
                </div>
                <div>
                    {
                        showReferralMessage && referralMessage == 'Valid Referral Code' ?
                        <div style={{background: '#DFF2BF', color: '#4F8A10', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <CheckCircleIcon style={{color: '#4F8A10', fontSize: '2.5rem'}} />
                            <div style={{marginLeft: '2rem', fontSize: '1.5rem', fontWeight: 'bold'}}>Valid Referral Code</div>
                            </div> : ''

                    }
                    {
                        showReferralMessage && referralMessage == 'Invalid Referral Code' ?
                        <div style={{background: '#FFD2D2', color: '#D8000C', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <CancelIcon style={{color: '#D8000C', fontSize: '2.5rem'}} />
                            <div style={{marginLeft: '2rem', fontSize: '1.5rem', fontWeight: 'bold'}}>Invalid Referral Code</div>
                            </div> : ''

                    }
                </div>

                <div className="Business_BusinessImg">
                    <img src={BusinessImg} alt="Broken-img" />
                </div>

                <div className="Business_Details">
                <>
                <ul>  
                    <li>Ads on Carousel, Feed page and on Videos.</li>  
                    <li>Benefits of getting the Updated Features.</li>  
                    <li> Business partner Badge. </li>  
                    <li> Provide Gif and poster for their Advertisement.</li> 
                    <li>Monetization Enable.</li>  
                    <li>Certificate of Business Partner from Infoidol.</li>  
                    <li>Unlimited reach.</li> 
                </ul>
                </>
                </div>
            </section>
        </div>
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
        hitMyUserProfileAPI: () => dispatch(hitMyUserProfileAPI()),
        hitVerifyReferralAPI: (orderId, referralCode, subscriptionId) => dispatch(hitVerifyReferralAPI(orderId, referralCode, subscriptionId))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Business)
