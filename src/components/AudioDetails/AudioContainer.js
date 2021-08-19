import React, {useEffect, useState, useRef} from 'react'
import ReactAudioPlayer from 'react-audio-player';

import marsh from '../../assets/tenor.gif'

import './AudioContainer.css'

import ConnectSubscribeCustomize from './ConnectSubscribeCustomize'
import LikeShareReport from './LikeShareReport';
import MusicComments from './MusicComments'
import MusicList from './MusicList';
import Report from './Report'
import TopArtists from './TopArtists'
import RecentlyPlayed from './RecentlyPlayed'
import NewReleased from './NewReleased'
import CopyRight from '../CopyRight/CopyRight' 




const AudioContainer = (props) => {

    const [musicDetails, setMusicDetails] = useState()
    const [newReleased, setNewReleased] = useState()
    const [topArtists, setTopArtists] = useState()
    const [recentlyPlayed, setRecentlyPlayed] = useState()
    const [autoPlays, setAutoPlays] = useState([])
    // const [count, setCount] = useState(0)

    var count=0;
    const musicContainer = useRef()
    const musicItem = useRef()
    // console.log('props from audio container',props)

    useEffect(() => {
        props.fetchMusicCommentList(localStorage.getItem('id')) //music detail page api
        props.fetchAllAudiosItem() // music page api

    }, [])

    useEffect(() => {
        if(props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.MusicCommentsListSuccess){
            setMusicDetails(props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList)
        }
        if(props.AllAudiosFromAPI.AudioItem.AudioPlayerGetApi.AudioPlayerSuccess){
            setNewReleased(props.AllAudiosFromAPI.AudioItem.AudioPlayerGetApi.allAudioPlayerApi.new_released)
            setTopArtists(props.AllAudiosFromAPI.AudioItem.AudioPlayerGetApi.allAudioPlayerApi.top_artist)
            setRecentlyPlayed(props.AllAudiosFromAPI.AudioItem.AudioPlayerGetApi.allAudioPlayerApi.recent_played)
            }
    }, [props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.MusicCommentsListSuccess, 
        props.AllAudiosFromAPI.AudioItem.AudioPlayerGetApi.AudioPlayerSuccess])

        useEffect(() => {
            if(props.AllAudiosFromAPI.AudioCategoryList.AudioCatListPageGetApi.AudioCatListPageSuccess){
                setAutoPlays(props.AllAudiosFromAPI.AudioCategoryList.AudioCatListPageGetApi.allAudioCatList)
            }

        }, [props.AllAudiosFromAPI.AudioCategoryList.AudioCatListPageGetApi.AudioCatListPageSuccess])


        const handleAudio = (md) => {
            console.log(document.getElementById('audio-player').duration)
            console.log(document.getElementById('audio-player').currentTime)
            console.log(md.music_detail)


    }

if(document.getElementById('audio-player') != null || document.getElementById('audio-player') !=undefined )

{
    document.getElementById('audio-player').onended = function() {  
        sessionStorage.setItem('count',parseInt(sessionStorage.getItem('count')) + 1)
        if(sessionStorage.getItem(`music-element${sessionStorage.getItem('count')}`) != null || 
        sessionStorage.getItem(`music-element${sessionStorage.getItem('count')}`) != undefined ||
        sessionStorage.getItem(`music-element${sessionStorage.getItem('count')}`) != ''){
        localStorage.setItem('id', sessionStorage.getItem(`music-element${sessionStorage.getItem('count')}`))
        localStorage.setItem('TYPE', 2)
        // localStorage.setItem('UI',element.user_id)
        // window.scrollTo(0, 0)
        props.fetchMusicCommentList(localStorage.getItem('id')) //music detail page api
        props.fetchAudioCount(localStorage.getItem('id')) //music count api
        }
    };
}

    return (
        <div className="AudioContainer">
            {/* music details */}
            <div className="AudioContainer_MainPlayer" ref={musicContainer}>
                {
                    musicDetails &&
                <div className="AudioContainer_playingSong">      
                    <img onClick={() =>handleAudio(musicDetails)} className="AudioContainer_playingSongThumbnail" src={musicDetails.music_detail.cat_image_link}/>
                </div>
                }
                <section className="AudioContainer_PlayerComponents"> 
                    <div className="AudioContainer_SongTitle">
                        {musicDetails && musicDetails.music_detail.music_title}
                    </div>

                    <span className="AudioContainer_SongUploader">
                        {musicDetails && musicDetails.music_detail.user_name}
                    </span>

                    <span style={{color: 'deeppink'}}>&nbsp;&nbsp;||&nbsp;&nbsp;</span>

                    <span className="AudioContainer_SongUploadTime">
                        {musicDetails && musicDetails.music_detail.created_date}
                    </span>

                    <div className="AudioContainer_AdditionalComponents">
                        {
                            musicDetails &&
                            <LikeShareReport musicDetails={musicDetails} {...props} />

                        }
                        {
                            musicDetails && 
                            <Report musicDetails={musicDetails} {...props} />
                        }
                    </div>

                    {
                    musicDetails &&
                    <ConnectSubscribeCustomize musicDetails={musicDetails} {...props} />
                    }

                    <div className="AudioContainer_SongPlayer">
                        {musicDetails &&
                        // <audio className="AudioContainer_SongPlaying" autoplay  controls src={musicDetails.music_detail.music_link} />
                        <ReactAudioPlayer
                        src={musicDetails.music_detail.music_link}
                        autoPlay
                        controls
                        id="audio-player"
                        />
                        }
                    </div>
                </section>
                <div className="AudioContainer_AudioBanner">
                    <img src={marsh} alt=""/>
                </div>

                <div className="AudioContainer_CommentSection">
                    
                    {
                        musicDetails && 
                        <MusicComments musicDetails={musicDetails} {...props} />
                    }
                </div>
            </div>
            <section className="AudioContainer_List_TopArtist" style={{display:'flex'}}>
            <div className="AudioContainer_MusicList">
                    <MusicList setMusicDetails={setMusicDetails} musicList={props.musicList} {...props} />
            </div>
            
            <div className="AudioContainer_TopArtists">
                <TopArtists topArtists={topArtists} {...props} />
            </div>

            </section>
            <div className="AudioContainer_">
                <NewReleased newReleased={newReleased}  setMusicDetails={setMusicDetails} setNewReleased={setNewReleased} {...props} />
            </div>
            
            <div className="AudioContainer_">
                {/* <RecentlyPlayed recentlyPlayed={recentlyPlayed} setMusicDetails={setMusicDetails} {...props} /> */}
            </div>
            {/* <CopyRight /> */}

            


        </div>
    )
}

export default AudioContainer
