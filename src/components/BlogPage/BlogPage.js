import React, {useEffect,useState} from 'react'
import { connect } from 'react-redux';

import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import TopBlogs from './TopBlogs'
import BlogCategories from './BlogCategories'
import NewBlogs from './NewBlogs'
import TopBloggers from './TopBloggers'
import pageLoader from '../../assets/pageLoader.svg'
import Footer from '../NewFooter' 



import { fetchAllBlogs } from '../../redux/BlogPage/BlogPageActions'
import { fetchAllRecmBlogs } from '../../redux/BlogShowRecommended/ActionsRecommendedBlogs'
import { fetchUserProfile } from '../../redux/UserProfile/UserProfileActions';


const BlogPage = (props) => {
    const [topBlogs, setTopBlogs] = useState([])
    const [blogCategories, setBlogCategories] = useState([])
    const [newBlogs, setNewBlogs] = useState([])
    const [topBloggers, setTopBloggers] = useState([])
    // const [topBloggers, setTopBloggers] = useState([])


    useEffect(() => {
        props.fetchAllBlogs();
        // console.log('allBlogs from api', props);
    }, [])
    // console.log('allBlogs from api', props.AllBlogsFromAPI.BlogPageGetApi.allBlogsFromBlogApi.top_blog);

    useEffect(() => {
        setTopBlogs(props.AllBlogsFromAPI.BlogPageGetApi.allBlogsFromBlogApi.top_blog)
        setBlogCategories(props.AllBlogsFromAPI.BlogPageGetApi.allBlogsFromBlogApi.category)
        setNewBlogs(props.AllBlogsFromAPI.BlogPageGetApi.allBlogsFromBlogApi.new_released)
        setTopBloggers(props.AllBlogsFromAPI.BlogPageGetApi.allBlogsFromBlogApi.top_artist)
    }, [props.AllBlogsFromAPI.BlogPageGetApi.BlogPageSuccess])
    return (
        <div>
            {
            props.AllBlogsFromAPI.BlogPageGetApi.BlogPageInProgress ? 
            <div style={{display: 'flex',justifyContent: 'center'}}>
            <img src={pageLoader} />
            </div>
            :
            <>
            <Sidebar />
            <Navbar />
            <BlogCategories blogCategories={blogCategories} {...props}/>
            <TopBlogs topBlogs={topBlogs} {...props}/>
            <NewBlogs  newBlogs={newBlogs} {...props}/>
            <TopBloggers  topBloggers={topBloggers} {...props}/>
            <Footer />

            </>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log('state', state.BlogPage);
    return{
        AllBlogsFromAPI: state.BlogPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllBlogs: () => dispatch(fetchAllBlogs()),
        fetchAllRecmBlogs: (data) => dispatch(fetchAllRecmBlogs(data)),
        fetchUserProfile: (data) => dispatch(fetchUserProfile(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage)
