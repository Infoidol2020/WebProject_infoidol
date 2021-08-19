import React, {useEffect} from 'react'

import './TopCategoryPictures.css'
import {Link} from 'react-router-dom'

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';

const TopCategoryPictures = (props) => {
    // console.log('data from picture top categories', props)

    var settings = {
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const handlePictureClick = (image_id,user_id) =>{
        // console.log('got image id', image_id);
        // console.log('proooo', image_id)
        props.fetchAllPictureView(image_id)
        localStorage.setItem('id', image_id);
        localStorage.setItem('UI',user_id);
        window.scrollTo(0,0);
    
    }

    useEffect(() => {
        const id = localStorage.getItem('id');
        // console.log('id from local storage', id);
        props.fetchAllPictureView(id);
        // console.log('Picturee listtttt',id)

    },[])

    return (
        <>
        <div className="top-category-pictures-container">
            <div>
                {
                    props.pictures !=undefined ? props.pictures.map((element, index) => {
                        return(
                            index === 0 && 
                        
                                <div  onClick={() => handlePictureClick(element.image_id,element.user_id)} style={{  margin: '6rem 2rem'}}>
                                    <Link to={{pathname:'/picture-details',
                                    element: {element:element}}}>
                                        <LazyLoadImage  className="PP_FIndex"  placeholder={<div><img src={miniLoader} /></div>} src ={element.picture_link}  />
                                    </Link>
                                </div> 
                                    
                        )
                    })
                    :""
                }
            </div>
            <div  className="right-pictures-section">
                {
                    props.pictures !=undefined ? props.pictures.map((element, index) => {
                        return(
                            index > 0 && 
                            <div onClick={() => handlePictureClick(element.image_id,element.user_id)} style={{display: 'inline-block'}} >
                                <Link to={{pathname:'/picture-details',
                                element: {element:element}}}>
                                <LazyLoadImage  className="PP_rightSec"                              
                                placeholder={<div><img src={miniLoader} /></div>} src ={element.picture_link} 
                                />
                                </Link>
                            </div>                        
                        )
                    }):""
                }
                </div>
            </div>
            </>
    )
}

export default TopCategoryPictures
