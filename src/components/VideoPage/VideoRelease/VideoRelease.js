import React ,{useEffect} from 'react'
import {connect} from 'react-redux';
import Carousel from 'react-elastic-carousel'
import Image from '../../../assets/img.png';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './VideoRelease.css';



const VideoRelease = ({AllVideoReleaseFromAPI}) => {

    return (
        <div>
            <div className="styling_videoRelease">
            {/* <div className="ReleaseHeading"> */}
                            <h2>New Released</h2>
                {/* </div> */}
                <Carousel itemsToShow={5}>
                        {
                        AllVideoReleaseFromAPI ?
                        AllVideoReleaseFromAPI && AllVideoReleaseFromAPI.map((e) => {
                            return(
                                <div className="ReleaseBlock" >
                                    {/* <img src={Image} alt=""/> */}
                                    {/* <p>{e.no_of_comments}</p> */}
                                    <video src={e.video_link} alt=""/>
                                    <div className="VideoRelease_description">
                                    
                                            <h3 > 
                                {e.video_title && e.video_title.length > 20 ? 
                                e.video_title.slice(0, 20).concat('......') : 
                                e.video_title}</h3>
                                        <div className="RelesedView" style={{display:'flex'}}>
                                            <div><span><VisibilityIcon/></span>{e.no_of_views}</div>
                                            <div style={{marginLeft:'1.5rem'}}>{e.created_date}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :''
                    }
                </Carousel>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log('state from video release', state.VideoPage.allVideos.new_released);
    return{
        AllVideoReleaseFromAPI: state.VideoPage.allVideos.new_released
    }
}

export default connect(mapStateToProps)(VideoRelease)

// export default VideoRelease
