import React, { useRef,useEffect,useState }from 'react'
import { connect } from 'react-redux'
import PaymentIcon from '@material-ui/icons/Payment';
import upiIcon from '../../assets/bhim.png'
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import './ReferralWithdrawal.css'
import {fetchUPIInfomation} from '../../redux/AddUPI/AddUPIAction'
import {hitBeneficiaryList} from '../../redux/BeneficiaryList/BeneficiaryListAction'
import {hitAddBeneficiaryAPI} from '../../redux/AddBeneficiary/AddBeneficiaryActions'
import {hitWithdrawReferralAmountAPI} from '../../redux/WithdrawReferralAmount/WithdrawReferralAmountActions'
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { indexOf } from 'lodash';



const ReferralWithdrawal = (props) => {
    console.log('props from withdtawal ',props)
    const AddBeneficiaryCarddetails = useRef()
    const AddBeneficiaryUpidetails = useRef()
    const CarddetailsBtn =useRef()
    const UpidetailsBtn =useRef()


    // const handleelement = (e) => {
    //     console.log('eee', e)
    //    Arr[e] = 'bvbbvvb'
        
    
    // }
    const handleAddBeneficiaryCard = () => {
        AddBeneficiaryCarddetails.current.style.display="block"
        CarddetailsBtn.current.style.background="#31708f"
        CarddetailsBtn.current.style.color="white"
        UpidetailsBtn.current.style.color="black"
        UpidetailsBtn.current.style.background="white"
        AddBeneficiaryUpidetails.current.style.display="none"
    }
    const handleAddBeneficiaryUpi = () => {
        AddBeneficiaryUpidetails.current.style.display="block"
        AddBeneficiaryCarddetails.current.style.display="none"
        CarddetailsBtn.current.style.background="white"
        UpidetailsBtn.current.style.background="#31708f"
        UpidetailsBtn.current.style.color="white"
        CarddetailsBtn.current.style.color="black"
    }
    useEffect(() => {
        AddBeneficiaryUpidetails.current.style.display ="none"
        AddBeneficiaryCarddetails.current.style.display ="none"
    }, [])
    const [UserAddBeneficiaryField,setUserAddBeneficiaryField] = useState({
        name: '',
        email: '',
        phone: '',
        bankAccount: '',
        ifsc: '',
        address1: '',

    })
    const [UserDataUPI, setUserDataUPI] = useState({
        name: '',
        email: '',
        phone: '',
        vpa: '',
        address1: '',
    });
    

    const handleAddUpi = (e) => {
        console.log(e.target.value)
        setUserDataUPI({...UserDataUPI,
            [e.target.name] : e.target.value })
    }
    const handleSubmitUpiForm = (e) => {
        e.preventDefault();
        // signUpBtn.current.click()
        props.fetchUPIInfomation(UserDataUPI)
    }

    const handleaddBeneficiary = (e) => {
        console.log(e.target.value)
        setUserAddBeneficiaryField({...UserAddBeneficiaryField,
            [e.target.name] : e.target.value })
    }
    const handlesubmitBeneficiaryform = (e) => {
        e.preventDefault();
        // signUpBtn.current.click()
        props.hitAddBeneficiaryAPI(UserAddBeneficiaryField)
    }

    const handleFinalWithdraw = (id,transferMode) => {

        props.hitWithdrawReferralAmountAPI(id,sessionStorage.getItem('WAmt'), transferMode)
        console.log('withdrawl api',id, sessionStorage.getItem('WAmt'), transferMode)
    }
    useEffect(()=> {
        props.hitBeneficiaryList()
    }, [])
    return (
        <div className="RW-beneficiery-container">
                    <Sidebar/>
                    <Navbar/>
            <div className="RW-beneficiery-withdrawal-container">
            <section className="RW-add-beneficiery-btn-wrapper">
            <div  onClick={handleAddBeneficiaryCard} style={{cursor: 'pointer'}} className="RW-Add-Beneficiary-Card">
                <button ref={CarddetailsBtn}  className="RW-Add-Beneficiary-Card-buttons btns-beneficiary"><PaymentIcon/>Add Card</button>
            </div>

            <div onClick={handleAddBeneficiaryUpi} className="RW-Add-Beneficiary-Upi" style={{cursor: 'pointer'}}>
                <button ref={UpidetailsBtn} className="RW-Add-Beneficiary-Upi-buttons btns-beneficiary"><img className="RW-Add-Beneficiary-Upi-Icon" src={upiIcon} alt="upi" /> Add Upi</button>
            </div>
            <section className="RW-beneficiery-list">
            {
                    props.ApiFromBeneficiary.BeneficiaryList.beneficiaryListGetApi.beneficiaryListSuccess &&
                    props.ApiFromBeneficiary.BeneficiaryList.beneficiaryListGetApi.beneficiaryList.data &&
                    props.ApiFromBeneficiary.BeneficiaryList.beneficiaryListGetApi.beneficiaryList.data.data.map((element) => {
                        console.log('elementelement'.element)
                        return(
                            
                            <div>
                                {
                                    element.bankAccount == '' ?
                                    <div className="RW-beneficieryList-info">
                                        <p >{ element.name} &nbsp;<b>Phone No.-</b> {element.phone} &nbsp; <b>UPI id-</b> {element.vpa}
                                            <button className="RW-beneficiery-Withdrawal-btn" onClick={() => handleFinalWithdraw(element.id,element.transferMode)}><CallReceivedIcon style={{fontSize: 'x-large'}}/></button>
                                        </p>
                                    </div>
                                    :
                                    <div className="RW-beneficieryList-info">
                                        <p>{ element.name} &nbsp;<b>Phone No.-</b> {element.phone} &nbsp; <b>ACC NO.-</b> {element.bankAccount}
                                            <button className="RW-beneficiery-Withdrawal-btn" onClick={() => handleFinalWithdraw(element.id,element.transferMode)}><CallReceivedIcon style={{fontSize: 'x-large'}}/></button>
                                        </p>
                                    </div>
                                }
                                
                            </div>
                        )
                    })
                }
            </section>
            </section>
            
            <section className="RW-add-beneficiary-details-wrapper">
                <div className="RW-add-beneficiary-card-details" ref={AddBeneficiaryCarddetails}>
                    <form className="BeneficiaryContainer"  onSubmit={handlesubmitBeneficiaryform}>
                        <div className="RW-beneficiary-forms RW-beneficiary-forms-CARD">
                            <h3>Beneficiary Card Details</h3>
                            <div className="Name">
                                {/* <label htmlFor="Name"  >Name</label> */}
                                <br/>
                                <input className="Name" placeholder="Your Name" autocomplete="off" onChange ={ (e) => {handleaddBeneficiary(e)}} id="Name" name="name" type="text"  required/>
                            </div>
                            <div className="Mail">
                                    {/* <label htmlFor="Mail"  >email</label> */}
                                    <br/>
                                    <input  className="EMail" placeholder="Your E-mail"  autocomplete="off"  onChange ={ (e) => {handleaddBeneficiary(e)}} id="Mail" name="email" type="email"  required/>
                            </div>
                            <div className="contact">
                                {/* <label htmlFor="contact" >PHONE Number</label> */}
                                        <br/>
                                        <input className="phoneNum" placeholder="Your Mobile Number"  autocomplete="off" name="phone"  onChange ={ (e) => {handleaddBeneficiary(e)}} id="contact"  type="tel" maxLength="10" required />
                            </div>

                            <div className="BankAccount">
                                {/* <label htmlFor="BankAccount" >BankAccount</label> */}
                                        <br/>
                                        <input className="Bankaccount" placeholder="Your Account No."  autocomplete="off" name="bankAccount"  onChange ={ (e) => {handleaddBeneficiary(e)}} id="bankAccount"  type="input"  required />
                            </div>

                            <div className="IFSC">
                                {/* <label htmlFor="IFSC" >ifsc</label> */}
                                        <br/>
                                        <input className="ifsc" placeholder="Your IFSC code"  autocomplete="off" name="ifsc"  onChange ={ (e) => {handleaddBeneficiary(e)}} id="ifsc"  type="input"  required />
                            </div>

                            <div className="Address1">
                        {/* <label htmlFor="Address1" >address1</label> */}
                                <br/>
                                <input className="Address"  placeholder="Your address"  autocomplete="off" name="address1"  onChange ={ (e) => {handleaddBeneficiary(e)}} id="Address1" type="input" required />
                        </div>
                        <div className="submit" >
                            <input type="submit"  style={{outline: 'none'}}/>
                        </div>

                        </div>

                    </form>
                </div>
                <div className="RW-add-beneficiary-upi-details" ref={AddBeneficiaryUpidetails}>
                <form className="UPIContainer" onSubmit={handleSubmitUpiForm}>
                <div className="RW-beneficiary-forms RW-beneficiary-forms-UPI">
                    <h3 >Beneficiary UPI Details</h3>
                    <div className="Name">
                            {/* <label htmlFor="Name"  >Name</label> */}
                            <br/>
                            <input className="Name" placeholder="Your Name" autocomplete="off" onChange ={ (e) => {handleAddUpi(e)}} id="Name" name="name" type="text"  required/>
                    </div>
                    <div className="Mail">
                    {/* <label htmlFor="Mail"  >email</label> */}
                            <br/>
                            <input  className="EMail" placeholder="Your E-mail"  autocomplete="off"  onChange ={ (e) => {handleAddUpi(e)}} id="Mail" name="email" type="email"  required/>
                    </div>
                    <div className="contact">
                        {/* <label htmlFor="contact" >PHONE Number</label> */}
                                <br/>
                                <input className="phoneNum" placeholder="Your Mobile Number"  autocomplete="off" name="phone"  onChange ={ (e) => {handleAddUpi(e)}} id="contact"  type="tel" maxLength="10" required />
                        </div>
                        <div className="VPA">
                            {/* <label htmlFor="VPA">vpa</label> */}
                            <br/>
                            <input className='vpa'  placeholder="Your UPI id - example@ybl"  autocomplete="off" onChange={(e) => {handleAddUpi(e)}} id="VPA" name="vpa" type="input" required/>
                        </div>
                        <div className="Address1">
                        {/* <label htmlFor="Address1" >address1</label> */}
                                <br/>
                                <input className="Address"  placeholder="Your address"  autocomplete="off" name="address1"  onChange ={ (e) => {handleAddUpi(e)}} id="Address1" type="input" required />
                        </div>
                        <div className="submit" >
                            <input type="submit"  style={{outline: 'none'}}/>
                        </div>
                </div>
                </form>   
                    </div>
            </section>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    // console.log('stateeeeee from refer page', state);
    return{ 
        ApiFromBeneficiary: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // hitreferralWalletAPI : () => dispatch(hitreferralWalletAPI()),
        // hitlotteryAPI : (lotteryType) => dispatch(hitlotteryAPI(lotteryType)),
        fetchUPIInfomation :(UserdataUPI) => dispatch(fetchUPIInfomation(UserdataUPI)),
        hitBeneficiaryList :() => dispatch(hitBeneficiaryList()),
        hitAddBeneficiaryAPI :(UserAddBeneficiaryData) => dispatch(hitAddBeneficiaryAPI(UserAddBeneficiaryData)),
        hitWithdrawReferralAmountAPI :(beneId, amount, transferMode) => dispatch( hitWithdrawReferralAmountAPI(beneId, amount, transferMode))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ReferralWithdrawal)
// export default ReferralWithdrawal
