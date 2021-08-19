// import React,{useState} from 'react'
// import Navbar from '../../Navbar/Navbar'
// import Sidebar from '../../Sidebar/Sidebar'
// import './VideoTrendingShow.css'

// const VideoTrendingShow = (props) => {
//     console.log('particular Video',props.location.element.element);
//     console.log('whote Data',props.location.data.data);

//     const particularVideo = props.location.element.element;
//     const[videoElement, setvideoElement] = useState(particularVideo);
//     const [videosTrending, setVideosTrending] = useState(props.location.data.data);

//     console.log('particular video element', videoElement);
//     console.log('videos trending', videosTrending);

//     const [showElement, setShowElements] = useState(false);
//     const handleHiddenElements = () => {
//         setShowElements(!showElement);
//     }

//     const handleTrendingVideo = (element) => {
//         setvideoElement(element);
//         console.log('clicked and recieved', videoElement);
//     }

//     return (
//         <div>
//             <Sidebar/>
//             <Navbar/>
//             <div className="Videos_main_container">
//                 <div  className="VP_container" >
                
//                 <div className="VP_elems">
//                     <video  autoPlay controls src ={videoElement.video_link} >
//                     </video>

//                     <div className="Video_information">

//                         <section className="Title_section">
//                             <div className="VP_Heading" >
//                                 <h3><i> {videoElement.video_title} </i></h3>
//                                 {/* <div className="control-button">
//                                     <div style={{color: '#00B1FF', backgroundColor: 'transparent', border: '0'}} onClick={handleHiddenElements}>
//                                     <i class="fas fa-chevron-down"></i>                                    </div>
//                                 </div> */}
//                             </div>
    
//                                 {/* <div className="dropDown">
//                                     { showElement ?
//                                     <div> */}
//                                         <b>{videoElement.video_caption}</b>
//                                     {/* </div> : ''
//                                     }
//                                 </div> */}
                                
                            
//                             <div className="VP_additional_information">
//                                 <div className="VP_Views">
//                                     <b>{videoElement.no_of_views}Views</b>
//                                 </div>
//                                 <div className="VP_Created_Time">
//                                     <b> {videoElement.created_date}</b>
//                                 </div>
//                             </div>
//                         </section>

//                         <section className="subscribeSection">
//                             <div className="subscribe">
//                                 <button>Subscribe</button>
//                             </div>
//                         </section>
//                     </div>
//                 </div>
//             </div>
//             <div className="Whole_Video_Content" style={{width:'100%' ,height:'40%'}}>
//                 <h3><b>Recommended</b></h3>
//                 <div className="Block_Video_Player">
//                 {
//                     videosTrending && videosTrending.map((element, index) => {
//                         return(
//                             <div className="Video_subBlock_Wrrapper" style={{cursor: 'pointer',display:'inline-block',borderRadius:'10px'}}>
//                                 <div className="Video_subBlock" >
//                                     <div onClick={() => handleTrendingVideo(element)} >
//                                         <video src={element.video_link}  />
//                                     </div>
                                
//                                 <div className="Profile_videoPlayer">
                                    
//                                         <img src={element.user_profile_pic} alt=""/>
                                        
//                                         <div className="description_videoPlayer">
//                                             <div style={{marginLeft:'3%'}}>Title:
//                                             {element.video_title.length > 30 ? 
//                                             element.video_title.slice(0, 20).concat('......') : 
//                                             element.video_title}</div>

//                                             <div className="VP_views">{element.no_of_views}Views</div>
//                                         </div>
                                        
//                                     </div>
//                                     </div>
//                             </div>
//                         )
//                     })
//                 }
//                 </div>
//             </div>

//             </div>
            
//         </div>
//     )
// }

// export default VideoTrendingShow
