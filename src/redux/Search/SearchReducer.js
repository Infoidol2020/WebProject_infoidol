import { SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE, SEARCH_RESET } from './SearchTypes'
const initialState = {
    searchApi:{
    searchInProgress: false,
    searchSuccess:false,
    searchFailed:false,
    search: [],
    }
}

 const searchReducer = (state = initialState, action) => {
    switch(action.type){
        case SEARCH:
            return{
                ...state,
                searchApi:{
                    searchInProgress: true,
                    searchSuccess:false,
                    searchFailed:false,
                    search: [],
                    }
               
            }
            case SEARCH_SUCCESS:
                return{
                    ...state,
                    searchApi:{
                        searchInProgress: false,
                        searchSuccess:true,
                        searchFailed:false,
                        search: action.payload,
                        }
                   
                }
            case SEARCH_FAILURE:
                return{
                    ...state,
                    searchApi:{
                        searchInProgress: false,
                        searchSuccess:false,
                        searchFailed:true,
                        search: [],
                        }
                   
                }
                case SEARCH_RESET:
                    return{
                        ...state,
                        searchApi:{
                            searchInProgress: false,
                            searchSuccess:false,
                            searchFailed:false,
                            }
                       
                    }
            default: return state 
    }
}

export default searchReducer