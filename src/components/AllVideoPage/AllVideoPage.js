import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'

import {hitAllVideoPageAPI} from '../../redux/AllVideoPage/AllVideoPageActions'

import pageLoader from '../../assets/pageLoader.svg'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import VideoPage from './VideoPage'
const AllVideoPage = (props) => {
    const [AllVideoPage, setAllVideoPage] = useState([])
    console.log('prrr', props.APIFromAllVideoPage.AllVideoPage.AllVideoPageApi.AllVideoPage.data)

    useEffect(() => {
        // console.log('sdfff', sessionStorage.getItem('videoPageOffset'))
        if(sessionStorage.getItem('videoPageOffset') == undefined || sessionStorage.getItem('videoPageOffset') == null){
            props.hitAllVideoPageAPI(0, sessionStorage.getItem('video-page-type'))
            sessionStorage.setItem('videoPageOffset', 0)
        } 
        else{
            props.hitAllVideoPageAPI(sessionStorage.getItem('videoPageOffset'), sessionStorage.getItem('video-page-type'))
        }
    }, [])

    useEffect(() => {
        if(props.APIFromAllVideoPage.AllVideoPage.AllVideoPageApi.AllVideoPageSuccess &&
            props.APIFromAllVideoPage.AllVideoPage.AllVideoPageApi.AllVideoPage.status &&
            props.APIFromAllVideoPage.AllVideoPage.AllVideoPageApi.AllVideoPage.data.length > 0){
            // setAllVideoPage(AllVideoPage => [...AllVideoPage , ...props.APIFromAllVideoPage.AllVideoPage.AllVideoPageApi.TrendingVideos.data])
            setAllVideoPage(props.APIFromAllVideoPage.AllVideoPage.AllVideoPageApi.AllVideoPage.data)
        }
    }, [props.APIFromAllVideoPage.AllVideoPage.AllVideoPageApi.AllVideoPageSuccess])
    return ( 
        <div>
            <Sidebar />
            <Navbar />
            <div style={{marginLeft: '4vw', marginTop: '10vh'}}>
                {props.APIFromAllVideoPage.AllVideoPage.AllVideoPageApi.AllVideoPageInProgress ? 
                <div style={{textAlign: 'center'}}>
                    <img src={pageLoader} />
                </div>: 
                
                <VideoPage AllVideoPage={AllVideoPage}  {...props} />

                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log('stateeeeee from Dashboardbnbvcvb', state);
    return{ 
        APIFromAllVideoPage: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        hitAllVideoPageAPI: (offset, type) => dispatch(hitAllVideoPageAPI(offset, type)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllVideoPage)
