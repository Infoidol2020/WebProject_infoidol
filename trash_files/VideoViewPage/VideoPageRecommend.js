import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux'
import './VideoPageRecommended.css';

const VideoPageRecommend = (props) => {
    console.log('recommend prop',props.AllVideoFromAPI)

    const [videoDetails, setVideoDetails] = useState({});
    const [recommend, setrecommend] =useState([])


    useEffect(() => {
        if(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail){
        setVideoDetails(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail);
        }
    }, [props.VideoDetails.VideoView.VideoDetailPageGetApi.VideoDetailPageSuccess])

    const handleVideo = (video_id) => {
        props.fetchAllVideoView(video_id)
        localStorage.setItem('id',video_id)
        window.location.reload();

        console.log('video id gotit',video_id)
        // console.log('clicked and recieved', videoElement);
    } 

    useEffect(() => {
        if(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail){
            setrecommend(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.recommended)    
        }
    }, [props.VideoDetails.VideoView.VideoDetailPageGetApi.VideoDetailPageSuccess])
    
    return (
        <div>
            <div className="VideoViewRecommend">
            
            {
                recommend ?
                recommend && recommend.map((element, index) => {
                    return(
                        <>  
                            <div className="VV_subBlock_Wrrapper" style={{cursor: 'pointer',display:'inline-block',borderRadius:'10px'}}>
                            <div className="VV_Video">
                            <div onClick={() => handleVideo(element.video_id)} >
                                <video  src={element.video_link} alt=""/>
                            </div>  
                            </div>
                            <div className="Profile_VV">
                                    
                                    <img src={element.user_profile_pic} alt=""/>
                                    
                                    <div className="description_VV">
                                        <div style={{marginLeft:'3%'}}>Title:
                                        {element.video_title.length > 10 ? 
                                        element.video_title.slice(0, 10).concat('......') : 
                                        element.video_title}</div>

                                        <div className="VV_views">{element.no_of_views}Views</div>
                                    </div>
                                    
                                </div>


                            </div>
                        </>
                    )
                })
                :''
            }
        </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log('stateeeeee from videoview page', state);
    return{ 
        AllVideoFromAPI: state.VideoView.allVideoView
    }
}

export default connect(mapStateToProps)(VideoPageRecommend)
