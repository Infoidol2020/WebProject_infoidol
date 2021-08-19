import React,{useEffect,useState} from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import Carousel from 'react-elastic-carousel'
import './BlogTrending.css'
import Slider from "react-slick";
import {Link} from 'react-router-dom'

import miniLoader from '../../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';


const BlogTrending = (props) => {

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
                className: 'BlogTrendingsliderStyles'
                })
        }
    }, [])

    // const settings = {
    //     // dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 2,
    //     adaptiveHeight: true,
    //     arrows: true,
    //     // className: 'BlogTrendingsliderStyles'
    //     };

        const handleTopBlogsClick = (blog_id,user_id) => {
            // console.log('gotchaa man top blog id', blog_id)
            props.fetchAllRecmBlogs(blog_id);
            localStorage.setItem('id',blog_id);
            localStorage.setItem('UI',user_id)
            window.scrollTo(0, 0)

        }
    return (
        <div>
            <div className="Blog_Container" style={{marginLeft:'5vw'}}>
            <div className="TrendingBlog_Styling">
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h2 style={{marginLeft:'3.5vh'}}>Trending Blogs</h2>
                    <Link to="/trending-blogs">
                        <div style={{marginRight: '5vw', color: 'rgb(16, 201, 230)'}}
                        onClick={sessionStorage.setItem('blogOffset', 0)}>View all</div>
                    </Link>
                </div>
                <Slider {...settings}>
                {
                    props.Data1 && props.Data1.map((element, index) => {
                        return(
                            <div className="internal_blog">
                            
                               {/* <div key ={index}> */}
                                <div className="clv"
                                onClick={() => handleTopBlogsClick(element.blog_id,element.user_id)}>

                                    <Link to={{pathname: '/blog-details'}}>
                                    <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src={element.cat_image_link}   alt=""/>
                                    </Link>
                                {/* <div className="likes_blog"> */}
                                        {/* <div className="blog_counts b1" style={{display:'flex'}}><FavoriteIcon/> {element.no_of_like}</div>
                                        <div className="blog_counts b2" style={{display:'flex'}}><CommentIcon/> { element.no_of_comments}</div> */}
                                        {/* <div className="blog_counts b3" style={{display:'flex'}}><VisibilityIcon/>{ element.no_of_views}</div> */}
                                {/* </div> */}
                                </div>
                                <div className="Profile_blog">
                                    <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src={element.user_profile_pic} alt="Img"/>
                                    <div className="description_blog">
                                        <h4>
                                            {element.blog_title.length > 8 ?
                                            element.blog_title.slice(0,15) :
                                            element.blog_title}
                                        </h4>
                
                                        <p > 
                                            {/* {element.blog_description.length > 20 ? 
                                            element.blog_description.slice(0, 20).concat('......') : 
                                            element.blog_description} */}
                                        <span className="blog_counts b1"><span style={{color:'red'}}><FavoriteIcon/></span>  {element.no_of_like}</span>
                                        <span className="blog_counts b2"><span style={{color:'grey'}}><CommentIcon/></span> { element.no_of_comments}</span>
                                        </p>
                                    </div>
                                    
                                </div>
                                
                               {/* </div>  */}
                            </div>
                        )
                    })
                }
                    </Slider>
                {/* </Carousel> */}
            </div>
        
        </div>
        </div>
    )
}

export default BlogTrending
