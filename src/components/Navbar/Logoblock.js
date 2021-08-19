import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/InfoidolLogo.png'
import logoMin from '../../assets/iiLogo.png'

import './logoblock.css'

const Logoblock = () => {
    return (
        <div>
            <Link to ='/'>
            <div className="logoBlock">
                <img className="Nav-II-Logo" src={logo} alt="InfoIdol logo"/>
                <img className="Nav-II-Logo-Min" src={logoMin} alt="InfoIdol logo"/>
            </div>
            </Link>
        </div>
    )
}

export default Logoblock
