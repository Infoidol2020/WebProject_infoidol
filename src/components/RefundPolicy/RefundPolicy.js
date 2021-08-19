import React from 'react'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Footer from '../NewFooter'

import './RefundPolicy.css'

const RefundPolicy = () => {
    return (
        <div>
        <Sidebar />
        <Navbar />
        <div className="RefundContainer" style={{marginLeft: '4vw', marginTop: '13vh',}}>
            <div className="RefundBoundary" style={{marginLeft: '4vw', marginRight: '4vw'}}>
            <h3><strong>Refund policy</strong></h3>
            <p style={{fontSize: '1.8rem'}}>Since the Website offers non-tangible, irrevocable goods we do not provide refunds after 
                the product is purchased, which you acknowledge prior to purchasing any product on the Website. 
                Please make sure that you've carefully read service description before making a purchase. </p>
            
            <h3><strong>Contacting Us</strong></h3>
            <p style={{fontSize: '1.8rem'}}>If you would like to contact us concerning any matter relating to this Refund Policy, 
                you may send an email to <b>Ask@infoidol.com</b> </p>
            <p style={{marginTop: '8vh'}}>This document was last updated on May 8, 2021</p>
            </div>
        </div>
        <div style={{marginTop: '19.2vh', marginLeft: '0.05vw'}}>
            <Footer  />
        </div>
        </div>
    )
}

export default RefundPolicy
