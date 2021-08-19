import React from 'react'
import { FacebookShareButton, 
    FacebookMessengerShareButton,
    WhatsappShareButton, 
    TwitterShareButton,
    EmailShareButton,
    TelegramShareButton,
    PinterestShareButton,
    LinkedinShareButton } from 'react-share';
import { FacebookIcon,
    FacebookMessengerIcon, 
    WhatsappIcon, 
    TwitterIcon,
    EmailIcon,
    TelegramIcon,
    PinterestIcon,
    LinkedinIcon } from 'react-share';
import { Helmet } from "react-helmet";

const ShareMedia = (props) => {
    // console.log('propssssssqwer', props);
    const URL = 'www.infoidol.com'
    var LinkdInURL = ''
    const TelegramURL =`https://t.me/share/url?url=${props.shareElementLink}&text=${props.shareElementDescription}`
    const PinterestURL = `https://pinterest.com/pin/create/button/?url=${props.shareElementLink}&description=${props.shareElementDescription}`
    if(props.shareElementType === '3'){
    LinkdInURL = `https://www.linkedin.com/shareArticle?mini=true&url=${props.shareElementLink}&title= ${props.shareElementTitle}&summary=${props.shareElementDescription}&source=infoidol`
        
    }
    else{
    LinkdInURL = `https://www.linkedin.com/shareArticle?mini=true&url=${props.shareElementThumbnail}&title= ${props.shareElementTitle}&summary=${props.shareElementDescription}&source=infoidol`
        
    }
    
    return (
        <>
        <Helmet>
        <title>{props.shareElementTitle}</title>
        <meta charset="utf-8" />
        <meta name="csrf_token" content="" />
        <meta property="type" content="website" />
        <meta property="url" content={'https://www.infoidol.com'} />
        <meta property="og:url" content='https://www.infoidol.com' />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content={props.shareElementLink} />
        <meta name="theme-color" content="#ffffff" />
        <meta name="_token" content="" />
        <meta name="robots" content="noodp" />
        <meta property="title" content={props.shareElementTitle} />
        <meta property="quote" content={props.shareElementTitle} />
        <meta name="description" content={props.shareElementDescription} />
        <meta name="video" content={props.shareElementLink} />
        <meta property="image" content={props.shareElementLink} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.shareElementTitle} />
        <meta property="og:quote" content={props.shareElementTitle} />
        <meta property="og:hashtag" content={props.shareElementTitle} />
        <meta property="og:image" content={props.shareElementLink} />
        <meta property="og:image:width" content="200"/>
        <meta property="og:image:height" content="300"/>
        <meta content="image/*" property="og:image:type" />
        <meta property="og:url" content={"www.infoidol.com"} />
        <meta property="og:site_name" content="www.infoidol.com" />
        <meta property="og:description" content={props.shareElementDescription} />  
        <meta property="og:video" content={props.shareElementLink} />   
        <meta property="og:audio" content={props.shareElementLink} /> 

        <meta property="og:title" content="www.infoidol.com" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.infoidol.com" />
        <meta property="og:description" content={props.shareElementDescription} />
        <meta property="og:image" content={props.shareElementLink} />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" /> 

        <meta property='og:title' content={'https://www.infoidol.com'}/>
        <meta property='og:image' content={props.shareElementLink}/>
        <meta property='og:description' content={props.shareElementDescription}/>
        <meta property='og:url' content={'https://www.infoidol.com'}/>
        

     </Helmet>
        <div style={{boxShadow: '8px 19px 17px #00000029', borderRadius: '10px', border: 'solid 1px #dadada'}}> 

            <FacebookShareButton 
            style={{padding: '1.5rem'}}
            url={props.shareElementLink} 
            quote={props.shareElementDescription}
            hashtag={props.shareElementDescription}
            >
                <FacebookIcon logoFillcolor = "white" round={true} size={32}></FacebookIcon>
            </FacebookShareButton>

            {/* <FacebookMessengerShareButton
            style={{padding: '1.5rem'}}
            redirectUri={props.shareElementLink} 
            appId="infoidolWeAllGrowTogether"
            // quote={props.shareElementDescription}
            // hashtag={props.shareElementTitle}
            >
                <FacebookMessengerIcon logoFillcolor = "white" round={true} size={32}></FacebookMessengerIcon>
            </FacebookMessengerShareButton> */}

            <WhatsappShareButton 
            style={{padding: '1.5rem'}}
            title={props.shareElementDescription}
            url={props.shareElementLink}>
                <WhatsappIcon logoFillcolor = "white" round={true} size={32}></WhatsappIcon>
            </WhatsappShareButton>

            <TwitterShareButton
            style={{padding: '1.5rem'}}
            url={props.shareElementLink} 
            quote={props.shareElementDescription}
            hashtag={props.shareElementTitle}>
                <TwitterIcon logoFillcolor = "white" round={true} size={32}></TwitterIcon>
            </TwitterShareButton>

            <EmailShareButton
            style={{padding: '1.5rem'}}
            subject={props.shareElementTitle}
            body={props.shareElementLink}>
                <EmailIcon logoFillcolor = "white" round={true} size={32}></EmailIcon>
            </EmailShareButton>

            {/* <TelegramShareButton
            style={{padding: '1.5rem'}}
            title={props.shareElementDescription}>
                <TelegramIcon logoFillcolor = "white" round={true} size={32}></TelegramIcon>
            </TelegramShareButton> */}

            {/* <PinterestShareButton
            style={{padding: '1.5rem'}}
            media={props.shareElementLink}
            description={props.shareElementDescription}
            >
                <PinterestIcon  logoFillcolor = "white" round={true} size={32}></PinterestIcon>
            </PinterestShareButton> */}

            {/* <LinkedinShareButton
            style={{padding: '1.5rem'}}
            title={"www.infoidol.com"}
            summary={"www.infoidol.com"}
            source={"www.infoidol.com"}>
                <LinkedinIcon logoFillcolor = "white" round={true} size={32}></LinkedinIcon>
            </LinkedinShareButton> */}

            <button style={{background: 'transparent', border: '0', padding: '1.5rem'}}>
                <a href={TelegramURL}onclick="window.open(this.href, 'mywin', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;">
                
                <TelegramIcon logoFillcolor = "white" round={true} size={32}></TelegramIcon>
                </a>
            </button>

 
            
            <button style={{border: '0', background: 'transparent', padding: '1.5rem'}}>
            <a href={LinkdInURL} onclick="window.open(this.href, 'mywin', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;">
            <LinkedinIcon logoFillcolor = "white" round={true} size={32}></LinkedinIcon>
            </a>
            </button>

        </div>
        </>
    )
}

export default ShareMedia
