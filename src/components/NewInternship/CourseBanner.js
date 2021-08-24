import React,{useEffect,useState} from 'react'
import './CourseBanner.css'

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
        </div>
    )
}

export default CourseBanner
