import React from 'react'
import { useRef } from 'react'
import {Link} from 'react-router-dom'

import './NewInternshipTabs.css'

import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

const NewInternshipTabs = () => {
//     const [value, setValue] = React.useState(2);
//     const OverViewTabs= useRef()
//     const handleInternTabClick = () => {
//         OverViewTabs.current.style.color="green"
//     }
    return (
// 	<div
// 	style={{
// 		marginTop: "5%",
//         justifyContent:'center',
//         marginLeft:'25vw'
// 	}}
// 	>
// 		<Tabs className="InternTabs"
//         style={{justifyContent:'center'}}
// 		value={value}
// 		textColor="primary"
// 		indicatorColor="primary"
// 		onChange={(event, newValue) => {
// 			setValue(newValue);
// 		}}
// 		>
//         <a href="#internship-learning">
//             <Tab id="internship-tabs" style={{fontSize: 'small', fontWeight: 'bold'}} label="Overview" />
//         </a>
// 		<Tab id="internship-tabs" style={{fontSize: 'small', fontWeight: 'bold'}} label="Course" />
// 		<Tab id="internship-tabs" style={{fontSize: 'small', fontWeight: 'bold'}} label="Price"/>
// 		<Tab id="internship-tabs" style={{fontSize: 'small', fontWeight: 'bold'}} label="Process" />
//         <Tab id="internship-tabs" style={{fontSize: 'small', fontWeight: 'bold'}} label="Partner" />

// 		</Tabs>
// 		{/* <h3>TAB NO: {value} clicked!</h3> */}
// 	</div>
// );
// };


        <div>
            <div className="InternshipTab" style={{display:'flex',justifyContent:'center'}}>
                <div className="InternshipOverview">
                    <a href="#ninternshipLearn-blank">
                    <button>Overview</button>
                    </a>
                </div>
                <div className="InternshipCourse">
                <a href="#CardContainer-blank">
                    <button>Courses</button>
                    </a>                
                </div>
                <div className="InternshipPrice">
                <a href="#ninternshipCard-blank">
                    <button>Price</button>
                </a>                  
                </div>
                <div className="InternshipProcess">
                <a href="#newinternshipPricing-blank">
                    <button>Process</button>
                </a>                
                </div>
                <div className="InternshipPartner">
                <a href="#newInternshipTimeline-blank">
                    <button>Partner</button>
                </a>                
                </div>
            </div>
        </div>
    )
}

export default NewInternshipTabs
