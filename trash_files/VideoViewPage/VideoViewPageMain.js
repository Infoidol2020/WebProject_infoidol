import React,{useState, useEffect, useRef} from 'react';
import './VideoViewPageMain.css';

import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

const VideoViewPageMain = (props) => {
    const videoContainer = useRef();
    const [showCaption , setshowCaption] = useState(false);
    const [SubscribeStatus,setSubscribeStatus] = useState();
    const [videoElement, setVideoElement] = useState()

    const handleSubscribeClick =() =>{
        const UI = localStorage.getItem('UI');
        props.hitsubscribeAPI(UI)
    }
    const handleUnSubscribeClick = () =>{
        const UI = localStorage.getItem('UI');
        props.hitUnsubscribeAPI(UI)
    }
    const handleHiddenText =() => {
        setshowCaption(!showCaption);
    }

    const [videoDetails, setVideoDetails] = useState({});
    console.log('propssss', props.VideoDetails.VideoView.VideoDetailPageGetApi)

    
    
    // console.log('particular element',props.location.element);
    // const particularVideo = props.location.element.element;
    // const[videoElement, setvideoElement] = useState(particularVideo);
    // console.log('particular video element', videoElement);
    // useEffect(() => {
    //     props.fetchAllVideoView(props.location.element.element.video_id)
    // }, [props.location.element.element.video_id])
         console.log('ertghqqqqqq',props.VideoDetails)

    useEffect(() =>{
        props.fetchAllVideoList();
    }, [])
    useEffect(() =>{
        if(props.VideoDetails.VideoList.VideoListApi.VideoListSuccess && 
            props.VideoDetails.VideoList.VideoListApi.VideoListResponse !== undefined){
            props.VideoDetails.VideoList.VideoListApi.VideoListResponse.map((element, index) => {
                if(element.video_id === localStorage.getItem('id')){
                    setVideoElement(element)
                }
            })

        }
    }, [props.VideoDetails.VideoList.VideoListApi.VideoListSuccess])



    useEffect(() => {
        if(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail){
            setVideoDetails(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail);
        }
        
    }, [props.VideoDetails.VideoView.VideoDetailPageGetApi.VideoDetailPageSuccess ])

        useEffect(() => {
            if(props.VideoDetails.Subscribe.subscribeApi.subscribeSuccess  || 
                props.VideoDetails.Subscribe.unsubscribeApi.unsubscribeSuccess){
                    props.fetchAllVideoView(localStorage.getItem('id'))

                }
            // props.fetchAllVideoView(localStorage.getItem('UI'))
            if(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail){
                if(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.subscribe_status !== undefined ){
                    setSubscribeStatus(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.subscribe_status)
                }
            }
        }, [props.VideoDetails.Subscribe.subscribeApi.subscribeSuccess,props.VideoDetails.Subscribe.unsubscribeApi.unsubscribeSuccess])
    // console.log('yayyyy', props);
 
    //this useEffect is used to bring the video into view after clicking on recommended videos
    useEffect(() => {
        videoContainer.current.scrollIntoView();
        props.fetchAllVideoView(localStorage.getItem('id'))
    }, [localStorage.getItem('id')])
    return (
        <div>
        <div className="VV_FirstContainer" >
            <div className="VV_elems">
                {
                            <>  
                                <div className="VV_SelectedOne" ref={videoContainer}>
                                    <video autoPlay controls src={videoElement && videoElement.video_link}/>
                                </div>

                                <div className="VV_information">
                                    <section className="description">
                                        <div className="VV_titleSection">
                                            <div className="VV_Heading">
                                            <div className="VV_Views">
                                                <span style={{color: 'grey'}}><b>{videoElement && videoElement.no_of_views}&nbsp; Views</b></span>
                                                <span style={{marginLeft: '2rem',color: 'grey'}}><b>{videoElement && videoElement.created_date}</b></span>
                                            </div>

                                            <h3>{videoElement && videoElement.video_title}</h3>

                                            </div>
                                            {/* <p>{videoDetails && videoDetails.video_caption && videoDetails.video_caption.length}</p> */}
                                            {
                                                videoElement && videoElement.video_caption && videoElement.video_caption.length > 350  ?
                                                <div className="VV_caption" style={{height:'10vh',overflowY:'scroll',marginTop:'2vh'}}>
                                                <span>{videoElement && videoElement.video_caption}</span>
                                            </div>
                                            :
                                            <div className="VV_caption">
                                                <span>{videoElement && videoElement.video_caption}</span>
                                            </div> 
                                            }
                                        </div>
                                    </section>
                                    <section className="VV_Subscribe">
                                        {
                                            localStorage.getItem('WebAppUserKey') === localStorage.getItem('UI') ?
                                            ''
                                            :
                                            props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail && props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.subscribe_status === 0 ?
                                            <button  
                                            onClick={() => handleSubscribeClick()}
                                            >Subscribe <NotificationsIcon/> </button>
                                            :
                                            <button  
                                            onClick={() => handleUnSubscribeClick()}
                                            style={{background: '#A52A2A', 
                                            opacity: '0.8',
                                            border: '0', 
                                            outline: 'none', 
                                            color: '#fff', 
                                            width: '9vw',
                                            marginLeft: '-2vw', 
                                            borderRadius: '10px'}} >Subscribed <NotificationsActiveIcon/> </button>
                                        }
                                        {/* <button>Subscribe</button> */}
                                    </section>
                                </div>
                            </>
                    }
        </div>
    </div>
    </div>
    )
}

    


export default VideoViewPageMain
