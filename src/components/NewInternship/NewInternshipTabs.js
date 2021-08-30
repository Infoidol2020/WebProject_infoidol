import React from 'react'
import './NewInternshipTabs.css'

const NewInternshipTabs = () => {
    return (
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
                <div className="InternshipProcess">
                <a href="#ninternshipCard-blank">
                    <button>Process</button>
                </a>                  
                </div>
                <div className="InternshipPrice">
                <a href="#newInternshipTimeline-blank">
                    <button>Price</button>
                </a>                
                </div>
                <div className="InternshipPriceMobile">
                <a href="#ninternshipCard-blank">
                    <button>Price</button>
                </a>                
                </div>
                <div className="InternshipPartner">
                <a href="#newInternship-partner-blank">
                    <button>Partner</button>
                </a>                
                </div>
                <div className="InternshipPartnerMobile">
                <a href="#NewInternshipCompaniesContainer">
                    <button>Partner</button>
                </a>                
                </div>
            </div>
        </div>
    )
}
export default NewInternshipTabs
