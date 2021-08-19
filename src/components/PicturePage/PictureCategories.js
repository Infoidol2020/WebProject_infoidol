import React, {useState, useEffect} from 'react'
import Carousel from 'react-elastic-carousel'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import Slider from "react-slick";
import './PictureCategories.css';

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';


// import {fetchPictureListByCategory} from '../../redux/PicturePage/PictureListByCategory/PictureListByCategoryActions'
// import { fetchAllPictures } from '../../redux/PicturePage'


const PictureCategories = (props) => {

    const [settings, setSetting] = useState()
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)')
        if(mediaQuery.matches){
            setSetting ( {
                // dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 2,
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
                slidesToShow: 5,
                slidesToScroll: 2,
                adaptiveHeight: true,
                arrows: true,
                // className: 'VideoTrendingsliderStyles'
                })
        }
    }, [])
    
    // const settings = {
    //     // dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 5,
    //     slidesToScroll: 2,
    //     adaptiveHeight: true,
    //     arrows: true
    //     };


const handleClick = (cat_id) => {
    props.fetchPictureListByCategory(cat_id)
    sessionStorage.setItem('cat_id', cat_id)
}

    return (
        <div style={{marginLeft: '5vw', marginTop: '5vh', height: '20vh'}}>
            {/* <Carousel itemsToScroll={2} itemsToShow={5}>  */}
            <Slider {...settings}>
            {
                    
                    props.data && props.data.map((element) => {
                        return(
                                <Link to='/picture-categories'>
                                <div style={{position: 'relative', cursor: 'pointer'}}
                                
                                onClick={() => handleClick(element.cat_id)}
                                > 
                                    <LazyLoadImage className="PP_Cat" placeholder={<div><img src={miniLoader} /></div>} src = {element.image} 
                                        />
                                        <div className="PP_CatBG" ></div>
                                    <div style={{
                                        color: '#fff',
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        font: 'normal normal bold 22px/22px Copperplate Gothic',
                                        transform: 'translate(-50%, -50%)',

                                    }}>
                                        {element.cat_name}
                                    </div>
                                </div>
                                </Link>
                                    
                                
                            )
                        })

                    }

            </Slider>
            
                {/* </Carousel> */}
        </div>
    )
}



export default PictureCategories
