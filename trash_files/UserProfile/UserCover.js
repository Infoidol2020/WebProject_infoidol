import React, {useRef, useState, useEffect} from 'react'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import profileee from '../../assets/profileee.jpg'
import userImg from '../../assets/user.jpg'

const UserCover = (props) => {
    const uploadCoverPic = useRef()
    const inputFileCoverPic = useRef()
    const uploadCoverCloseBtn = useRef()
    const [coverPic, setCoverPic] = useState() //to send the pic to api

    const handleCoverPicChange = (e) => {
        setCoverPic(e.target.files[0])
    }

    const handleCoverPicSubmit = (e) => {
        e.preventDefault()
        props.hituploadCoverPicAPI(coverPic)
        inputFileCoverPic.current.value=''
        setTimeout(function(){
            uploadCoverCloseBtn.current.click();
       }, 3000);
    }
    useEffect(() => {
        // props.fetchUserProfile(localStorage.getItem('userProfileId'))
        // if(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile &&
        //     props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.cover_image){
        //         props.setUserCoverPic(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.cover_image)

        // }
        props.hitMyUserProfileAPI()
        if(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile &&
            props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.cover_image){
                props.setUserCoverPic(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.cover_image)
            }
    }, [props.userProfileFromAPI.uploadCoverPic.uploadCoverPicApi.uploadCoverPicSuccess])
// console.log('proooo', props.userProfileFromAPI.uploadCoverPic.uploadCoverPicApi.uploadCoverPicSuccess)
    return (
        <div>

            {/* upload cover pic modal] */}
            <>
                <div class="modal fade" style={{marginTop: '20vh'}} id="uploadCoverPicModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel" style={{fontWeight: 'bold'}}>Upload Cover Pic</h5>
                        <button  ref={uploadCoverCloseBtn} type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        {
                            props.userProfileFromAPI.uploadCoverPic.uploadCoverPicApi.uploadCoverPicSuccess && 
                            <div style={{display: 'flex', alignItems: 'center', 
                            justifyContent: 'center', width: '100%', background: '#8FBC8F',height: '5vh', color: '#fff'}}>
                            Uploaded Successfully</div>
                        }
                    </div>
                    <form onSubmit={handleCoverPicSubmit}>
                    <div class="modal-body">

                            <input ref={inputFileCoverPic} accept="image/*" required  type="file" name="cover-pic" onChange={(e) => handleCoverPicChange(e)} />
                    </div>
                    <div class="modal-footer" style={{textAlign: 'center'}}>
                        <button  class="btn btn-secondary">Upload</button>
                    </div>
                    </form>
                    </div>
                </div>
                </div>
            </>

            <div style={{
            width: '71vw',
            height: '40vh',
            position: 'relative',
            marginLeft: '1vw'
            }} >
                    <img src ={props.userCoverPic} style={{width: '100%', height: '100%', objectFit: 'cover'}}  alt="cover_pic" />
                </div>
                {
                    // localStorage.getItem('userProfileId') === localStorage.getItem('WebAppUserKey') &&
                    <div title="upload cover pic" style={{position: 'absolute', top: '10%', left: '95%', transform: 'translate(-50%, 50%)', 
                    boxShadow: '2px, 2px, #555'}}>
                        <button data-toggle="modal" data-target="#uploadCoverPicModal" style={{background: 'transparent', border: '0', outline: 'none', color: 'red'}}>
                            <CloudUploadIcon style={{fontSize: '4rem'}}/>
                        </button>
                    </div>
                }

               
        </div>
    )
}

export default UserCover
