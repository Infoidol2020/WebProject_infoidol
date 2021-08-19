import { GET_UPLOADED_BLOGS, GET_UPLOADED_BLOGS_SUCCESS, GET_UPLOADED_BLOGS_FAILURE } from './UploadedBlogTypes'
const initialState = {
    loading: false,
    blogsUploaded: [],
    error: ''
}

 const BlogCategoryReducer = (state = initialState, action) => {
    switch(action.type){
        case  GET_UPLOADED_BLOGS:
            return{
                ...state,
                loading: true
            }
            case GET_UPLOADED_BLOGS_SUCCESS:
            return{
                loading: false,
                blogsUploaded: action.payload,
                error: ''
            }
            case GET_UPLOADED_BLOGS_FAILURE:
            return{
                loading: false,
                blogsUploaded: [],
                error: action.payload
            }
            default: return state 
    }
}

export default BlogCategoryReducer