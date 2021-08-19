import React, {useEffect} from 'react'

import uuid from 'react-uuid'

import './NewReleased.css'

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';

const NewReleased = (props) => {
    // console.log('props.musicPage', props.AllAudiosFromAPI.AllMusicPage.AllMusicPageApi.AllMusicPageSuccess)

            //Audio pagination
            const loadMoreAudios = () => {
                let offset = sessionStorage.getItem('AudioOffset')
                let newOffset = parseInt(offset) + 10
                sessionStorage.setItem('AudioOffset', newOffset)
                props.hitAllMusicPageAPI(newOffset, 3)
        
            }
            const prevAudios = () => {
                let offset = sessionStorage.getItem('AudioOffset')
                let newOffset = parseInt(offset) - 10
                sessionStorage.setItem('AudioOffset', newOffset)
                props.hitAllMusicPageAPI(newOffset, 3)
        
            }
    const handleMusicClick = (musicElement) => {
        // localStorage.setItem('music-container', uuid()) // to display the music conatiner
        sessionStorage.clear();
        sessionStorage.setItem('count', 0);
        localStorage.setItem('id',musicElement.music_id)
        localStorage.setItem('TYPE',musicElement.type)
        localStorage.setItem('UI',musicElement.user_id)
        sessionStorage.setItem('mCatId', musicElement.cat_id)
        var musicElementId = 0;
        props.newReleased.map((e) => {
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

    useEffect(() => {
        if(sessionStorage.getItem('AudioOffset') == undefined || sessionStorage.getItem('AudioOffset') == null){
            props.hitAllMusicPageAPI(0, 3) 
            sessionStorage.setItem('AudioOffset', 0)
        }
        else{
            props.hitAllMusicPageAPI(sessionStorage.getItem('AudioOffset'), 3) 

        }
    }, [])

    useEffect(() => {
        if(props.AllAudiosFromAPI.AllMusicPage.AllMusicPageApi.AllMusicPageSuccess && 
            props.AllAudiosFromAPI.AllMusicPage.AllMusicPageApi.AllMusicPage.status && 
            props.AllAudiosFromAPI.AllMusicPage.AllMusicPageApi.AllMusicPage.data.length > 0){
                props.setNewReleased(props.AllAudiosFromAPI.AllMusicPage.AllMusicPageApi.AllMusicPage.data)
            }
    }, [props.AllAudiosFromAPI.AllMusicPage.AllMusicPageApi.AllMusicPageSuccess])

    return (
        <div className="NewReleased_Container">
            {
                (props.newReleased && props.newReleased.length > 0) &&
                <h2 className="NewReleased_Heading">New Released</h2>

            }
            {
                (props.newReleased && props.newReleased.length > 0) &&
                props.newReleased.map((element, index) => {
                    return(
                        <div className="NewReleased_SongInfos" style={{cursor: 'pointer', display:'inline-block'}} key={index} onClick={ () => handleMusicClick(element)}>
                            <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} className="NewReleased_SongThumbnail" src={element.cat_image_link}/>
                            <p className="NewReleased_SongTitle">
                                {element.music_title.length > 10 ?
                                element.music_title.slice(0,17) :
                                element.music_title
                            }</p>
                        </div>
                    )
                })
                
            }
                        {/*Audio  pagination */}
                        <div style={{width: '86%', textAlign: 'center', marginTop: '2vh', 
            marginBottom: '5vh', margin: 'auto',
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh'}}>
            {
                sessionStorage.getItem('AudioOffset') != '0' &&
                <div 
                className="audio-new-released-pagination-btns"
                onClick={prevAudios}
                style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent linear-gradient(270deg,#006DB0 0%, #00FFFF 100%) 0% 0% no-repeat padding-box',
                color: '#fff', 
                border: '0',
                borderRadius: '10px',
                marginRight: '4vw',
                cursor: 'pointer',
                width: '5vw',
                height: '5vh'}}>
                <i class="fas fa-angle-double-left" style={{fontSize: '2rem'}}></i>
                
            </div>
            }
            <div>
                <button 
                className="audio-new-released-pagination-btns"
                onClick={loadMoreAudios}
                style={{
                // background: 'linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'transparent linear-gradient(270deg,#006DB0 0%, #00FFFF 100%) 0% 0% no-repeat padding-box',
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
        </div>
    )
}

export default NewReleased
