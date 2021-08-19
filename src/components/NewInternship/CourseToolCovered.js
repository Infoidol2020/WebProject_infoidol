import React, {useEffect} from 'react'
import { useState } from 'react'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import './CourseToolCovered.css'

const CourseToolCovered = (props) => {
    const [tools,settools]=useState();
    useEffect(() => {
        if(props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess &&
            props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails){
                settools( props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails)
            
            }
        }, [props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess])
    return (
        <div style={{marginLeft:'8rem',marginBottom:'6vh'}}>
            <p className="course-tools-heading">Tools Covered</p>
            {
                tools && tools.map((toolelem,toolindex) =>{
                    return(
                        <div>
                            {
                                toolelem && toolelem.type === '1' &&
                                <div style={{display:'flex'}}>
                                {
                                    toolelem && toolelem.tools_covered.map((toolscoveredelem,toolscoveredindex) => {
                                        return(
                                            <div className="course-tools" >
                                                <img src={toolscoveredelem} />
                                            </div>
                                        )
                                    })
                                }
                                </div>
                            } 

                        </div>
                    )
                })
            }
        </div>
    )
}

export default CourseToolCovered
