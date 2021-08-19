import React, {useState} from 'react'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import axios from 'axios'
import VideocamIcon from '@material-ui/icons/Videocam';

import './Feed.css'

const FeedProfileVideoUpload = () => {
    const [categories, setCategories] = useState([])
    let [fields, setFileds] = useState({
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
    const [uploadFiles, setUploadFiles] = useState([])
    var formData;
 
    const handleTextChange = (e) => {
        // console.log(e.target.value);
        setFileds({...fields,
            [e.target.name]: e.target.value
        })
    }
    const onFileChange = (e) => {
        // console.log('fileeee',e.target.files[0]);
        fields.videofile = e.target.files[0]; //need to fix it using setState
        // console.log('fields.videofile', fields.videofile);
        // setFileds({...fields,
        // [e.target.name] : e.target.files[0]
        // })
    }

    const onImageChange = (e) => {
        fields.thumbnail = e.target.files[0];
    }
     const handleSubmit = (e) => {
        //  console.log('fields', fields);
        //  console.log('uploadFiles',uploadFiles)
        e.preventDefault();
        formData = new FormData();
        formData.append('video_file', fields.videofile);
        formData.append('device_id', 'SYSTEM');
        formData.append('user_id', '3');
        formData.append('cat_id', '8');
        formData.append('title', fields.title);
        formData.append('longitude', '12.8090768');
        formData.append('latitude', '13.8907809');
        formData.append('caption', fields.description );
        formData.append('thumbnail', fields.thumbnail );
        axios.post('https://infoidol.com/admin/WebApi/upload_video',formData).then( response => {
            // console.log('response', response)
            
      }).catch(error => {
        //   console.log(error)
          const errorMsg = error.message
      })
     }

    return (
        <div>
                      <div style={{marginTop: '10vh'}} class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form onSubmit={handleSubmit}>
                        <div style={{display: 'flex', alignItems: 'center',}}>
                            <div>
                                <label>Title</label>
                            </div>
                            <div>
                                <input name="title" style={{width: '20vw'}} placeholder="enter title" type="text" onChange={(e) => handleTextChange(e)} />
                            </div>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center',}}>
                            <div>
                                <label>Description</label>
                            </div>
                            <div>
                            <textarea 
                            style={{width: '20vw'}}
                            name="description"
                            type="text" 
                            rows="5"
                            placeholder="write a description"
                            onChange = { (e) => handleTextChange(e)}  
                            ></textarea>
                            </div>
                        </div>
                        <div style={{display: 'flex'}}>
                            <div>
                                <label>Categories</label>
                            </div>
                            <div>
                                <select name="category" onChange = { (e) => handleTextChange(e)} >
                                    <option  >categories</option>
                                    {
                                        categories && categories.map((element, index) => {
                                            return(
                                                <option value={element.cat_id}>{element.cat_name}</option>
                                            )
                                        })
                                    }
                                </select>
                              
                            </div>
                        </div>
                        <div style={{display: 'flex'}}>
                            <div>
                                <label>Upload File</label>
                            </div>
                            <div>
                                <input name="videofile" type="file" accept="video/*" onChange = { (e) => onFileChange(e) } />
                            </div>
                        </div>
                        <div style={{display: 'flex'}}>
                            <div>
                                <label>Upload Thumbnail</label>
                            </div>
                            <div>
                                <input name="thumbnail" accept="image/*" type="file" onChange = { (e) => onImageChange(e) } />
                            </div>
                        </div>
                        <div>
                            <button>Upload</button>
                        </div>
                        
                    </form>
                </div>

                </div>
            </div>
            </div>
            <div  title="upload audio" style={{cursor: "pointer"}}>
                <button
                    // onClick={getVideoCategories } 
                    style={{border: '0', background: 'transparent', outline: 'none'}} 
                    data-toggle="modal" data-target="#exampleModalCenter">
                    <VideocamIcon style={{fontSize: '2.5rem'}} className="feed-option-icons" />
                </button>
            </div>
        </div>
    )
}

export default FeedProfileVideoUpload
