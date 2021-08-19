import React ,{useContext} from 'react'
import ContextState from '../../context/ContextState';

const VideoPlayerList = ({videoPlayerElement}) => {
    const {videosTrending,setVideosTrending} = useContext(ContextState);
    const {particularVideoTrendingElement,setParticularVideoTrendingElement} = useContext(ContextState);
    const handleTrendingVideo = (element) => {
        setParticularVideoTrendingElement(element);
    }
    
    return (
        <div>
            <div className="Whole_Video_Content" style={{width:'40%'}}>
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
            </div>
        </div>
    )
}

export default VideoPlayerList
