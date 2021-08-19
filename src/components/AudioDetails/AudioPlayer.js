import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

//components
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import AudioContainer from './AudioContainer'
import Footer from '../NewFooter'

//api's
import { fetchAllAudios } from '../../redux/AudioPage'; // music list api
import { hitLikeApi } from '../../redux/Like/LikeActions';
import { fetchAllComments } from '../../redux/CommentTrendingBlog';
import { fetchAllCommentsReply } from '../../redux/Reply/ActionReplyToComment';
import { fetchMusicCommentList } from '../../redux/MusicDetailPage/ActionMusic'; //music detail page api
import { hitsubscribeAPI } from '../../redux/Subscribe/SubscribeActions'
import { hitUnsubscribeAPI } from '../../redux/Subscribe/SubscribeActions'
import { hitconnectAPI } from '../../redux/Connect/ConnectActions'
import { hitconnectRejectAPI } from '../../redux/Connect/ConnectActions'
import { hitMakeCustomizeAPI } from '../../redux/MakeCustomize/MakeCustomizeActions'
import { fetchReportCategories, postReportAPI } from '../../redux/Report/ReportActions';
import { fetchAllAudiosItem } from '../../redux/AudioPlayer'; //music page
import { fetchAudioCount } from '../../redux/AudioViewCount' // music view count
import { fetchAllAudioCatList } from '../../redux/MusicListByCategory'
import { fetchUserProfile } from '../../redux/UserProfile/UserProfileActions'// fetch other users profile
import { hitAllMusicPageAPI } from '../../redux/AllMusicPage/AllMusicPageActions'




const AudioPlayer = (props) => {
    const [musicList, setMusicList] = useState();
    // console.log('props from music player', props.AllAudiosFromAPI.AudioPage)
    useEffect(() => {
        props.fetchAllAudios()
    }, [])

    useEffect(() => {
        if(props.AllAudiosFromAPI.AudioPage.AudioPageGetApi.AudioPageSuccess){
            setMusicList(props.AllAudiosFromAPI.AudioPage.AudioPageGetApi.allAudioPageApi)
        }
    }, [props.AllAudiosFromAPI.AudioPage.AudioPageGetApi.AudioPageSuccess])

    // useEffect(() => {

    // }, [])

    
    return (
        <div>
            <Sidebar />
            <Navbar />
            <div style={{marginLeft: '5vw', marginTop: '13vh'}}>
                <AudioContainer musicList={musicList} {...props}/>
            </div>
            <Footer/>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log('stateeeeee', state.AudioPage.AudioPageGetApi.allAudioPageApi);
    return{
        // AllAudiosFromAPI: state.AudioPage.AudioPageGetApi.allAudioPageApi
        AllAudiosFromAPI :state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchAllAudios: () => dispatch(fetchAllAudios()),
        fetchAllComments: (data, music_id, type) => dispatch(fetchAllComments(data, music_id, type)),
        fetchAllCommentsReply: (dataReply, commentId) => dispatch(fetchAllCommentsReply(dataReply, commentId)),
        hitLikeApi: (elementId, elementType) => dispatch(hitLikeApi(elementId, elementType)),
        fetchMusicCommentList: (musicData) => dispatch(fetchMusicCommentList(musicData)),
        hitsubscribeAPI :(profile_id) => dispatch(hitsubscribeAPI(profile_id)),
        hitUnsubscribeAPI: (profile_id) => dispatch(hitUnsubscribeAPI(profile_id)),
        hitconnectAPI :(profile_id) => dispatch(hitconnectAPI(profile_id)),
        hitconnectRejectAPI :(profile_id) => dispatch(hitconnectRejectAPI(profile_id)),
        hitMakeCustomizeAPI:(profile_id, customize_id) => dispatch(hitMakeCustomizeAPI(profile_id, customize_id)),
        fetchReportCategories: () => dispatch(fetchReportCategories()),
        postReportAPI: (categoryName,elementId, elementType) => dispatch(postReportAPI(categoryName,elementId, elementType)),
        fetchAllAudiosItem: () => dispatch(fetchAllAudiosItem()),
        fetchAudioCount: (music_id) => dispatch(fetchAudioCount(music_id)),
        fetchAllAudioCatList: (cat_id) => dispatch(fetchAllAudioCatList(cat_id)),
        fetchUserProfile: (data) => dispatch(fetchUserProfile(data)),
        hitAllMusicPageAPI: (offset, type) => dispatch(hitAllMusicPageAPI(offset, type))
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer)
