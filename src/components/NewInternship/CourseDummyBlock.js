import { fontSize } from '@material-ui/system'
import React from 'react'
import './CourseDummyBlock.css'
// import HandDraw from '../../assets/PairProgrammer.svg'
import giphyy from '../../assets/giphy.gif'
// import HandDraw from '../../assets/HandDrew.jpg'


const CourseDummyBlock = () => {
    return (
        <div className="course-Block" >
            <img  className="course-dummy-img" style={{width:'27vw',height:'30vh',marginLeft:'3vw'}} src={giphyy} alt="broken-img"/>
            <p className="course-dummy-para">Build internship-grade projects and gain real developer work experience today </p>
        </div>
    )
}

export default CourseDummyBlock
