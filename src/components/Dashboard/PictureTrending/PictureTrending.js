import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom';

import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Carousel from 'react-elastic-carousel'
import './PictureTrending.css'
import Slider from "react-slick";

import miniLoader from '../../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';




const PictureTrending = (props) => {

    const [settings, setSetting] = useState()
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)')
        if(mediaQuery.matches){
            setSetting ( {
                // dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1.1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                arrows: true,
                // className: 'VideoTrendingsliderStyles'
                }
            )
        }
        else{
            setSetting ( {
                // dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 3,
                adaptiveHeight: true,
                arrows: true,
                className: 'PictureTrendingsliderStyles'
                })
        }
    }, [])

    // const settings = {
    //     // dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 3,
    //     adaptiveHeight: true,
    //     arrows: true,
    //     className: 'PictureTrendingsliderStyles'
    //     };


    const handlePictureClick = (image_id,user_id) =>{
        // console.log('got image id', image_id);
        // console.log('proooo', props)
        props.fetchAllPictureView(image_id)
        localStorage.setItem('id', image_id);
        localStorage.setItem('UI', user_id);
        window.scrollTo(0, 0)


    
    }
    return (
        <div>
            <div className="Picture_Container" style={{marginLeft:'5vw'}}>
            <div className="TrendingPicture_Styling">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h2 style={{marginLeft:'3.5vh'}}>Trending pictures</h2>
                    <Link to="/trending-pictures">
                        <div style={{marginRight: '5vw', color: 'rgb(16, 201, 230)'}}
                        onClick={sessionStorage.setItem('pictureOffset', 0)}>View all</div>
                    </Link>
                </div>
                <Slider {...settings}>
                {
                    props.data1 && props.data1.map((element, index) => {
                        return(
                            <div className="internal_picture">
                            
                               {/* <div key ={index}> */}
                                <div className="Aside" onClick={() => handlePictureClick(element.image_id,element.user_id)}>
                                <Link to={{pathname:'/picture-details'}}>
                                <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src={element.picture_link}   alt=""/>
                                </Link>
                                {/* <div className="likes_picture"> */}
                                            {/* <span className="pictureCount" style={{display:'flex'}}><span style={{color:'red'}}><FavoriteIcon/></span> {element.no_of_like}</span>
                                            <span className="pictureCount" style={{display:'flex'}}><span style={{color:'grey'}}><CommentIcon/></span> { element.no_of_comments}</span> */}
                                            {/* <div className="pictureCount" style={{display:'flex'}}><span style={{color:'blue'}}> <VisibilityIcon/></span> { element.no_of_views}</div> */}
                                {/* </div> */}
                                </div>
                                <div className="Profile_picture">
                                    <LazyLoadImage src={element.user_profile_pic} alt=""/>
                                    <div className="description_picture">
                                        <h4>
                                        {element.picture_title.length > 30 ? 
                                        element.picture_title.slice(0, 15).concat('..') : 
                                        element.picture_title}</h4>
                                        <p>
                                        <span className="pictureCount"><span style={{color:'red'}}><FavoriteIcon/></span> {element.no_of_like}</span>
                                        <span className="pictureCount"><span style={{color:'grey'}}><CommentIcon/></span> { element.no_of_comments}</span>
                                        </p>
                                    </div>
                                    
                                </div>
                                
                               {/* </div>  */}
                            </div>
                        )
                    })
                }
                {/* </Carousel> */}
                </Slider>

            </div>
            {/* <div className="Picture_elems" >
                
            </div> */}
        </div>
        </div>
    )
}

export default PictureTrending
