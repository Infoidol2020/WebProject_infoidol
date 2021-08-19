import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import TransitEnterexitIcon from '@material-ui/icons/TransitEnterexit';

import './Wallet.css'

const Wallet = (props) => {
    const [transaction,settransaction] = useState([]);
    const [balance,setbalance] = useState([]);
    const handleWalletAmount = (balance) => {
        sessionStorage.setItem('WAmt',balance);


    }
    useEffect(()=> {
        props.hitreferralWalletAPI()
    }, [])
    // console.log('props from wallet  Page',props.ApiFromReferralWallet.ReferralWallet.makeReferWalletApi.Wallet.balance)
    useEffect(()=> {
        if(props.ApiFromReferralWallet.ReferralWallet.makeReferWalletApi.WalletSuccess){
        setbalance(props.ApiFromReferralWallet.ReferralWallet.makeReferWalletApi.Wallet)
        settransaction(props.ApiFromReferralWallet.ReferralWallet.makeReferWalletApi.Wallet.txn_list)
        }
    }, [props.ApiFromReferralWallet.ReferralWallet.makeReferWalletApi.WalletSuccess])
    return (
        <div>
            
                            
                                <div className="WalletContainer">
                                    <div className="Referral_Balance">
                                        <div className="Referral_Amt">
                                            <p className="Referral_Title">Your Balance</p>
                                            <p className="Account_Balance">
                                                <i class="fa fa-inr" aria-hidden="true"></i>
                                                {balance.balance}
                                            </p>
                                            {/* {
                                            balance.balance <= '50' ?
                                                <div>
                                                    <b>Not Have enough Amount to withdraw</b>
                                                </div>
                                                :
                                                <div>

                                                <Link to='referral-withdraw' {...props}>
                                                <button onClick={() => handleWalletAmount(balance.balance)}><b>Withdraw</b></button>
                                            </Link>
                                            </div>


                                            } */}
 <Link to='referral-withdraw' {...props}>
                                                <button onClick={() => handleWalletAmount(balance.balance)}><b>Withdraw</b></button>
                                            </Link>
                                        </div>
                                    </div>
                                    {
                                    transaction && transaction.map((element,index) => {
                                    return(
                                    <div className="Acc_Activity">
                                        <p className="Referral_RecentActivity">Recent Activity</p>
                                        {
                                            element.type == 1 &&
                                            <div className="Wallet_TxnHistory" >
                                            <p className="Wallet_TxnDate" >
                                                <i class="fas fa-external-link-square-alt" 
                                                    style={{fontSize: 'xx-Large',margin: '0rem 1rem 0rem'}}>
                                                </i> 
                                                <span className="TransferredTo">Transferred</span><span className="Account_Txn_date">{element.date}</span>
                                            </p>
                                            <p className="Wallet_TxnAmountDebit" >-{element.ammount}</p>
                                            </div>
                                        }

                                        {
                                        element.type == 2 && 
                                            <div className="Wallet_TxnHistory">
                                                <p className="Wallet_TxnDate" >
                                                <TransitEnterexitIcon style={{fontSize: 'xx-Large',margin: '0rem 1rem 0rem'}}/>
                                                <span>Received</span><br/><span className="Account_Txn_date">{element.date}</span>
                                            </p>
                                                <p className="Wallet_TxnDate"><TransitEnterexitIcon/>{element.date}</p>
                                                <p className="Wallet_TxnAmountCredit">+{element.ammount}</p>
                                            </div>
                                        }

                                        {/* <p className="Wallet_TxnAmount">{element.ammount}</p>
                                        <p className="Wallet_TxnDate">{element.date}</p> */}
                                    </div>
                                )
                            })
                        }
                        </div>
        </div>
    )
}

export default Wallet
