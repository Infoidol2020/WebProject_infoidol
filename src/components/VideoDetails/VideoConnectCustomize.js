import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom'
import './VideoConnectCustomize.css'
const VideoConnectCustomize = (props) => {
    const handleVideoDetailProfileClick = (profile_id) => {
        localStorage.setItem('userProfileId', profile_id)
        props.fetchUserProfile(profile_id)
        // console.log('handleAudioProfileClick',profile_id)
    }
    const history = useHistory();
    // const [connectionStatus, setConnectionStatus] = useState()
    // console.log('props from connect customize', props)

    const handleConnect = () => {
        if(localStorage.getItem('WebAppUserKey') === null || localStorage.getItem('WebAppUserKey') == '' ){
            history.push('/login')
            return
        }
        props.hitconnectAPI(localStorage.getItem('UI'))
        props.fetchAllVideoView(localStorage.getItem('id'))
    }

    const handleDisconnect = () => {
        props.hitconnectRejectAPI(localStorage.getItem('UI'))
    }

    const handleCustomize = (e) => {
        if(localStorage.getItem('WebAppUserKey') === null || localStorage.getItem('WebAppUserKey') == '' ){
            history.push('/login')
            return
        }
        props.hitMakeCustomizeAPI(localStorage.getItem('UI'), e.target.value)
    }

    useEffect(() => {
        props.fetchAllVideoView(localStorage.getItem('id'))
    }, [props.VideoDetails.connect.connectApi.connectSuccess, 
        props.VideoDetails.connect.connectRejectApi.connectRejectSuccess,
        props.VideoDetails.makeCustomize.makeCustomizeApi.makeCustomizeSuccess])
    return (
        <div className="VideoConnectCustomize">
            {/* Uploaders Dp */}
            {
            props.videoDetails &&
            <Link to='./userprofile'>
            <div
            onClick = {() => handleVideoDetailProfileClick(props.videoDetails.video_detail.user_id)}
            className="VideoCC_UploadersDp">
                <img src={props.videoDetails.video_detail.user_profile_pic} alt=""/>
            </div>
            </Link>
            }
            {/* connect and disconnect */}
            {
            localStorage.getItem('WebAppUserKey') === localStorage.getItem('UI') ?
            ''
            :
            <div className="VideoCC_ConnectionWrapper">
                
            {
                props.videoDetails && props.videoDetails.connection_status !== undefined &&
                (props.videoDetails.connection_status !== undefined && props.videoDetails.connection_status == '4') &&
                <button onClick={() => handleDisconnect()}>Disconnect</button>
            }
            {
                props.videoDetails && props.videoDetails.connection_status !== undefined &&

                (props.videoDetails.connection_status !== undefined && props.videoDetails.connection_status == '1') &&
                <button onClick={() => handleConnect()}>Connect</button>
            }
            {
                props.videoDetails && props.videoDetails.connection_status !== undefined &&

                (props.videoDetails.connection_status !== undefined && (props.videoDetails.connection_status == '2'|| props.videoDetails.connection_status == '3')) &&
                <button disabled>Pending</button>
            }

            </div>
            }


            {/* customize */}
            {
            localStorage.getItem('WebAppUserKey') === localStorage.getItem('UI') ?
            ''
            :
            <div className="VideoCC_CustomizeWrapper">
            {
            props.videoDetails && 
            <select onChange={(e) => handleCustomize(e)}>
                {
                props.videoDetails.customize_name !== null &&
                <option value=''>{props.videoDetails.customize_name}</option>
                }
                {
                    props.videoDetails && 
                    props.videoDetails.customize_list.map((element, index) => {
                        return(
                            props.videoDetails.customize_name !== element.name &&
                            <option value={element.customize_id}>{element.name}</option> 
                        )
                    }) 
                }
            </select>
            }
            </div>
            }
        
        </div>
    )
}

export default VideoConnectCustomize
