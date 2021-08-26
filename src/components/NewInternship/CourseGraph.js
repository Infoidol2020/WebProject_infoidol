import React, {useEffect} from 'react'
import { useState } from 'react'
import './CourseGraph.css'

const CourseGraph = (props) => {

    const [courseGraph,setCouseGraph] = useState();
    const [courseDemand, setcourseDemand] = useState();
    useEffect(() => {
        if(props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess &&
            props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails.subject_detail){
                setcourseDemand( props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails.subject_detail.sub_demand)
                setCouseGraph( props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails.subject_detail.sub_graph)
                // console.log(' props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails[0]', props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess)
            }
        }, [props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess])
    
        return (
        <div className="course-graph-container" >
            <p className="course-graph-heading">Industrial Analysis</p>
            <div className="course-graph-container">
                <p className="course-graph-subheading">{courseDemand}</p>
                <img src={courseGraph}/>
            </div>
        </div>
    )
}

export default CourseGraph
