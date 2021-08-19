import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'

import {hitAllBlogPageAPI} from '../../redux/AllBlogPage/AllBlogPageActions'

import pageLoader from '../../assets/pageLoader.svg'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import BlogPage from './BlogPage'
const AllBlogPage = (props) => {
    const [AllBlogPage, setAllBlogPage] = useState([])
    // console.log('prrr', props)

    useEffect(() => {
        // console.log('sdfff', sessionStorage.getItem('blogPageOffset'))
        if(sessionStorage.getItem('blogPageOffset') == undefined || sessionStorage.getItem('blogPageOffset') == null){
            props.hitAllBlogPageAPI(0, sessionStorage.getItem('blog-page-type'))
            sessionStorage.setItem('blogPageOffset', 0)
        } 
        else{
            props.hitAllBlogPageAPI(sessionStorage.getItem('blogPageOffset'), sessionStorage.getItem('blog-page-type'))
        }
    }, [])

    useEffect(() => {
        if(props.APIFromAllBlogPage.AllBlogPage.AllBlogPageApi.AllBlogPageSuccess &&
            props.APIFromAllBlogPage.AllBlogPage.AllBlogPageApi.AllBlogPage.status &&
            props.APIFromAllBlogPage.AllBlogPage.AllBlogPageApi.AllBlogPage.data.length > 0){
            // setAllBlogPage(AllBlogPage => [...AllBlogPage , ...props.APIFromAllBlogPage.AllBlogPage.AllBlogPageApi.TrendingBlogs.data])
            setAllBlogPage(props.APIFromAllBlogPage.AllBlogPage.AllBlogPageApi.AllBlogPage.data)
        }
    }, [props.APIFromAllBlogPage.AllBlogPage.AllBlogPageApi.AllBlogPageSuccess])
    return ( 
        <div>
            <Sidebar />
            <Navbar />
            <div style={{marginLeft: '4vw', marginTop: '10vh'}}>
                {props.APIFromAllBlogPage.AllBlogPage.AllBlogPageApi.AllBlogPageInProgress ? 
                <div style={{textAlign: 'center'}}>
                    <img src={pageLoader} />
                </div>: 
                <BlogPage AllBlogPage={AllBlogPage}  {...props} />

                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log('stateeeeee from Dashboardbnbvcvb', state);
    return{ 
        APIFromAllBlogPage: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        hitAllBlogPageAPI: (offset, type) => dispatch(hitAllBlogPageAPI(offset, type)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllBlogPage)
