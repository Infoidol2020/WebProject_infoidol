import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import ShareIcon from '@material-ui/icons/Share';
import SchoolIcon from '@material-ui/icons/School';

import './Sidebar.css'

const Sidebar = () => {
    const [showElements, setShowElements] = useState(false);
    const handleHiddenElements = () => {
        setShowElements(!showElements);
    }

    const handleClick = () => {
        window.scrollTo(0,0)
    }
    return (
        <div className="sidebar-container">
            <div className="scroll">
                {/* <div className="sidebar-elements">
                    <Link style={{color: '#fff'}}>
                        <span  ><i class="fas fa-bars"></i></span>
                    </Lin className="SideBar_ContentTitle"k>
                </div> */}
                <div className="sidebar-elements" onClick= {handleClick}>
                    <Link to="/" style={{color: '#fff'}}>
                        <span  ><i class="fas fa-home" id="iconnn"></i></span>
                        <div className="SideBar_ContentTitle">Home</div>
                    </Link>
                </div>
                <div className="sidebar-elements" onClick= {handleClick}>
                    <Link to="/videos" style={{color: '#fff'}}>
                        <span ><VideoLibraryIcon id="iconnn"/></span>
                        <div className="SideBar_ContentTitle">Videos</div>
                    </Link>
                </div>
                <div className="sidebar-elements" onClick= {handleClick}>
                    <Link to="/audio-details" style={{color: '#fff'}}>
                        <span ><AudiotrackIcon id="iconnn"/></span>
                        <div className="SideBar_ContentTitle">Audios</div>
                    </Link>
                </div>
                <div className="sidebar-elements" onClick= {handleClick}>
                    <Link to ='/pictures' style={{color: '#fff'}}>
                        <span  ><i class="far fa-images" id="iconnn"></i></span>
                        <div className="SideBar_ContentTitle">Pictures</div>
                    </Link>
                </div>
                <div className="sidebar-elements" onClick= {handleClick}>
                    <Link to='/blogs' style={{color: '#fff'}}>
                        <span  ><i class="fab fa-blogger-b" id="iconnn"></i></span>
                        <div className="SideBar_ContentTitle">Blogs</div>
                    </Link>
                </div>
                {/* <div className="sidebar-elements" onClick= {handleClick}>
                    <Link to='/internship' style={{color: '#fff'}}>
                        <span  ><SchoolIcon id="iconnn"/></span>
                        <div className="SideBar_ContentTitle">Learning</div>
                    </Link>
                </div> */}
                <div className="sidebar-elements" onClick= {handleClick}>
                    <Link to='/learning-page' style={{color: '#fff'}}>
                        <span  ><SchoolIcon id="iconnn"/></span>
                        <div className="SideBar_ContentTitle">Learning</div>
                    </Link>
                </div>
                {
                    localStorage.getItem('WebAppUserKey') === '' || localStorage.getItem('WebAppUserKey') == null ?
                    ''
                    :
                <div className="sidebar-elements" onClick= {handleClick}>
                    <Link to ='/feed' style={{color: '#fff'}}>
                        <span  ><i class="fas fa-tv" id="iconnn"></i></span>
                        <div className="SideBar_ContentTitle">Feed</div>
                    </Link>
                </div>
                
                }
                
                { showElements ? 
                <> 
                {
                    (localStorage.getItem('WebAppUserKey') === '' || localStorage.getItem('WebAppUserKey') == null) ?
                    ''
                    :
                    <>
                    <div className="sidebar-elements hidden-sidebar-elements"onClick= {handleClick} >
                    <Link to="/profile" style={{color: '#fff'}}>
                        <span  ><i class="fas fa-home" id="iconnn"></i></span>
                        <div className="SideBar_ContentTitle">Profile</div>
                    </Link>
                    </div> 
                    <div className="sidebar-elements hidden-sidebar-elements"onClick= {handleClick} >
                    <Link to="/referral-page" style={{color: '#fff'}}>
                        <span ><ShareIcon id="iconnn"/></span>
                        <div className="SideBar_ContentTitle">Refer</div>
                    </Link>
                    </div> 
                    </>           
                }         
                </> : '' }
                {/* <div className="sidebar-elements" >
                <span style={{color: '#fff', backgroundColor: 'transparent', border: '0'}} onClick={handleHiddenElements}>
                <i class="fas fa-angle-double-down" ></i>
                </span>
                </div> */}
            </div>
            <div className="control-button">
            {
                    !showElements ? 
                    <span style={{color: '#fff', backgroundColor: 'transparent', border: '0'}} onClick={handleHiddenElements}>
                    <i class="fas fa-angle-double-down" style={{cursor: 'pointer'}} ></i>
                    </span>
                    :
                    <span style={{color: '#fff', backgroundColor: 'transparent', border: '0'}} onClick={handleHiddenElements}>
                <i class="fas fa-angle-double-up" style={{cursor: 'pointer'}} ></i>
                </span>
                }
            </div>
            </div>
    )
}

export default Sidebar
