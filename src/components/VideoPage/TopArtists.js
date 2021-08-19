import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import Carousel from 'react-elastic-carousel'
import Slider from "react-slick";
import {Link} from 'react-router-dom'

import miniLoader from '../../assets/miniLoader.svg'
import './TopArtists.css'

import { LazyLoadImage } from 'react-lazy-load-image-component';



const TopArtists = (props) => {
    const handleVideoTopArtistProfileClick = (profile_id) => {
        localStorage.setItem('userProfileId', profile_id)
        props.fetchUserProfile(profile_id)
        // console.log('handleAudioProfileClick',profile_id)
    }
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
                }
            )
        }
        else{
            setSetting ( {
                // dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 6,
                slidesToScroll: 2,
                adaptiveHeight: true,
                arrows: true,
                })
        }
    }, [])


    return (
        <div style={{marginLeft: '5vw'}}>
            <h2 style={{color: 'black', opacity: '0.6',marginLeft:'1vw'}}>Top Artists</h2>
                <div className="styling-example-top-artist"  style={{marginTop: '3vh' }}>
                <Slider {...settings} >
                    {
                        props.topArtists && props.topArtists.map((element, index) => {
                            return(
                                <Link to='./userProfile'>
                                <div style={{marginTop :'2vw'}}
                                onClick={() => handleVideoTopArtistProfileClick(element.artist_id)}
                                >
                                    <LazyLoadImage className="top-artists-thumbnail"  placeholder={<div><img src={miniLoader} /></div>}  src ={element.profile_pic} 
                                    style={{borderRadius: '50%', border: '1px solid #707070', width: '15rem', height: '15rem'}}
                                    />
                                    <div style={{color: '#fff', opacity: '0.8', font: 'normal normal normal 22px/22px Arial',textAlign: 'center'}}>
                                        {element.user_name}
                                    </div>
                                </div>
                                </Link>
                            )
                        })
                    }
                </Slider>
                {/* </Carousel> */}
            </div>
        </div>
    )
}

export default TopArtists

