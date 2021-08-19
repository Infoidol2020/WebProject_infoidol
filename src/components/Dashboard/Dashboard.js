import React,{useEffect, useState} from 'react'
import {connect} from 'react-redux'


import { fetchAllDashboard } from '../../redux/Dashboard/DashboardActions'
import { fetchAllVideoView } from '../../redux/VideoViewPage/VideoPageViewAction'
import {fetchAllPictureView} from '../../redux/PictureViewPage/PictureViewPageAction'
import { fetchAllAudios } from '../../redux/AudioPage';
import { fetchAllAudiosItem } from '../../redux/AudioPlayer';
import { fetchAllRecmBlogs } from '../../redux/BlogShowRecommended/ActionsRecommendedBlogs'



import pageLoader from '../../assets/pageLoader.svg'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Footer from '../NewFooter'
import AudioTrending from './AudioTrending/AudioTrending'

import BlogTrending from './BlogTrending/BlogTrending'
import CarouselsPage from './CarouselPage'
import PictureTrending from './PictureTrending/PictureTrending'
import VideoTrending from './VideoTrending/VideoTrending'
import CopyRight from '../CopyRight/CopyRight' 


const Dashboard = (props) => {
    const [dashboardData, setDashboardData] = useState([])
    const [trendingBlog, setTrendingBlog] = useState([])
    const [trendingMusic, setTrendingMusic] = useState([])
    const [trendingPicture, setTrendingPicture] = useState([])
    const [trendingVideo, setTrendingVideo] = useState([])

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } 
    }

    function showPosition(position) {
    localStorage.setItem('LLCOORDINATESX',position.coords.latitude) 
    localStorage.setItem('LLCOORDINATESY',position.coords.longitude)
    }
    useEffect(()=>{

        getLocation();
        props.fetchAllDashboard();
        // console.log('jdkdld',props.APIFromDashboard.DashboardGetApi.allDashboards)
        if(props.APIFromDashboard.DashboardGetApi.DashboardSuccess){

        if(props.APIFromDashboard.DashboardGetApi.allDashboards.trending_blog.length > 0){
            setTrendingBlog(props.APIFromDashboard.DashboardGetApi.allDashboards.trending_blog)
        }

        if(props.APIFromDashboard.DashboardGetApi.allDashboards.trending_video.length > 0) {
            setTrendingVideo(props.APIFromDashboard.DashboardGetApi.allDashboards.trending_video)
        }
        if(props.APIFromDashboard.DashboardGetApi.allDashboards.trending_music.length > 0){
            setTrendingMusic(props.APIFromDashboard.DashboardGetApi.allDashboards.trending_music)
        }
        if(props.APIFromDashboard.DashboardGetApi.allDashboards.trending_picture.length > 0){
            setTrendingPicture(props.APIFromDashboard.DashboardGetApi.allDashboards.trending_picture)
        }
        }
    },[props.APIFromDashboard.DashboardGetApi.DashboardSuccess])
    return (
        <div>
            {
            props.APIFromDashboard.DashboardGetApi.DashboardInProgress ?
            <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
                <img src={pageLoader} />
            </div>
            :
            <>
            <Sidebar/>
            <Navbar/>
            <CarouselsPage/>
            <div className="DashboardBody" >
                <VideoTrending data={trendingVideo} {...props}/>
                <AudioTrending Data={trendingMusic} {...props}/>
                <PictureTrending data1={trendingPicture} {...props}/>
                <BlogTrending Data1={trendingBlog}{...props}/> 
            </div>
            <Footer />
            {/* <CopyRight /> */}
            </>
            
            }
            
        </div>
    )
}
const mapStateToProps = (state) => {
    // console.log('stateeeeee from Dashboardbnbvcvb', state.Dashboard);
    return{ 
        APIFromDashboard: state.Dashboard
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchAllDashboard: () => dispatch(fetchAllDashboard()),
        fetchAllVideoView: (data) => dispatch(fetchAllVideoView(data)),
        fetchAllPictureView : (data) => dispatch(fetchAllPictureView(data)),
        fetchAllAudios: () => dispatch(fetchAllAudios()),
        fetchAllAudiosItem: () => dispatch(fetchAllAudiosItem()),
        fetchAllRecmBlogs: (data) => dispatch(fetchAllRecmBlogs(data))


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

// export default Dashboard
