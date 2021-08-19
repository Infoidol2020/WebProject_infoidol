import React,{useState,useEffect, useRef} from 'react';
import Image from '../../assets/img.png';
import './PictureViewMain.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { useHistory } from 'react-router-dom';

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';



const PictureViewMain = (props) => {
    var pictureMain = props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail;
    const history = useHistory();
    const pictureContainer = useRef()
    const [showElement, setShowElements] = useState(false);
    const [SubscribeStatus,setSubscribeStatus] =useState();
    const handleHiddenElements = () => {
        setShowElements(!showElement);
        
    }
    // console.log('data wwwwwwwwwwwwwwww', props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail)

    const [pictureDetails, setpictureDetail] = useState({});
    // console.log('proppps', props)

    const handleSubscribeClick =() =>{
        if(localStorage.getItem('WebAppUserKey') === null || localStorage.getItem('WebAppUserKey') == '' ){
            history.push('/login')
            return
        }
        const UI = localStorage.getItem('UI');
        props.hitsubscribeAPI(UI)
    }
    const handleUnSubscribeClick = () =>{
        const UI = localStorage.getItem('UI');
        props.hitUnsubscribeAPI(UI)
    } 

    useEffect(() => {
        setpictureDetail(props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail);
    }, [props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.PictureDetailPageSuccess])
    // console.log('yayyyy', props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail);
    // console.log('pooooooooooooooooo', props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.subscribe_status)

    useEffect(() => {
        props.fetchAllPictureView(localStorage.getItem('id'))
        if(props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail){
            if(props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.subscribe_status !== undefined ){
                setSubscribeStatus(props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.subscribe_status)
            }
        }
    }, [props.AllPictureListFromAPI.Subscribe.subscribeApi.subscribeSuccess,
        props.AllPictureListFromAPI.Subscribe.unsubscribeApi.unsubscribeSuccess])

    return (
        <div>
            <div className="PV_FirstContainer" ref={pictureContainer}>
                <div className="PV_elems">
                {
                    // pictureDetails.map((element, index) => {
                    //     return(
                    //         index === 1 &&
                            <>
                                <a href="#img1">
                                    <div className="PV_BaseImg">
                                    <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src={pictureMain && pictureMain.picture_link} alt="" />
                                    </div>
                                </a>
                                <a href="#" class="JesterBox">
                                    <div id="img1">
                                        <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src={pictureMain && pictureMain.picture_link} alt=""  />
                                    </div>
                                </a>


                                {/* <section>
                                <a href="#" class="JesterBox">
        <div id="image1"><img src="example-images/wide.jpg"></div>
        <div id="image2"><img src="example-images/medium.jpg"></div>
        <div id="image3"><img src="example-images/high.jpg"></div>
        <div id="image4"><img src="example-images/small.jpg"></div>
        <div id="image5"><img src="example-images/wide.jpg"></div>
    </a>
                                </section> */}
                            <div className="PV_information">

                        <section className="PV_Title_section">
                            <div className="PV_Heading">
                                <h3><i> {pictureMain && pictureMain.picture_title} </i></h3>

                                {
                                    pictureMain && pictureMain.picture_caption && pictureMain && pictureMain.picture_caption.length > 350 ?
                                    <div className="pictureCaption" style={{height:'10vh',overflowY:'scroll',marginTop:'2vh'}}>
                                        <b style={{marginTop:'1vh'}}>{pictureMain && pictureMain.picture_caption}</b>
                                    </div>
                                :
                                    <div className="pictureCaption">
                                        <b style={{marginTop:'1vh'}}>{pictureMain && pictureMain.picture_caption}</b>
                                    </div>
                                }

                                    
                            </div>
{/*                                 
                                <div>
                                <div className="PV_control-button">
                                    <span style={{color: '#00B1FF', backgroundColor: 'transparent', border: '0'}} onClick={handleHiddenElements}>
                                    <i class="fas fa-chevron-down"></i>                                    </span>
                                    
                                </div>
                                </div> */}
                            
                            <div className="PV_additional_information">
                                <div className="PV_Views">
                                    <b>{pictureMain && pictureMain.no_of_views}Views</b>
                                </div>
                                <div className="PV_Created_Time">
                                    <b> {pictureMain && pictureMain.created_date}</b>
                                </div>
                            </div>
                        </section>

                        <section className="subscribe_PV_Section">
                            <div className="subscribe_PV">
                            {
                                            localStorage.getItem('WebAppUserKey') === localStorage.getItem('UI') ?
                                            ''
                                            :
                                            props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail && props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.subscribe_status === 0 ?
                                            <button  
                                            onClick={() => handleSubscribeClick()}
                                            >Subscribe <NotificationsIcon/> </button>
                                            :
                                            <button  
                                            onClick={() => handleUnSubscribeClick()}
                                            style={{background: '#A52A2A', 
                                            opacity: '0.8'
                                            }} >Subscribed <NotificationsActiveIcon/> </button>
                                        }
                                {/* <button>Subscribe</button> */}
                            </div>
                        </section>
                    </div>
                            </>
                            

                    //     )
                        
                    // })
                }
                </div>
                
                
            </div>
        </div>
    )
}

export default PictureViewMain
