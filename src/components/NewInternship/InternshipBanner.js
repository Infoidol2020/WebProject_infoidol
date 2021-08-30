import React from 'react'
import newinternshipbanMob from '../../assets/newinternshipbanMob.png'
import newinternshipbanner from '../../assets/newinternshipbanners.png'

import './InternshipBanner.css'
const InternshipBanner = () => {
    return (
        <div>
            <div className="NewInternship_Picture ">
                    <img src={newinternshipbanner} alt="" className="Ind_img" />
                    <img src={newinternshipbanMob} alt="" className="newinternshipbanMob-img" />
                </div>
        </div>
    )
}

export default InternshipBanner
