import React, {useEffect} from 'react'
import uuid from 'react-uuid'


import './MusicList.css'
const MusicList = (props) => {
    // console.log('props from music list', props.musicList)

    const handleMusicClick = (musicElement) => {
        // localStorage.setItem('music-container', uuid()) // to display the music conatiner
        sessionStorage.clear();
        sessionStorage.setItem('count', 0);
        localStorage.setItem('id',musicElement.music_id)
        localStorage.setItem('TYPE',musicElement.type)
        localStorage.setItem('UI',musicElement.user_id)
        sessionStorage.setItem('mCatId', musicElement.cat_id)
        var musicElementId = 0;
        props.musicList.map((e) => {
            if(sessionStorage.getItem('mCatId') == e.cat_id){
                musicElementId = musicElementId + 1;
                if(musicElementId < 10){
                    if(localStorage.getItem('id') != e.music_id){
                        sessionStorage.setItem(`music-element${musicElementId}`, e.music_id)
                    }
                    else{
                    musicElementId = musicElementId - 1;

                    }
                }
            }
        })
        window.scrollTo(0, 0)
        props.fetchMusicCommentList(localStorage.getItem('id')) //music detail page api
        props.fetchAudioCount(localStorage.getItem('id')) //music count api


    }
// to click on the music list and set the new data in audio container
    useEffect(() => {
        if(props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.MusicCommentsListSuccess){
            props.setMusicDetails(props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList)
        }
    }, [props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.MusicCommentsListSuccess])
    return (
        <div className="MusicList_Container">
            {
                <div className="MusicList_PlayList">
                    <p className="MusicList_Heading" style={{borderBottom: '1px solid lightpink'}}>
                        {
                            props.musicList && 
                            <h2>Playlist</h2>
                        } 
                    </p>
                    {
                        props.musicList && 
                        props.musicList.map((musicElement, musicIndex) => {
                            return(
                                <section id="MusicList_MusicPlayList">
                                    <div className="MusicList_Infos" style={{cursor:  'pointer'}} onClick={() => handleMusicClick(musicElement)}>
                                        <div className="MusicList_SongTitle">
                                            {musicElement.music_title}
                                        </div>
                                        <div className="MusicList_SongUserName">
                                            {musicElement.user_name}
                                        </div>
                                    </div>
                                </section>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default MusicList
