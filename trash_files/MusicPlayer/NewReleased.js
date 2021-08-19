import React, {useState,useEffect} from 'react';
import './NewReleased.css';
import uuid from 'react-uuid';

const NewReleased = (props) => {
    const [newReleased,setnewReleased] = useState([]);
        const [musicElement, setMusicElement] = useState({});

    const setAudio = (e) => {
        console.log('music_link', e);
        // setnewReleased(e);
        props.setMusicElement(e)
        localStorage.setItem('id',e.music_id)
        localStorage.setItem('TYPE',e.type)
        localStorage.setItem('MusicData', uuid())
        localStorage.setItem('UI',e.user_id)
        // console.log('prtyuio', props)
        props.fetchMusicCommentList(e.music_id)
        window.scrollTo(0, 0)

     }
    useEffect(() => {
        setnewReleased(props.AllAudiosFromAPI.AudioItem.AudioPlayerGetApi.allAudioPlayerApi.new_released)
    }, [props.AllAudiosFromAPI.AudioItem.AudioPlayerGetApi.AudioPlayerSuccess])

    // console.log('props from New Relesed',props)
    
    return (
        <div className="NewReleased_container">
            <div className="NewReleased_viewall">
                <h2 style={{marginBottom: '3rem'}}>New Released</h2>
            </div>
            <div className="NewReleased_elems">
                {
                    newReleased && newReleased.map((e) => {
                        //  console.log('errrrrrrrrrr', e)
                        return(
                            <div className="NewReleased_Img">
                                <div className="descriptionMusic"  onClick={() => setAudio(e)}>
                                <img src={e.cat_image_link} alt=""/>
                                    <p>  {e.music_title.length > 7 ? 
                                e.music_title.slice(0, 25).concat('...') : 
                                e.music_title}</p>
                                </div> 
                            </div>
                        )
                    })    
                }    
            </div>
        </div>
    )
}

export default NewReleased
