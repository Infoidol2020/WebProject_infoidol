import React from 'react'
import bookImg from '../../assets/book.png'
import certificateImg from '../../assets/certificate.png'
import contractImg from '../../assets/contract.png'
import trophyImg from '../../assets/trophy.png'



const NewInternshipTimeline = () => {
    return (
        <div className="NewInternshipTimeline">
            <div className="timeline-title">
                <p className="timeline-title-topic">How will it work ?</p>
            </div>
            <div class="timeline">
            <div class="events">
                <ol>
                <ul>
                    <li>
                    <a href="#0" className="timeline-enroll">Get Enroll</a>
                    {/* <a href="#4"> </a> */}
                    </li>
                    <li>
                    <a href="#1">Learning/Training</a>
                    </li>
                    <li>
                    <a href="#2">Complition Certification</a>
                    </li>
                    <li>
                    <a href="#3">Get Placed</a>
                    </li>
                </ul>
                <ul id="timeline-pics-container">
                    <>
                    <a href="#0"><img className="timeline-pic contractImg" src={contractImg} alt="" /></a>
                    {/* <a href="#4"> </a> */}
                    </>
                    <>
                    <a href="#1"><img className="timeline-pic bookImg" src={bookImg} alt="" /></a>
                    </>
                    <>
                    <a href="#2"><img className="timeline-pic certificateImg" src={certificateImg} alt="" /></a>
                    </>
                    <>
                    <a href="#3"><img className="timeline-pic trophyImg" src={trophyImg} alt="" /></a>
                    </>
                </ul>
                </ol>
            </div>
    </div>
    <div id="newInternshipTimeline-blank">
        
    </div>
        </div>
    )
}
export default NewInternshipTimeline
