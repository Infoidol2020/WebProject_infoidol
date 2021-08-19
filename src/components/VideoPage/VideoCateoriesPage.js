import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';

import Slider from "react-slick";

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import CopyRight from '../CopyRight/CopyRight';
import './VideoCateoriesPage.css'
import { fetchTopCategoryVideos } from '../../redux/VideoPage/TopVideosCategoryActions'
import { fetchAllVideoCatList } from '../../redux/VideoCategoryList/VideoCategoryListAction'
import { fetchAllVideoView } from '../../redux/VideoViewPage/VideoPageViewAction'
import pageLoader from '../../assets/pageLoader.svg'

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';



const VideoCateoriesPage = (props) => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        adaptiveHeight: true,
        arrows: true
        };
    const [videoCategory, setVideoCategory] = useState([])
    const [VideoCat,setVideoCat] = useState([])

    const history = useHistory()

    const handleCategory = (cat_id) => {
        props.fetchAllVideoCatList(cat_id)
        sessionStorage.setItem('cat_id', cat_id)
    
    }
    const handleVideoClick = (video_id,user_id) =>{
        // console.log('got video id', video_id);
        props.fetchAllVideoView(video_id)
        localStorage.setItem('id', video_id);
        localStorage.setItem('UI',user_id);
        window.scrollTo(0,0)
    
    } 
    useEffect(() => {
        props.fetchTopCategoryVideos()
        props.fetchAllVideoCatList(sessionStorage.getItem('cat_id'))
    }, [])

    useEffect(() => {
        if(props.VideoCategoriesPage.TopCategoryVideos.VideoPageGetApi.VideoPageSuccess){
            setVideoCategory(props.VideoCategoriesPage.TopCategoryVideos.VideoPageGetApi.allVideo.category)
        }
    }, [props.VideoCategoriesPage.TopCategoryVideos.VideoPageGetApi.VideoPageSuccess])
    useEffect(() => {
        setVideoCat(props.VideoCategoriesPage.VideoCatList.VideoCatListPageGetApi.allVideoCatList)
    
    },[props.VideoCategoriesPage.VideoCatList.VideoCatListPageGetApi.VideoCatListPageSuccess])

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div style={{marginLeft: '5vw', marginTop: '13vh'}}>
                <Slider {...settings}>
                    {
                    videoCategory ?
                    videoCategory && videoCategory.map((element) => {
                        return(
                                <>
                                    <div className="VideoCategoryList"  onClick={() => handleCategory(element.cat_id)}>
                                        <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src={element.image} alt="" style={{borderRadius:'10%',cursor: 'pointer' ,width:'10vw', height:'10vh',marginLeft:'1vw'}}/>
                                        <b style={{marginLeft:'4vw'}}>{element.cat_name}</b>
                                    </div>
                                </>
                            )
                        })
                        : 
                        ''
                    }
                </Slider>

            </div>
            {
                <div className="" style={{marginLeft: '4vw', marginTop: '2vh'}}>
                {
                
                props.VideoCategoriesPage.VideoCatList.VideoCatListPageGetApi.VideoCatListPageInProgress ?
                <div style={{textAlign: 'center'}}>
                    <img src={pageLoader} />
                </div>
                :
                (VideoCat && VideoCat.length > 0) ?
                <div className="videos-by-category" style={{ margin: 'auto', 
                marginLeft: '5vw',
                marginTop: '2vh',
                height: '65vh',
                overflowY: 'scroll'}}>
                {
                VideoCat && VideoCat.map((element,index) => {
                        return(
                            <>
                                <div  onClick={() => handleVideoClick(element.video_id,element.user_id)} style={{cursor: 'pointer',
                                display:'inline-block',
                                borderRadius:'10px',
                                height: '25vh',
                                border: 'solid 1px #dadada',
                                margin: '1rem'}}>
                            
                                    <Link to={{pathname:'/video-details'}}>
                                        {
                                            element.video_thumbnail_link !== '' ?
                                            <LazyLoadImage style={{width: '18vw', height: '22vh', margin: '1rem', objectFit: 'cover', borderRadius: '10px'}} src={element.video_thumbnail_link} placeholder={<div><img src={miniLoader} /></div>} />
                                            :
                                            <LazyLoadImage style={{width: '18vw', height: '22vh', margin: '1rem', objectFit: 'cover', borderRadius: '10px'}} src={element.cat_image_link} placeholder={<div><img src={miniLoader} /></div>} />
                                        }
                                    </Link>
                                </div>
                            </>
                        )
                    })
                }
                    </div>

                    : 
                    <div style={{ 
                    textAlign: 'center', 
                    fontWeight: 'bold',
                    height: '7vh',
                    marginLeft: '4vw',
                    height: '60vh', 
                    marginTop: '5vh'}}>No Videos in this category...</div>
                }
            </div>

            }
            {
                props.VideoCategoriesPage.VideoCatList.VideoCatListPageGetApi.VideoCatListPageInProgress !== true && 
                <CopyRight />
            
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log('stateeeeee from Video page', state);
    return{ 
        VideoCategoriesPage: state,

    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchTopCategoryVideos: () => dispatch(fetchTopCategoryVideos()),
        fetchAllVideoCatList: (data) => dispatch(fetchAllVideoCatList(data)),
        fetchAllVideoView: (data) => dispatch(fetchAllVideoView(data)),


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(VideoCateoriesPage)
