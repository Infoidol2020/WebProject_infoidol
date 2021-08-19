import React, {useEffect, useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
// import { Redirect } from 'react-router'
import { useHistory } from 'react-router-dom';
// import uuid from 'react-uuid'

import SearchIcon from '@material-ui/icons/Search';
// import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
// import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
// import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
// import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import NotificationsIcon from '@material-ui/icons/Notifications';



import { fetchConnectionRequestedList } from '../../redux/ConnectionRequestedList/ConnectionRequestedListActions'
import { hitconnectConfirmAPI } from '../../redux/Connect/ConnectActions'
import { hitconnectRejectAPI } from '../../redux/Connect/ConnectActions'
import { searchData } from '../../redux/Search/SearchActions'
import { hitNotificationAPI } from '../../redux/Notification/NotificationActions'
import { fetchUserProfile } from '../../redux/UserProfile/UserProfileActions'// fetch other users profile
import { fetchUpdatedMobEmail } from '../../redux/UpdateMob&Email/UpdateMob&EmailAction';
import { fetchVerifiedUpdatedOTP } from '../../redux/VerifyUpdatedData/VerifyUpdatedDataAction';
import { fetchAllRecmBlogs } from '../../redux/BlogShowRecommended/ActionsRecommendedBlogs'
import { fetchAllVideoView } from '../../redux/VideoViewPage/VideoPageViewAction'
import { fetchMusicCommentList } from '../../redux/MusicDetailPage/ActionMusic'; //music detail page api
import { fetchAllPictureView } from '../../redux/PictureViewPage/PictureViewPageAction';
import { hitMyUserProfileAPI } from '../../redux/MyUserProfile/MyUserProfileActions'// fetch my profile




import pageLoader from '../../assets/pageLoader.svg'
import './ContentBlock.css'

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';


const Contentblock = (props) => {
    const [connectionList, setConnectionList] = useState()
    const [searchData, setSearchData] = useState()
    const [notificationList, setNotificationList] = useState()
    const [userProfileInfo, setUserProfileInfo] = useState()
    const history = useHistory();
    const ModalClose = useRef()
    const connectionRequestModalCloseBtn = useRef()

    // LogOut Popup
    const[changeMobEmail,setchangeMobEmail] = useState({
        enteredMobEmailData: '',
    });
    const[otp,setotp] = useState({
        enterOTP: '',
    });
    const [message, setMessage] = useState(false)
    const[updateMsz,setupdateMsz] = useState(false)
    const [invalidOtp,setinvalidOtp] = useState(false)
    const [resendOtp,setresendOtp] = useState(false)
    const emailModalCloseBtn = useRef()
    useEffect(() => {
        props.hitMyUserProfileAPI()
    }, [])

    // console.log('props from content block', props.Contentblock.connect.connectConfirmApi.connectConfirmInProgress, 
    // props.Contentblock.connect.connectRejectApi.connectRejectInProgress)

    const confirmConnection = (profile_id) => {
        props.hitconnectConfirmAPI(profile_id)
    }

    const rejectConnection = (profile_id) => {
        props.hitconnectRejectAPI(profile_id)
    }

    const handleChangeSearch = (e) => {
        // console.log(e.target.value)
        setSearchData(e.target.value)
    }

    const handleSubmitSearchData = (e) => {
        // console.log('pwwwwwwwwwwwwwwww');
        e.preventDefault();
        sessionStorage.setItem('searchQuery', searchData)
        props.searchData(searchData)
        history.push('/search')
    }

    // connection requests (to check the profile)
    const handleConnectionRequestProfileClick = (profile_id) => {
        localStorage.setItem('userProfileId', profile_id)
        props.fetchUserProfile(localStorage.getItem('userProfileId'))
        connectionRequestModalCloseBtn.current.click()
    }

        // notifications (to check the profile)
    const handleNotificationProfileClick = (profile_id) => {
        ModalClose.current.click()
        // console.log('clickedqwe', profile_id)
            localStorage.setItem('userProfileId', profile_id)
            props.fetchUserProfile(localStorage.getItem('userProfileId'))
    }

    //notifications (to check the page)
    const handleNotificationPageClick = (data_type, data_id, sender_id) => {
        // console.log('senderrr', sender_id)
        ModalClose.current.click()
        localStorage.setItem('id', data_id);
        localStorage.setItem('TYPE', data_type);
        localStorage.setItem('UI', localStorage.getItem('WebAppUserKey')); 
        // setting the UI equal to the WebAppUserKey to satisfy the condition in view pages
        // i-e, not to show the buttons like (connect, subscribe, like, and customize) to the user who views his/her own content


        if(data_type == '1'){
            props.fetchAllVideoView(data_id);
            history.push('/video-details');
            window.scrollTo(0,0);
        }
        if(data_type == '2'){
            props.fetchMusicCommentList(data_id);
            history.push('/audio-details');
            window.scrollTo(0,0);
        }
        if(data_type == '3'){
            props.fetchAllPictureView(data_id);
            history.push('/picture-details');
            window.scrollTo(0,0);
        }
        if(data_type == '4'){
            props.fetchAllRecmBlogs(data_id);
            history.push('/blog-details');
            window.scrollTo(0,0);
        }
    }


    // update mob and email work process
    const handleChangeMobEmail = (e) => {
        // console.log(e.target.value)
        setchangeMobEmail({...changeMobEmail,
            [e.target.name] : e.target.value})
    }
    const handleChangeOTP = (e) => {
        // console.log(e.target.value)
        setotp({...otp,
            [e.target.name] : e.target.value})
    }
    const handlePhoneSubmit =(e) => {
        e.preventDefault();
        let type = 2; 
        props.fetchUpdatedMobEmail(changeMobEmail.enteredMobEmailData,type)
        // console.log('clicked type nd data',changeMobEmail.enteredMobEmailData,type)
    }
    const handleEmailSubmit =(e) => {
        e.preventDefault();
        let type = 1;
        props.fetchUpdatedMobEmail(changeMobEmail.enteredMobEmailData,type)
        // console.log('clicked type nd data',changeMobEmail.enteredMobEmailData,type)
    }
    const handleOTPSubmitEmail =(e) => {
        e.preventDefault();
        let type = 1;
        // console.log('clicked, type',type)
        props.fetchVerifiedUpdatedOTP(changeMobEmail.enteredMobEmailData,type,otp.enterOTP)
    }
    const handleOTPSubmitMobile =(e) => {
        e.preventDefault();
        let type = 2;
        // console.log('clicked, type',type)
        props.fetchVerifiedUpdatedOTP(changeMobEmail.enteredMobEmailData,type,otp.enterOTP)
    }
    const handleSubmitLogout =(e) => {
        // console.log('logout handle')
        localStorage.setItem('WebAppUserKey', "")
        localStorage.clear()
        // console.log('WebAppUserKey', localStorage.getItem('WebAppUserKey'))
        if(localStorage.getItem('WebAppUserKey') === null){
        history.push('/')
        }
        window.location.reload();

    }
    const handleResendOtpEmail=(e) => {
        // console.log('resend otp Email')
        let type = 1;
        props.fetchVerifiedUpdatedOTP(changeMobEmail.enteredMobEmailData,type,otp.enterOTP)
    }
    const handleResendOtpPhone=(e) => {
        // console.log('resend otp Phone')
        let type = 2;
        props.fetchVerifiedUpdatedOTP(changeMobEmail.enteredMobEmailData,type,otp.enterOTP)
    }

    useEffect(() => {
        props.hitNotificationAPI()
    }, [])
    useEffect(() => {
        if(props.Contentblock.myUserProfile.myUserProfileApi.myUserProfileSuccess){
        // console.log('exxxxx1111111111122',props.Contentblock.myUserProfile.myUserProfileApi.myUserProfileSuccess,
        //  props.Contentblock.myUserProfile.myUserProfileApi.myUserProfile)
            setUserProfileInfo(props.Contentblock.myUserProfile.myUserProfileApi.myUserProfile)
        }
    }, [props.Contentblock.myUserProfile.myUserProfileApi.myUserProfileSuccess])
// console.log("snjsnjsjns",props.Contentblock.myUserProfile.myUserProfileApi.myUserProfileSuccess,props.Contentblock.myUserProfile.myUserProfileApi.myUserProfile)
    useEffect(() => {
        if(props.Contentblock.UpdatedMobEmail.UpdateMobEmailGetApi.UpdateMobEmailSuccess){
            setMessage(!message)
            setTimeout(() => {
                setMessage(false)
            }, 5000);
        }
    }, [props.Contentblock.UpdatedMobEmail.UpdateMobEmailGetApi.UpdateMobEmailSuccess])
    // console.log('otp successsssssssssssssssssssssss',props.Contentblock.UpdatedMobEmail.UpdateMobEmailGetApi.UpdateMobEmailSuccess)
    useEffect(() => {
        if(props.Contentblock.VerifyUpdatedData.VerifyUpdatedDataGetApi.allVerifyUpdatedData.message == "Data Updated Successfully"){
            setupdateMsz(!updateMsz)
            setTimeout(() => {
                setupdateMsz(false)
                emailModalCloseBtn.current.click()
            }, 5000);
        }
    }, [props.Contentblock.VerifyUpdatedData.VerifyUpdatedDataGetApi.VerifyUpdatedDataSuccess])
    // console.log('otp email',props.UpdateMobEmail.VerifyUpdatedData.VerifyUpdatedDataGetApi.allVerifyUpdatedData.message == "Invalid Otp",props.UpdateMobEmail.VerifyUpdatedData.VerifyUpdatedDataGetApi.VerifyUpdatedDataSuccess)
// console.log('zzzzzzzzzzzzzzzzzzzz',props.Contentblock.VerifyUpdatedData.VerifyUpdatedDataGetApi.VerifyUpdatedDataSuccess)
    useEffect(() => {
        if(props.Contentblock.VerifyUpdatedData.VerifyUpdatedDataGetApi.allVerifyUpdatedData.message == "Invalid Otp"){
            setinvalidOtp(!invalidOtp)
            setTimeout(() => {
                setinvalidOtp(false)
                emailModalCloseBtn.current.click()
            }, 5000);
        }
    }, [props.Contentblock.VerifyUpdatedData.VerifyUpdatedDataGetApi.allVerifyUpdatedData.message == "Invalid Otp"])
    useEffect(() => {
        props.fetchConnectionRequestedList()
    }, [])

    useEffect(() => {
        if(props.Contentblock.ConnectionRequestedList.connectionRequestedListGetApi.connectionListSuccess &&
            props.Contentblock.ConnectionRequestedList.connectionRequestedListGetApi.connectionList.response_code === '200'){
            setConnectionList(props.Contentblock.ConnectionRequestedList.connectionRequestedListGetApi.connectionList.data)
        }
    }, [props.Contentblock.ConnectionRequestedList.connectionRequestedListGetApi.connectionListSuccess])

    useEffect(() => {
        props.fetchConnectionRequestedList()

    }, [ props.Contentblock.connect.connectConfirmApi.connectConfirmSuccess,
        props.Contentblock.connect.connectRejectApi.connectRejectSuccess])



    useEffect(() => {
    if(props.Contentblock.Notification.NotificationApi.Notification.response_code && 
        props.Contentblock.Notification.NotificationApi.NotificationSuccess) {
            setNotificationList(props.Contentblock.Notification.NotificationApi.Notification.data)
    }
    }, [props.Contentblock.Notification.NotificationApi.NotificationSuccess])

    // console.log('props from content block', props.Contentblock.Notification.NotificationApi.NotificationSuccess)
    // console.log('poooo',props.Contentblock.Notification.NotificationApi.Notification.data)

    return (
        <>

            <div className="search_wrapper">
                    <form onSubmit={handleSubmitSearchData}>
                    <section className="searchBar">
                        <div style={{display: 'flex',}}>
                        <input style={{borderRight: '0'}} className="search-input-box" required type="search" name="search" style={{color: '#fff'}} 
                        onChange={(e) => handleChangeSearch(e)}  placeholder="Search Your Passion"/>
                        <span style={{border:  'solid 2px #fff', borderLeft: '0'}}>
                            <button className="CB_Searchiconnn" style={{background: 'transparent', border: '0', outline: 'none'}}>
                                <SearchIcon style={{color: '#fff'}} id="iconnn"/>
                            </button>
                        </span>
                        </div>
                    </section>
                    </form>

                <div className="CB_profile_Wrapper" 
                style={{display: 'flex',marginRight: '7vw',}}>

                    {/* connection request modal */}
                    <div>
                {
                    (localStorage.getItem('WebAppUserKey') === '' || localStorage.getItem('WebAppUserKey') === null ||
                    localStorage.getItem('WebAppUserKey') == undefined) ? 
                    ''
                    : 
                        <>
                        
                        <PersonAddIcon  className="CB_RequestList"  id="iconnn"
                        // style={{color: '#fff', fontSize: '2.2rem', cursor: 'pointer', outline: 'none'}}
                        data-toggle="modal" data-target="#connectionRequestModal" data-backdrop="true"/>                        

                        <div class="modal fade" id="connectionRequestModal" role="dialog" >
                        <div class="modal-dialog" role="document">
                            <div class="modal-content CB_friendReqModal" 
                            // style={{marginTop: '10vh', width: '25vw', marginLeft: '40vw', background: '#555'}}
                            >
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel" style={{color: '#fff'}}>Connection Requests</h5>
                                <button ref={connectionRequestModalCloseBtn} type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" style={{color: '#fff',fontSize:'3rem'}}>&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                            <div className="connection-list-scrollable" style={{width: '100%' ,padding:'1rem', background :'#555',height: '50vh', overflowY: 'scroll',}}>
                            
                            {
                                props.Contentblock.ConnectionRequestedList.connectionRequestedListGetApi.connectionListInProgress ? 
                                <img style={{background: '#555', color: '#555'}} src ={pageLoader} />
                                :
                            (props.Contentblock.ConnectionRequestedList.connectionRequestedListGetApi.connectionList.data &&
                            props.Contentblock.ConnectionRequestedList.connectionRequestedListGetApi.connectionList.data.length > 0)  ? 
                            props.Contentblock.ConnectionRequestedList.connectionRequestedListGetApi.connectionList.data.map((element, index) => {
                                    return(
                                        <>
                                        <div 
                                        key ={index}
                                        style={{display: 'flex',  alignItems: 'center', height: '10vh',}}>
                                        <Link to='/userprofile'>
                                            <div 
                                            onClick={() => handleConnectionRequestProfileClick(element.profile_id)}
                                            style={{display: 'flex',alignItems: 'center'}}>
                                                <div>
                                                    <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src={element.profile_pic} style={{height: '7rem', width: '7rem', borderRadius: '50%' }} />
                                                </div>
                                                <div className="CB_ConnectionRequestListWrapper"  style={{marginLeft: '1vw'}}>
                                                    <p className="CB_ConnectionRequestList" style={{color: '#fff'}}>{element.name} sent you a connection request</p>
                                                </div>
                                            </div>
                                        </Link>
                                            <div>
                                                <button 
                                                onClick={() => confirmConnection(element.profile_id)}
                                                style={{background: 'transparent linear-gradient(228deg, #3C34AC 0%, #1E9FC8 100%)', 
                                                borderRadius: '50%',
                                                height: '4rem',
                                                width: '4rem',
                                                border: '0'}}> 
                                                    <CheckIcon style={{color: '#fff', fontSize: '3rem'}} />
                                                </button>
                                            </div>
                                            <div>
                                                <button 
                                                onClick={() => rejectConnection(element.profile_id)}
                                                style={{background: 'transparent linear-gradient(228deg, #3C34AC 0%, #1E9FC8 100%)', 
                                                borderRadius: '50%',
                                                height: '4rem',
                                                width: '4rem',
                                                border: '0',
                                                marginLeft: '1vw'}}> 
                                                    <CloseIcon style={{color: '#fff', fontSize: '3rem'}} />
                                                </button>
                                            </div>
                                        </div>
                                        <hr />
                                        </>
                                    )
                                })
                                : 
                                <div style={{
                                border: 'solid 1px red', 
                                background: 'brown', 
                                color: '#fff', 
                                height: '5vh', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                fontWeight: 'bold'}}>
                                    No Connection Requests...
                                </div>
                            }
                            </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        </>

    


                }
                </div>

{/* Notification Modal */}
                <div className="CB_ProfileDDModal">
                {
                    localStorage.getItem('WebAppUserKey') === '' || localStorage.getItem('WebAppUserKey') === null ? 
                    ''
                    : 
                        <>

                        <NotificationsIcon className="CB_NotificationIcon" id="iconnn"
                        // style={{color: '#fff',fontSize: '2.2rem',  outline: 'none', cursor: 'pointer'}} 
                        data-toggle="modal" data-target="#NotificationModal"/>

                        <div class="modal fade" id="NotificationModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content CB_notificationModal"
                            // style={{marginTop: '10vh', width: '25vw', marginLeft: '40vw', background: '#555'}}
                            >
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel" style={{color: '#fff'}}>Notifications</h5>
                                <button type="button" ref={ModalClose} class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" style={{color: '#fff'}}>&times;</span>
                                </button>
                            </div>
                            <div class="modal-body" >
                            <div  className="connection-list-scrollable" style={{width: '100%', background: '#555' ,padding:'1rem',height: '50vh', overflowY: 'scroll',}}>
                                                    
                                                    {
                                                        (notificationList && notificationList.length > 0) ?
                                                        notificationList && notificationList.map((notification, notificationIndex) => {
                                                            // console.log('notiiiiiification', notification.sender_id)
                                                            return(
                                                                <>
                                                                {
                                                                (notification.type === '1' || 
                                                                notification.type === '2' || 
                                                                notification.type === '3' || 
                                                                notification.type === '5' ) &&
                                                                <Link to='/userprofile'>
                                                                    <div 
                                                                    onClick = {() => handleNotificationProfileClick(notification.sender_id)}
                                                                    key ={notificationIndex} >
                                                                        <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} 
                                                                        style={{width: '4rem', 
                                                                        height: '4rem', 
                                                                        borderRadius: '50%',
                                                                        marginRight: '1vw'}} src ={notification.sender_pic} />
                                                                        <span style={{color: '#fff'}}>{notification.message}</span>
                                                                    </div>
                                                                </Link>
                                                                }
                                                                {
                                                                    notification.type === '4' && 
                                                                    <div 
                                                                    style={{cursor: 'pointer'}}
                                                                    onClick = {() => 
                                                                        handleNotificationPageClick(notification.data_type, 
                                                                            notification.data_id,
                                                                            notification.sender_id)}
                                                                    key ={notificationIndex} >
                                                                        <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} 
                                                                        style={{width: '4rem', 
                                                                        height: '4rem', 
                                                                        borderRadius: '50%',
                                                                        marginRight: '1vw'}} src ={notification.sender_pic} />
                                                                        <span style={{color: '#fff'}}>{notification.message}</span>
                                                                    </div>

                                                                }
                                                                <hr />
                                                                </>
                                                            )
                                                        })
                                                        :
                                                        <div style={{
                                                            border: 'solid 1px red', 
                                                            background: 'brown', 
                                                            color: '#fff', 
                                                            height: '5vh', 
                                                            display: 'flex', 
                                                            alignItems: 'center', 
                                                            justifyContent: 'center',
                                                            fontWeight: 'bold'}}>
                                                                No New Notifications...
                                                            </div>
                                                    }
                                                    
                                                    </div>
                            </div>

                            </div>
                        </div>
                        </div>

                        </>
                }
                </div>               
                {/* dropdown Logout */}
                <div style={{marginLeft: '1.5vw'}}>
                            {
                    (localStorage.getItem('WebAppUserKey') == '' || localStorage.getItem('WebAppUserKey') == null) ?
                    <Link to='/registration'>
                    <button className="signUp_btn">Sign Up</button><span className="profile-name"></span>
                    </Link>
                    :
                    <div class="dropdown" style={{}}>
                    <button style={{border: '0', background: 'transparent', outline: 'none'}} class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
            {/* <span class="caret"></span> */}
            <span><AccountCircleIcon style={{color: '#fff',}} id="iconnn"/></span>
        </button>
        <ul class="dropdown-menu" style={{background: '#555'}}>
        <div class="" >
                        <div className="LogoutBody" style={{textAlign:'center'}}>
                            <LazyLoadImage className="CB_NavDropDownProfilePic" placeholder={<div><img src={miniLoader} /></div>} src={userProfileInfo && userProfileInfo.profile_pic}  alt="User-Dp"/>
                        <div className="MyProfile">
                            <Link to="/profile">
                                <h5 className="CB_MyProfileTitle">My Profile</h5>
                            {/* <span><AccountCircleIcon style={{fontSize: 'x-large',marginTop:'1vh'}}/></span> */}
                            </Link>
                        </div>
                            <h3 className="CB_MyProfileName" style={{color:'skyblue',margin: '0vh auto'}}> {userProfileInfo && userProfileInfo.name} </h3>
                            {/* <h3 style={{color:'skyblue'}}><i>{userProfileInfo && userProfileInfo.dob}</i></h3> */}
                            <h5 className="CB_MyProfileEmail" style={{color: '#fff'}}>{userProfileInfo && userProfileInfo.email}</h5>
                        </div>
                        <div style={{marginLeft: '1vw',color: '#fff', cursor: 'pointer'}} className="MobNum" data-toggle="modal" data-target="#ChngMob_Number">
                            <h4 className="CB_MyProfileMobileNum">Change Mobile Number</h4>
                            <span><CallIcon style={{fontSize: 'x-large',marginTop:'1vh'}}/></span>
                        </div>
                        <div style={{marginLeft: '1vw',color: '#fff', cursor: 'pointer'}} className="Email" data-toggle="modal" data-target="#Chng_Email">
                            <h4 className="CB_MyProfileEmailAdress" >Change Email Address</h4>
                            <span><MailIcon style={{fontSize: 'x-large',marginTop:'1vh'}}/></span>
                        </div>
                        <div className="Footer" style={{textAlign: 'center', marginTop: '2vh'}}>
                            <button 
                                type="button" 
                                class="btn btn-primary" 
                                style={{color:'black'}}
                                onClick ={ (e) => {handleSubmitLogout(e)}}
                                >
                                    <b>Logout</b>
                            </button>
                        </div>
                    </div>
        </ul>
        <div  class="modal fade" id="Chng_Email" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document" style={{textAlign: 'center'}}>
                    <div class="modal-content" style={{
                                boxShadow: '0 3px 9px rgb(0 0 0 / 50%)',
                                outline: '0',
                                background: 'transparent linear-gradient( 242deg, #464988 0%, #3690D4 100%) 0% 0% no-repeat padding-box',
                                border: '5px solid #E0E0E0',
                                borderRadius: '13px',
                                opacity: '1',
                                width: '43rem'}}>
                    <div class="modal-header">
                        <h5 style={{color: 'white'}}>Update detail</h5>
                        <button ref={emailModalCloseBtn} type="button" class="close" data-dismiss="modal" aria-label="Close" style={{marginTop: '-7rem'}}  
                        style={{marginTop:'-4vh'}}
                        onClick={() => {
                            setMessage(false)
                            setupdateMsz(false)
                            setinvalidOtp(false)
                            setresendOtp(false)
                        }}>
                        <span aria-hidden="true" style={{color: 'red',fontSize: 'xxx-large',marginTop: '-16rem'}}>&times;</span>
                        </button>
                        {
                            message &&
                            <div style={{textAlign: 'center'}}>
                                <p style={{color: 'green', fontSize : '1rem', fontWeight: 'bold' }}>OTP sent Successfully..</p>
                            </div>
                        }
                        {
                            updateMsz &&
                            <div style={{textAlign: 'center'}}>
                                <p style={{color: 'green', fontSize : '1rem', fontWeight: 'bold' }}>Data Updated Successfully..</p>
                            </div>
                        }
                        {
                            invalidOtp &&
                            <div style={{textAlign: 'center'}}>
                                <p style={{color: 'orange', fontSize : '1rem', fontWeight: 'bold' }}>Invalid OTP..</p>
                            </div>
                        }
                        {
                            resendOtp &&
                            <div style={{textAlign: 'center'}}>
                                <p style={{color: 'orange', fontSize : '1rem', fontWeight: 'bold' }}>OTP Resent Successfully..</p>
                            </div>
                        }
                    </div>
                    <div class="modal-body">
                        {/*new email entry form */}
                    <form className="logOut_Email_input" onSubmit={handleEmailSubmit}>
                            <label htmlFor="logOut_Email_input" style={{color: 'white'}}> Enter your new E-mail</label>
                            <br/>
                            <input 
                            autoComplete="off"
                            name="enteredMobEmailData"  
                            onChange ={ (e) => {handleChangeMobEmail(e)}}    
                            id="logOut_MobEmail_input" 
                            type="tel" 
                            required/>
                            <br/>
                    <button  class="btn btn-info"  style={{marginTop: '0.5rem',color: 'black'}}>Get OTP</button>
                    {/* Resend OTP */}
                    {/* <button style={{marginLeft: '1rem'}} 
                    onClick ={ (e) => {handleResendOtpEmail(e)}}
                    >
                        Resend Otp
                    </button>                 */}
                    </form>
                        {/* email otp form */}
                    <form className="logOut_Email_OTP_input" 
                    onSubmit={handleOTPSubmitEmail}
                    >
                            <label htmlFor="logOut_Email_OTP_input" style={{color: 'white'}}> Enter OTP sent to your E-Mail</label>
                            <br/>
                            <input 
                            autoComplete="off"
                            name="enterOTP"  
                            onChange ={ (e) => {handleChangeOTP(e)}}    
                            type="text" 
                            required/>
                            <br/>
                    <button  class="btn btn-info" style={{marginTop: '0.5rem', marginBottom: '0.5rem',color: 'black'}}>Submit OTP</button>
                    </form>
                    </div>
                    </div>
                </div>
        </div>

{/* mobile verification model */}
<div  class="modal fade" id="ChngMob_Number" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document" style={{textAlign: 'center'}}>
                    <div class="modal-content" style={{
                                boxShadow: '0 3px 9px rgb(0 0 0 / 50%)',
                                outline: '0',
                                background: 'transparent linear-gradient( 242deg, #464988 0%, #3690D4 100%) 0% 0% no-repeat padding-box',
                                border: '5px solid #E0E0E0',
                                borderRadius: '13px',
                                opacity: '1',
                                width: '43rem'}}>
                    <div class="modal-header">
                        <h5 style={{color: 'white'}}>Update detail</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style={{marginTop: '-7rem'}}  
                        style={{marginTop:'-4vh'}}
                        onClick={() => {
                            setMessage(false)
                            setupdateMsz(false)
                            setinvalidOtp(false)
                            setresendOtp(false)
                        }}>
                        <span aria-hidden="true"  style={{color: 'red',fontSize: 'xxx-large',marginTop: '-16rem'}}>&times;</span>
                        </button>
                        {
                            message &&
                            <div style={{textAlign: 'center'}}>
                                <p style={{color: 'green', fontSize : '1rem', fontWeight: 'bold' }}>OTP sent Successfully..</p>
                            </div>
                        }
                        {
                            updateMsz &&
                            <div style={{textAlign: 'center'}}>
                                <p style={{color: 'green', fontSize : '1rem', fontWeight: 'bold' }}>Data Updated Successfully..</p>
                            </div>
                        }
                        {
                            invalidOtp &&
                            <div style={{textAlign: 'center'}}>
                                <p style={{color: 'orange', fontSize : '1rem', fontWeight: 'bold' }}>Invalid OTP..</p>
                            </div>
                        }
                        {
                            resendOtp &&
                            <div style={{textAlign: 'center'}}>
                                <p style={{color: 'orange', fontSize : '1rem', fontWeight: 'bold' }}>OTP Resent Successfully..</p>
                            </div>
                        }
                    </div>
                    <div class="modal-body">
                    <form className="logOut_Mob_input" onSubmit={handlePhoneSubmit}>
                            <label htmlFor="logOut_Mob_input" style={{color: 'white'}}> Enter your new Phone Number</label>
                            <br/>
                            <input 
                            autoComplete= "off"
                            name="enteredMobEmailData"  
                            onChange ={ (e) => {handleChangeMobEmail(e)}}    
                            id="logOut_Mob_input" 
                            type="text" 
                            required/>
                            <br/>
                    <button  class="btn btn-info" style={{marginTop: '0.5rem',color: 'black'}}>Get OTP</button>
                    {/* Resend OTP */}
                    {/* <button type="button" style={{marginLeft: '1rem'}} 
                    onClick ={ (e) => {handleResendOtpPhone(e)}}
                    >
                        Resend Otp
                    </button> */}
                    </form>
                    <form className="logOut_Mob_OTP_input" 
                    onSubmit={handleOTPSubmitMobile}
                    >
                            <label htmlFor="logOut_Mob_OTP_input" style={{color: 'white'}} > Enter OTP sent to your mobile number</label>
                            <br/>
                            <input 
                            autoComplete="off"
                            name="enterOTP"  
                            onChange ={ (e) => {handleChangeOTP(e)}}    
                            type="number" 
                            required/>
                            <br/>
                    <button  class="btn btn-info"  style={{marginTop: '0.5rem', marginBottom: '0.5rem',color: 'black'}}>Submit OTP</button>
                    </form>
                    </div>
                    </div>
                </div>
        </div>
                    </div>
                    

                }
                </div>


                </div>
                


            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    // console.log('state from content block page', state);
    return{
        Contentblock: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchConnectionRequestedList: () => dispatch(fetchConnectionRequestedList()),
        hitconnectConfirmAPI: (data) => dispatch(hitconnectConfirmAPI(data)),
        hitconnectRejectAPI: (data) => dispatch(hitconnectRejectAPI(data)),
        searchData: (data) => dispatch(searchData(data)),
        hitNotificationAPI: () => dispatch(hitNotificationAPI()),
        fetchUserProfile: (data) => dispatch(fetchUserProfile(data)),
        fetchUpdatedMobEmail: (data,otp) => dispatch(fetchUpdatedMobEmail(data,otp)),
        fetchVerifiedUpdatedOTP: (mobileNum,type,otp) => dispatch(fetchVerifiedUpdatedOTP(mobileNum,type,otp)),
        fetchAllRecmBlogs: (data) => dispatch(fetchAllRecmBlogs(data)),
        fetchAllVideoView: (video_id) => dispatch(fetchAllVideoView(video_id)),
        fetchMusicCommentList: (musicData) => dispatch(fetchMusicCommentList(musicData)),
        fetchAllPictureView: (image_id) => dispatch(fetchAllPictureView(image_id)),
        hitMyUserProfileAPI: () => dispatch(hitMyUserProfileAPI()),







    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Contentblock)

