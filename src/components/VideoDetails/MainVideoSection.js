import React, {useState, useEffect, useRef} from 'react'
import ReactPlayer from 'react-player'
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { useHistory } from 'react-router-dom';


import './MainVideoSection.css'



const MainVideoSection = (props) => {
    // const [subscribeStatus, setSubscribeStatus] = useState();
    const videoElement = useRef()
    const history = useHistory();
    // console.log('propsssss from main video section', props.VideoDetails )
    const handleSubscribe = () => {
        if(localStorage.getItem('WebAppUserKey') === null || localStorage.getItem('WebAppUserKey') == '' ){
            history.push('/login')
            return
        }
        props.hitsubscribeAPI(localStorage.getItem('UI'))
    }

    const handleUnsubscribe = () => {
        props.hitUnsubscribeAPI(localStorage.getItem('UI'))
    }

    useEffect(() => {
        // videoElement.currrent.play()
        // console.log('execc')
        if(props.VideoDetails.Subscribe.subscribeApi.subscribeSuccess || 
            props.VideoDetails.Subscribe.unsubscribeApi.unsubscribeSuccess){
                props.fetchAllVideoView(localStorage.getItem('id'))
                props.setSubscribeStatus(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.subscribe_status)

        }
    }, [props.VideoDetails.Subscribe.subscribeApi.subscribeSuccess, props.VideoDetails.Subscribe.unsubscribeApi.unsubscribeSuccess])
    // console.log('prrr', props.videoDetails && props.videoDetails.subscribe_status, props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.subscribe_status);
    return (
        <div className="MainVideoSection_FirstContainer" >
            <div className="MainVideoSection_SelectedVideo">
                {/* <video ref={videoElement} controls autoplay  src={props.video && props.video} />  */}
                <ReactPlayer className="MainVideoSection_SelectedVideo_video" url={props.video && props.video} playing controls />
                {/* loop	Set to true or false to loop the media	false */}
            </div>
            <div className="MainVideoSection_Wrapper">
                <div className="MainVideoSection_Views">{props.videoViews} &nbsp; 
                    {
                        <b>{props.videoViews && 'Views'}</b>
                    }
                </div>
                <div className="MainVideoSection_UploadDate"><b>{props.videoDetails && props.videoDetails.video_detail.created_date}</b></div>
                
                {
            localStorage.getItem('WebAppUserKey') == localStorage.getItem('UI') ?
            ''
            :
                <div className="MainVideoSection_Subscribe">
                    {
                        props.videoDetails && props.videoDetails.subscribe_status === 0 &&
                        <button 
                        onClick={() => handleSubscribe()}>Subscribe <NotificationsIcon/> </button>
                    }
                    {
                        props.videoDetails && props.videoDetails.subscribe_status === 1 &&
                        <button 
                        onClick={() => handleUnsubscribe()}
                        style={{background: '#A52A2A' }}
                        //         opacity: '0.8',
                        //         border: '0', 
                        //         outline: 'none', 
                        //         color: '#fff', 
                        //         width: '9vw',
                        //         marginLeft: '32.5vw', 
                        //         borderRadius: '10px'}}
                        >Subscribed <NotificationsActiveIcon/></button>

                    }
                </div>
            }
            </div>
            <h3 className="MainVideoSection_videoTitle">{props.videoDetails && props.videoDetails.video_detail.video_title}</h3>
            <div className="MainVideoSection_videoCaption">{props.videoDetails && props.videoDetails.video_detail.video_caption}</div>
        </div>
    )
}

export default MainVideoSection
