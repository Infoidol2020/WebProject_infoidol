import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './CopyRight.css'
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy'
import { Link } from 'react-router-dom';
const CopyRight = () => {
    return (
        <section className="CopyRightFooter">
            {/* <Link to='/privacy-policy'  style={{color: '#fff'}}>
                <div>Privacy Policy</div>
            </Link> */}
            {/* <PrivacyPolicy/> */}
            <div className="Cr_leftSection">
                    <div className="CopyRightTitle">Copyright &copy;2021 Infoidol Private Ltd.  </div>

                    <div className="Pr_Policy">
                        <Link to='/privacy-policy' target="_blank"  style={{color: 'gray',marginRight: '10rem'}}>
                            <div>Privacy Policy</div>
                        </Link>
                    </div>
            </div>

            <div className="Cr_rightSection">
                <a target="_blank" href= 'https://www.facebook.com/Infoidol369/'>
                    <div className="Cr_FacebookIcon "><FacebookIcon style={{fontSize: 'x-large',margin: '0 1rem'}}/></div>
                </a>

                <a target="_blank" href= 'https://www.instagram.com/_infoidol_/?igshid=rfrcy8w2rw4s'>
                <div className="Cr_InstagramIcon "><InstagramIcon style={{fontSize: 'x-large',margin: '0 1rem'}}/></div>
                </a>

                <a target="_blank" href= 'https://www.linkedin.com/company/infoidol/?viewAsMember=true'>
                <div className="Cr_LinkedInIcon "><LinkedInIcon style={{fontSize: 'x-large',margin: '0 1rem'}}/></div>
                </a>

                <a target="_blank" href= 'https://twitter.com/_infoidol_?s=08'>
                <div className="Cr_TwitterIcon "><TwitterIcon style={{fontSize: 'x-large',margin: '0 1rem'}}/></div>
                </a>

                <a target="_blank" href= 'https://in.pinterest.com/mayuritiwary162/'>
                <div className="Cr_PinterestIcon "><PinterestIcon style={{fontSize: 'x-large',margin: '0 1rem'}}/></div>
                </a>

                <a target="_blank" href= 'https://www.youtube.com/channel/UCGa_77MYBzPsaQP6aMY_DJw'>
                <div className="Cr_YouTubeIcon "><YouTubeIcon style={{fontSize: 'x-large',margin: '0 1rem'}}/></div>
                </a>
            </div>

        </section>
    )
}

export default CopyRight
