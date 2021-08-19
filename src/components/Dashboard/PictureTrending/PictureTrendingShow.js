import React,{useState} from 'react'
import Navbar from '../../Navbar/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import './PictureTrendingShow.css';

const PictureTrendingShow = (props) => {
    // console.log('particular picture',props.location.element.element);
    // console.log('whole State',props.location.data1.data1);

    const particularPicture = props.location.element.element;
    const [pictureTrending,setpictureTrending] = useState(props.location.data1.data1);
    const [pictureElement, setpictureElement] = useState(particularPicture);

    // console.log('particular picture',pictureElement);
    // console.log('Picture Trending', pictureTrending);

    const handleTrendingPicture = (element) => {
        setpictureElement(element);
        // console.log('clicked and recieved', pictureElement);


    }
    return (
        <div>
            <Sidebar/>
            <Navbar/>
            <div className="PA_mainContainer">
            <div className="PA_Container">
                
                <div className="PA_ClickedPic">
                    <img src={pictureElement.picture_link}   alt=""/>
                
                <div className="PA_information">

                    <section className="PA_Title_section">
                        <div className="PA_Heading">
                            <h3><i> {pictureElement.picture_title} </i></h3>
                            {/* <div className="PA_CaptionFeild">
                                    <b>{pictureElement.picture_caption}</b>
                            </div> */}
                            
                        
                            {/* <div className="PA_dropDown">
                                { showElement ?
                                <div> */}
                                    <b >{pictureElement.picture_caption}</b>
                                {/* </div> : ''
                                }
                            </div> */}
                        </div>
                            
                            <div>
                            {/* <div className="control-button">
                                <span style={{color: '#00B1FF', backgroundColor: 'transparent', border: '0'}} onClick={handleTrendingPicture}>
                                <i class="fas fa-chevron-down"></i>                                    </span>
                                
                            </div> */}
                            </div>
                        
                        <div className="PA_additional_information">
                            <div className="PA_Views">
                                <b>{pictureElement.no_of_views}Views</b>
                            </div>
                            <div className="PA_Created_Time">
                                <b> {pictureElement.created_date}</b>
                            </div>
                        </div>
                    </section>

                    <section className="PA_subscribeSection">
                        <div className="PA_subscribe">
                            <button>Subscribe</button>
                        </div>
                    </section>
                </div>
                </div>
            </div>
            <div className="whole_Picture_content">
                    <h3><b> Recommended</b></h3>
                    <div className="Block_Picture_Album">
                    
                        {
                            pictureTrending && pictureTrending.map((element, index) => {
                                return(
                                <div className="PA_subBlockWrrapper"style={{cursor: 'pointer',display:'inline-block',borderRadius:'10px'}}>
                                    <div className="PA_subBlock">
                                    <div onClick={() => handleTrendingPicture(element)} >
                                        <img style={{width: '18vw', height: '23vh'}} src={element.picture_link}  />
                                    </div>
                                    <div className="Profile_PicAlbum">
                                    
                                    <img src={element.user_profile_pic} alt=""/>
                                    
                                    <div className="description_PictureAlbum">
                                        <div style={{marginLeft:'3%'}}>Title:
                                        {element.picture_title.length > 30 ? 
                                        element.picture_title.slice(0, 20).concat('......') : 
                                        element.picture_title}</div>

                                        <div className="PA_views">{element.no_of_views}Views</div>
                                    </div>
                                    
                                </div>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PictureTrendingShow
