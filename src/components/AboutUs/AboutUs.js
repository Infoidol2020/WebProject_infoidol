import React from 'react'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Footer from '../NewFooter'

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';

import './AboutUs.css'
const AboutUs = () => {
    return (
        <section>
            <Sidebar/>
            <Navbar/>
            <div className="AboutUsWrapper">
                <div className="AboutUsContainer">
                    <h2>About Us</h2>
                        <p>
                            Infoidol is a new type of Social media based on the Ecosystem model i.e. Video, Audio, Photo, Blogs, Messaging features. When you open the app you can see “Mixed Content” full of people’s Content—all open so you can hop in and out, exploring a different variety of content. You can enter the Website as a Viewing member, but if you want to became infoidol’s creator or vlogger or blogger just signing create content, Upload your content, and the Viewers can choose to Subscribe with your channel. Or you can opt to open connections to share your contact information. 
                            <br />
                            <br /> To the world—to tell stories, share your values, share your perspectives, to entertainment, to teach, for your authentication, and have fans all over the world in thousands of different Niches. Infoidol is Ecosystem, and we think an Ecosystem is a very special medium. With every type of content, you don’t have to worry about searching for a different type of content everywhere. You can Upload on Infoidol whether you are a newbie digital creator, or an expert digital creator, blogger, vlogger. Instead of searching for something and hitting search everywhere, you’re in an ecosystem where you can find everything at a place. The intonation, inflection, and emotion conveyed through Content allow you to pick up on nuance and form uniquely human connections with others. You can still challenge each other and have tough competitions—but with content, there is often an ability to build more empathy. This is what drew us to the medium.
                        </p>
                    <h2>Why isn’t it open to the public yet?</h2>
                    <p>
                        We are building Infoidol for everyone and working to make it available to the world as quickly as possible. It’s not intended to be exclusive; we just aren’t ready to ship the general release version yet. There are two reasons for this:
                        <br /><br />First, we think it’s important to grow communities slowly, rather than 10x-ing the user base overnight. This helps ensure that things don’t break, keeps the composition of the community diverse, and allows us to tune the product as it grows.
                        <br /><br /> Second, we are a small team, and we haven’t yet finished building the features that will allow us to handle more people. Right now the 30 of us are the only full-time employees. We’ve benefitted from the support of many, and are actively hiring, but between infrastructure scaling, feature development, gathering product feedback, and general company building, there haven’t been many spare hours in the day. Plus we have two young kids between us jumping on our keyboards as we type!
                    </p>
                    
                    <h2> So what’s next?</h2>
                    <p> 
                        Before we can move from a beta to a general release we want to ensure that the product can handle more people. Among other things, this means having robust community policies and tools to ensure that people have a great experience as the user base scales up. Here are a few things that are top-of-mind for us as we work towards a broader release:
                    </p>
                
                    <h2> More detailed community guidelines.</h2>
                    <p>
                        We published an initial set of community guidelines, but there are still some important questions we are working to answer. How will we evaluate complaints of abuse or harassment when we don’t record user conversations?
                        <br /> Will we consider suspending Infoidol’s users for bad behavior on another network, or only for things that happen on Infoidol?
                        <br /> The major networks have spent years developing extremely detailed guidelines for these things. We’re working to make ours robust, and we expect them to evolve as the user base grows. In-app safety features. On every platform, there are bad actors. As we move beyond the beta group, we’ll need better tools to protect people. On Infoidol, there are some nuanced things to figure out. What does it mean to abuse one person in content where multiple people are watching?
                        <br /> Should we store on our servers to help us investigate future complaints
                        <br /> We are shipping important privacy and blocking features later today, but before we launch widely we’d like to add better in-app reporting and a clearer process for investigating complaints.
                    </p>
                </div>
                
                <div className="contactUs">
                    <h2>Contact Us</h2>
                    <p>
                    <h5>Email Id:&nbsp;ask@infoidol.com</h5>
                    </p>
                    <p>
                        <h5>Follow Us:</h5>
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
                    </p>
                </div>
        </div>

            <Footer />
            </section>
    )
}

export default AboutUs
