import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants';
import { EDIT_BLOG, EDIT_BLOG_SUCCESS, EDIT_BLOG_FAILURE, EDIT_BLOG_RESET} from './EditBlogType'

export const editBlog = () => {
    // console.log('from editBlog actionnnnn')
    return{
        type: EDIT_BLOG
    }
}

export const editBlogSuccess = (editBlogPayloadSuccess) => {
    console.log('from editBlog action suxxxx')
    return{
        type: EDIT_BLOG_SUCCESS,
        payload: editBlogPayloadSuccess
    }
}
export const editBlogReset = () => {
    console.log('from editBlog action reset')
    return{
        type: EDIT_BLOG_RESET,
    }
}
export const editBlogFailure = (error) => {
    console.log('from editBlog action errrrrrrr')
    return{
        type: EDIT_BLOG_FAILURE,
        payload: error
    }
}

export const hiteditBlogAPI = (file, title , caption, blog_id, thumbnail, cat_id) => {
    // console.log('file Blog--', file);
    // console.log('cat_id Blog--', cat_id);
    // console.log('title Blog--', title);
    // console.log('caption Blog--', caption);
    // console.log('thumbnail Blog--', thumbnail);
    // console.log('blog_id Blog--', blog_id)
    return (dispatch) => {
        dispatch(editBlog)
        var formData = new FormData();
        formData.append('device_id', 'SYSTEM');
        formData.append('user_id',  localStorage.getItem('WebAppUserKey'));
        formData.append('title', title);
        formData.append('description', caption);
        formData.append('blog_id', blog_id);
        formData.append('files[]', file);
        formData.append('thumbnail', thumbnail);
        formData.append('cat_id', cat_id);


        // axios.post(`${BASE_URL}edit_EDIT_BLOG`,formData).then( response => {
        axios.post(`${BASE_URL}edit_blog`, formData).then( response => {
        // console.log('response from editBlog action', response.data)
            const editBlog_Response = response.data.data
            dispatch(editBlogSuccess(editBlog_Response));
            dispatch(editBlogReset())

      }).catch(error => {
          const errorMsg = error.message
          dispatch(editBlogFailure(errorMsg))
      })
    }
}
