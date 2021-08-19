import React,{ useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'


import InfoidolLogo from '../../assets/InfoidolLogo.png'
import { newUserRegistration } from '../../redux/SignUp/Registration/RegistrationActions'
import { resendOTPApi } from '../../redux/SendOTP/SendOTPActions'
import { VerifyOTPApi } from '../../redux/VerifyOTP/VerifyOTPActions'

import pageLoader from '../../assets/pageLoader.svg'

// import OtpPopup from '../OTP/OtpPopup'


const Signup2 = (props) => {
    const signUpBtn = useRef()
    const signUpModalClose = useRef()
    // console.log('registeredUserFromAPI', props.registeredUserFromAPI)
    // console.log('verify otp', props.registeredUserFromAPI.VerifyOtp.VerifyOtp.VerifyOtpSuccess)
    // console.log('logged in user', props.registeredUserFromAPI.VerifyOtp.VerifyOtp.VerifyOtpResponse.data.user_id)
    // console.log('message',props.registeredUserFromAPI.VerifyOtp.VerifyOtp.VerifyOtpResponse.message)

    // UserRegistration.userRegistration.userRegistrationSuccess
    
    // const [registeredUserData, setRegisteredUserData]= useState(registeredUserFromAPI);

// console.log('invalid otp...', props.registeredUserFromAPI.VerifyOtp.VerifyOtp.VerifyOtpResponse.message);
    const [userFields, setUserFields] = useState({
        name: '',
        email: '',
        mobile: '',
        dob: '',
        password: '',
        reffreral_by: '',
        user_name: '',
        Gender: 'male',
    });
    
    const [otp, setOtp] = useState();

    const handleChange = (e) => {
        // console.log(e.target.value)
        setUserFields({...userFields,
            [e.target.name] : e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signUpBtn.current.click()
        props.newUserRegistration(userFields)
    }
    const handleResendOTP = () => {
        // console.log('props', props, props.registeredUserFromAPI.UserRegistration.userRegistration.userRegistrationResponse.date.mobile);
        props.resendOTPApi(props.registeredUserFromAPI.UserRegistration.userRegistration.userRegistrationResponse.date.mobile);
    }

    const handleVerfiyOtpChange = (e) => {
        // console.log(e.target.value);
        setOtp(e.target.value)
    }
    const handleVerifyOtpSubmit = (e) => {
        // console.log('clicked')
        e.preventDefault()
        const number = props.registeredUserFromAPI.UserRegistration.userRegistration.userRegistrationResponse.date.mobile;
        props.VerifyOTPApi(number, otp)
    }

    useEffect(() => {
        // console.log('executed....')
        if( props.registeredUserFromAPI.VerifyOtp.VerifyOtp.VerifyOtpSuccess && 
            props.registeredUserFromAPI.VerifyOtp.VerifyOtp.VerifyOtpResponse.response_code == '200' &&
            props.registeredUserFromAPI.VerifyOtp.VerifyOtp.VerifyOtpResponse.status === true
            ){
                localStorage.setItem('WebAppUserKey', props.registeredUserFromAPI.VerifyOtp.VerifyOtp.VerifyOtpResponse.data.user_id)
                signUpModalClose.current.click()
            }
        }, [props.registeredUserFromAPI.VerifyOtp.VerifyOtp.VerifyOtpSuccess])
    return (
        <div>
            {
                (props.registeredUserFromAPI.VerifyOtp.VerifyOtp.VerifyOtpSuccess &&
                props.registeredUserFromAPI.VerifyOtp.VerifyOtp.VerifyOtpResponse.message === 'Verify Successfully') ?
                <Redirect to='/'></Redirect>
                : ''
          }
            {/* modal open button after signup click */}
            <button ref={signUpBtn} style={{display: 'none'}}  data-toggle="modal" data-target="#exampleModalCenter">Submit</button>
            <form className="secondContainer" onSubmit={handleSubmit}>

                <div className="RegisterName">
                    <h3>Registration</h3>

                    <div className="signUp">
                        <div className="FullName">
                            <label htmlFor="FullName"  >Full Name</label>
                            <br/>
                            <input className="FullName" autocomplete="off" onChange ={ (e) => {handleChange(e)}} id="FullName" name="name" type="text"  required/>
                        </div>

                        <div className="contact">
                        <label htmlFor="contact" >Contact Number</label>
                                <br/>
                                <input className="phoneNum" autocomplete="off" name="mobile"  onChange ={ (e) => {handleChange(e)}} id="contact" name="mobile" type="tel" required />

                        </div>

                    </div>

                    <div className="signUp">
                        <div className="MailId">
                            <label htmlFor="MailId"  >Mail ID</label>
                            <br/>
                            <input  className="eMail" autocomplete="off"  onChange ={ (e) => {handleChange(e)}} id="MailId" name="email" type="email"  required/>
                        </div>

                        <div className="UserId">
                            <label htmlFor="UserId">User Name</label>
                            <br/>
                            <input className="userId" autocomplete="off" name="user_name"  onChange ={ (e) => {handleChange(e)}} id="UserId" type="text" />
                        </div>

                    </div>

                    <div className="signUp">
                        <div className="Password">
                            <label htmlFor="Password">Password</label>
                            <br/>
                            <input className="password" autocomplete="off" name="password" onChange ={ (e) => {handleChange(e)}} id="Password" type="password"  required/>
                        </div>

                        <div className="Confirm_Password">
                            <label htmlFor="Confirm_Password">Gender</label>
                            <br/>
                            {/* <input className="confirmPassword"  onChange ={ (e) => {handleChange(e)}} id="Confirm_Password" type="password" required /> */}
                            <select name="Gender" onChange ={ (e) => {handleChange(e)}} style={{width: '19vw', height: '4vh', borderRadius :'8px', color: 'black'}} required>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                        </div>

                    </div>

                    <div className="signUp">
                        <div className="InsertLink">
                            <label htmlFor="InsertLink">Insert Referral Code</label>
                            <br/>
                            <input className="referall" autocomplete="off" name="reffreral_by" onChange ={ (e) => {handleChange(e)}} id="InsertLink" type="text" />
                        </div>

                        <div className="DOB">
                            <label htmlFor="DOB">Date Of Birth</label>
                            <br/>
                            <input className="dob" autocomplete="off" name="dob"  onChange ={ (e) => {handleChange(e)}} id="DOB" type="date" required />
                        </div>

                    </div>
                    <div className="signUp">
                        
                        {/* <div className="verify">
                            <button>Verify</button>
                        
                                <br/>
                                <input className="verify"   type="text" placeholder="OTP" required   style={{height:'4vh',marginLeft:'1vw',width:'13vw',}}/>

                        </div> */}
                    </div>
                    <div className="submit" >
                    <input type="submit"  style={{outline: 'none'}}/>
                    {/* <button className="submit"  type="submit">Sign Up</button> */}
                    </div>
                    <div  style={{textAlign:'center', marginTop: '1vh'}}>
                        <p style={{fontWeight: 'bold'}}>Already have an account  <Link to ='/login'>
                            <span style={{color: '#00FFEE'}}>Signin?</span>
                            </Link></p>
                    </div>
                </div>
                </form>
                
                
                <div>
                {/* <button style={{display: 'none'}} ref={btnModal} id="Modalbtn"  type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">open PopUp</button> */}
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content" style={{border:'4px solid tomato'}}>
                    
                        {
                            (props.registeredUserFromAPI.UserRegistration.userRegistration.userRegistrationSuccess) 
                            && (props.registeredUserFromAPI.UserRegistration.userRegistration) 
                            && props.registeredUserFromAPI.UserRegistration.userRegistration.userRegistrationSuccess ? 
                            <>
                            {
                                props.registeredUserFromAPI.UserRegistration.userRegistration.userRegistrationResponse.message === 'Email Allready Exist!' ?
                                <div class="modal-body" style={{textAlign: 'center', }}>
                                    <div style={{font: 'normal normal bold 22px/22px Copperplate Gothic',color: '#2DD2EC'}}>Email Already Registered...</div>
                                    
                                </div>
                                :
                                props.registeredUserFromAPI.UserRegistration.userRegistration.userRegistrationResponse.message === 'Mobile Allready Exist!' ?
                                <div class="modal-body" style={{textAlign: 'center', }}>
                                    <div style={{font: 'normal normal bold 22px/22px Copperplate Gothic',color: '#2DD2EC'}}>Mobile Already Registered...</div>
                                    
                                </div>
                                :

                                <>
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Infoidol</h5>
                                    <img src={InfoidolLogo} alt="Infoidol" style={{height:'9rem',width:'25rem',marginLeft:'13rem'}}/>
                                </div>
                                <form onSubmit= {handleVerifyOtpSubmit}>
                                <div class="modal-body">
                                    {
                                    props.registeredUserFromAPI.VerifyOtp.VerifyOtp.VerifyOtpResponse.message === 'Invalid Otp!' ?
                                    <div class="modal-body" style={{textAlign: 'center', }}>
                                    <div style={{font: 'normal normal bold 22px/22px Copperplate Gothic',color: 'brown'}}>Invalid Otp...</div>
                                                                        
                                </div>
                                        : ''                                
                                    }
                                    <input type="text" class="form-control" 
                                    onChange={(e) => handleVerfiyOtpChange(e)}
                                    id="recipient-name"  
                                    placeholder="Enter OTP"/>
                                </div>
                                <div class="modal-footer">
                                    <button class="btn btn-primary">Verify OTP</button>
                                    <button type="button" class="btn btn-warning" onClick = {() => handleResendOTP()}>Resend OTP</button>
                                    <button ref={signUpModalClose} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                                </form>

                                {/* value={props.registeredUserFromAPI.UserRegistration.userRegistration.userRegistrationResponse.date.otp} */}
                                <div class="modal-footer">

                                </div>
                                </>


                            }
                            
                            </>
                            :
                                <div class="modal-body" style={{textAlign: 'center', }}>
                                    {/* <div style={{font: 'normal normal bold 22px/22px Copperplate Gothic',color: '#2DD2EC'}}>Please Sign Up...</div> */}
                                    <img src ={pageLoader} />
                                </div>
                        }
                        
                    </div>
                </div>
                </div>
            </div>
            
                        
                
            
        </div>
    )
}
const mapStateToProps = (state) => {
    // console.log('state', state.UserRegistration.userRegistration.userRegistrationResponse.date.otp);
    // console.log('propsss', state.UserRegistration.userRegistration.userRegistrationResponse.message === 'Email Allready Exist!')
    return{
        registeredUserFromAPI: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        newUserRegistration: (data) => dispatch(newUserRegistration(data)),
        resendOTPApi: (data) => dispatch(resendOTPApi(data)),
        VerifyOTPApi: (number, otp) => dispatch(VerifyOTPApi(number, otp))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup2)


