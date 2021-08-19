import { EDIT_BLOG, EDIT_BLOG_SUCCESS, EDIT_BLOG_FAILURE,EDIT_BLOG_RESET } from './EditBlogType'
const initialState = {
    editBlogApi:{
    editBlogProgress: false,
    editBlogSuccess:false,
    editBlogFailed:false,
    editBlog: {},
    }
}

const EditBlogReducer = (state = initialState, action) => {
    // console.log('editBlog reducer ok')
    switch(action.type){
        case EDIT_BLOG:
            return{
                ...state,
                editBlogApi:{
                    editBlogProgress: true,
                    editBlogSuccess:false,
                    editBlogFailed:false,
                    editBlog: {},
                }
            }
            case EDIT_BLOG_SUCCESS:
                return{
                    ...state,
                    editBlogApi:{
                        editBlogProgress: false,
                        editBlogSuccess:true,
                        editBlogFailed:false,
                        editBlog: action.payload,
                    }
                }
            case EDIT_BLOG_FAILURE:
                return{
                    ...state,
                    editBlogApi:{
                        editBlogProgress: false,
                        editBlogSuccess:false,
                        editBlogFailed:true,
                        editBlog: {},
                    }
                }
            case EDIT_BLOG_RESET:
                return{
                    ...state,
                    editBlogApi:{
                        editBlogProgress: false,
                        editBlogSuccess: false,
                        editBlogFailed: false,
                        editBlog: {},
                        // error: '',
                    }
                }

            default: return state 
    }
}

export default EditBlogReducer

