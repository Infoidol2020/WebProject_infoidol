import React, {useState, useEffect, useRef} from 'react'
import { connect } from 'react-redux'
import { Link, Redirect, useHistory } from 'react-router-dom'

import { userLogin } from '../../redux/Login/LoginActions'
import { hitForgotPasswordApi } from '../../redux/ForgotPassword/ForgotPasswordActions'
import { resendOTPApi } from '../../redux/SendOTP/SendOTPActions'
import { VerifyOTPApi } from '../../redux/VerifyOTP/VerifyOTPActions'
import { fetchChngPswdData } from '../../redux/ChangePassword/ChangePasswordActions'
import { ForgotPasswordVerifyOTPApi } from '../../redux/ForgotPasswordVerifyOTP/ForgotPasswordVerifyOTPActions'
import pageLoader from '../../assets/pageLoader.svg'
import fOrgotImg from '../../assets/forgotPass.jpg'


const Login2 = (props) => {
    const history = useHistory()
    const modalCloseButton = useRef();
    const accountVerifiedModalCloseBtn = useRef();
    const inputUsername = useRef();
    const inputPassword = useRef();
    const [passwordChanged, setPasswordChanged] = useState(false);
    const [userVerified, setUserVerified] = useState(false)
    const [loginDetails, setLoginDetails] = useState({
        username: '',
        password: ''
    })
    const [otp, setOtp] = useState('');
    const [ForgotPassword, setForgotPassword] = useState()
    const [ChangePassword, setChangePassword] = useState({
        password: '',
        confirmPassword: ''
    })

    const [passwordMatch, setPassowrdMatch] = useState(false)

    const handleClick = (e) => {
        e.preventDefault();
        inputUsername.current.value= '';
        inputPassword.current.value= '';
        props.userLogin(loginDetails)
    }
    const handleChange = (e) => {
        // console.log('data', e.target.value)
        setLoginDetails({...loginDetails,
            [e.target.name]: e.target.value })
    }

    const handleChangeForgotPassword = (e) => {
        setForgotPassword(e.target.value)
    }

    const handleForgotPasswordSubmit = (e) => {
        e.preventDefault();
        // if(props.loggedInUserFromAPI){

        // }
        props.hitForgotPasswordApi(ForgotPassword)
    }

    const handleOtpSubmit = (e) => {
        e.preventDefault()
        const number= props.loggedInUserFromAPI.ForgotPassword.ForgotPassword.ForgotPasswordData.data.mobile
        // const number = props.registeredUserFromAPI.UserRegistration.userRegistration.userRegistrationResponse.date.mobile;
        // props.VerifyOTPApi(number, otp)
        props.ForgotPasswordVerifyOTPApi(number, otp)
    }

    const handleChangeOtp = (e) => {
        setOtp(e.target.value);
    }

    const handleResendOTP = () => {
        // console.log('props', props.loggedInUserFromAPI.ForgotPassword.ForgotPassword.ForgotPasswordData.message !== 'Invalid User!');
        props.resendOTPApi(props.loggedInUserFromAPI.ForgotPassword.ForgotPassword.ForgotPasswordData.data.mobile);
    }

    // password change
    const handleChangePasswordInput = (e) => {
        // console.log('e.target.value', e.target.value)
        setChangePassword({...ChangePassword,
            [e.target.name]: e.target.value})
    }

    const handleChangePasswordSubmit = (e) => {
        e.preventDefault();
        // console.log('clicked', )
        if(ChangePassword.password !== ChangePassword.confirmPassword){
            // console.log("passwords doesn't match !!!")
            setPassowrdMatch(true)
        }else{
            setPassowrdMatch(false)
            props.fetchChngPswdData(ChangePassword.password, props.loggedInUserFromAPI.ForgotPassword.ForgotPassword.ForgotPasswordData.data.email)
        }
    }

    const handleChangeVerifyAccountOtp = (e) => {
        setOtp(e.target.value);
    }

    const handleVerifyAccountOtpSubmit = (e) => {
        e.preventDefault()
        const number= props.loggedInUserFromAPI.LoginUser.loginGetApi.LoggedInUserData.data.mobile
        // const number = props.registeredUserFromAPI.UserRegistration.userRegistration.userRegistrationResponse.date.mobile;
        props.VerifyOTPApi(number, otp)
        // props.ForgotPasswordVerifyOTPApi(number, otp)
    }

    const handleVerifyAccountResendOTP = () => {
        props.resendOTPApi( props.loggedInUserFromAPI.LoginUser.loginGetApi.LoggedInUserData.data.mobile);
    }
    

    useEffect(() => {
    // console.log('executed....')
    if( props.loggedInUserFromAPI.LoginUser.loginGetApi.loginSuccess && 
        props.loggedInUserFromAPI.LoginUser.loginGetApi &&
        props.loggedInUserFromAPI.LoginUser.loginGetApi.LoggedInUserData &&
        props.loggedInUserFromAPI.LoginUser.loginGetApi.LoggedInUserData.data
        ){
            localStorage.setItem('WebAppUserKey', props.loggedInUserFromAPI.LoginUser.loginGetApi.LoggedInUserData.data.user_id)
        }
    }, [props.loggedInUserFromAPI.LoginUser.loginGetApi.loginSuccess])

    // console.log('props from login', props.loggedInUserFromAPI.VerifyOtp.VerifyOtp)
    // console.log('progress',props.loggedInUserFromAPI.VerifyOtp.VerifyOtp.VerifyOtpSuccess)
    // console.log('message', props.loggedInUserFromAPI.VerifyOtp.VerifyOtp.VerifyOtpResponse.message)


    useEffect(() => {
        if(props.loggedInUserFromAPI.ChangePassword.ChangePasswordPageGetApi.ChangePasswordPageSuccess &&
            props.loggedInUserFromAPI.ChangePassword.ChangePasswordPageGetApi.allChangepswd.message === "Password Changed Successfully"){
            setPasswordChanged(true)
        
            setTimeout(() => {
                    setPasswordChanged(false)
                    modalCloseButton.current.click()
                    history.push('/login')
            }, 3000)

            // console.log('modalll', modalCloseButton.current)
        }
    }, [props.loggedInUserFromAPI.ChangePassword.ChangePasswordPageGetApi.ChangePasswordPageSuccess])


    useEffect(() => {
        if( props.loggedInUserFromAPI.VerifyOtp.VerifyOtp.VerifyOtpSuccess &&
            props.loggedInUserFromAPI.VerifyOtp.VerifyOtp.VerifyOtpResponse.message == 'Verify Successfully' &&
            props.loggedInUserFromAPI.VerifyOtp.VerifyOtp.VerifyOtpResponse.response_code == '200' &&
            props.loggedInUserFromAPI.VerifyOtp.VerifyOtp.VerifyOtpResponse.status == true ){
            localStorage.setItem('WebAppUserKey',props.loggedInUserFromAPI.VerifyOtp.VerifyOtp.VerifyOtpResponse.data.user_id)
            setUserVerified(true)
            setTimeout(() => {
            setUserVerified(false)
            accountVerifiedModalCloseBtn.current.click();
            history.push('/')
            }, 3000)

        }
        
    }, [props.loggedInUserFromAPI.VerifyOtp.VerifyOtp.VerifyOtpSuccess])
    return (
        <div>
            {
                (props.loggedInUserFromAPI.LoginUser.loginGetApi.loginSuccess && 
                props.loggedInUserFromAPI.LoginUser.loginGetApi.LoggedInUserData.message === 'Login Successfully') ?
                <Redirect to='/'></Redirect>
                : ''
            }

            
            {/* created problem check Again */}
            {/* {
                (props.loggedInUserFromAPI.VerifyOtp.VerifyOtp.VerifyOtpResponse.message &&
                props.loggedInUserFromAPI.VerifyOtp.VerifyOtp.VerifyOtpResponse.message === 'Login Successfully') ? 
                <Redirect to='/'></Redirect>
                : ''
            } */}

            <form className="LoginSecondContainer" onSubmit={handleClick}>
            {
                
                props.loggedInUserFromAPI.LoginUser.loginGetApi.LoggedInUserData.message === 'Invalid User. Please Try Again!' ?
                <>
                    <div style={{
                    marginTop: '2vh',
                    height: '5vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold', 
                    background: '#a52a2a', 
                    color: '#fff'}}>Username or Password is Incorrect</div>
                </> 
                :''
            }

            {
                props.loggedInUserFromAPI.LoginUser.loginGetApi.LoggedInUserData.message === 'Please Veryfied Otp' ?
                <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center',
                background: '#a52a2a',marginTop: '2vh',height: '5vh',}}>
                    <div style={{
                    width: '50%',
                    fontWeight: 'bold', 
                    background: '#a52a2a',
                    marginLeft: '2vw', 
                    color: '#fff'}}>Please verify your account</div>
                    <div style={{width: '50%'}}>
                        <button
                            data-toggle="modal" 
                            data-target="#verifyAccount"
                            type="button" 
                            style={{border: '0', 
                            background: 'transparent',
                            color: '#00FFEE',
                            outline: 'none'
                            }}>Verify Account</button>
                    </div>
                </div> 
                :''
            }
                    <div className="LoginHeading">
                        <h3><b>Login</b></h3>
                    </div>
                    <div className="LoginUserName">
                        <label htmlFor="UserName" > UserName</label>
                        <br/>
                        <input ref={inputUsername} autoComplete="off" placeholder='enter username or phone no.' className="UserName" name="username" id="userName" type="text" onChange={(e) => handleChange(e)} required/>
                    </div>
                    <div className="LoginPassword">
                        <label htmlFor="Password" > Password</label>
                        <br/>
                        <input ref={inputPassword} autoComplete="off" placeholder='enter password' className="Password" name="password" id="Password" type="password" onChange={(e) => handleChange(e)} required/>
                    </div>

                    <div className="forgetpassword_block">
                    <span className="psw"> 
                        <button
                        type="button" 
                        data-toggle="modal" 
                        data-target="#forgetPasswordModal"

                        style={{border: '0', 
                        background: 'transparent',
                        color: '#00FFEE',
                        marginLeft: '22vw',
                        outline: 'none'
                        }} > Forgot password ?</button>
                    </span>
                    </div>
                    <div className="submitSection">
                    <input type="submit"/>
                    </div>

                    <div className="" style={{textAlign: 'center', marginTop: '1.5vh'}}>
                        <p style={{fontWeight: 'bold'}}>Don't have an account  
                        <Link to ='/registration'>
                            <span style={{color: '#00FFEE'}}>Signup?</span>
                            </Link></p>
                    </div>

                </form>


                {/* Verify Account Modal */}

                    <div className="modal fade" id="verifyAccount" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content"
                        style={{
                        boxShadow: '0 3px 9px rgb(0 0 0 / 50%)',
                        outline: '0',
                        background: 'transparent linear-gradient( 242deg, #464988 0%, #3690D4 100%) 0% 0% no-repeat padding-box',
                        border: '5px solid #E0E0E0',
                        borderRadius: '13px',
                        opacity: '1',
                        width: '59rem',
                    }}>
                        <div className="modal-header" style={{padding: '0'}}>
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button  type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" style={{color: 'red',fontSize: 'xxx-large',marginTop: '-16rem'}}>&times;</span>
                            </button>
                        </div>
                        <form className="form-horizontal" onSubmit={handleVerifyAccountOtpSubmit}>
                        <div className="modal-body"  style={{padding: '0px'}}>
                            {
                                props.loggedInUserFromAPI.VerifyOtp.VerifyOtp.VerifyOtpResponse.message === 'Invalid Otp!' ?
                                <div 
                                style={{justifyContent: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                color: 'rgb(247, 141, 139)'}}>
                                    Invalid OTP!!!</div>
                                :''
                            }

                            {
                                userVerified?
                                <div 
                                    style={{justifyContent: 'center', 
                                    height: '5vh', 
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center', 
                                    background: '#556B2F', 
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    marginBottom: '3vh', 
                                    color: '#fff'}}>
                                    Account Verified Successfully...</div>
                                :''
                            }
                                <div className="form-group">
                                    <div className="col-sm-12" style={{textAlign: 'center'}}>
                                        <input
                                        name= "otp-verify-account" 
                                        autocomplete="off"
                                        onChange = {(e) => handleChangeVerifyAccountOtp(e) }
                                        required
                                        style={{width: '23.3rem', 
                                        borderRadius: '6px',
                                        background: '#ddd 0% 0% no-repeat padding-box', 
                                        height: '3.7rem', 
                                        outline: 'none',
                                        }}   placeholder="Enter OTP"/>
                                    </div>
                                </div>
                        </div>
                        <div className="modal-footer" style={{textAlign: 'center',borderTop:' 0px solid #E5E5E5'}}>
                            <button onClick={handleVerifyAccountResendOTP} style={{width: '9vw'}} type="button" className="btn btn-warning">Resend OTP</button>
                            <button style={{width: '9vw'}} className="btn btn-primary">Verify</button>
                            <button ref={accountVerifiedModalCloseBtn} style={{width: '9vw'}} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </form>
                        </div>
                    </div>
                    </div>

                {/* Forgot password Modal */}


                {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#forgetPasswordModal">
                Launch demo modal
                </button> */}

                <div className="modal fade" id="forgetPasswordModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content"
                    style={{
                        boxShadow: '0 3px 9px rgb(0 0 0 / 50%)',
                        outline: '0',
                        background: 'transparent linear-gradient( 242deg, #464988 0%, #3690D4 100%) 0% 0% no-repeat padding-box',
                        border: '5px solid #E0E0E0',
                        borderRadius: '13px',
                        opacity: '1',
                        width: '59rem',
                    }}>
                    <div className="modal-header" style={{textAlign: 'center', padding: '0'}} >
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria="true" style={{color: 'red',fontSize: 'xxx-large',marginTop: '-16rem'}}>&times;</span>
                        </button>
                        <div className="ForgotIcon">
                            <img style={{width:'74%'}}  src={fOrgotImg} alt=""/>
                        </div>
                        <p className="ForgotPass_Title">Forgot Your Password ?</p>
                        <p className="ForgotPass_description">Enter your email or phone no. & we will <br/> send you a OTP to reset your password</p>
                        
                    </div>
                
                    {
                        (props.loggedInUserFromAPI.VerifyOtp.VerifyOtp.VerifyOtpSuccess) &&
                        (props.loggedInUserFromAPI.VerifyOtp.VerifyOtp.VerifyOtpResponse.message !== 'Invalid Otp!')? 
                        <form className="form-horizontal" onSubmit={handleChangePasswordSubmit}>
                        <div className="modal-body"  style={{padding: '0px'}}>
                                <div>
                                    {
                                        passwordMatch ? 
                                        <div 
                                        style={{justifyContent: 'center', 
                                        height: '5vh', 
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center', 
                                        background: '#CD5C5C', 
                                        fontSize: '1.8rem',
                                        marginBottom: '2vh',
                                        fontWeight: 'bold', 
                                        color: '#fff'}}>
                                            Passwords don't match!!!</div>
                                        : ''
                                    }
                                </div>
                                {
                                    passwordChanged ? 
                                    <>
                                    <div style={{justifyContent: 'center', 
                                    height: '5vh', 
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center', 
                                    background: '#556B2F', 
                                    fontSize: '1.5rem',
                                    marginBottom: '2vh',
                                    fontWeight: 'bold', 
                                    color: '#fff'}}>
                                        Password Changed Successfully
                                    </div>
                                    {/* <Redirect to ='/' ></Redirect> */}
                                    </>
                                    : ''

                                }
                                <div className="form-group">
                                    <div className="col-sm-12" style={{textAlign: 'center'}}>
                                        <input
                                        className="Fp_EnterPasswordInput"
                                        type="password"
                                        name= "password" 
                                        onChange = {(e) => handleChangePasswordInput(e) }
                                        required
                                        placeholder="Enter New Password"/>
                                        
                                    </div>
                                    <div className="col-sm-12" style={{textAlign: 'center'}}>
                                        <input
                                        className="Fp_ConfirmPasswordInput"
                                        type="password"
                                        name= "confirmPassword" 
                                        onChange = {(e) => handleChangePasswordInput(e) }
                                        required
                                        placeholder="Confirm Password"/>
                                        
                                    </div>
                                </div>
                        </div>
                        <div className="modal-footer" style={{textAlign: 'center',borderTop:' 0px solid #E5E5E5'}}>
                            <button style={{width: '9vw'}} className="btn btn-primary">Submit</button>
                            <button ref={modalCloseButton} style={{width: '9vw'}} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </form>
                        :
                        (props.loggedInUserFromAPI.ForgotPassword.ForgotPassword.ForgotPasswordSuccess) && 
                        (props.loggedInUserFromAPI.ForgotPassword.ForgotPassword.ForgotPasswordData.message !== 'Invalid User!') ? 
                        <form className="form-horizontal" onSubmit={handleOtpSubmit}>
                        <div className="modal-body"  style={{padding: '0px'}}>
                            {
                                props.loggedInUserFromAPI.VerifyOtp.VerifyOtp.VerifyOtpResponse.message === 'Invalid Otp!' ?
                                <div 
                                style={{justifyContent: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                color: 'rgb(247, 141, 139)'}}>
                                    Invalid OTP!!!</div>
                                :''
                            }
                                <div className="form-group">
                                    <div className="col-sm-12" style={{textAlign: 'center'}}>
                                        <input
                                        name= "otp-forgot-password" 
                                        autocomplete="off"
                                        onChange = {(e) => handleChangeOtp(e) }
                                        value={otp}
                                        required
                                        style={{width: '23.3rem', 
                                        borderRadius: '6px',
                                        background: '#ddd 0% 0% no-repeat padding-box', 
                                        height: '3.7rem', 
                                        outline: 'none',
                                        }}   placeholder="Enter OTP"/>
                                    </div>
                                </div>
                        </div>
                        <div className="modal-footer" style={{textAlign: 'center',borderTop:' 0px solid #E5E5E5'}}>
                            <button onClick={handleResendOTP} style={{width: '9vw'}} type="button" className="btn btn-warning">Resend OTP</button>
                            <button style={{width: '9vw'}} className="btn btn-primary">Verify</button>
                            <button  style={{width: '9vw'}} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </form>
                    : 
                    
                    <form className="form-horizontal" onSubmit={handleForgotPasswordSubmit}>
                        
                        <div className="modal-body"  style={{padding: '0px'}}>
                            {
                                (props.loggedInUserFromAPI.ForgotPassword.ForgotPassword.ForgotPasswordSuccess) && 
                                (props.loggedInUserFromAPI.ForgotPassword.ForgotPassword.ForgotPasswordData.message === 'Invalid User!') ? 
                                <div className="modal-body"  style={{padding: '0px'}}>
                                        <div className="form-group">
                                            <div className="col-sm-12" style={{textAlign: 'center'}}>
                                            <div 
                                                style={{justifyContent: 'center',
                                                display: 'flex',
                                                alignItems:' center',
                                                fontSize: '1.2rem',
                                                fontWeight: 'bold',
                                                color: '#F78D8B'}}>
                                                    Invalid User!!!</div>
                                            </div>
                                        </div>
                                </div>
                                : ""
                            }
                                <div className="form-group">
                                    <div className="col-sm-12" style={{textAlign: 'center'}}>
                                        <input
                                        style={{width: '100%', 
                                        borderRadius: '6px',
                                        height: '3.7rem',
                                        width: '23.3rem',
                                        background: '#ddd 0% 0% no-repeat padding-box',
                                        outline: 'none'}} 
                                        onChange = {(e) => handleChangeForgotPassword(e) }
                                        required
                                        autoComplete="off"
                                        value={ForgotPassword}
                                        name= "username-forgot-password"
                                        placeholder="Enter Username or Phone no."/>
                                    </div>
                                </div>
                        </div>
                        <div className="modal-footer" style={{textAlign: 'center',borderTop:' 0px solid #E5E5E5'}}>
                            <button className="btn btn-info SendLink_FP">Send OTP</button>
                            {/* <button  className="btn btn-secondary" data-dismiss="modal">Close</button> */}
                        </div>
                    </form>
                    }
                    
                    </div>

                </div>
                </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log('state from login', state);
    return{
        loggedInUserFromAPI: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogin: (data) => dispatch(userLogin(data)),
        hitForgotPasswordApi: (data) => dispatch(hitForgotPasswordApi(data)),
        resendOTPApi: (data) => dispatch(resendOTPApi(data)),
        VerifyOTPApi: (number, otp) => dispatch(VerifyOTPApi(number, otp)),
        fetchChngPswdData: (username, password)=> dispatch(fetchChngPswdData(username, password)),
        ForgotPasswordVerifyOTPApi: (number, otp) => dispatch(ForgotPasswordVerifyOTPApi(number, otp))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login2)
