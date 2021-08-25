import React from 'react'
import './NewInternshipPricing.css'
// import illus from '../../assets/illustration30.png'
import illus from '../../assets/illustration30-1.png'

import illus2 from '../../assets/illus90.png'
// import illus3 from '../../assets/illus90-1.png'


const NewInternshipPricing = () => {
    return (
        <div className="NewInternshipPricingContainer">
            
            <p className="newInternship-pricing-title">
                Pricing
            </p>
            <p className="newInternship-pricing-desc">
                We are dedicated to making our programs accessible. We are committed to helping you find a way <br /> to budget for this program and offer a variety of financing options to make it more economical.
            </p>
            <section className="pricing-comparision">
                <div className="pricing-compare-tabs">
                    <p className="pricing-Learning-Program">
                        30 Days Learning Program
                    </p>
                    <p>
                        <img className="pricing-30days-pic" src={illus} alt="" />
                    </p>
                    <p className="pricing-Details">
                        <ul>
                            <li>Project based Learning.</li>
                            <li>Real work experience.</li>
                            <li> Internship and Learning certificate.</li>
                            <li>Job ready portfolio on Git hub.</li>
                            <li>Personalized carrier guidance and support.</li>
                            <li>Recorded video of live classes.</li>
                        </ul>
                    </p>
                </div>
                <div className="pricing-compare-tabs">
                    <p className="pricing-Learning-Program">
                        90 Days Learning Program
                    </p>
                    <p>
                        <img className="pricing-30days-pic" src={illus2} alt="" />
                    </p>
                    <p className="pricing-Details">
                        <ul>
                            <li>Project based Learning.</li>
                            <li>Real work experience.</li>
                            <li> Internship and Learning certificate.</li>
                            <li>Job ready portfolio on Git hub.</li>
                            <li>Personalized carrier guidance and support.</li>
                            <li>Recorded video of live classes.</li>
                            <li> Chance of getting placement infoidol pvt.ltd.</li>
                        </ul>
                    </p>
                </div>
            </section>
            <div id="newInternship-partner-blank" style={{height:'6vh',background:'white'}}>
            </div>
        </div>
    )
}

export default NewInternshipPricing
