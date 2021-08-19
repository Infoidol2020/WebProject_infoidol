import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';

import InfoidolLogo from '../../assets/InfoidolLogo.png'
const Footer = () => {
    return (
        <div className="FooterMain" >
        <div className="Footer_Section">
            <div style={{ width: '40%', textAlign: 'center', margin: '1rem'}}>
                <Link to="/">
                    <img src={InfoidolLogo}   alt="logo" />
                </Link>
                <div className="FooterIcon" style={{display: 'flex', justifyContent: 'center',}}>
                    <a target="_blank" href= 'https://www.facebook.com/Infoidol369/'>
                        <div ><FacebookIcon style={{fontSize: 'x-large',margin: '0 1rem', color: '#3B5998'}}/></div>
                    </a>

                    <a target="_blank" href= 'https://www.instagram.com/_infoidol_/?igshid=rfrcy8w2rw4s'>
                    <div className=" "><InstagramIcon style={{fontSize: 'x-large',margin: '0 1rem',color: 'red'}}/></div>
                    </a>

                    <a target="_blank" href= 'https://www.linkedin.com/company/infoidol/?viewAsMember=true'>
                    <div className=" "><LinkedInIcon style={{fontSize: 'x-large',margin: '0 1rem', color: '#07485E'}}/></div>
                    </a>

                    <a target="_blank" href= 'https://twitter.com/_infoidol_?s=08'>
                    <div className=" "><TwitterIcon style={{fontSize: 'x-large',margin: '0 1rem', color: '#00A2CE'}}/></div>
                    </a>

                    <a target="_blank" href= 'https://in.pinterest.com/mayuritiwary162/'>
                    <div className=" "><PinterestIcon style={{fontSize: 'x-large',margin: '0 1rem', color: '#C9353D'}}/></div>
                    </a>

                    <a target="_blank" href= 'https://www.youtube.com/channel/UCGa_77MYBzPsaQP6aMY_DJw'>
                    <div className=" "><YouTubeIcon style={{fontSize: 'x-large',margin: '0 1rem', color: '#FF0000'}}/></div>
                    </a>
                </div>
                
            </div>
            <div className="FS_About" style={{width: '30%', margin: '1rem' }}>
                <h4 style={{color: '#00FFFF'}}>About Us</h4>
                <p style={{color: '#fff', opacity: '0.9'}}>Infoidol is a one stop platform to create, store, showcase one’s specialty, talent, skills, quality, wisdom, learnings and also redirect their content to their target audience on locally and globally both levels</p>
            </div>
            <div className="FS_ContactUs">
                <div className="FS_Contact" style={{marginLeft: '5vw'}}>
                    <h4 style={{color: '#00FFFF'}}>Contact Us</h4>
                    <p style={{color: '#fff', opacity: '0.9'}}>Email – Ask@infoidol.com</p> 
                    <p style={{color: '#fff', opacity: '0.9'}}>Operational Address – Infoidol PVT LTD. #007 Saranya Samuriddhi, Green Garden Layout, Munekolala, Marathahalli, Bangalore, 560037</p>
                    <p style={{color: '#fff', opacity: '0.9'}}>Mobile – +91 93807 27561</p>
                </div>
            </div>
        </div>
        {/* <hr style={{color: '#fff'}} /> */}
        <div style={{marginLeft: '2vw', marginRight: '2vw'}}>
            <hr />
            <div className="FS_END" style={{color: '#00FFFF', justifyContent: 'space-between'}} >
                <div 
                onClick={() => window.scrollTo(0,0)}>
                    <Link to="/about-us">About Us</Link>
                </div>
                {/* <div>Contact Us</div> */}
                <div 
                onClick={() => window.scrollTo(0,0)}>
                    <Link to="/pricing">Pricing</Link>
                </div>
                <div 
                onClick={() => window.scrollTo(0,0)}>
                    <Link to="/privacy-policy"> Privacy Policy</Link>
                </div>
                <div 
                onClick={() => window.scrollTo(0,0)}>
                    <Link to="/terms-and-conditions">Terms & Condition</Link>
                </div>
                <div 
                onClick={() => window.scrollTo(0,0)}>
                    <Link to="/refund-policy">Cancellation/Refund Policy</Link>
                </div>
            </div>
        </div>
        <div style={{height: '3vh'}}></div>
        </div>
    )
}

export default Footer
