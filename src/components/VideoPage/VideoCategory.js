import React, {useState,useEffect,useRef} from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

// import Carousel from 'react-elastic-carousel'
import Slider from "react-slick";


// import pageLoader from '../../assets/pageLoader.svg'

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';


import './VideoCategories.css'
import { fetchAllVideoCatList } from '../../redux/VideoCategoryList/VideoCategoryListAction'
// import VideoRecentlyPlay from './VideoRecentlyPlayed/VideoRecentlyPlay';



const VideoCategory = (props) => {
    const [settings, setSetting] = useState()
    // const settings = {
    //     // dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 6,
    //     slidesToScroll: 3,
    //     adaptiveHeight: true,
    //     arrows: true
    //     };

        useEffect(() => {
            const mediaQuery = window.matchMedia('(max-width: 500px)')
            if(mediaQuery.matches){
                setSetting ( {
                    // dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    arrows: true,
                    }
                )
            }
            else{
                setSetting ( {
                    // dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    adaptiveHeight: true,
                    arrows: true,
                    })
            }
        }, [])
// console.log('props11111111111111 from category', props.videoCategory)

const [VideoCat,setVideoCat] = useState([])
const history = useHistory()

const handleCategory = (cat_id) => {
    props.fetchAllVideoCatList(cat_id)
    history.push('/video-categories')
    sessionStorage.setItem('cat_id', cat_id)

}


useEffect(() => {
    setVideoCat(props.VideoCatList.VideoCatList.VideoCatListPageGetApi.allVideoCatList)

},[props.VideoCatList.VideoCatList.VideoCatListPageGetApi.VideoCatListPageSuccess])

    return (
        <div>
        
            <div className="styling_Video">
                {/* <Carousel  itemsToShow={7}>  */}
                <Slider className="mobile-slider" {...settings}>
                    {
                    props.videoCategory ?
                    props.videoCategory && props.videoCategory.map((element) => {
                        return(
                                <>
                                    <div className="VideoCategoryList"  onClick={() => handleCategory(element.cat_id)}>
                                        <LazyLoadImage className="mobile-video-page-category-images" placeholder={<div><img src={miniLoader} /></div>} src={element.image} alt="" style={{borderRadius:'10%',cursor: 'pointer' ,width:'10vw', height:'10vh',marginLeft:'1vw'}}/>
                                        
                                        {
                                            
                                            window.matchMedia('(max-width: 500px)'.matches) ?
                                            <div className="mobile-video-page-category-names">
                                            <b>{element.cat_name }</b>
                                            </div>
                                            :
                                            <b style={{marginLeft:'4vw'}}>{element.cat_name}</b>
                                        }
                                    </div>
                                </>
                            )
                        })
                        : 
                        ''
                    }
                {/* </Carousel> */}
                </Slider>

            </div>

            
        
        </div>
    )
}
const mapStateToProps = (state) => {
    // console.log('stateeeeee from Video cat list', state);
    return{ 
        VideoCatList: state,

    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchAllVideoCatList: (data) => dispatch(fetchAllVideoCatList(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(VideoCategory)

// export default VideoCategory

