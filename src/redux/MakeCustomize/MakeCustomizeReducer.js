import { MAKE_CUSTOMIZE, MAKE_CUSTOMIZE_SUCCESS, MAKE_CUSTOMIZE_FAILURE, MAKE_CUSTOMIZE_RESET } from './MakeCustomizeTypes'
const initialState = {
    makeCustomizeApi:{
    makeCustomizeInProgress: false,
    makeCustomizeSuccess:false,
    makeCustomizeFailed:false,
    makeCustomize: {},
    }
}

 const makeCustomizeReducer = (state = initialState, action) => {
    switch(action.type){
        case MAKE_CUSTOMIZE:
            return{
                ...state,
                makeCustomizeApi:{
                    makeCustomizeInProgress: true,
                    makeCustomizeSuccess:false,
                    makeCustomizeFailed:false,
                    makeCustomize: {},
                    }
               
            }
            case MAKE_CUSTOMIZE_SUCCESS:
                return{
                    ...state,
                    makeCustomizeApi:{
                        makeCustomizeInProgress: false,
                        makeCustomizeSuccess:true,
                        makeCustomizeFailed:false,
                        makeCustomize: action.payload,
                        }
                   
                }
            case MAKE_CUSTOMIZE_FAILURE:
                return{
                    ...state,
                    makeCustomizeApi:{
                        makeCustomizeInProgress: false,
                        makeCustomizeSuccess:false,
                        makeCustomizeFailed:true,
                        makeCustomize: {},
                        }
                   
                }
            case MAKE_CUSTOMIZE_RESET:
                return{
                    ...state,
                    makeCustomizeApi:{
                        makeCustomizeInProgress: false,
                        makeCustomizeSuccess:false,
                        makeCustomizeFailed:false,
                        }
                       
                    }
            default: return state 
    }
}

export default makeCustomizeReducer