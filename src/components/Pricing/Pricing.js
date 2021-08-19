import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';

import { Link } from 'react-router-dom'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import pricingBg from '../../assets/pricingBg.png'

import './Pricing.css'

import uuid from 'react-uuid'


import { hitSubscriptionListAPI } from '../../redux/SubscriptionList/SubscriptionListActions'

const Pricing = (props) => {



    const [subscriptionPriceOne, setSubscriptionPriceOne] = useState()
    const [subscriptionPriceTwo, setSubscriptionPriceTwo] = useState()
    const [subscriptionPriceThree, setSubscriptionPriceThree] = useState()





    useEffect(() => {
        props.hitSubscriptionListAPI()
    }, [])
    useEffect(() => {
    if(props.TokenGeneration.SubscriptionList.SubscriptionListApi.SubscriptionListSuccess && 
        props.TokenGeneration.SubscriptionList.SubscriptionListApi.SubscriptionList.status){
            // console.log('prrr', props.TokenGeneration.SubscriptionList.SubscriptionListApi.SubscriptionList.data)
            const subscriptionData = props.TokenGeneration.SubscriptionList.SubscriptionListApi.SubscriptionList.data
            setSubscriptionPriceOne(subscriptionData[0].price)
            setSubscriptionPriceTwo(subscriptionData[1].price)
            setSubscriptionPriceThree(subscriptionData[2].price)
        }
}, [props.TokenGeneration.SubscriptionList.SubscriptionListApi.SubscriptionListSuccess])

const handleActivatePlan = (price) => {
    sessionStorage.setItem('orderId', uuid())
    sessionStorage.setItem('subscription price', price)
}


    return (
        <section>
            <Navbar/>
            <Sidebar/>
            <div className="PricingContainer" style={{marginLeft: '4vw', overflowX: 'hidden'}}>
                <div className="PricingBg">
                    <img src={pricingBg} className="pricingBgimg" alt="BrokenImg"/>
                    <div className="PricingTitle">
                        <p>Pricing</p>
                        <p>Choose a Plan That's Right for You</p>
                    </div>

                    <div className="PriceCardDetails">
                        <div className="PriceCard">
                            <div className="PriceCard_Creator">
                            <h3> <b><span className="PriceCardTab_Title">&nbsp;&nbsp;&nbsp;Creator&nbsp;&nbsp;&nbsp;</span></b> <br /></h3>
                                    <div className="Pricing_Details">
                                        <span className="rateCard">
                                            <i class="fa fa-inr" aria-hidden="true"></i>
                                            <span>{subscriptionPriceOne}/-</span>
                                        </span>                                    
                                            <p className="perYear">Per Year </p>
                                    </div>

                                    <div className="PlanDetails">
                                        Choose the Plan and get <br /> Exciting Features
                                    </div>

                                    <div className="ActivationButton">                                        
                                            <Link to="/creator-details">
                                            <div className="ActivationButton">
                                            <button 
                                            onClick={() => handleActivatePlan(subscriptionPriceOne)} >
                                                Activate Plan</button>
                                            </div>
                                            </Link>
                                    </div>

                                    <p className="LaunchingSoon">
                                        LAUNCHING OFFER
                                    </p>
                            </div>
                        </div>
                        <div className="PriceCard_CreatorContainer">
                        <div className="PriceCard_Creator">
                                    <h3> <b><span className="PriceCardTab_Title">&nbsp;&nbsp;&nbsp;Affiliate&nbsp;&nbsp;&nbsp;</span></b> <br /></h3>
                                    <div className="Pricing_Details">
                                        <span className="rateCard">
                                            <i class="fa fa-inr" aria-hidden="true"></i>
                                            <span>{subscriptionPriceTwo}/-</span>
                                        </span>                                    
                                            <p className="perYear">Per Year </p>
                                    </div>

                                    <div className="PlanDetails">
                                        Choose the Plan and get <br /> Exciting Features
                                    </div>
                                    <Link to="/affiliate-details">
                                    <div className="ActivationButton_Container">
                                        <button 
                                        onClick= {() => handleActivatePlan(subscriptionPriceTwo)}
                                        style={{
                                            background: '#030826',
                                            outline: 'none',
                                            margin: '2rem 0',
                                            padding: '0.6rem 1.6rem',
                                            borderRadius: '1rem',
                                        }}>Activate Plan</button>
                                    </div>
                                    </Link>

                                    <p className="LaunchingSoon">
                                        LAUNCHING OFFER
                                    </p>
                            </div>
                        </div>
                        <div className="PriceCard">
                        <div className="PriceCard_Creator">
                        <h3> <b><span className="PriceCardTab_Title">&nbsp;&nbsp;&nbsp;Business&nbsp;&nbsp;&nbsp;</span></b> <br /></h3>
                                    <div className="Pricing_Details">
                                        <span className="rateCard">
                                            <i class="fa fa-inr" aria-hidden="true"></i>
                                            <span>{subscriptionPriceThree}/-</span>
                                        </span>                                    
                                            <p className="perYear">Per Year </p>
                                    </div>

                                    <div className="PlanDetails">
                                        Choose the Plan and get <br /> Exciting Features
                                    </div>
                                    <Link to="/business-details">
                                        <div className="ActivationButton">
                                            <button onClick={() => handleActivatePlan(subscriptionPriceThree)}>Activate Plan</button>
                                        </div>
                                    </Link>

                                    <p className="LaunchingSoon">
                                        LAUNCHING OFFER
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


const mapStateToProps = (state) => {
    return{ 
        TokenGeneration: state,
    
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // hitTokenGenerationAPI: (appId, customerName, customerEmail, customerPhone, orderAmount, orderCurrency, returnUrl, notifyUrl, orderId) => dispatch(hitTokenGenerationAPI(appId, customerName, customerEmail, customerPhone, orderAmount, orderCurrency, returnUrl, notifyUrl, orderId)),
        // hitMyUserProfileAPI: () => dispatch(hitMyUserProfileAPI()),
        hitSubscriptionListAPI: () => dispatch(hitSubscriptionListAPI()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pricing)
