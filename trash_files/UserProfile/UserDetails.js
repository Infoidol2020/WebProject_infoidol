import React, {useRef, useState, useEffect} from 'react'
import uuid from 'react-uuid'

import './UserDetails.css'
import userImg from '../../assets/user.jpg'
import pageLoader from '../../assets/pageLoader.svg'
const UserDetails = (props) => {
    // console.log('propswess', props.data)
    var profileInfo = props.data;
    const [updateUserDetails, setUpdateUserDetails] = useState({
        profileName: '',
        profileDOB: '', 
        profileGender: '',
        profileImage: '', 
        profileBio: ''
    })
    const [showUpdated, setShowUpdated] = useState(false);
    const profileImageFile = useRef()

    //to clear the inputs of edit profile modal
    const editProfileName = useRef()
    const editProfileDOB = useRef()
    const editProfileGender = useRef()
    const editProfileBio = useRef()
    // console.log('props from userdetails', props)

    const handleChangeUserDetails = (e) => {
        setShowUpdated(false)
        // console.log(e.target.value)
        setUpdateUserDetails({...updateUserDetails,
        [e.target.name]: e.target.value
        })
    }

    const handleChangeUserDetailsImage = (e) => {
        setShowUpdated(false)
        // console.log(e.target.files[0])
        updateUserDetails.profileImage = e.target.files[0]
    }

    const handleEditProfileSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('Details', uuid())
        if(updateUserDetails.profileName === ''){
            // console.log('1111',profileInfo.name, updateUserDetails.profileName)
            // setUpdateUserDetails({...updateUserDetails,
            // [updateUserDetails.profileName] : profileInfo.name
            // })
            updateUserDetails.profileName = profileInfo.name
        }
        if(updateUserDetails.profileDOB === ''){
            // setUpdateUserDetails({...updateUserDetails,
            // [updateUserDetails.profileDOB] : profileInfo.dob
            // })
            updateUserDetails.profileDOB = profileInfo.dob
        }
        if(updateUserDetails.profileGender === ''){
            // setUpdateUserDetails({...updateUserDetails,
            // [updateUserDetails.profileGender] : profileInfo.gender
            // })
            updateUserDetails.profileGender = profileInfo.gender
        }
        if(updateUserDetails.profileBio === ''){
            // setUpdateUserDetails({...updateUserDetails,
            // [updateUserDetails.profileBio] : profileInfo.bio
            // })
            updateUserDetails.profileBio = profileInfo.bio
        }
        if(updateUserDetails.profileImage === ''){
            updateUserDetails.profileImage = profileInfo.profile_pic
            var blob = new Blob([updateUserDetails.profileImage], { type: 'text/plain' });
            var file = new File([blob], "profileImage", {type: "text/plain"});
            updateUserDetails.profileImage = file
        }
        // console.log('state before api',updateUserDetails )
        props.hitUpdateProfileApi(updateUserDetails)

        editProfileName.current.value=''
        editProfileDOB.current.value=''
        editProfileGender.current.value=''
        editProfileBio.current.value=''
        
    }
    // console.log('propsdd', props.userProfileFromAPI.UpdateProfile.UpdateProfile.UpdateProfileSuccess)
    useEffect(() => {
        if(props.userProfileFromAPI.UpdateProfile.UpdateProfile.UpdateProfileSuccess){
            setShowUpdated(true)
            // props.fetchUserProfile(localStorage.getItem('userProfileId'))
            props.hitMyUserProfileAPI()
            // props.setProfile(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile)
            props.setProfile(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile)
        }
    }, [props.userProfileFromAPI.UpdateProfile.UpdateProfile.UpdateProfileSuccess])
    
    return (
        <>

        {/* edit profle modal */}
        <div style={{marginTop: '15vh'}} class="modal fade" id="editProfileModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content" style={{width: '48vw'}}>
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel" style={{fontWeight: 'bold'}}>Edit Profile</h5>
                <button onClick={() => {
                setShowUpdated(false)
                }} type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form className="" onSubmit={handleEditProfileSubmit}>
            <div class="modal-body" >
                    {
                        showUpdated && 
                        <div style={{width: '100%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        height: '5vh', 
                        color: '#fff',
                        marginBottom: '2vh',
                        fontWeight: 'bold',
                        fontSize: '1.5rem',  
                        background: '#2E8B57'}}>Uploaded successfully...</div>
                    }
                    <div style={{display: 'flex', }}>
                        <div style={{marginLeft: '2vw', border: 'solid 1px #dadada', padding: '1rem'}}>
                            <div>
                                <label for="name">Name</label>
                            </div>
                            <div>
                                <input ref={editProfileName} autocomplete="off"  onChange={(e) => handleChangeUserDetails(e)} style={{width: '15vw', height:'5vh'}} id="name" placeholder={profileInfo && profileInfo.name} name="profileName" type="text" />
                            </div>
                            {/* <div>
                                <label for="username">Username</label>
                            </div>
                            <div>
                                <input style={{width: '15vw', height:'5vh'}} id="username" name="username" type="text" />
                            </div> */}
                            <div>
                                <label for="dob">Date Of Birth(DOB)</label>
                            </div>
                            <div>
                                <input id="dob"  style={{width: '15vw'}} value={profileInfo && profileInfo.dob} disabled name="profileDOB" type="text" />
                            </div>
                            <div>
                                <input ref={editProfileDOB}  onChange={(e) => handleChangeUserDetails(e)} style={{width: '15vw', height:'5vh'}} id="dob" placeholder={profileInfo &&  profileInfo.dob} name="profileDOB" type="date" />
                            </div>
                            <div>
                                <label for="gender">Gender</label>
                            </div>
                            <div>
                                {/* <input style={{width: '15vw', height:'5vh'}} id="gender" value={profileInfo.gender} name="gender" type="text" /> */}
                                <select ref={editProfileGender} onChange={(e) => handleChangeUserDetails(e)}  style={{width: '100%', height: '5vh'}}  name="profileGender" id="gender">
                                    <option value="">{profileInfo &&  profileInfo.gender}</option>
                                    {
                                        profileInfo && profileInfo.gender !== 'Male' &&
                                        <option>Male</option>

                                    }
                                    {
                                        profileInfo && profileInfo.gender !== 'Female' &&
                                        <option>Female</option>


                                    }
                                    {
                                        profileInfo && profileInfo.gender !== 'Others' &&
                                        <option>Others</option>


                                    }
                                </select>
                            </div>
                            {/* <div>
                                <label id="">My Profession</label>
                            </div>
                            <div>
                                <input style={{width: '15vw', height:'5vh'}} type="text" />
                            </div> */}
                        </div>
                        <div style={{marginLeft: '5vw',}}>
                            <div style={{textAlign: 'center'}}>
                                <label for="profile_pic" >Profile Photo</label>
                            </div>
                            <div style={{textAlign: 'center'}}>
                                <img  src={profileInfo &&  profileInfo.profile_pic} style={{borderRadius: '50%',border: 'solid 2px #333', height: '12rem', width: '12rem'}}/>
                            </div>
                            <div style={{marginTop: '2vh', textAlign: 'center'}}>
                                <button style={{background :'#000', color: '#fff', width: '10vw',height: '4vh'}} type="button" onClick={ () => {
                                    // document.getElementById('profileImageFile = useRef()').click()
                                    profileImageFile.current.click()
                                }} >Change Profile</button>
                                <input onChange={(e) => handleChangeUserDetailsImage(e)} ref={profileImageFile} id="profileImageFile" accept="image/*" name="profileImage" type="file" style={{display: 'none'}} />
                            </div>
                            <div style={{marginTop: '2vh'}}>
                                <label for="bio">My Bio</label>
                            </div>
                            <div>
                                <textarea
                                ref={editProfileBio}
                                onChange={(e) => handleChangeUserDetails(e)}
                                id="bio" 
                                name="profileBio"
                                placeholder={profileInfo &&  profileInfo.bio}
                                rows={5}
                                cols={45}>
                                </textarea>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="modal-footer" style={{textAlign: 'center'}}>
                <button  class="btn" style={{background: 'transparent linear-gradient(90deg, #1E9FC8 0%, #3C34AC 100%)', 
                fontSize: '1.5rem',
                color: '#fff',
                width: '6vw'}}>Save</button>
            </div>
            </form>
            </div>
        </div>
        </div>
        { props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile &&
        <div className="user-details-container">
            <div style={{textAlign :'center', marginTop: '15vh'}}>
            <img src={profileInfo && profileInfo.profile_pic} style={{width: '12rem', height: '12rem', borderRadius: '50%', border: 'solid 2px #333'}} />
            </div>
            <div>
                <p className="user_name"> {profileInfo &&  profileInfo.name} </p>
                <p className="user-profession"> {} </p>
                {
                    profileInfo && profileInfo.bio && profileInfo.bio.length > 100 ?
                    <div style={{height: '15vh',textAlign: 'justify',padding: '0.8rem', overflowY: 'scroll'}} className="user-bio"> {profileInfo &&  profileInfo.bio} </div>
                    :
                    <p className="user-bio"> {profileInfo &&  profileInfo.bio} </p>
                }

            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '4vh'}}>
                <div>
                    <button className="edit-profile-btn" data-toggle="modal" data-target="#editProfileModal">Edit Profile</button>
                </div>
                <div>
                    {/* <button className="user-profile-chat-btn">Chat</button> */}
                </div>
            </div>
            <div className="user-profile-user-info">
                <span className="user-profile-user-info-keys">username</span>
                <div>
                <span className="user-profile-user-info-values">{profileInfo &&  profileInfo.user_name}</span>
                </div>
            </div>
            <div className="user-profile-user-info">
                <span className="user-profile-user-info-keys">email</span>
                <div>
                <span className="user-profile-user-info-values">{profileInfo &&  profileInfo.email}</span>
                </div>
            </div>
            <div className="user-profile-user-info">
                <span className="user-profile-user-info-keys">dob</span>
                <div>
                <span className="user-profile-user-info-values">{profileInfo &&  profileInfo.dob}</span>
                </div>
            </div>
            <div className="user-profile-user-info">
                <span className="user-profile-user-info-keys">Gender</span>
                <div>
                <span className="user-profile-user-info-values">{profileInfo &&  profileInfo.gender}</span>
                </div>
            </div>
        </div>
}
        </>
    )
}

export default UserDetails
