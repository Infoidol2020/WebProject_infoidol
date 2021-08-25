import React,{useEffect,useState} from 'react'
import './CourseBanner.css'
import react from '../../assets/react.png'

const CourseBanner = (props) => {
    // console.log('CourseBanner',props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails.subject_detail.sub_poster)
    const [banner,setbanner]=useState();
    useEffect(() => {
        if(props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess &&
            props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails){
                setbanner( props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails.subject_detail.sub_poster)
            }
        }, [props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess])

    return (
        <div className="course-banner">
            <div className="course-banner-container">
                <img src={banner} alt="brokenImg-banner"/>
            </div>
            <div id="course-overview-blank" style={{height:'8vh'}}>

            </div>
        </div>
    )
}

export default CourseBanner
