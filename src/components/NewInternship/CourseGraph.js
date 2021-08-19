import React, {useEffect} from 'react'
import { useState } from 'react'
import './CourseGraph.css'

const CourseGraph = (props) => {

    const [courseGraph,setCouseGraph] = useState();
    useEffect(() => {
        if(props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess &&
            props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails){
                setCouseGraph( props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails)
                console.log(' props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails[0]', props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess)
            }
        }, [props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess])
    return (
        <div style={{marginLeft:'8rem'}}>
            <p className="course-graph-heading">Industrial Reviews</p>
            {
                courseGraph && courseGraph.map((graphelem,graphindex) => {
                    return(
                        <div>
                            {
                                graphelem.type === "1" &&
                                <div className="course-graph-container">
                                    <p className="course-graph-subheading">{graphelem.sub_demand}</p>
                                    <img src={graphelem.sub_graph}/>
                                </div>
                            }
                        </div>
                    )
                })
            }

        </div>
    )
}

export default CourseGraph
