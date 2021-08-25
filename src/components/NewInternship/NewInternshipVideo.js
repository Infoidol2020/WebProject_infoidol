import React from 'react'
import LearningVideo from '../../assets/learningvideo.mp4'

const NewInternshipVideo = () => {
    return (
        <div style={{marginLeft:'103rem',marginTop:'-27vh'}}>
            <video controls style={{width:'24vw',height:'26vh'}}
            src={LearningVideo}></video>
        </div>
    )
}

export default NewInternshipVideo
