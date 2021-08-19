import React from 'react'
import Logoblock from './Logoblock'
import Contentblock from './Contentblock'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="Nav_Sec" >
            <div className="nav_wrapper" >
                <Logoblock/>
                <Contentblock/>
            </div>
        </div>
    )
}

export default Navbar
