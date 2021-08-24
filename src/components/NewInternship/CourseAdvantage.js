import React,{useState,useEffect} from 'react'
import './CourseAdvantage.css'

const CourseAdvantage = (props) => {
    const [advantage,setadvantage]=useState();
    useEffect(() => {
        if(props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess &&
            props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails.subject_detail.course_advantages){
                setadvantage( props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails.subject_detail.course_advantages)
                console.log(' props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails[0]', props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess)
            }
        }, [props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess])
    return (
        <div className="course-advantage-container" style={{marginBottom:'4vh'}}>
            <p className="course-advantage-heading"> Learn the essentials to be the new-age developer</p>
            {/* {
                advantage && advantage.map((addelem,addindex) =>{
                    return(
                        <div>
                            {
                                addelem && addelem.type === '1' &&
                                <p className="course-advantage">{addelem.course_advantages}</p>
                            }
                        </div>
                    )
                })
            } */}
            <p className="course-advantage">{advantage}</p>
        </div>
    )
}

export default CourseAdvantage
