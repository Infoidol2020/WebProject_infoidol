import { Link } from 'react-router-dom'
import React,{useEffect} from 'react'

import './gallery.scss'

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';

const ParticularCategoryPictures = (props) => {

    const handlePicture = (image_id,user_id) => {
        props.fetchAllPictureView(image_id)
        localStorage.setItem('id', image_id);
        // console.log('video id gotit',image_id)
        localStorage.setItem('UI',user_id)
        window.scrollTo(0,0)

        // console.log('clicked and recieved', videoElement);
    } 

    useEffect(() => {
        const id = localStorage.getItem('id');
        // console.log('id from local storage', id);
        props.fetchAllPictureView(id);
        // console.log('Picturee listtttt',props.AllPictureListFromAPI)

    },[])
    // console.log('data from particular category pictures', props.data)
    return (
        <div style={{textAlign: 'center',marginLeft: '4vw', marginTop: '3vh'}}>
            {
                props.data && props.data.map((element, index) => {
                    return(
                        <div className="photoset -square -portrait"
                        style={{display: 'inline-block', margin: '1rem'}}
                        >
                            <Link to={{pathname:'/picture-details'}}  onClick={() => handlePicture(element.image_id, element.user_id)}>
                            <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} className="photo" src={element.picture_link} alt=""/>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ParticularCategoryPictures
