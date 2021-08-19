import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import CopyRight from '../CopyRight/CopyRight' 
import './BlogCategoriesPage.css'

import { fetchAllBlogs } from '../../redux/BlogPage/BlogPageActions'
import {fetchAllBlogCatList} from '../../redux/BlogListByCategory'
import { fetchAllRecmBlogs } from '../../redux/BlogShowRecommended/ActionsRecommendedBlogs'
import pageLoader from '../../assets/pageLoader.svg'


import Slider from "react-slick";

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';


// import BlogCategories from './BlogCategories'
const BlogCategoriesPage = (props) => {
    // console.log('prpppp', props.BlogCatList.BlogPage.BlogPageGetApi.allBlogsFromBlogApi.category)
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
                // className: 'VideoTrendingsliderStyles'
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
                // className: 'PictureTrendingsliderStyles'
                })
        }
    }, [])
    const [blogCategories, setBlogCategories] = useState([])
    const [BlogCategory,setBlogCategory] = useState([])
    const history = useHistory()

    useEffect(() => {
        props.fetchAllBlogs();
    }, [])

    useEffect(() => {
        props.fetchAllBlogCatList(sessionStorage.getItem('cat_id'))
    }, [])

    useEffect(() => {
        if(props.BlogCatList.BlogPage.BlogPageGetApi.BlogPageSuccess){
            setBlogCategories(props.BlogCatList.BlogPage.BlogPageGetApi.allBlogsFromBlogApi.category)
        }
    }, [props.BlogCatList.BlogPage.BlogPageGetApi.BlogPageSuccess])

    useEffect(() => {
        if(props.BlogCatList.BlogCatPage.BlogCatListGetApi.BlogCatListSuccess){
            setBlogCategory(props.BlogCatList.BlogCatPage.BlogCatListGetApi.allBlogCatList)
        }

    }, [props.BlogCatList.BlogCatPage.BlogCatListGetApi.BlogCatListSuccess])

    const handleBlogCategory = (cat_id) => {
        props.fetchAllBlogCatList(cat_id)
        // history.push('/blog-categories')
        sessionStorage.setItem('cat_id', cat_id)
        
    }

    const handleBlogClick = (blog_id,user_id) =>{
        // console.log('gotchaaa ',blog_id);
        props.fetchAllRecmBlogs(blog_id)
        localStorage.setItem('id',blog_id);
        localStorage.setItem('UI',user_id)
        window.scrollTo(0,0)


    }

    return (
        
        <div>
            {
                props.BlogCatList.BlogPage.BlogPageGetApi.BlogPageInProgress ?
                <div style={{textAlign :'center'}}>
                    <img src={pageLoader} />    
                </div>
                :
            <>
            <Navbar />
            <Sidebar />
            <div style={{marginLeft: '5vw', marginTop: '13vh'}}>
            </div>
            <div className="blog-cat-page-styling-example" 
            // style={{outline: 'none', marginLeft: '5vw'}}
            >
            <Slider {...settings} className="Blog-CatPage-Slider" style={{outline: 'none'}}>
                {
                    blogCategories ?
                    blogCategories && blogCategories.map((element, index) => {
                        return(
                        <div className="carouselCatPage_wrapper"  style={{outline: 'none'}}>
                            <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>}  onClick={() => handleBlogCategory(element.cat_id)}
                            className="carousel-catPage-blog-categories" 
                            // style={{width: '10vw', height: '8vh', objectFit: 'cover'}} 
                            src ={element.image} alt= ""/>
                            
                            <div className="Blog-CatPage-Slider-Cat-Name"  
                            // style={{textAlign: 'center', opacity: '0.85', fontWeight:'bold',marginLeft: '-5rem'}}
                            >{element.cat_name}
                            </div>
                        </div>
                        )
                    })
                    : 
                    <>
                        <p>Loading...</p>
                    </>
                }
            </Slider>

            </div>

            {
                props.BlogCatList.BlogCatPage.BlogCatListGetApi.BlogCatListInProgress ?
                <div style={{textAlign: 'center'}}>
                    <img src={pageLoader} />
                </div>
                :
                (BlogCategory && BlogCategory.length > 0) ? 
                <div className="blogs-by-category" style={{ margin: 'auto', 
                marginLeft: '5vw',
                marginTop: '2vh',
                height: '65vh',
                overflowY: 'scroll'}}>
                {
                BlogCategory && BlogCategory.map((element,index) => {
                        return(
                            <>
                                <div className="VCT_wrapper" onClick={() => handleBlogClick(element.blog_id,element.user_id)} 
                                style={{cursor: 'pointer',
                                display:'inline-block',
                                marginLeft: '2.5vw',
                                borderRadius:'10px'}}>
                                    <Link to={{pathname:'/blog-details'}}>
                                        <div className="BlogCatList_Wrapper" style={{border: '1px solid black',marginTop: '2rem',marginLeft: '2rem'}}>
                                            {/* <img alt="" src={element.cat_image_link} style={{width:'18vw', height:'18vh',marginTop:'1vh',border:'#E0DBDB 0% 0% no-repeat'}}></img> */}
                                            {
                                            element.blog_thumbnail_link !== '' ?
                                            <LazyLoadImage className="BlogCatPage-Blog-Thumbnail" 
                                            // style={{width: '14vw', height: '7vw', margin: '0.5rem', objectFit: 'cover'}} 
                                            src={element.blog_thumbnail_link} placeholder={<div><img src={miniLoader} /></div>} />
                                            :
                                            <LazyLoadImage className="BlogCatPage-Blog-Thumbnail-Alt"  
                                            // style={{width: '14vw', height: '7vw', margin: '0.5rem', objectFit: 'cover'}} 
                                            src={element.cat_image_link} placeholder={<div><img src={miniLoader} /></div>} />
                                            }
                                            <div className="BlogCat_Info" style={{textAlign: 'center'}}>
                                                <img alt="" src={element.user_profile_pic} style={{height:'3rem',width: '3rem', borderRadius: '50%', marginTop: '1vh'}}></img>
                                                <span style={{marginTop: '2vh',marginLeft: '1vw'}}>{element.user_name}</span>
                                                <p>{element.blog_title.length > 30 ? 
                                                    element.blog_title.slice(0, 30).concat('....') : 
                                                    element.blog_title}</p>
                                                <p > 
                                                    {element.blog_description.length > 30 ? 
                                                    element.blog_description.slice(0, 30).concat('....') : 
                                                    element.blog_description}
                                                </p>
                                            </div>
                                            
                                        </div>
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
            marginTop: '5vh'}}>No blogs in this category...</div>
            }
            {/* {
                props.BlogCatList.BlogCatPage.BlogCatListGetApi.BlogCatListInProgress !== true && 
                <CopyRight />

            } */}
            </>
            }
        </div>
    )
}


const mapStateToProps = (state) => {
    // console.log('state from Blog cat list', state);
    return{ 
        BlogCatList: state,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchAllBlogs: () => dispatch(fetchAllBlogs()),
        fetchAllBlogCatList: (data) => dispatch(fetchAllBlogCatList(data)),
        fetchAllRecmBlogs: (data) => dispatch(fetchAllRecmBlogs(data))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BlogCategoriesPage)
