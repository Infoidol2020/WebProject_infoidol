import React, {useState,useEffect} from 'react';
// import blogThumb from  '../../assets/couple.PNG';
import './BlogShowRecommended.css';
import {Link} from 'react-router-dom'

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';

const BlogShowRecommended = (props) => {
    // const handleTopBlogsClick = (blog_id) => {
    //     console.log('gotchaa man top blog id', blog_id)
    //     props.fetchAllRecmBlogs(blog_id);
    //     localStorage.setItem('id',blog_id);
    // }

    const handleBlogClick = (blog_id) =>{
        // console.log('gotchaaa ',blog_id);
        props.fetchAllRecmBlogs(blog_id)
        localStorage.setItem('id',blog_id)
        window.scrollTo(0,0)
    }

    const [recommendedBlogs,setRecommendedBlogs] = useState([]);
    
    

    // console.log('blogsRecommended', props.RecomBlogsFromApi);
    useEffect(() => {
        if(sessionStorage.getItem('blogRecommendedOffset') == undefined || sessionStorage.getItem('blogRecommendedOffset') == null){
            props.hitBlogRecommendedAPI(0, localStorage.getItem('UI'))
            sessionStorage.setItem('blogRecommendedOffset', 0)
        } 
        else{
            props.hitBlogRecommendedAPI(sessionStorage.getItem('blogRecommendedOffset'), localStorage.getItem('UI'))

        }
    }, [])

    useEffect(() => {
        if(props.RecomBlogsFromApi.BlogRecommended.BlogRecommendedApi.BlogRecommendedSuccess && 
            props.RecomBlogsFromApi.BlogRecommended.BlogRecommendedApi.BlogRecommended.status && 
            props.RecomBlogsFromApi.BlogRecommended.BlogRecommendedApi.BlogRecommended.data.length > 0){
                setRecommendedBlogs(props.RecomBlogsFromApi.BlogRecommended.BlogRecommendedApi.BlogRecommended.data)
            }

    }, [props.RecomBlogsFromApi.BlogRecommended.BlogRecommendedApi.BlogRecommendedSuccess])

    const loadMoreBlogs = () => {
        let offset = sessionStorage.getItem('blogRecommendedOffset')
        let newOffset = parseInt(offset) + 10
        sessionStorage.setItem('blogRecommendedOffset', newOffset)
        props.hitBlogRecommendedAPI(newOffset, localStorage.getItem('UI'))

    }
    const prevBlogs = () => {
        let offset = sessionStorage.getItem('blogRecommendedOffset')
        let newOffset = parseInt(offset) - 10
        sessionStorage.setItem('blogRecommendedOffset', newOffset)
        props.hitBlogRecommendedAPI(newOffset, localStorage.getItem('UI'))

    }
    return (
        <div className="RecommBlogs_Wrapper">
            <section id="RecommendedBlogs">
            <h3>Recommended Blogs</h3>
            {
            
            recommendedBlogs&& 
            recommendedBlogs.map((element,index) => {
                    return(
                        <section className="BlogContainers" onClick={() => handleBlogClick(element.blog_id)} style={{display: 'inline-block'}}>
                            <Link to={{pathname:'/blog-details'}}>
                            {
                                element.blog_thumbnail_link !== '' ?
                                <LazyLoadImage className="blogThumbNail" style={{objectFit: 'cover'}} src={element.blog_thumbnail_link} placeholder={<div><img src={miniLoader} /></div>} />
                                :
                                <LazyLoadImage className="blogThumbNail" style={{objectFit: 'cover'}} src={element.cat_image_link} placeholder={<div><img src={miniLoader} /></div>} />
                                }
                            
                            {/* <img className="blogThumbNail" src={blogThumb} alt=""/> */}
                            <div className="RecBlogTitle">{element.blog_title.length > 20 ? 
                                element.blog_title.slice(0, 20).concat('...') : 
                                element.blog_title}</div>
                            <div className="RecBlogDescription">
                                {element.blog_description.length > 10 ? 
                                element.blog_description.slice(0, 20).concat('...') : 
                                element.blog_description}
                            </div>
                            </Link>
                        </section>
                    )
                })
            
            } 
        {/* blog recommended pagination */}
        <div style={{width: '86%', textAlign: 'center', marginTop: '2vh', 
            marginBottom: '5vh', margin: 'auto',
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh'}}>
            {
                sessionStorage.getItem('blogRecommendedOffset') != '0' &&
                <div className="BD_PrevButton"
                onClick={prevBlogs}
                style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#999',
                color: '#fff', 
                border: '0',
                borderRadius: '10px',
                marginRight: '4vw',
                cursor: 'pointer',
                height: '5vh'}}>
                <i class="fas fa-angle-double-left" style={{fontSize: '2rem'}}></i>
                
            </div>
            }
            <div className="BD_LoadMore">
                <button 
                onClick={loadMoreBlogs}
                style={{
                // background: 'linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#999',
                color: '#fff', 
                border: '0',
                borderRadius: '10px',
                cursor: 'pointer', 
                width: '5vw',
                height: '5vh'}}>
                    <i class="fas fa-angle-double-right" style={{fontSize: '2rem'}}></i>

                </button>
            </div>

            </div>
            </section>
        </div>
    )
}



export default BlogShowRecommended
