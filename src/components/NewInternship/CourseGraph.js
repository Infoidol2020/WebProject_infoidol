import React, {useEffect} from 'react'
import { useState } from 'react'
import './CourseGraph.css'

const CourseGraph = (props) => {

    const [courseGraph,setCouseGraph] = useState();
    const [courseDemand, setcourseDemand] = useState();
    const [mobilegraph, setmobilegraph]= useState();
    useEffect(() => {
        if(props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess &&
            props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails.subject_detail){
                setcourseDemand( props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails.subject_detail.sub_demand)
                setCouseGraph( props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails.subject_detail.sub_graph)
                setmobilegraph(props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails.subject_detail.mobile_graph)
                // console.log(' props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails[0]', props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess)
            }
        }, [props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess])
    
        return (
        <div className="course-graph-container" >
            <p className="course-graph-heading">Industrial Analysis</p>
            <div className="course-graph-containe-web">
                <p className="course-graph-subheading">{courseDemand}</p>
                <img src={courseGraph}/>
            </div>
            <div className="course-graph-responsive-container">
                <p className="course-graph-subheading">{courseDemand}</p>
                {
                    mobilegraph && mobilegraph.map((mobgraphelem,mobgraphindex) =>{
                        return(
                            <img src={mobgraphelem}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CourseGraph
