import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';

import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import TopVideos from './TopVideos'
import VideoCategory from './VideoCategory'
import VideoRelease from './VideoRelease'
import VideoRecentlyPlay from './VideoRecentlyPlay'
import TopArtists from './TopArtists'
import Footer from '../NewFooter' 

import { fetchAllVideoView } from '../../redux/VideoViewPage/VideoPageViewAction'
import { fetchTopCategoryVideos } from '../../redux/VideoPage/TopVideosCategoryActions'
import { fetchUserProfile } from '../../redux/UserProfile/UserProfileActions'

// fetch other users profile

const VideoPage = (props) => {
    // console.log('props from video page category', props.VideoPageDetail)
    // console.log('props from video page new_released', props.VideoPageDetail.TopCategoryVideos.VideoPageGetApi.allVideo.new_released)
    // console.log('props from video page recent_views', props.VideoPageDetail.TopCategoryVideos.VideoPageGetApi.allVideo.recent_views)
    // console.log('props from video page ctop_artist', props.VideoPageDetail.TopCategoryVideos.VideoPageGetApi.allVideo.top_artist)
    // console.log('props from video page top_videos', props.VideoPageDetail.TopCategoryVideos.VideoPageGetApi.allVideo.top_videos)

    // console.log('props from videoooo', props.VideoPageDetail.TopCategoryVideos.VideoPageGetApi.VideoPageSuccess)


    const [videoCategory, setVideoCategory] = useState([])
    const [newReleased, setNewReleased] = useState([])
    const [recentViews, setRecentViews] = useState([])
    const [topArtists, setTopArtists] = useState([])
    const [topVideos, setTopVideos] = useState([])

    useEffect(() => {
        props.fetchTopCategoryVideos()
    }, [])

    useEffect(() => {
        setVideoCategory(props.VideoPageDetail.TopCategoryVideos.VideoPageGetApi.allVideo.category)
        setNewReleased(props.VideoPageDetail.TopCategoryVideos.VideoPageGetApi.allVideo.new_released)
        setRecentViews(props.VideoPageDetail.TopCategoryVideos.VideoPageGetApi.allVideo.recent_views)
        setTopArtists(props.VideoPageDetail.TopCategoryVideos.VideoPageGetApi.allVideo.top_artist)
        setTopVideos(props.VideoPageDetail.TopCategoryVideos.VideoPageGetApi.allVideo.top_videos)
    }, [props.VideoPageDetail.TopCategoryVideos.VideoPageGetApi.VideoPageSuccess])

    useEffect(() => {
    }, [])
    return (
        <div>
            <Sidebar />
            <Navbar />
            <VideoCategory  videoCategory={videoCategory} {...props}/>
            <TopVideos topVideos={topVideos} {...props} />
            <TopArtists topArtists={topArtists} {...props}/>
            <VideoRelease newReleased={newReleased} {...props}  />
            <VideoRecentlyPlay recentViews={recentViews} {...props}/>
            <Footer />
            
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log('stateeeeee from Video page', state);
    return{ 
        VideoPageDetail: state,

    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchAllVideoView: (data) => dispatch(fetchAllVideoView(data)),
        fetchTopCategoryVideos: () => dispatch(fetchTopCategoryVideos()),
        fetchUserProfile: (data) => dispatch(fetchUserProfile(data))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(VideoPage)