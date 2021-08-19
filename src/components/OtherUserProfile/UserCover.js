import React, { useEffect} from 'react'
import pageLoader from '../../assets/pageLoader.svg'
import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';

const UserCover = (props) => {
    useEffect(() => {
        props.fetchUserProfile(localStorage.getItem('userProfileId'))
        if(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile &&
            props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.cover_image){
                props.setUserCoverPic(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.cover_image)

        }
    }, [props.userProfileFromAPI.uploadCoverPic.uploadCoverPicApi.uploadCoverPicSuccess, 
        props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfileSuccess])
// console.log('proooo', props.userProfileFromAPI.uploadCoverPic.uploadCoverPicApi.uploadCoverPicSuccess)
// console.log('poiuy......', localStorage.getItem('userProfileId'))
    return (
        <div>
            {
                props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfileInProgress ?
                <img src ={pageLoader} />
                :
                <div 
                style={{
                width: '71vw',
                height: '40vh',
                // position: 'relative',
                marginLeft: '1vw'
                }} >
                        <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src ={props.userCoverPic} style={{width: '100%', height: '100%', objectFit: 'cover'}}  alt="cover_pic" />
                </div> 

            }
      
        </div>
    )
}

export default UserCover
