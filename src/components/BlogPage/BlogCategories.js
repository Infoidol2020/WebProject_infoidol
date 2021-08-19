import React, {useState,useEffect,useRef} from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
// import Carousel from 'react-elastic-carousel'
import {fetchAllBlogCatList} from '../../redux/BlogListByCategory'
import Slider from "react-slick";

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';

import './BlogCategories.css'
const BlogCategories = (props) => {
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
                // className: 'PictureTrendingsliderStyles'
                })
        }
    }, [])
    // const settings = {
    //     infinite: true,
    //     speed: 2000,
    //     lazyLoad: true,
    //     slidesToShow: 6,
    //     slidesToScroll: 4,
    //     adaptiveHeight: true,
    //     arrows: true
    // };
// console.log('props testing',props.blogCategories)
    const [BlogCategory,setBlogCategory] = useState([])
    const [showBlogcategoryData, setShowBlogCategoryData] = useState(false)
    const history = useHistory()
    
    const handleBlogCategory = (cat_id) => {
        props.fetchAllBlogCatList(cat_id)
        history.push('/blog-categories')
        sessionStorage.setItem('cat_id', cat_id)
        
    }



    return (
        <div className="blog-categories-container">
            <div>
                <h2 style={{marginLeft: '2rem'}}>Categories</h2>
            </div>
            <div className="blog-styling-example" style={{outline: 'none'}}>
            {/* <Carousel itemsToScroll={2} itemsToShow={6}> */}
            <Slider {...settings}  style={{outline: 'none'}} className="SliderBlogCat">
                {
                    props.blogCategories ?
                    props.blogCategories && props.blogCategories.map((element, index) => {
                        return(
                        <div className="carouselCat_wrapper">
                            <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>}  onClick={() => handleBlogCategory(element.cat_id)}
                            className="carousel-blog-categories" 
                            // style={{width: '10vw', height: '8vh', objectFit: 'cover'}} 
                            src ={element.image} alt= ""/>
                            <div className="SliderBlogCat_CatName"
                            // style={{textAlign: 'center', opacity: '0.85', fontWeight:'bold',marginLeft: '-5rem'}}
                            >{element.cat_name}</div>
                        </div>
                        )
                    })
                    : 
                    <>
                        <p>Loading...</p>
                    </>
                }
            {/* </Carousel> */}
            </Slider>

            </div>

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
        fetchAllBlogCatList: (data) => dispatch(fetchAllBlogCatList(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BlogCategories)


// export default BlogCategories
