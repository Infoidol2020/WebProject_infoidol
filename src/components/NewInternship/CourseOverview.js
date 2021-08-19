import React, {useEffect} from 'react'
import { useState } from 'react'
import './CourseOverview.css'

const CourseOverview = (props) => {
    console.log('overview',props)
    const [OverViewDesc,setOverViewDesc]=useState();

    useEffect(() => {
        if(props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess &&
            props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails){
                setOverViewDesc( props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails)
                console.log(' props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails[0]', props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess)
            }
        }, [props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess])

    return (
        <div className="course-overview-container">
            <p className="course-overview-heading">Program <b>Overview</b> </p>
            {
                OverViewDesc && OverViewDesc.map((overelem,overindex) => {
                    return(
                            <div className="overview-description">
                                {
                                    overelem && overelem.type === '1' &&
                                    <p>
                                        {overelem.description}
                                    </p>
                                    
                                }
                                
                            </div>
                    )
                })
            }
        </div>
    )
}

export default CourseOverview
