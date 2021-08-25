import React from 'react'
import { useRef } from 'react'
import {Link} from 'react-router-dom'

import './CourseTab.css'

import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

const CourseTab = () => {
//     const [value, setValue] = React.useState(2);
//     const OverViewTabs= useRef()
//     const handleInternTabClick = () => {
//         OverViewTabs.current.style.color="green"
//     }
    return (

        <div>
            <div className="courseTab" style={{display:'flex',justifyContent:'center'}}>
                <div className="courseOverview">
                    <a href="#course-overview-blank">
                    <button>Description</button>
                    </a>
                </div>
                <div className="courseCourse">
                <a href="#course-detail-blank">
                    <button>Key Features</button>
                    </a>                
                </div>
                <div className="coursePrice">
                <a href="#course-description-blank">
                    <button>Syllabus</button>
                </a>                  
                </div>
                <div className="courseProcess">
                <a href="#course-IdealLearning-blank">
                    <button>Eligibility</button>
                </a>                
                </div>
                <div className="coursePartner">
                <a href="#course-Trend-blank">
                    <button>Trends</button>
                </a>                
                </div>
            </div>
        </div>
    )
}

export default CourseTab
