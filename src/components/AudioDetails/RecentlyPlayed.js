import React, {useEffect} from 'react'
import uuid from 'react-uuid'

import './RecentlyPlayed.css'
const RecentlyPlayed = (props) => {

    const handleMusicClick = (musicElement) => {
        localStorage.setItem('music-container', uuid()) // to display the music conatiner
        localStorage.setItem('id',musicElement.music_id)
        localStorage.setItem('TYPE',musicElement.type)
        localStorage.setItem('UI',musicElement.user_id)
        window.scrollTo(0, 0)
        props.fetchMusicCommentList(localStorage.getItem('id')) //music detail page api

    }
// to click on the music list and set the new data in audio container
    useEffect(() => {
        if(props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.MusicCommentsListSuccess){
            props.setMusicDetails(props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList)
        }
    }, [props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.MusicCommentsListSuccess])
    return (
        <div className="RecentlyPlayed_Container" style={{marginTop: ''}}>
            {
                props.recentlyPlayed && props.recentlyPlayed.length > 0 &&
                <h2 style={{fontWeight: ''}}>Recently Played</h2> 
            }
            {
                <section className="RecentlyPlayed_Wrapper">
            {
                (props.recentlyPlayed && props.recentlyPlayed.length > 0) &&
                props.recentlyPlayed.map((element, index) => {
                    return(
                        <div className="RecentlyPlayed_SongInfos" style={{cursor: 'pointer', display:'inline-block'}} key={index} onClick={ () => handleMusicClick(element)}>
                            <img className="RecentlyPlayed_SongThumbnail" src={element.cat_image_link}/>
                            <p className="RecentlyPlayed_SongTitle" >
                                {
                                element.music_title.length> 10 ?
                                element.music_title.slice(0,14).concat('..'):
                                element.music_title
                                }</p>
                        </div>
                    )
                })
            }
                </section>
            }
        </div>
    )
}

export default RecentlyPlayed
