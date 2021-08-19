import React, {useState, useEffect} from 'react'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import VideocamIcon from '@material-ui/icons/Videocam';
import ImageIcon from '@material-ui/icons/Image';
import CreateIcon from '@material-ui/icons/Create';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import pageLoader from '../../assets/pageLoader.svg'
import './Feed.css'
// import Profile from '../../assets/profile.jpeg';

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';




function getModalStyle() {
    return {
      width: "50vw",
      marginTop: '15vh',
      marginLeft: '20vw'
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const FeedProfile = (props) => {
    // const [inputValue, setInputValue] = useState('');
    const classes = useStyles();
    //modal states
    const [VideoModalStates,setVideoModalStates]=useState(false)
    const [AudioModalStates,setAudioModalStates]=useState(false)
    const [ImageModalStates,setImageModalStates]=useState(false)
    const [BlogModalStates,setBlogModalStates]=useState(false)
    const [successUpload, setSuccessUpload] = useState(false)
    const [modalStyle] = useState(getModalStyle);

    const [VideoCategories, setVideoCategories] = useState([])
    const [AudioCategories, setAudioCategories] = useState([])
    const [ImageCategories, setImageCategories] = useState([])
    const [BlogCategories, setBlogCategories] = useState([])

    let [videoFields, setVideoFields] = useState({
        title: '',
        description: '',
        category: '',
        latitude: '12.8090768',
        longitude: '13.8907809',
        device_id: 'SYSTEM',
        user_id: '1',
        thumbnail: '',
        videofile: ''
    })
    let [audiofields, setAudioFields] = useState({
        title: '',
        description: '',
        category: '',
        latitude: '12.8090768',
        longitude: '13.8907809',
        device_id: 'SYSTEM',
        user_id: '1',
        thumbnail: '',
        audiofile: ''
    })
    let [imagefields, setImageFields] = useState({
        title: '',
        description: '',
        category: '',
        device_id: 'SYSTEM',
        user_id: '1',
        imagefile: ''
    })
    let [blogfields, setBlogFields] = useState({
        title: '',
        description: '',
        category: '',
        latitude: '12.8090768',
        longitude: '13.8907809',
        device_id: 'SYSTEM',
        user_id: '1',
        thumbnail: '',
        
    })
    const [blogDataFiles, setBlogDataFiles] = useState([])
    const handleVideoModal = () => {
        setVideoModalStates(!VideoModalStates)
    }
    const handleAudioModal = () => {
        setAudioModalStates(!AudioModalStates)
    }
    const handleImageModal = () => {
        setImageModalStates(!ImageModalStates)
    }
    const handleBlogModal = () => {
        setBlogModalStates(!BlogModalStates)
    }

    //video uploading 
    const handleVideoFieldsChange = (e) => {
        // console.log(e.target.value);
        setVideoFields({...videoFields,
            [e.target.name]: e.target.value
        })
    }
    const onVideoFileChange = (e) => {
        // console.log('fileeee',e.target.files[0]);
        videoFields.videofile = e.target.files[0]; //need to fix it using setState
        // console.log('fields.videofile', videoFields.videofile);
        // setFileds({...fields,
        // [e.target.name] : e.target.files[0]
        // })
    }
    const onVideoThumbnailChange = (e) => {
        videoFields.thumbnail = e.target.files[0];
    }
     const handleVideoSubmit = (e) => {
        //  console.log('fields', videoFields);
        e.preventDefault();
        props.uploadVideoAPI(videoFields)
     }

     //audio uploading
     const handleAudioFieldsChange = (e) => {
        // console.log(e.target.value);
        setAudioFields({...audiofields,
            [e.target.name]: e.target.value
        })
    }
    const onAudioFileChange = (e) => {
        // console.log('fileeee',e.target.files[0]);
        audiofields.audiofile = e.target.files[0]; //need to fix it using setState
        // console.log('fields.Audiofile', audiofields.audiofile);
        // setFileds({...fields,
        // [e.target.name] : e.target.files[0]
        // })
    }
    const onAudioThumbnailChange = (e) => {
        audiofields.thumbnail = e.target.files[0];
    }
     const handleAudioSubmit = (e) => {
        // console.log('fields', audiofields);
       e.preventDefault();
       props.uploadAudioAPI(audiofields)
    }
    //image uploading
    const handleImageFieldsChange = (e) => {
        // console.log(e.target.value);
        setImageFields({...imagefields,
            [e.target.name]: e.target.value
        })
    }
    const onImageFileChange = (e) => {
        // console.log('fileeee',e.target.files[0]);
        imagefields.imagefile = e.target.files[0]; //need to fix it using setState
        // console.log('fields.Audiofile', imagefields.imagefile);
        // setFileds({...fields,
        // [e.target.name] : e.target.files[0]
        // })
    }
    const handleImageSubmit = (e) => {
        // console.log('fields', imagefields);
    e.preventDefault();
    props.uploadImageAPI(imagefields)
    }


    //blog uploading 
    const handleBlogFieldsChange = (e) => {
        // console.log(e.target.value);
        setBlogFields({...blogfields,
            [e.target.name]: e.target.value
        })
    }    
    const onBlogFileChange = (e) => {
        setBlogDataFiles(oldArray => [...oldArray, e.target.files[0]]);
        // console.log('array files', blogDataFiles);
    }
    const onblogThumbnailChange = (e) => {
        blogfields.thumbnail = e.target.files[0];
        // console.log('blog thumbnail', blogfields.thumbnail);

    }
    const handleBlogSubmit = (e) => {

        e.preventDefault();
        props.uploadBlogAPI(blogfields, blogDataFiles)
        }

        // console.log('propss22e3', props.FeedsFromAPI.myUserProfile.myUserProfileApi.myUserProfile);
  
    // const handleChange = (e) => {
        // console.log('the input value is', e.target.value);
    //     setInputValue(e.target.value)
    // }

 //video categories and video uploading
    useEffect(()=>{
        if(props.FeedsFromAPI.UploadVideo.UploadVideoGetApi.UploadVideoSuccess){
            setSuccessUpload(true)
            props.fetchAllFeeds(0,0)  
            setTimeout(()=>{
                setVideoModalStates(false)
                setSuccessUpload(false)
            },3000)
        }
    },[props.FeedsFromAPI.UploadVideo.UploadVideoGetApi.UploadVideoSuccess])

    useEffect(()=>{
        if(props.FeedsFromAPI.VideoCategories.VideoCategoriesGetApi.VideoCategories.category){
            setVideoCategories(props.FeedsFromAPI.VideoCategories.VideoCategoriesGetApi.VideoCategories.category)
        }
            },[props.FeedsFromAPI.VideoCategories.VideoCategoriesGetApi.VideoCategoriesSuccess])

//audio categories and audio uploading
    useEffect(()=>{
                if(props.FeedsFromAPI.UploadAudio.UploadAudioGetApi.UploadAudioSuccess){
                    setSuccessUpload(true)
                    props.fetchAllFeeds(0,0)  
                    setTimeout(()=>{
                        setSuccessUpload(false)
                        setAudioModalStates(false)
                    },3000)
                }
            },[props.FeedsFromAPI.UploadAudio.UploadAudioGetApi.UploadAudioSuccess])
    useEffect(() => {
        setAudioCategories(props.FeedsFromAPI.AudioCategories.AudioCategoriesGetApi.AudioCategories.category)
    }, [props.FeedsFromAPI.AudioCategories.AudioCategoriesGetApi.AudioCategoriesSuccess])
//image categories and image uploading
    useEffect(() => {
        if( props.FeedsFromAPI  && 
            props.FeedsFromAPI.pictureCategories &&
            props.FeedsFromAPI.pictureCategories.pictureCategoriesGetApi &&
            props.FeedsFromAPI.pictureCategories.pictureCategoriesGetApi.pictureCategories.category){
            setImageCategories(props.FeedsFromAPI.pictureCategories.pictureCategoriesGetApi.pictureCategories.category)
        }
    }, [props.FeedsFromAPI.pictureCategories.pictureCategoriesGetApi.pictureCategoriesSuccess])
    useEffect(()=>{
        if(props.FeedsFromAPI.UploadImage.UploadImageGetApi.UploadImageSuccess){
            setSuccessUpload(true)
            props.fetchAllFeeds(0,0)  
            setTimeout(()=>{
                setSuccessUpload(false)
                setImageModalStates(false)
            },3000)
        }
    },[props.FeedsFromAPI.UploadImage.UploadImageGetApi.UploadImageSuccess])
//blog categories and blog uploading
useEffect(() => {
    setBlogCategories(props.FeedsFromAPI.BlogCategories.BlogCategoriesGetApi.BlogCategories.category)
}, [props.FeedsFromAPI.BlogCategories.BlogCategoriesGetApi.BlogCategoriesSuccess])
useEffect(()=>{
    if(props.FeedsFromAPI.UploadBlog.UploadBlogGetApi.UploadBlogSuccess){
        setSuccessUpload(true)
        props.fetchAllFeeds(0,0)  
        setTimeout(()=>{
            setSuccessUpload(false)
            setBlogModalStates(false)
        },3000)
    }
},[props.FeedsFromAPI.UploadBlog.UploadBlogGetApi.UploadBlogSuccess])


    // console.log('propssssssss',props.FeedsFromAPI.BlogCategories.BlogCategoriesGetApi.BlogCategories.category)
    // console.log('blog success', props.FeedsFromAPI.UploadBlog.UploadBlogGetApi.UploadBlogSuccess)
    
    const VideoModalBody = (

        <div style={modalStyle} className={classes.paper} id="modalStyle1">
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <button
                onClick ={() => setVideoModalStates(false)} 
                style={{fontSize: '2rem',fontWeight:'bold',border: '0', outline: 'none', background: 'transparent'}}>
                    &times; </button>
            </div>
            <hr />

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            {props.FeedsFromAPI.UploadVideo.UploadVideoGetApi.UploadVideoInProgress && <img src={pageLoader} />}
            </div>
            {
                successUpload &&
                <div style={{display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom : '3vh',
                height: '5vh', 
                background: '#DFF2BF', color: '#4F8A10'}}>
                <div>Video uploaded successfully...</div>
                </div>
            }

            {props.FeedsFromAPI.UploadVideo.UploadVideoGetApi.UploadVideoFailed &&
            <div style={{display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            background: 'brown', 
            marginBottom : '3vh',
            height: '5vh',
            color: '#fff'}}>
            
            <div>Something went wrong...</div>
            </div>
            }


            <form id="FeedPge_Form_Section" className="form-horizontal" onSubmit={handleVideoSubmit}>
                        <div className="form-group " >
                            <div className="col-sm-4">
                                <label style={{opacity: '0.5'}}>Title</label>
                            </div>
                            <div className="col-sm-8" >
                                <input id="FeedPge_VideoModalTitle"
                                required 
                                style={{width: '25vw', 
                                border: 'solid 1px #dadada', 
                                borderRadius: '10px', 
                                outline: 'none',
                                height: '5vh'}} 
                                name="title"  placeholder="enter title" type="text" onChange={(e) => handleVideoFieldsChange(e)} />
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="col-sm-4">
                                <label style={{opacity: '0.5'}}>Description</label>
                            </div>
                            <div className="col-sm-8">
                            <textarea id="FeedPge_VideoModalTitle"
                            required 
                            style={{width: '25vw', border: 'solid 1px #dadada', borderRadius: '10px', outline: 'none'}}
                            name="description"
                            type="text" 
                            rows="5"
                            placeholder="write a description"
                            onChange = { (e) => handleVideoFieldsChange(e)}  
                            ></textarea>
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="col-sm-4">
                                <label style={{opacity: '0.5'}}>Categories</label>
                            </div>
                            <div className="col-sm-8">
                                <select id="FeedPge_VideoModalSelectCategory"
                                style={{width: '25vw', border: 'solid 1px #dadada', borderRadius: '10px', outline: 'none',height: '5vh'}} 
                                name="category" onChange = { (e) => handleVideoFieldsChange(e)}
                                required >
                                    <option value="" >Choose a category</option>
                                    {
                                        VideoCategories && VideoCategories.map((element, index) => {
                                            return(
                                                <option value={element.cat_id}>{element.cat_name}</option>
                                            )
                                        })
                                    }
                                </select>
                              
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="col-sm-4">
                                <label style={{opacity: '0.5'}}>Upload File</label>
                            </div>
                            <div className="col-sm-8">
                                
                                <input required name="videofile" accept="video/*"  type="file" onChange = { (e) => onVideoFileChange(e) } />
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="col-sm-4">
                                <label style={{opacity: '0.5'}}>Upload Thumbnail</label>
                            </div>
                            <div className="col-sm-8">
                                <input  name="thumbnail" accept="image/*" type="file" onChange = { (e) => onVideoThumbnailChange(e) } />
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="col-sm-4"></div>
                        <div className="col-sm-8">
                            <button className="feed-profile-upload-button">Upload</button>
                        </div>
                        </div>
                        
                    </form>
     
    </div>
);

const AudioModalBody = (  
    <div style={modalStyle} className={classes.paper} id="modalStyle1">
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <button
                onClick ={() => setAudioModalStates(false)} 
                style={{fontSize: '2rem',fontWeight:'bold',border: '0', outline: 'none', background: 'transparent'}}>
            &times; </button>
            </div>
            <hr />
            
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            {props.FeedsFromAPI.UploadAudio.UploadAudioGetApi.UploadAudioInProgress &&<img src={pageLoader} />}
            </div>

            {
                successUpload &&
                <div style={{display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom : '3vh',
                height: '5vh', 
                background: '#DFF2BF', color: '#4F8A10'}}>
                <div>audio uploaded successfully...</div>
                </div>
            }

            {props.FeedsFromAPI.UploadAudio.UploadAudioGetApi.UploadAudioFailed &&
            <div style={{display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            background: 'brown', 
            marginBottom : '3vh',
            height: '5vh',
            color: '#fff'}}>
            
            <div>Something went wrong...</div>
            
            </div>
            }
    <form id="FeedPge_Form_Section" className="form-horizontal" onSubmit={handleAudioSubmit}>
                <div className="form-group " >
                    <div className="col-sm-4">
                        <label style={{opacity: '0.5'}}>Title</label>
                    </div>
                    <div className="col-sm-8">
                        <input id="FeedPge_VideoModalTitle"
                        required 
                        style={{width: '25vw', 
                        border: 'solid 1px #dadada', 
                        borderRadius: '10px', 
                        outline: 'none',
                        height: '5vh'}} 
                        name="title"  placeholder="enter title" type="text" onChange={(e) => handleAudioFieldsChange(e)} />
                    </div>
                </div>
                <div className="form-group ">
                    <div className="col-sm-4">
                        <label style={{opacity: '0.5'}}>Description</label>
                    </div>
                    <div className="col-sm-8">
                    <textarea id="FeedPge_VideoModalTitle"
                    required 
                    style={{width: '25vw', border: 'solid 1px #dadada', borderRadius: '10px', outline: 'none'}}
                    name="description"
                    type="text" 
                rows="5"
                placeholder="write a description"
                onChange = { (e) => handleAudioFieldsChange(e)}  
                ></textarea>
                </div>
            </div>
            <div className="form-group ">
                <div className="col-sm-4">
                    <label style={{opacity: '0.5'}}>Categories</label>
                </div>
                <div className="col-sm-8">
                    <select id="FeedPge_VideoModalSelectCategory"
                    style={{width: '25vw', border: 'solid 1px #dadada', borderRadius: '10px', outline: 'none',height: '5vh'}} 
                    name="category" onChange = { (e) => handleAudioFieldsChange(e)}
                    required >
                        <option value="" >Choose a category</option>
                        {
                            AudioCategories && AudioCategories.map((element, index) => {
                                return(
                                    <option value={element.cat_id}>{element.cat_name}</option>
                                )
                            })
                        }
                    </select>
                
                </div>
                </div>
                <div className="form-group ">
                    <div className="col-sm-4">
                        <label style={{opacity: '0.5'}}>Upload File</label>
                    </div>
                    <div className="col-sm-8">
                        <input required name="videofile" accept="audio/*" type="file" onChange = { (e) => onAudioFileChange(e) } />
                    </div>
                </div>
                <div className="form-group ">
                    <div className="col-sm-4">
                        <label style={{opacity: '0.5'}}>Upload Thumbnail</label>
                    </div>
                    <div className="col-sm-8">
                        <input  name="thumbnail" accept="image/*" type="file" onChange = { (e) => onAudioThumbnailChange(e) } />
                    </div>
                </div>
                <div className="form-group ">
                    <div className="col-sm-4"></div>
                <div className="col-sm-8">
                <button className="feed-profile-upload-button">Upload</button>
            </div>
            </div>
            
            </form>

</div>
);

const ImageModalBody = (

    <div style={modalStyle} className={classes.paper} id="modalStyle1">
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <button
                onClick ={() => setImageModalStates(false)} 
                style={{fontSize: '2rem',fontWeight:'bold',border: '0', outline: 'none', background: 'transparent'}}>
            &times; </button>
        </div>
        <hr />
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            {props.FeedsFromAPI.UploadImage.UploadImageGetApi.UploadImageInProgress &&<img src={pageLoader} />}
            </div>
            {
                successUpload &&
                <div style={{display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom : '3vh',
                height: '5vh', 
                background: '#DFF2BF', color: '#4F8A10'}}>
                <div>Picture uploaded successfully...</div>
                </div>
            }

            {props.FeedsFromAPI.UploadImage.UploadImageGetApi.UploadImageFailed &&
            <div style={{display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            background: 'brown', 
            marginBottom : '3vh',
            height: '5vh',
            color: '#fff'}}>
            
            <div>Something went wrong...</div>
            </div>
            }
<form className="form-horizontal" onSubmit={handleImageSubmit}>
            <div className="form-group " >
                <div className="col-sm-4">
                    <label style={{opacity: '0.5'}}>Title</label>
                </div>
                <div className="col-sm-8">
                    <input id="FeedPge_VideoModalTitle"
                    required 
                    style={{width: '25vw', 
                    border: 'solid 1px #dadada', 
                    borderRadius: '10px', 
                    outline: 'none',
                    height: '5vh'}} 
                    name="title"  placeholder="enter title" type="text" onChange={(e) => handleImageFieldsChange(e)} />
                </div>
            </div>
            <div className="form-group ">
                <div className="col-sm-4">
                    <label style={{opacity: '0.5'}}>Description</label>
            </div>
            <div className="col-sm-8">
            <textarea id="FeedPge_VideoModalTitle"
            required 
            style={{width: '25vw', border: 'solid 1px #dadada', borderRadius: '10px', outline: 'none'}}
            name="description"
            type="text" 
            rows="5"
            placeholder="write a description"
            onChange = { (e) => handleImageFieldsChange(e)}  
            ></textarea>
            </div>
        </div>
        <div className="form-group ">
            <div className="col-sm-4">
                <label style={{opacity: '0.5'}}>Categories</label>
            </div>
            <div className="col-sm-8">
                <select  id="FeedPge_VideoModalSelectCategory"
        style={{width: '25vw', border: 'solid 1px #dadada', borderRadius: '10px', outline: 'none',height: '5vh'}} 
        name="category" onChange = { (e) => handleImageFieldsChange(e)}
        required >
            <option value="" >Choose a category</option>
            {
                ImageCategories && ImageCategories.map((element, index) => {
                    return(
                        <option value={element.cat_id}>{element.cat_name}</option>
                    )
                })
            }
        </select>
    
    </div>
</div>
<div className="form-group ">
    <div className="col-sm-4">
        <label style={{opacity: '0.5'}}>Upload File</label>
    </div>
        <div className="col-sm-8">
            <input required name="videofile" accept="image/*" type="file" onChange = { (e) => onImageFileChange(e) } />
    </div>
    </div>
    {/* <div className="form-group ">
        <div className="col-sm-4">
            <label style={{opacity: '0.5'}}>Upload Thumbnail</label>
        </div>
        <div className="col-sm-8">
            <input required name="thumbnail" type="file" onChange = { (e) => onImageChange(e) } />
        </div>
                   </div> */}
    <div className="form-group ">
        <div className="col-sm-4"></div>
    <div className="col-sm-8">
        <button className="feed-profile-upload-button">Upload</button>
    </div>
    </div>
    
</form>

</div>
);

const BlogModalBody = (

    <div style={modalStyle} className={classes.paper} id="modalStyle1">
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <button 
                onClick ={() => setBlogModalStates(false)} 
                style={{fontSize: '2rem',fontWeight:'bold',border: '0', outline: 'none', background: 'transparent'}}>
            &times; </button>
        </div>
        <hr />
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            {props.FeedsFromAPI.UploadBlog.UploadBlogGetApi.UploadBlogInProgress &&< img src={pageLoader} />}
            </div>
            {
                successUpload &&
                <div style={{display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom : '3vh',
                height: '5vh', 
                background: '#DFF2BF', color: '#4F8A10'}}>
                <div>Blog uploaded successfully...</div>
                </div>
            }

            {props.FeedsFromAPI.UploadBlog.UploadBlogGetApi.UploadBlogFailed &&
            <div style={{display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            background: 'brown', 
            marginBottom : '3vh',
            height: '5vh',
            color: '#fff'}}>
            
            <div>Something went wrong...</div>
            </div>
            }
    <form id="FeedPge_Form_Section" className="form-horizontal" onSubmit={handleBlogSubmit}>
                <div className="form-group " >
                    <div className="col-sm-4">
                        <label style={{opacity: '0.5'}}>Title</label>
                    </div>
                    <div className="col-sm-8">
                        <input id="FeedPge_VideoModalTitle"
                       required 
                        style={{width: '25vw', 
                        border: 'solid 1px #dadada', 
                        borderRadius: '10px', 
                        outline: 'none',
                        height: '5vh'}} 
                        name="title"  placeholder="enter title" type="text" onChange={(e) => handleBlogFieldsChange(e)} />
                    </div>
                </div>
                <div className="form-group ">
                    <div className="col-sm-4">
                        <label style={{opacity: '0.5'}}>Description</label>
                </div>
                <div className="col-sm-8">
                <textarea id="FeedPge_VideoModalTitle"
                required 
                style={{width: '25vw', border: 'solid 1px #dadada', borderRadius: '10px', outline: 'none'}}
                name="description"
                type="text" 
                rows="5"
                placeholder="write a description"
                onChange = { (e) => handleBlogFieldsChange(e)}  
                ></textarea>
                </div>
            </div>
            <div className="form-group ">
                <div className="col-sm-4">
                    <label style={{opacity: '0.5'}}>Categories</label>
                </div>
                <div className="col-sm-8">
                    <select  id="FeedPge_VideoModalSelectCategory"
                style={{width: '25vw', border: 'solid 1px #dadada', borderRadius: '10px', outline: 'none',height: '5vh'}} 
                name="category" onChange = { (e) => handleBlogFieldsChange(e)}
                required >
                    <option value="" >Choose a category</option>
                    {
                        BlogCategories && BlogCategories.map((element, index) => {
                            return(
                                <option value={element.cat_id}>{element.cat_name}</option>
                            )
                        })
                    }
                </select>
            
            </div>
        </div>
        <div className="form-group ">
            <div className="col-sm-4">
                <label style={{opacity: '0.5'}}>Upload File</label>
            </div>
        <div className="col-sm-8">
            <input required name="videofile" type="file" multiple onChange = { (e) => onBlogFileChange(e) } />
        </div>
    </div>
    <div className="form-group ">
        <div className="col-sm-4">
            <label style={{opacity: '0.5'}}>Upload Thumbnail</label>
        </div>
        <div className="col-sm-8">
            <input  name="thumbnail" accept="image/*" type="file" onChange = { (e) => onblogThumbnailChange(e) } />
        </div>
    </div>
    <div className="form-group ">
        <div className="col-sm-4"></div>
    <div className="col-sm-8">
        <button className="feed-profile-upload-button">Upload</button>
    </div>
    </div>
    
</form>

</div>
);
    return(
        <div>
           {/* {props.FeedsFromAPI.UploadVideo.UploadVideoGetApi.UploadVideoInProgress &&<img src={pageLoader} />} */}
            <Modal
                open={VideoModalStates}
                onClose={()=>handleVideoModal()} 
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                {VideoModalBody}
            </Modal>

            <Modal
                open={AudioModalStates}
                onClose={()=>handleAudioModal()}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                {AudioModalBody}
            </Modal>
            <Modal
                open={ImageModalStates}
                onClose={()=>handleImageModal()}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                {ImageModalBody}
            </Modal>
            <Modal
                open={BlogModalStates}
                onClose={()=>handleBlogModal()}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                {BlogModalBody}
            </Modal>

            <div className="FeedPge_TagStyle" 
                style={{
                
                height: '13vh', 
                display: 'flex', 
                alignItems: 'center',
                }}>
                    <div 
                    className="feed-options"
                    >
                        <div style={{display: 'inline-block'}}>
                            {
                                props.profilePic &&
                            <LazyLoadImage className="FeedPge_UserProfile" placeholder={<div><img src={miniLoader} /></div>} src={props.profilePic} style={{borderRadius: '50%', width: '7.5rem', height: '7.5rem', marginLeft: '1vw'}} />
                            }
                        </div>
                        <div>
                            <textarea type="text" 
                            rows="5"
                            placeholder="Upload something..."
                            className="feed-option-input"
                            // onChange = { (e) => handleChange(e)} 
                            disabled 
                            ></textarea>
                        </div>
                        <div className="icon-options">
                            <div title="upload video" style={{cursor: "pointer"}}>
                                <button
                                 onClick={()=>handleVideoModal()}
                                style={{border: '0', background: 'transparent', outline: 'none'}} 
                                >
                                <VideocamIcon style={{fontSize: '2.5rem'}} className="feed-option-icons" />
                                </button>
                            </div>
                            <div  title="upload audio" style={{cursor: "pointer"}}>
                            <button
                                 onClick={()=>handleAudioModal()}
                                style={{border: '0', background: 'transparent', outline: 'none'}} 
                                >
                                <MusicNoteIcon style={{fontSize: '2.5rem'}} className="feed-option-icons" />
                                </button>
                            </div>
                            <div  title="upload image" style={{cursor: "pointer"}}>
                            <button
                                 onClick={()=>handleImageModal()}
                                style={{border: '0', background: 'transparent', outline: 'none'}} 
                                >
                                <ImageIcon style={{fontSize: '2.5rem'}} className="feed-option-icons" />
                                </button>
                            </div>
                            <div  title="Write Blog" style={{cursor: "pointer"}}>
                            <button
                                 onClick={()=>handleBlogModal()}
                                style={{border: '0', background: 'transparent', outline: 'none'}} 
                                >
                                <CreateIcon style={{fontSize: '2.5rem'}} className="feed-option-icons" />
                                </button>
                            </div>
                            
                        </div>
                    </div>
                    {/* <div>
                        <button className="post-btn">Post</button>
                    </div> */}

                    
                    {/* <div style={{display: 'flex'}}>
                        <div>
                            <div className="status" ></div>
                        </div>
                        <div style={{marginLeft: '-4.5vw'}}>
                            <span style={{  marginLeft: '5vw'}}>Online</span>
                        </div>
                    </div> */}
                    
                </div>
                
        </div>
    )
}

export default FeedProfile
