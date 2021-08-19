import React, {useEffect, useState } from 'react'
import refer1 from '../../assets/refer1.png'
import refer2 from '../../assets/refer2.png'
import refer3 from '../../assets/refer3.png'
import Wallet from './Wallet'
import Lottery from './Lottery'

import './Refer.css'
import CopyClipboard from './CopyClipboard'

const Refer = (props) => {
    const [referral,setreferral] = useState([]);
    // console.log('props from Refer  Page',props.ApiFromReferralWallet.ReferralWallet.makeReferWalletApi.Wallet)

    useEffect(()=> {
        props.hitreferralWalletAPI()
    }, [])
    // console.log('referal code testing',props.ApiFromReferralWallet.ReferralWallet.makeReferWalletApi.WalletSuccess)

    useEffect(() => {
        setreferral(props.ApiFromReferralWallet.ReferralWallet.makeReferWalletApi.Wallet)
    }, [props.ApiFromReferralWallet.ReferralWallet.makeReferWalletApi.WalletSuccess])
    return (
        <div>
            <section className="Rererral_Container">
                <div className="Refer_header">
                    <h2 style={{fontWeight: 'bold',marginLeft: '2rem'}}>Refer and Earn</h2>
                </div>

                <section className="ReferBody">
                    <div className="LotteryAndAccount">
                        <div className="lotterySection">
                            <Lottery {...props}/>
                        </div>

                        <div className="WalletSection">
                            {/* <Wallet {...props}/> */}
                        </div>
                    </div>
                    <div className="ReferContentWrapper">
                    <h3 style={{fontWeight: 'bold',textAlign: 'center'}}>Steps To Refer</h3>
                        <div className="Refer_contents">
                        <div className="RerefContentB1">
                            <img className="friendReferal" src={ refer1 } alt=""/>
                            <p>
                                <h3 style={{fontWeight: 'bold'}}>Share your link</h3>
                                <p>
                                Invite friends to join Infoidol using your unique link.
                                </p>
                            </p>
                        </div>

                        <div className="RerefContentB2">
                            <p>
                                <h3 style={{fontWeight: 'bold'}}>Give credits</h3>
                                <p>
                                When your friend sign up to Infoidol they will earn 5 rupees.
                                </p>
                            </p>
                        <img className="GiveCredits"  src={ refer2 } alt=""/>
                        </div>

                        <div className="RerefContentB3">
                        <img className="GetCredits"   src={ refer3 } alt=""/>
                            <p>
                                <h3 style={{fontWeight: 'bold'}}>Get credits</h3>
                                <p>
                                When your friend sign up to Infoidol you will earn 5 rupees.
                                </p>
                            </p>
                        </div>
                        </div>

                        <div className="referral_code">
                            <CopyClipboard {...props}/>
                            {/* {
                                referral && referral.map((element,index) => {
                                    return(
                                    <div>
                                        <p>{element.ammount}</p>
                                        <p>{element.date}</p>
                                    </div>
                                    )
                                })
                            } */}

                            {/* <h3 style={{fontWeight: 'bold'}}>Referral Code</h3>
                                <p ref={textAreaRef}>{referral.referal_code}</p>
                                <button>
                                    Copy
                                </button> */}
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Refer
