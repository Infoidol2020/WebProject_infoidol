import { TOKEN_GENERATION, TOKEN_GENERATION_SUCCESS, TOKEN_GENERATION_FAILURE, TOKEN_GENERATION_RESET } from './TokenGenerationTypes'

const initialState = {
    TokenGenerationApi:{
    TokenGenerationInProgress: false,
    TokenGenerationSuccess:false,
    TokenGenerationFailed:false,
    TokenGeneration: [],
    }
}

const TokenGenerationReducer = (state = initialState, action) => {
    switch(action.type){
        case TOKEN_GENERATION:
            return{
                ...state,
                TokenGenerationApi:{
                    TokenGenerationInProgress: true,
                    TokenGenerationSuccess:false,
                    TokenGenerationFailed:false,
                    TokenGeneration: [],
                    }
            
            }
            case TOKEN_GENERATION_SUCCESS:
                return{
                    ...state,
                    TokenGenerationApi:{
                        TokenGenerationInProgress: false,
                        TokenGenerationSuccess:true,
                        TokenGenerationFailed:false,
                        TokenGeneration: action.payload,
                        }
                
                }
            case TOKEN_GENERATION_FAILURE:
                return{
                    ...state,
                    TokenGenerationApi:{
                        TokenGenerationInProgress: false,
                        TokenGenerationSuccess:false,
                        TokenGenerationFailed:true,
                        TokenGeneration: [],
                        }
                
                }

                case TOKEN_GENERATION_RESET:
                    return{
                        ...state,
                        TokenGenerationApi:{
                            TokenGenerationInProgress: false,
                            TokenGenerationSuccess:false,
                            TokenGenerationFailed:false,
                            }
                    
                    }

            default: return state 
    }
}

export default TokenGenerationReducer