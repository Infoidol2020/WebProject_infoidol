import { ALL_BLOG_PAGE, ALL_BLOG_PAGE_SUCCESS, ALL_BLOG_PAGE_FAILURE, ALL_BLOG_PAGE_RESET } from './AllBlogPageTypes'

const initialState = {
    AllBlogPageApi:{
    AllBlogPageInProgress: false,
    AllBlogPageSuccess:false,
    AllBlogPageFailed:false,
    AllBlogPage: [],
    }
}

const AllBlogPageReducer = (state = initialState, action) => {
    switch(action.type){
        case ALL_BLOG_PAGE:
            return{
                ...state,
                AllBlogPageApi:{
                    AllBlogPageInProgress: true,
                    AllBlogPageSuccess:false,
                    AllBlogPageFailed:false,
                    AllBlogPage: [],
                    }
            
            }
            case ALL_BLOG_PAGE_SUCCESS:
                return{
                    ...state,
                    AllBlogPageApi:{
                        AllBlogPageInProgress: false,
                        AllBlogPageSuccess:true,
                        AllBlogPageFailed:false,
                        AllBlogPage: action.payload,
                        }
                
                }
            case ALL_BLOG_PAGE_FAILURE:
                return{
                    ...state,
                    AllBlogPageApi:{
                        AllBlogPageInProgress: false,
                        AllBlogPageSuccess:false,
                        AllBlogPageFailed:true,
                        AllBlogPage: [],
                        }
                
                }

                case ALL_BLOG_PAGE_RESET:
                    return{
                        ...state,
                        AllBlogPageApi:{
                            AllBlogPageInProgress: false,
                            AllBlogPageSuccess:false,
                            AllBlogPageFailed:false,
                            }
                    
                    }

            default: return state 
    }
}

export default AllBlogPageReducer