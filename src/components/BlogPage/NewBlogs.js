import React, {useEffect, useState} from 'react'
import Carousel from 'react-elastic-carousel'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import Slider from "react-slick";

// import { fetchUploadedBlogs } from '../../redux/NewUploadedBlogs'
import './NewBlogs.css'
import {Link} from 'react-router-dom'

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';

const NewBlogs = (props) => {
    const [settings, setSetting] = useState()
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)')
        if(mediaQuery.matches){
            setSetting ( {
                // dots: true,
                infinite: true,
                speed: 2000,
                lazyLoad: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                arrows: true,
                // className: ''
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
    //     slidesToShow: 5,
    //     slidesToScroll: 3,
    //     adaptiveHeight: true,
    //     arrows: true
    // };

    const handleBlogClick = (blog_id,user_id) => {
        // console.log('gotchaa man blog id', blog_id)
        props.fetchAllRecmBlogs(blog_id);
        localStorage.setItem('id',blog_id);
        localStorage.setItem('UI',user_id);
        window.scrollTo(0,0)


    }
    return (
        <div style={{marginLeft: '6vw', marginTop: '2vh'}}>
            <h2 style={{marginLeft: '2rem'}}>New Uploaded</h2>
            <div className="styling-example-new-blogs"  style={{marginTop: '3vh', }}>
            <Slider {...settings}  >
                {
                    props.newBlogs && props.newBlogs.map((element, index) => {
                        // console.log('elem', element)
                        return(
                        <Link to={{pathname:'/blog-details'}}>
                            <div className="NewBlogCarousel"
                            onClick={() => handleBlogClick(element.blog_id,element.user_id)}>
                                {
                                    element.blog_thumbnail_link != '' ? 
                                    <LazyLoadImage className="NewBlogs-thumbnail" placeholder={<div><img src={miniLoader} /></div>} src={element.blog_thumbnail_link} alt= "" />
                                :
                                <LazyLoadImage className="NewBlogs-thumbnail" placeholder={<div><img src={miniLoader} /></div>} src={element.cat_image_link} alt= "" />

                                }

                                <div className= 'NewBlogs_UsernameWrapper'
                                // style={{display: 'flex',  textAlign: 'justify', opacity: '0.8',marginTop: '2vh'}}
                                >
                                    <div  className= 'NewBlogs_Username'>{element.user_name}</div>
                                    {/* <div  className= 'NewBlogs_UploadTime' style={{marginLeft: '3vw'}}>{element.created_date}</div> */}
                                </div>
                                <div className="NewBlog-blog-details-wrapper" >
                                {/* style={{font: 'normal normal bold  12px/20px Bahnschrift', color: 'black',height: '5.7rem'}} */}
                                    {element.blog_description.length > 50 ? 
                                                element.blog_description.slice(0, 50).concat('...') : 
                                                element.blog_description }
                                    <span style={{color: '#FF0000', marginLeft: '2vw'}}>read more</span>
                                </div>
                                <div className="New-blogs-likes-wrapper">
                                    <div style={{display: 'flex'}}>
                                        <ThumbUpIcon style={{marginRight: '2vw'}} /> 
                                        {element.no_of_like}
                                    </div>
                                    <div style={{marginLeft: '2vw',display: 'flex'}}>
                                        <ChatBubbleRoundedIcon style={{marginRight: '2vw'}} />
                                        {element.no_of_comments}
                                        </div>
                                </div>

                            </div>
                        </Link>
                        )
                    })
                }
            </Slider>
            </div>
        </div>
    )
}


export default NewBlogs
