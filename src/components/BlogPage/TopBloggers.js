import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Slider from "react-slick";

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import './TopBloggers.css'
const TopBloggers = (props) => {
    const [settings, setSetting] = useState()
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)')
        if(mediaQuery.matches){
            setSetting ( {
                dots: true,
                infinite: true,
                speed: 1000,
                lazyLoad: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                adaptiveHeight: true,
                arrows: true,
                }
            )
        }
        else{
            setSetting ( {
                infinite: true,
                speed: 2000,
                lazyLoad: true,
                slidesToShow: 6,
                slidesToScroll: 4,
                adaptiveHeight: true,
                arrows: true
                })
        }
    }, [])
    // const settings = {
    //     infinite: true,
    //     speed: 1500,
    //     // lazyLoad: true,
    //     slidesToShow: 8,
    //     slidesToScroll: 3,
    //     adaptiveHeight: true,
    //     arrows: true
    // };

    const handleTopBloggersProfileClick = (profile_id) => {
        localStorage.setItem('userProfileId', profile_id)
        props.fetchUserProfile(profile_id)
        // console.log('handleAudioProfileClick',profile_id)
    }
    return (
        <div className="TopBloggers_Containers" style={{marginLeft: '6vw', marginTop: '2vh'}}>
            <h2 style={{marginLeft: '2rem', marginBottom: '2rem'}}>Top Bloggers</h2>
            <div className="TopBloggers_Contents">
            {/* <Carousel itemsToScroll={2} itemsToShow={6} > */}
            <Slider {...settings}  >
                {
                    props.topBloggers && props.topBloggers.map((element, index) => {
                        return(
                            <Link to='./userprofile'>
                            <div className="TopBloggers_ContentWrapper" 
                            onClick={() => handleTopBloggersProfileClick(element.artist_id)}
                            style={{margin:'1rem'}}>
                                <LazyLoadImage src={element.profile_pic} alt="no pic" placeholder={<div><img src={miniLoader} /></div>} className="TopBloggers_ProfilePic"/>
                                
                                {/* <div className="TopBloggers_" 
                                style={{textAlign: 'center', opacity: '0.85', fontWeight :'bold'}}
                                 >{element.user_name}</div> */}
                            </div>
                            </Link>
                        )
                    })
                }
            {/* </Carousel> */}
            </Slider>
            </div>
        </div>
    )
}



export default TopBloggers
