import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Link, useHistory } from 'react-router-dom'
import Slider from "react-slick";


import Carousel from 'react-elastic-carousel'

import pageLoader from '../../assets/pageLoader.svg'
import './PictureCategoriesPage.css'
import { fetchAllPictures } from '../../redux/PicturePage'
import {fetchPictureListByCategory} from "../../redux/PictureListByCategory"
import {fetchAllPictureView} from '../../redux/PictureViewPage/PictureViewPageAction'

import CopyRight from '../CopyRight/CopyRight' 
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';


const PictureCategoriesPage = (props) => {

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

    const history = useHistory();
    
    const [PictureCats, setPictureCats]=useState();
    const [pictureCategories, setPictureCategories] = useState();

    const handlePictureCategory = (cat_id) => {
        props.fetchPictureListByCategory(cat_id)
        sessionStorage.setItem('cat_id', cat_id)
    }

    const handlePicture = (image_id,user_id) => {
        props.fetchAllPictureView(image_id)
        localStorage.setItem('id', image_id);
        // console.log('video id gotit',image_id)
        localStorage.setItem('UI',user_id)
        window.scrollTo(0,0)

        // console.log('clicked and recieved', videoElement);
    }
    useEffect(() => {
        props.fetchAllPictures()
        props.fetchPictureListByCategory(sessionStorage.getItem('cat_id'))

    }, [])

    useEffect(() => {
        if(props.PicturecategoriesPage.PicturePage.picturePageGetApi.PicturePageSuccess){
            if(props.PicturecategoriesPage.PicturePage.picturePageGetApi.allPictures.length>0){
            setPictureCats(props.PicturecategoriesPage.PicturePage.picturePageGetApi.allPictures[0].data.data.category)
        }}

    }, [props.PicturecategoriesPage.PicturePage.picturePageGetApi.PicturePageSuccess])

    useEffect(() => {
        if(props.PicturecategoriesPage.PictureListByCategory.pictureListByCategoryGetApi.PictureListByCategorySuccess){
            setPictureCategories(  props.PicturecategoriesPage.PictureListByCategory.pictureListByCategoryGetApi.PictureListByCategory)
        }
    }, [props.PicturecategoriesPage.PictureListByCategory.pictureListByCategoryGetApi.PictureListByCategorySuccess])

    return (
        <>
        <div>
            <Navbar/>
            <Sidebar/> 
            
            <div style={{marginLeft: '5vw', marginTop: '13vh'}}>
                {/* <Carousel itemsToScroll={2} itemsToShow={5}>  */}
                <Slider {...settings}>
                    {
                    
                    PictureCats && PictureCats.map((element) => {
                        return(
                                <div style={{position: 'relative', cursor: 'pointer'}}
                                
                                onClick={() => handlePictureCategory(element.cat_id)}
                                
                                > 
                                    <LazyLoadImage className="PCP_CAT" placeholder={<div><img src={miniLoader} /></div>} src = {element.image} 
                                        />
                                        <div style={{position: 'absolute', 
                                        height: '15vh', 
                                        width: '15vw',
                                        borderRadius :'10px',
                                        opacity: '0.2',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        }}></div>
                                    <div className="PCP_CatName" >
                                        {element.cat_name}
                                    </div>
                                </div>
                                    
                                
                            )
                        })

                    }
                {/* </Carousel> */}
                </Slider>

                </div>

                {
                props.PicturecategoriesPage.PictureListByCategory.pictureListByCategoryGetApi.PictureListByCategoryInProgress ?
                <div style={{textAlign: 'center'}}>
                    <img src={pageLoader} />
                </div>
                :
                (pictureCategories && pictureCategories.length > 0) ? 
                <div className="pictures-by-category" >
                {
                pictureCategories && pictureCategories.map((element,index) => {
                        return(
                            <>
                                <div  
                                // onClick={() => handleBlogClick(element.blog_id,element.user_id)} 
                                style={{cursor: 'pointer',
                                display:'inline-block',
                                marginLeft: '2.5vw',
                                marginTop: '2vh',
                                borderRadius:'10px'}}>
                                    <Link to={{pathname:'/picture-details'}} onClick={() => handlePicture(element.image_id, element.user_id)}>
                                        <div>
                                            <LazyLoadImage className="PCP_ParticularCatImage" placeholder={<div><img src={miniLoader} /></div>} src={element.picture_link} />
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
            marginTop: '5vh'}}>No Pictures in this category...</div>
            }
            {/* {
                props.PicturecategoriesPage.PictureListByCategory.pictureListByCategoryGetApi.PictureListByCategoryInProgress !== true && 
                <CopyRight />

            } */}
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    // console.log('state from picture page', state);
    return{
        PicturecategoriesPage: state,
    
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllPictures: () => dispatch(fetchAllPictures()),
        fetchPictureListByCategory:(id)=>dispatch(fetchPictureListByCategory(id)),
        fetchAllPictureView : (data) => dispatch(fetchAllPictureView(data))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PictureCategoriesPage)
