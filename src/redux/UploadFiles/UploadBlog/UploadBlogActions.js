import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID, LATITUDE, LONGITUDE } from '../../Constants/ApiConstants'
import { UPLOAD_BLOG, UPLOAD_BLOG_SUCCESS, UPLOAD_BLOG_FAILURE } from './UploadBlogTypes'
export const uploadBlog = () => {
    return{
        type: UPLOAD_BLOG
    }
}

export const uploadBlogSuccess = (Blog) => {
    return{
        type: UPLOAD_BLOG_SUCCESS,
        payload: Blog
    }
}
export const uploadBlogFailure = (error) => {
    return{
        type: UPLOAD_BLOG_FAILURE,
        payload: error
    }
}

export const uploadBlogAPI = (fields, files) => {
    // console.log('executed from upload Blog actions', fields, files)
    // console.log('fields', fields);
    // console.log('files', files)
    return (dispatch) => {
        dispatch(uploadBlog())
        var formData = new FormData();
        for (const file of files) {
            formData.append('files[]', file);
        }
        formData.append('device_id', DEVICE_ID);
        formData.append('user_id', localStorage.getItem('WebAppUserKey'));
        formData.append('cat_id', fields.category);
        formData.append('title', fields.title);
        formData.append('longitude', LONGITUDE);
        formData.append('latitude', LATITUDE);
        formData.append('description', fields.description );
        formData.append('thumbnail', fields.thumbnail );
        axios.post(`${BASE_URL}upload_blog`,formData).then( response => {
            // console.log('response from Blog upload action', response.data)
            const BlogUploaded = response.data
            dispatch(uploadBlogSuccess(BlogUploaded))
      }).catch(error => {
          const errorMsg = error.message
          dispatch(uploadBlogFailure(errorMsg))
      })
    }
}
