import React, {useEffect} from 'react'
import { useState } from 'react'
import './CourseOverview.css'
import heroPic from '../../assets/winners.svg'
// import superhero from '../../assets/superhero.svg'

const CourseOverview = (props) => {
        console.log('overview props',props)
    console.log('CourseOverview props',props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails)
    const [OverViewDesc,setOverViewDesc]=useState();
    // console.log('overview',OverViewDesc)

    useEffect(() => {
        if(props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess &&
            props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails){
                setOverViewDesc( props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails.subject_detail.description)
                console.log(' setOverViewDesc', props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails.subject_detail.description)
            }
        }, [props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess])

    return (
        <div className="course-overview-container">
            <div className="overview-container">
                <p className="overview-content">
                <p className="course-overview-heading">
                    <b>Revive Your Developer Career. <br />
                    With Confidence.</b> 
                </p>

                <p className="overview-details">
                    {OverViewDesc}
                </p>
                </p>
                <p className="overview-img" >
                    <img src={heroPic} alt="broken-heroPic" className="overview-hero-pic" />
                    {/* <img src={superhero} alt="broken-heroPic" className="overview-superheroS-pic" /> */}
                </p>
            </div>
        </div>
    )
}

export default CourseOverview
