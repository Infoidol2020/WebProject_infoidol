import React,{useEffect,useState, useContext}from 'react';
import './VideoPlayer.css';
import axios from 'axios';
import Image from "../../assets/img.png";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import Sidebar from '../Sidebar/Sidebar';
import ContextState from '../../context/ContextState';
import VideoPlayerList from './VideoPlayerList';

const VideoPlayer = () => {
    const {particularVideoTrendingElement,setParticularVideoTrendingElement} = useContext(ContextState);
    // console.log('particularVideoTrendingElement', particularVideoTrendingElement);
    // console.log('xchjbbcnxzbncnxz bn')
    const {videosTrending,setVideosTrending} = useContext(ContextState);
    const [like, setLike] = useState(false);
   
    // console.log('particular element',props.location.element.element);
    // console.log('whole state', props.location.videosTrending);

    // const particularVideo = props.location.element.element;
    // const [videosTrending, setVideosTrending] = useState(props.location.videosTrending);
    // const[videoElement, setvideoElement] = useState(particularVideo);
    // console.log('particular video element', videoElement);
    // console.log('videos trendinggggg', videosTrending);
    // const handleTrendingVideo = (element) => {
    //     setvideoElement(element);
    //     setVideosTrending(element);
        // console.log('clicked and recieved', videoElement);
    // }
    const getViewCount = async () => {
        const viewCountData = await axios.post('https://infoidol.com/admin/WebApi/video_view_count',{
            "user_id":"28",
            "device_id":"SYSTEM",
            "video_id":"326"
        })
        // console.log('viewCountData',viewCountData);
        const ViewCountDataResponse = await viewCountData.data.data;
        // console.log('viewdata', ViewCountDataResponse);

    }
    useEffect( () => {
        getViewCount();
    }, [])

    return (
        // <Sidebar/>
        <div>
           <div className="Videos_main_container"  style={{width:'100%',border:'solid red'}}>
            <div  className="VP_container" style={{width:'94%',border:'solid green'}}>
                <div className="VP_Heading">
                    <h3>{particularVideoTrendingElement.video_title}</h3>
                </div>
                <div className="VP_elems" id="videoPlayerElement">
                    <video controls autoPlay src ={particularVideoTrendingElement.video_link}  style={{width: '55vw'}}>
                    </video>
                    <div className="Video_information">
                        <div className="VP_additional_information">
                            <div className="VP_Views">
                                <b>{particularVideoTrendingElement.no_of_views}Views</b>
                            </div>
                            <div className="VP_Created_Time">
                               <b> {particularVideoTrendingElement.created_date}</b>
                            </div>
                        </div>
                        <div className="VP_Button_Section">

                            <div className="VP_Like_Button">
                                <div onClick = {() => setLike(!like)} >
                                    {
                                        like ? <span ><ThumbUpIcon  style={{color: 'blue'}}/> </span> 
                                        :
                                        <span ><ThumbUpIcon /> </span>
                                        
                                    }
                                     
                                    <b style={{marginLeft:'0.5rem'}}>Like</b>   
                                </div>
                            </div>

                            <div className="VP_Comment_Button">
                            <div>
                                <span style={{marginLeft:'1.5rem'}}><CommentIcon/>   
                                </span>
                                <b style={{marginLeft:'0.2rem'}}> Comment</b>
                            </div>
                            </div>

                            <div className="VP_Share_Button">
                            <div>
                                <span style={{marginLeft:'1.5rem'}}><i class="fas fa-share"></i>
                                </span>   
                                <b style={{marginLeft:'0.2rem'}}>Share</b>
                            </div>
                            </div>

                            <div className="VP_Report_Button">
                            <div>
                                <span style={{marginLeft:'1.5rem'}}><ReportProblemIcon/>
                                </span>   
                                <b style={{marginLeft:'0.2rem'}}>Report</b>
                            </div>
                            </div>

                        </div>
                    </div>
                    <div className="Video_Profile">
                        <div className="Video_Profile_subclass">
                        <img src={Image} alt=""/>
                        <div className="Video_User_info">
                            <div className="Name">
                                <span>{particularVideoTrendingElement.user_name}</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    <div className="Video_description">
                        <div className="Video_Description_subclass">
                            <span>
                                {particularVideoTrendingElement.video_caption}
                            </span>
                        </div>
                    </div>
                    
                </div>

            

            </div>

            {/* <div className="Whole_Video_Content" style={{width:'40%'}}>
                <div className="Block_Video_Player">
                {
                    videosTrending.map((element, index) => {
                        return(
                            <div className="Video_subBlock_Wrrapper" style={{border: 'solid 1px gray', width: '29vw', height: '20vh', cursor: 'pointer'}}>
                                <div className="Video_subBlock">
                                    <div onClick={() => handleTrendingVideo(element)} >
                                        <video src={element.video_link}  />
                                    </div>
                                </div>
                                <div className="Video_subBlock_info">
                                    <h6>{element.video_title}</h6>
                                    <span>{element.user_name}</span>
                                    <div className="subBlock_additional_information">
                                        <div className="subBlock_Views">
                                            <b>{element.no_of_views}Views</b>
                                        </div>
                                        <div className="subBlock_Created_Time">
                                            <b> {element.created_date}</b>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                           
                        )
                    })
                }
                </div>
            </div> */}
            <VideoPlayerList />
            </div>
        </div>
    )
}

export default VideoPlayer
