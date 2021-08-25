import React, {useEffect} from 'react'
import { useState } from 'react'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import './CourseToolCovered.css'

const CourseToolCovered = (props) => {
    const [tools,settools]=useState();
    console.log('toolelem',tools)

    useEffect(() => {
        if(props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess &&
            props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails){
                settools( props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails.subject_detail.tools_covered)
            console.log('CourseToolCovered', props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails.subject_detail.tools_covered)
            }
        }, [props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess])
    return (
        <div className="course-ToolCovered-Container">
            <div id="course-ToolCovered-blank" style={{height:'6vh'}}>
            </div>
            <p className="course-tools-heading">Tools Covered</p>
            <div className="course-tools-wrapper" >
            {
                tools && tools.map((toolelem,toolindex) =>{
                    // console.log('toolelem',toolelem,tools)
                    return(
                            <div className="course-tools" >
                                <img src={toolelem} alt="" />
                            </div>
                    )
                })
            }
            </div>
            <div id="course-Trend-blank" style={{height:'8vh'}}>
            </div>
        </div>
    )
}

export default CourseToolCovered
